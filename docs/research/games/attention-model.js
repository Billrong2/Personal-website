/* Authored finite example. Renaming never changes this program's dependencies. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.CodeSteerModel=api;})(typeof window==='undefined'?globalThis:window,()=>{
'use strict';
const INPUT=Object.freeze([3,4,7,8]);
const nodes=[
 {id:'mirror',address:'0xD4',sector:0,writes:'_0x55',reads:['_0xc3','_0xb8'],code:'_0x55 += _0xc3 if _0xb8 else 0',alias:['parallel sum','另一份求和'],initial:0},
 {id:'sum',address:'0xA9',sector:0,writes:'_0x91',reads:['_0xc3','_0xb8'],code:'_0x91 += _0xc3 if _0xb8 else 0',alias:['returned accumulator','被返回的累加器'],initial:0},
 {id:'all',address:'0xF2',sector:0,writes:'_0x62',reads:['_0xc3'],code:'_0x62 += _0xc3',alias:['unfiltered sum','未经筛选的总和'],initial:0},
 {id:'positive',address:'0xB3',sector:1,writes:'_0xef',reads:['_0xc3'],code:'_0xef = (_0xc3 > 0)',alias:['positive test','正数判断']},
 {id:'odd',address:'0xE6',sector:1,writes:'_0xd2',reads:['_0xc3'],code:'_0xd2 = (_0xc3 % 2 != 0)',alias:['odd test','奇数判断']},
 {id:'even',address:'0xC8',sector:1,writes:'_0xb8',reads:['_0xc3'],code:'_0xb8 = (_0xc3 % 2 == 0)',alias:['even-value gate','偶数条件'],},
 {id:'value',address:'0xF5',sector:2,writes:'_0xc3',reads:['_0x7a'],code:'for _0x40, _0xc3 in enumerate(_0x7a):',alias:['current input value','当前输入值']},
 {id:'double',address:'0xA2',sector:2,writes:'_0x6d',reads:['_0xc3'],code:'_0x6d = _0xc3 * 2',alias:['doubled value','翻倍后的值']},
 {id:'index',address:'0xD7',sector:2,writes:'_0x40',reads:['_0x7a'],code:'for _0x40, _0xc3 in enumerate(_0x7a):',alias:['loop index','循环下标']},
 {id:'sorted',address:'0xE1',sector:3,writes:'_0x24',reads:['_0x7a'],code:'_0x24 = sorted(_0x7a)',alias:['sorted copy','排序副本']},
 {id:'input',address:'0xB6',sector:3,writes:'_0x7a',reads:[],code:'_0x7a = [3, 4, 7, 8]',alias:['input sequence','输入序列']},
 {id:'reverse',address:'0xC4',sector:3,writes:'_0xa0',reads:['_0x7a'],code:'_0xa0 = list(reversed(_0x7a))',alias:['reversed copy','逆序副本']}
];
const byId=Object.fromEntries(nodes.map(n=>[n.id,n]));
const stages=[
 {title:['Find the writer behind return.','找到 return 背后的写入节点。'],question:['return reads _0x91. Which hidden node writes that value? Equal numbers alone are not enough.','return 读取 _0x91。哪个隐藏节点写入这个值？数值相同还不够。'],ports:[{id:'return-value',consumer:'return',read:'_0x91',kind:'data',label:['return · value','return · 返回值']} ]},
 {title:['Find what controls the update.','找到控制更新的条件。'],question:['_0x91 changes only when _0xb8 is true. Find the node that defines this guard.','只有 _0xb8 为真时，_0x91 才更新。找到定义这个条件的节点。'],ports:[{id:'update-guard',consumer:'sum',read:'_0xb8',kind:'control',label:['update · condition','更新 · 条件']} ]},
 {title:['One value. Two dependencies.','一个值，两条依赖。'],question:['Both the update and the predicate read _0xc3. Find its source, then patch BOTH ports yourself.','更新和条件判断都读取 _0xc3。找到它的来源，再亲手连接两个端口。'],ports:[{id:'update-value',consumer:'sum',read:'_0xc3',kind:'data',label:['update · operand','更新 · 操作数']},{id:'predicate-value',consumer:'even',read:'_0xc3',kind:'data',label:['predicate · operand','判断 · 操作数']} ]},
 {title:['Trace the value to its input.','把当前值追踪到输入。'],question:['The loop reads _0x7a. Find the actual input, not a copy that happens to contain the same values.','循环读取 _0x7a。找到真正的输入，而不是恰好数值相同的副本。'],ports:[{id:'loop-source',consumer:'value',read:'_0x7a',kind:'data',label:['loop · sequence','循环 · 序列']} ]}
];
function execute(input=INPUT){const traces=Object.fromEntries(nodes.map(n=>[n.id,[]]));let sum=0,all=0;input.forEach((v,i)=>{const even=v%2===0;sum+=even?v:0;all+=v;const step={sum,mirror:sum,all,positive:v>0,odd:!even,even,value:v,index:i,double:v*2};for(const [id,value]of Object.entries(step))traces[id].push(value);});traces.input=[[...input]];traces.sorted=[[...input].sort((a,b)=>a-b)];traces.reverse=[[...input].reverse()];return{output:sum,traces};}
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const format=v=>typeof v==='boolean'?(v?'true':'false'):JSON.stringify(v);
function create(){return{stage:0,scanned:[],drafts:{},verified:[],attempts:0,last:null};}
function scan(s,id){if(!byId[id]||byId[id].sector>s.stage)return false;if(!s.scanned.includes(id))s.scanned.push(id);return true;}
function observation(id,input=INPUT){const n=byId[id];if(!n)return null;const values=execute(input).traces[id];return{values,final:values.at(-1)??n.initial,initial:n.initial};}
function patch(s,portId,nodeId,valueText){const port=stages[s.stage]?.ports.find(p=>p.id===portId);if(!port||!s.scanned.includes(nodeId))return{ok:false,reason:'unscanned'};let value;try{value=JSON.parse(valueText);}catch{return{ok:false,reason:'format'};}if(value===null||(!Array.isArray(value)&&!['boolean','number'].includes(typeof value)))return{ok:false,reason:'format'};s.drafts[portId]={nodeId,value,status:'pending'};s.last=null;return{ok:true};}
function disconnect(s,portId){delete s.drafts[portId];s.last=null;}
function pulse(s,input=INPUT){const stage=stages[s.stage];if(!stage)return{ok:false,reason:'finished'};if(stage.ports.some(p=>!s.drafts[p.id]))return{ok:false,reason:'missing'};s.attempts++;const errors=[];for(const p of stage.ports){const d=s.drafts[p.id],n=byId[d.nodeId],observed=observation(n.id,input).final;let reason=null;if(!same(d.value,observed))reason='observation';else if(n.writes!==p.read)reason='dependency';d.status=reason?'rejected':'tested';if(reason)errors.push({port:p.id,node:n.id,reason,observed,read:p.read,writes:n.writes});}
 if(errors.length){s.last={ok:false,reason:'rejected',errors};return s.last;}
 const accepted=stage.ports.map(p=>({...p,...s.drafts[p.id],status:'verified'}));s.verified.push(...accepted);s.stage++;s.drafts={};s.last={ok:true,accepted,complete:s.stage===stages.length};return s.last;}
function recovered(s){return [...new Set(s.verified.map(e=>e.nodeId))].map(id=>byId[id]);}
function slice(s){const n=recovered(s),order=['input','value','even','sum'];return [...order.filter(id=>n.some(n=>n.id===id)).map(id=>byId[id].code),'return _0x91'].join('\n');}
const fullCode=`def f(_0x7a):
    _0x91 = _0x55 = _0x62 = 0
    _0x24 = sorted(_0x7a)
    _0xa0 = list(reversed(_0x7a))
    for _0x40, _0xc3 in enumerate(_0x7a):
        _0xb8 = (_0xc3 % 2 == 0)
        _0xd2 = (_0xc3 % 2 != 0)
        _0xef = (_0xc3 > 0)
        _0x6d = _0xc3 * 2
        _0x91 += _0xc3 if _0xb8 else 0
        _0x55 += _0xc3 if _0xb8 else 0
        _0x62 += _0xc3
    return _0x91`;
return{INPUT,nodes,byId,stages,execute,create,scan,observation,patch,disconnect,pulse,recovered,slice,format,fullCode};
});
