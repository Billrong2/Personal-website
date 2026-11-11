'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const M=require('../docs/research/games/attention-model.js');
function connect(s,id,ports=M.stages[s.stage].ports,value=M.format(M.observation(id).final)){
 assert.equal(M.scan(s,id),true);
 for(const p of ports)assert.equal(M.patch(s,p.id,id,value).ok,true);
}
test('Identifier renaming preserves outputs across 200 varied inputs',()=>{
 for(let seed=0;seed<200;seed++){
  const xs=Array.from({length:seed%12},(_,i)=>((seed*17+i*13)%31)-15);
  assert.equal(M.execute(xs).output,xs.filter(x=>x%2===0).reduce((a,b)=>a+b,0));
 }
});
test('Scanning and matching values cannot automatically reveal or connect the slice',()=>{
 const s=M.create();assert.deepEqual(s.verified,[]);assert.deepEqual(s.drafts,{});
 assert.equal(M.slice(s),'return _0x91');
 M.scan(s,'sum');assert.equal(s.stage,0);assert.equal(M.recovered(s).length,0);
 assert.equal(M.patch(s,'return-value','mirror','12').ok,false);
 assert.equal(M.scan(s,'even'),false);
});
test('A same-value shadow accumulator is rejected by the def-use relation',()=>{
 const s=M.create();assert.equal(M.observation('mirror').final,M.observation('sum').final);
 connect(s,'mirror');const result=M.pulse(s);
 assert.equal(result.ok,false);assert.equal(result.errors[0].reason,'dependency');
 assert.equal(s.drafts['return-value'].status,'rejected');assert.equal(s.verified.length,0);
 assert.equal(s.stage,0);assert.equal(M.execute().output,12);
 // The wrong wire stays until the visitor removes or replaces it.
 M.disconnect(s,'return-value');assert.deepEqual(s.drafts,{});
 connect(s,'sum');assert.equal(M.pulse(s).ok,true);assert.equal(s.stage,1);
 assert.deepEqual(s.drafts,{});assert.equal(s.verified.length,1);
});
test('The actual writer with a wrong bound value still fails',()=>{
 const s=M.create();connect(s,'sum',undefined,'22');const r=M.pulse(s);
 assert.equal(r.errors[0].reason,'observation');assert.equal(s.stage,0);
 assert.equal(M.patch(s,'return-value','sum','not-a-value').reason,'format');
 assert.equal(M.patch(s,'return-value','sum','{"x":12}').reason,'format');
 assert.equal(M.patch(s,'return-value','sum','null').reason,'format');
 connect(s,'sum');assert.equal(M.pulse(s).ok,true);
});
test('Every candidate is checked against the fixed read/write relation in each sector',()=>{
 const prefix=['sum','even','value'];
 for(let stage=0;stage<4;stage++)for(const n of M.nodes.filter(n=>n.sector===stage)){
  const s=M.create();for(let k=0;k<stage;k++){connect(s,prefix[k]);assert.equal(M.pulse(s).ok,true);}
  connect(s,n.id);const r=M.pulse(s);const expected=M.stages[stage].ports.every(p=>p.read===n.writes);
  assert.equal(r.ok,expected,`${stage}: ${n.id}`);assert.equal(M.execute().output,12);
 }
});
test('The operand needs two explicit patches; one does not complete the stage',()=>{
 const s=M.create();connect(s,'sum');M.pulse(s);connect(s,'even');M.pulse(s);
 const ports=M.stages[2].ports;connect(s,'value',[ports[0]]);
 assert.equal(M.pulse(s).reason,'missing');assert.equal(s.stage,2);
 assert.equal(s.verified.length,2);assert.equal(Object.keys(s.drafts).length,1);
 connect(s,'value',[ports[1]]);assert.equal(M.pulse(s).ok,true);
 assert.equal(s.verified.length,4);assert.equal(s.stage,3);
});
test('Same-valued input copy also fails, and all five manual links complete the game',()=>{
 const s=M.create();for(const id of ['sum','even','value']){connect(s,id);assert.equal(M.pulse(s).ok,true);}
 assert.deepEqual(M.observation('sorted').final,M.observation('input').final);
 connect(s,'sorted');assert.equal(M.pulse(s).errors[0].reason,'dependency');
 connect(s,'input');const result=M.pulse(s);assert.equal(result.complete,true);
 assert.equal(s.verified.length,5);assert.deepEqual(M.recovered(s).map(n=>n.id),['sum','even','value','input']);
 assert.equal(M.pulse(s).reason,'finished');assert.ok(M.slice(s).includes('_0x91'));
 assert.ok(!M.slice(s).includes('_0x55'));assert.equal(M.create().stage,0);
});
test('Definition-use graph is unchanged by arbitrary rejected guesses',()=>{
 const before=JSON.stringify(M.nodes),code=M.fullCode;
 const s=M.create();for(let i=0;i<30;i++){connect(s,i%2?'mirror':'all');M.pulse(s);}
 assert.equal(JSON.stringify(M.nodes),before);assert.equal(M.fullCode,code);assert.equal(M.execute().output,12);
});
