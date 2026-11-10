/* Authored bilingual copy. Constraint logic and identifiers are unchanged. */
window.BillI18n.register({strings:[
  [
    "← All research candidates",
    "← 所有研究候选"
  ],
  [
    "A / Story",
    "A / 故事"
  ],
  [
    "B / Lab",
    "B / 实验"
  ],
  [
    "C / Challenge",
    "C / 挑战"
  ],
  [
    "Paper:",
    "论文："
  ],
  [
    "← Back",
    "← 上一步"
  ],
  [
    "Restart",
    "重新开始"
  ],
  [
    "DECISION TRACE",
    "决策记录"
  ],
  [
    "Your reasoning path",
    "你的推理路径"
  ],
  [
    "Each choice changes the story. Go back to explore what a different decision would do.",
    "每次选择都会改变故事路径。可以回退，比较另一种决定会发生什么。"
  ],
  [
    "Original interactive sample · Xiaokai (Bill) Rong",
    "原创交互样例 · Xiaokai (Bill) Rong"
  ],
  [
    "Back to Research ↗",
    "返回科研世界 ↗"
  ],
  [
    "Continue to B / Interactive lab →",
    "继续到 B / 可操作实验 →"
  ],
  [
    "THE LAST CLAUSE",
    "最后一条约束"
  ],
  [
    "THE LAST CLAUSE · Bill Research",
    "最后一条约束 · Bill 科研"
  ],
  [
    "Candidate A · What can you remove, and what would change the problem itself?",
    "候选 A · 什么可以删，什么一删就失去问题本身？"
  ],
  [
    "This story uses the fixed finite string domain {ε, a, b, aa, ab, ba, bb}, where ε is the empty string. It is an authored teaching scenario, not a record of the paper’s experiments or a call to a real model.",
    "交互故事使用固定有限字符串域 {ε, a, b, aa, ab, ba, bb}（ε 为空字符串），是解释论文问题的教学场景，不是论文实验记录，也没有调用真实模型。"
  ],
  [
    "UNSAT WORKBENCH",
    "UNSAT 工作台"
  ],
  [
    "UNSAT WORKBENCH · Bill Research",
    "UNSAT 工作台 · Bill 科研"
  ],
  [
    "Candidate B · Remove a constraint and see whether the contradiction remains. Every result can be checked against 49 assignments.",
    "候选 B · 删除一条约束，看矛盾是否还在。每个结论都能在 49 个赋值上复核。"
  ],
  [
    "Finite-domain teaching model:",
    "有限域教学模型："
  ],
  [
    "x and y each range over {ε, a, b, aa, ab, ba, bb}, with ε denoting the empty string: 49 assignments in total. SAT/UNSAT is computed by exhaustive enumeration, without a real LLM or SMT solver. Irreducibility is relative to this fixed background domain.",
    "x、y 都取自 {ε, a, b, aa, ab, ba, bb}，ε 表示空字符串，共 49 个赋值。本页通过穷举计算 SAT/UNSAT，不调用真实 LLM 或 SMT 求解器；不可约性仅相对于这个固定背景域。"
  ],
  [
    "Choose a constraint set",
    "选择约束集"
  ],
  [
    "Which constraints are indispensable?",
    "哪些约束真的不可缺少？"
  ],
  [
    "Verify one deletion candidate",
    "验证一个删除候选"
  ],
  [
    "Reduce until irreducible",
    "缩减到不可再删"
  ],
  [
    "Restore all constraints",
    "恢复全部约束"
  ],
  [
    "Start with all constraints. Uncheck them manually, or let the deletion reducer try them one at a time.",
    "从全部约束开始。可以手动取消选择，也可以让删除式缩减器逐步尝试。"
  ],
  [
    "Deletion log",
    "删除记录"
  ],
  [
    "EXHAUSTIVE CHECK / 49 ASSIGNMENTS",
    "穷举检查 / 49 个赋值"
  ],
  [
    "Each cell is an (x, y) assignment. Bright cells satisfy every selected constraint.",
    "每格为 (x, y)。亮色表示满足全部已选约束的赋值。"
  ],
  [
    "Conjunction of selected constraints",
    "当前约束的合取"
  ],
  [
    "49 finite-domain assignments",
    "49个有限域赋值"
  ],
  [
    "Satisfies every selected constraint",
    "满足全部已选约束"
  ],
  [
    "Violates at least one selected constraint",
    "至少违反一个已选约束"
  ],
  [
    "None of the 49 assignments satisfies the current conjunction.",
    "49 个赋值都不满足当前合取。"
  ],
  [
    "TRUE (empty constraint set)",
    "TRUE（空约束集）"
  ],
  [
    "The current set is satisfiable, so it is not an UNSAT core.",
    "当前集合可满足，不能称作 UNSAT 核。"
  ],
  [
    "Irreducibility verified: removing any selected constraint makes the set SAT. This is not a proof of globally minimum cardinality.",
    "已验证不可约：删除任意一条已选约束，集合都会变成 SAT。这不是全局最小基数证明。"
  ],
  [
    "A safe deletion remains; reduction can continue.",
    "仍存在安全删除；可以继续缩减。"
  ],
  [
    "All 49 assignments were recomputed after your manual change.",
    "手动修改后重新计算全部 49 个赋值。"
  ],
  [
    "All constraints restored. Every proposed deletion will be verified again.",
    "恢复全部约束。每个删除提议都将重新验证。"
  ],
  [
    "Stopped: the set is irreducibly UNSAT relative to the fixed finite domain.",
    "停止：已达到相对于固定有限域的不可约 UNSAT 集合。"
  ],
  [
    "KEEP THE CONTRADICTION",
    "保留矛盾"
  ],
  [
    "KEEP THE CONTRADICTION · Bill Research",
    "保留矛盾 · Bill 科研"
  ],
  [
    "Candidate C · You are the constraint pruner. Preserve UNSAT at every step.",
    "候选 C · 你是约束修剪员。每删一步，都要守住 UNSAT。"
  ],
  [
    "Six authored finite-domain puzzles: x, y ∈ {ε, a, b, aa, ab, ba, bb}, with ε the empty string. Each click performs an exhaustive check. The goal is an irreducible UNSAT set, not globally minimum cardinality or a paper benchmark score.",
    "六组手工构造的有限域谜题：x、y ∈ {ε, a, b, aa, ab, ba, bb}，ε 为空字符串。每次点击是真正的穷举检查。目标是删到不可约 UNSAT 集合，不是求全局最小基数，也不是论文基准成绩。"
  ],
  [
    "DELETE, BUT PRESERVE UNSAT",
    "删减，同时保留 UNSAT"
  ],
  [
    "Choose a constraint you think is safe to remove.",
    "选择一条你认为可以安全删除的约束。"
  ],
  [
    "Hint",
    "提示"
  ],
  [
    "Next puzzle →",
    "下一组 →"
  ],
  [
    "Start over",
    "全部重来"
  ],
  [
    "CORE EXTRACTOR",
    "核心提取器"
  ],
  [
    "Completed cores / total puzzles. An unsafe deletion never removes the constraint.",
    "已完成的核心 / 总题数。无效删除不会真的移除约束。"
  ],
  [
    "Safe deletions",
    "安全删除"
  ],
  [
    "Rejected by a counterexample",
    "被反例拒绝"
  ],
  [
    "Current set",
    "当前集合"
  ],
  [
    "Finish challenge →",
    "完成挑战 →"
  ],
  [
    "Safe deletion: the remaining set is still UNSAT over all 49 assignments.",
    "安全删除：剩余集合在 49 个赋值上仍然 UNSAT。"
  ],
  [
    "Puzzle complete! Removing any remaining constraint yields SAT, so irreducibility is verified.",
    "这一组完成！每条剩余约束单独移除都会得到 SAT，已验证不可约。"
  ],
  [
    "Already irreducible.",
    "已不可再缩。"
  ],
  [
    "New puzzle: choose a constraint that is safe to remove.",
    "新的一组：选择可安全删除的约束。"
  ],
  [
    "Exclusive character conditions",
    "互斥字符"
  ],
  [
    "The same string cannot both contain a and not contain a.",
    "同一个字符串不能既包含 a，又不包含 a。"
  ],
  [
    "Two prefixes",
    "两个前缀"
  ],
  [
    "The first character of a nonempty string cannot be both a and b.",
    "非空字符串的首字符不能同时为 a 和 b。"
  ],
  [
    "Equal and unequal",
    "相等与不等"
  ],
  [
    "The equality requirements for x and y directly conflict.",
    "x 与 y 的相等关系发生直接冲突。"
  ],
  [
    "Conflicting lengths",
    "长度冲突"
  ],
  [
    "A string cannot be at least two characters and at most one character long.",
    "一个字符串不能既至少两字符，又至多一字符。"
  ],
  [
    "Fixed strings",
    "固定字串"
  ],
  [
    "Variable x is required to equal two different strings.",
    "变量 x 被要求取两个不同的字串。"
  ],
  [
    "Equality chain",
    "相等关系链"
  ],
  [
    "The equality relation and two different fixed values jointly create a contradiction.",
    "关系约束与两个不同的固定值共同造成矛盾。"
  ],
  [
    "MISSION / UNSAT CORE",
    "任务 / UNSAT 核心"
  ],
  [
    "LESS, BUT STILL UNSAT",
    "更少，但仍然 UNSAT"
  ],
  [
    "minimize without changing the verdict",
    "缩减而不改变结论"
  ],
  [
    "The solver says these conditions cannot all hold.",
    "求解器说这组条件不可能同时成立。"
  ],
  [
    "You have four string constraints: x starts with a, x starts with b, y has nonnegative length, and x has length at most 2. Remove redundant conditions while preserving UNSAT.",
    "你手上有四条字符串约束：x 以 a 开头、x 以 b 开头、y 长度非负、x 长度至多 2。目标是去掉冗余条件，同时保留 UNSAT。"
  ],
  [
    "This is a finite-domain teaching story. The real SafeMin targets string constraints and uses an SMT solver for verification.",
    "这里是有限域教学故事；真实 SafeMin 针对字符串约束，使用 SMT 求解器进行验证。"
  ],
  [
    "Ask the model for a deletion proposal",
    "让模型提出一个删除建议"
  ],
  [
    "Let the language model suggest a candidate, then verify it.",
    "语言模型先给候选，稍后再检验。"
  ],
  [
    "Immediately delete the complex-looking startsWith(x, a)",
    "直接删掉看起来复杂的 startsWith(x, a)"
  ],
  [
    "Judge by appearance, without checking whether the contradiction survives.",
    "只按外观判断，不问剩余约束是否还矛盾。"
  ],
  [
    "BRANCH / UNSAFE DELETION",
    "分支 / 不安全的删除"
  ],
  [
    "SAT WITNESS: x = b",
    "SAT 见证：x = b"
  ],
  [
    "the contradiction disappeared",
    "矛盾消失了"
  ],
  [
    "The remaining conditions suddenly have a solution.",
    "剩余条件突然有解了。"
  ],
  [
    "After removing startsWith(x, a), x = b and y = ε satisfy the remaining constraints, where ε is the empty string. This deletion destroys the UNSAT property we need to preserve, so reject it.",
    "删掉 startsWith(x, a) 后，x = b、y = ε 满足其余约束（ε 是空字符串）。这个删除破坏了需要保留的 UNSAT 性质，应当拒绝。"
  ],
  [
    "“It looks removable” and “the remainder is still UNSAT” are different questions.",
    "“看起来可以删”与“删除后仍然 UNSAT”是两个不同问题。"
  ],
  [
    "Restore the constraint and require verification of every candidate",
    "恢复约束，要求验证每个候选"
  ],
  [
    "Use the counterexample as evidence for rejecting this deletion.",
    "把反例作为拒绝这次删除的依据。"
  ],
  [
    "01 / PROPOSE",
    "01 / 提议"
  ],
  [
    "A SUGGESTION, NOT A PROOF",
    "这是建议，不是证明"
  ],
  [
    "candidate: remove C3",
    "候选：删除 C3"
  ],
  [
    "The model proposes removing len(y) ≥ 0.",
    "模型建议删除 len(y) ≥ 0。"
  ],
  [
    "The two different prefixes required of x already conflict, so y’s constraint appears irrelevant. But a model’s intuition is not a reliability guarantee. What next?",
    "x 的两个不同前缀要求已经互相冲突，y 的约束看起来无关。但模型的直觉不是可靠性保证。下一步怎么做？"
  ],
  [
    "SafeMin separates proposal from verification: the model suggests a candidate, and the verifier checks safety.",
    "SafeMin 的关键分工：模型提出候选，验证器判定是否安全。"
  ],
  [
    "Trust the suggestion and accept immediately",
    "相信建议，直接接受"
  ],
  [
    "Skipping verification leaves no evidence that the property is preserved.",
    "跳过验证，会失去保留性质的证据。"
  ],
  [
    "Ask the solver to check the remaining set",
    "让求解器检查剩余集合"
  ],
  [
    "Accept the deletion only if the remainder is still UNSAT.",
    "只有仍然 UNSAT，才接受删除。"
  ],
  [
    "BRANCH / MISSING GUARANTEE",
    "分支 / 缺少保证"
  ],
  [
    "NO CERTIFICATE",
    "没有证明"
  ],
  [
    "a good guess still needs checking",
    "猜得再好也需要检查"
  ],
  [
    "A correct guess does not establish a reliable procedure.",
    "即使这一次猜对，也没有形成可靠流程。"
  ],
  [
    "The same deletion strategy may fail on the next constraint set. Verifying every deletion separates suggestions from safety guarantees.",
    "同一种删除策略可能在下一组约束里出错。让每次删除经过验证，才能把建议与安全保证分开。"
  ],
  [
    "This does not claim that language models are always wrong. A candidate proposal simply cannot replace verification.",
    "这里不声称语言模型必然错误；问题是候选建议本身不能代替验证。"
  ],
  [
    "Add solver verification",
    "补做求解器验证"
  ],
  [
    "Check the set after deletion, rather than the model’s confident wording.",
    "检查的是删除后的集合，而不是模型的语气。"
  ],
  [
    "02 / VERIFY",
    "02 / 验证"
  ],
  [
    "UNSAT PRESERVED",
    "保留了 UNSAT"
  ],
  [
    "C1 ∧ C2 is already inconsistent",
    "C1 ∧ C2 已经矛盾"
  ],
  [
    "The verifier approves the deletion.",
    "验证器批准了删除。"
  ],
  [
    "After removing len(y) ≥ 0, startsWith(x, a) and startsWith(x, b) still cannot both hold. Next, len(x) ≤ 2 can also be removed. Two conflicting constraints remain.",
    "移除 len(y) ≥ 0 后，startsWith(x, a) 与 startsWith(x, b) 仍不能同时满足。接着检查 len(x) ≤ 2，它也可以删除。剩下两条矛盾约束。"
  ],
  [
    "The result can be checked by enumerating a small finite domain; this is not a call to an actual SMT service.",
    "这里的结果可由小型有限域穷举复核；不是一次实际 SMT 服务调用。"
  ],
  [
    "Keep C1: startsWith(x, a)\nKeep C2: startsWith(x, b)",
    "保留 C1: startsWith(x, a)\n保留 C2: startsWith(x, b)"
  ],
  [
    "The set is small; call it minimum-cardinality",
    "集合很小了，称它“最小基数”"
  ],
  [
    "Minimal and minimum are different standards.",
    "minimal 和 minimum 是两个不同的标准。"
  ],
  [
    "Try deleting each remaining constraint to check irreducibility",
    "逐条尝试删除，检查是否不可再缩"
  ],
  [
    "The example is irreducible only when every single deletion makes it SAT.",
    "删除任意一条都变成 SAT，才达到本例的不可约条件。"
  ],
  [
    "BRANCH / TWO DEFINITIONS",
    "分支 / 两种定义"
  ],
  [
    "MINIMAL ≠ MINIMUM",
    "不可约 ≠ 最少"
  ],
  [
    "irreducible versus globally smallest",
    "不可再删与全局最少"
  ],
  [
    "Irreducible does not mean globally smallest.",
    "不可再删，不等于全局最少。"
  ],
  [
    "A MUS is an UNSAT set from which no constraint can be deleted while preserving UNSAT. A minimum-cardinality core must also have the fewest constraints among all cores. This story only demonstrates deletion-based irreducibility checks.",
    "一个 MUS 是不可再通过删除约束而保持 UNSAT 的集合；最小基数核心还要求在所有核心中数量最少。这个故事只演示删除式不可约检查。"
  ],
  [
    "The sample does not claim that a greedy result has globally minimum cardinality.",
    "样例不会把贪心结果称为全局最小基数结果。"
  ],
  [
    "Return to checking each deletion",
    "回到逐条删除验证"
  ],
  [
    "Verify the property that the procedure can actually guarantee.",
    "检验实际能保证的性质。"
  ],
  [
    "03 / CHECK MINIMALITY",
    "03 / 检查不可约性"
  ],
  [
    "EVERY CLAUSE MATTERS",
    "每条约束都重要"
  ],
  [
    "remove C1 → SAT · remove C2 → SAT",
    "删除 C1 → SAT · 删除 C2 → SAT"
  ],
  [
    "Neither of the two constraints can be dropped.",
    "两条约束缺一不可。"
  ],
  [
    "Remove C1 and x = b is a solution; remove C2 and x = a is a solution. Together they are unsatisfiable. The set is irreducible under this background domain.",
    "删掉 C1，x = b 就有解；删掉 C2，x = a 就有解。保留两者时无解。该集合对这里的背景域已经不可再缩。"
  ],
  [
    "Minimization depends on the constraint semantics and solving background.",
    "最小化的结果始终依赖约束语义与求解背景。"
  ],
  [
    "Save the verified core",
    "保存经验证的核心"
  ],
  [
    "Keep the candidates, acceptance or rejection decisions, and counterexamples together.",
    "把候选、接受/拒绝与反例记录在一起。"
  ],
  [
    "MISSION / COMPLETE",
    "任务 / 完成"
  ],
  [
    "PROPOSE. CHECK. KEEP.",
    "提出。检查。保留。"
  ],
  [
    "a smaller failure that preserves meaning",
    "更小的失败，保持原有含义"
  ],
  [
    "Keep the contradiction. Remove the noise.",
    "保留矛盾，删去噪声。"
  ],
  [
    "You have explored the key division of work in SafeMin. In the lab, switch among small computable constraint sets, remove clauses step by step, and inspect satisfying assignments or irreducibility.",
    "你体验了 SafeMin 思路中的核心分工。继续到实验页，可以切换真实可计算的小型约束，逐步删除并查看可满足赋值或不可约结果。"
  ],
  [
    "The paper’s LLM and SMT system is more complex; this example only explains proposals, verified deletions, and irreducibility.",
    "论文中的 LLM 与 SMT 系统比本例更复杂；本例只解释提出候选、验证删除与不可约性。"
  ],
  [
    "1 / Exclusive character conditions",
    "1 / 互斥字符"
  ],
  [
    "2 / Two prefixes",
    "2 / 两个前缀"
  ],
  [
    "3 / Equal and unequal",
    "3 / 相等与不等"
  ]
],
patterns:[
{re:/^SCENE (\d+)$/,en:'SCENE $1',zh:'第 $1 幕'},
{re:/^PUZZLE (\d+) \/ (\d+)$/,en:'PUZZLE $1 / $2',zh:'第 $1 / $2 组'},
{re:/^BILL\.RESEARCH \/ SAFEMIN \/ CANDIDATE ([ABC])$/,en:'BILL.RESEARCH / SAFEMIN / CANDIDATE $1',zh:'BILL 科研 / SAFEMIN / 候选 $1'},
{re:/^(\d+) 个可满足赋值；例如 x = (.*), y = (.*)$/,en:'$1 satisfying assignments; for example x = $2, y = $3',zh:'$1 个可满足赋值；例如 x = $2, y = $3'},
{re:/^接受：移除 (.*) 后仍然 UNSAT。$/,en:'Accepted: after removing $1, the set remains UNSAT.',zh:'接受：移除 $1 后仍然 UNSAT。'},
{re:/^拒绝：移除 (.*) 后 SAT，反例 \(x, y\) = \((.*)\)。$/,en:'Rejected: removing $1 makes the set SAT. Counterexample: (x, y) = ($2).',zh:'拒绝：移除 $1 后 SAT，反例 (x, y) = ($2)。'},
{re:/^删除 C(\d+) \/ (.*)$/,en:'Remove C$1 / $2',zh:'删除 C$1 / $2'},
{re:/^已删除 \/ (.*)$/,en:'Removed / $1',zh:'已删除 / $1'},
{re:/^拒绝这次删除：x = (.*)、y = (.*) 满足剩余全部约束。保留 (.*)。$/,en:'Deletion rejected: x = $1 and y = $2 satisfy all remaining constraints. Keep $3.',zh:'拒绝这次删除：x = $1、y = $2 满足剩余全部约束。保留 $3。'},
{re:/^线索：试着检查 C(\d+)。它可能不是当前矛盾必需的条件。$/,en:'Hint: inspect C$1. It may not be necessary for the current contradiction.',zh:'线索：试着检查 C$1。它可能不是当前矛盾必需的条件。'},
{re:/^全部六组完成。你做了 (\d+) 次安全删除，另有 (\d+) 次提议被反例拒绝。$/,en:'All six puzzles complete. You made $1 safe deletions, and $2 proposals were rejected by counterexamples.',zh:'全部六组完成。你做了 $1 次安全删除，另有 $2 次提议被反例拒绝。'}
]});
