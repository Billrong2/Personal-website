/* Authored translations for the original educational samples. */
window.BillI18n.register({
  strings: [
  [
    "All candidates",
    "全部候选"
  ],
  [
    "A · Story",
    "A · 故事"
  ],
  [
    "B · Lab",
    "B · 实验"
  ],
  [
    "C · Challenge",
    "C · 挑战"
  ],
  [
    "Restart story",
    "重新开始故事"
  ],
  [
    "Restart",
    "重新开始"
  ],
  [
    "Scene illustration",
    "场景示意图"
  ],
  [
    "Open candidate B: Lab →",
    "打开候选 B：实验台 →"
  ],
  [
    "Open candidate C: Challenge →",
    "打开候选 C：挑战 →"
  ],
  [
    "END OF TRANSMISSION",
    "本次探索结束"
  ],
  [
    "THE EVALUATOR",
    "评估者"
  ],
  [
    "CODE",
    "代码"
  ],
  [
    "Correct",
    "正确"
  ],
  [
    "Review",
    "复盘"
  ],
  [
    "The Missing Names · Bill Research",
    "消失的名称 · Bill 科研"
  ],
  [
    "The Missing Names",
    "消失的名称"
  ],
  [
    "ATTENTION STEERING / CANDIDATE A · BRANCHING PAPER STORY",
    "注意力引导 / 候选 A · 分支论文故事"
  ],
  [
    "An interactive research story. A variable’s name disappears. Does its meaning disappear with it?",
    "一个可以选择走向的科研故事。变量名消失后，它的含义也会随之消失吗？"
  ],
  [
    "Educational fiction with a real research question. Your choices explore reasoning strategies, not measured model behavior.",
    "围绕真实科研问题创作的教学故事。你的选择探索的是推理策略，并非实测模型行为。"
  ],
  [
    "TRACE.LOG",
    "追踪日志"
  ],
  [
    "What this story does and does not show",
    "这个故事能说明什么，不能说明什么"
  ],
  [
    "Renaming can remove familiar surface cues while preserving program behavior. The story uses dependencies and control flow as clues for where attention might be redirected. Whether steering helps a real model must be established with an actual evaluation; a plausible explanation is not a performance measurement.",
    "重命名可以移除熟悉的表面线索，同时保持程序行为不变。故事把依赖关系和控制流作为重新分配注意力的线索。引导是否能帮助真实模型，必须通过实际评估确认；看似合理的解释并不等于性能测量。"
  ],
  [
    "Xiaokai Rong et al. · ASE 2026. These original interactive explanations use small, authored examples. They do not run a language model or reproduce the paper’s experiments.",
    "Xiaokai Rong 等 · ASE 2026。这些原创交互讲解使用手工编写的小例子，不运行语言模型，也不复现论文实验。"
  ],
  [
    "THE RESEARCHER",
    "研究者"
  ],
  [
    "The name is gone.",
    "名字不见了。"
  ],
  [
    "A small program used to say “sum_even”. Now it says “f”. Its input is [3, 4, 7, 8]. Before reading the body, what would you do?",
    "一个小程序原来叫“sum_even”，现在只叫“f”。输入是 [3, 4, 7, 8]。阅读函数体之前，你会先做什么？"
  ],
  [
    "Guess from the surviving names",
    "根据剩下的名称猜测"
  ],
  [
    "A name can suggest a hypothesis, but it cannot establish what the code computes.",
    "名称可以启发猜测，却不能证明代码实际计算了什么。"
  ],
  [
    "Trace the condition and updates",
    "追踪条件与更新操作"
  ],
  [
    "You chose to follow the operations that change the returned value.",
    "你选择追踪那些会改变返回值的操作。"
  ],
  [
    "THE SURFACE",
    "表面线索"
  ],
  [
    "A convincing wrong turn.",
    "一个看似合理的错误方向。"
  ],
  [
    "Suppose “f” is renamed “count_even”. The name now suggests a count of 2. But the actual output is still 12. Renaming alone did not change the program.",
    "假设把“f”改名为“count_even”。新名称让人以为结果是计数 2，但实际输出仍然是 12。仅仅改名并没有改变程序。"
  ],
  [
    "Inspect what t receives",
    "检查 t 累加的是什么"
  ],
  [
    "The update is += q, not += 1. This program sums the qualifying values.",
    "更新操作是 += q，而不是 += 1。这个程序累加的是满足条件的数值。"
  ],
  [
    "THE TRACE",
    "执行轨迹"
  ],
  [
    "Follow the values.",
    "跟着数值走。"
  ],
  [
    "3 and 7 fail the evenness test. 4 and 8 reach the update. The returned accumulator therefore holds 0 + 4 + 8.",
    "3 和 7 没有通过偶数判断，4 和 8 则执行了更新操作。因此返回的累加器保存的是 0 + 4 + 8。"
  ],
  [
    "Mark the decisive operations",
    "标出决定结果的操作"
  ],
  [
    "The predicate and accumulator update are useful evidence even after renaming.",
    "即使名称改变了，判断条件和累加器更新仍是有用的依据。"
  ],
  [
    "THE QUESTION",
    "研究问题"
  ],
  [
    "What deserves a closer look?",
    "哪里值得多看一眼？"
  ],
  [
    "If a model spreads attention poorly over this snippet, a structural prior could point toward useful program information. Which view would you start with?",
    "如果模型没有把注意力恰当地分配到这段代码，结构先验可以指向有用的程序信息。你会从哪个视角入手？"
  ],
  [
    "AST · focus on syntax and operators",
    "AST · 关注语法与运算符"
  ],
  [
    "An AST highlights structural roles such as tests, updates, and returns. It is not a guarantee of understanding.",
    "AST 可以突出判断、更新和返回等结构角色，但这不保证模型理解了程序。"
  ],
  [
    "CFG · focus on possible execution paths",
    "CFG · 关注可能的执行路径"
  ],
  [
    "A control-flow view highlights branching and iteration. The outcome still depends on the values.",
    "控制流视角突出分支和循环，实际结果仍然取决于数值。"
  ],
  [
    "Slice · follow the returned value",
    "切片 · 沿着返回值追踪"
  ],
  [
    "A slice starts from a target such as the return and follows relevant dependencies.",
    "切片从返回值等目标出发，沿相关依赖关系进行追踪。"
  ],
  [
    "THE INTERVENTION",
    "干预设计"
  ],
  [
    "A hint, not a replacement.",
    "提供线索，而非替代上下文。"
  ],
  [
    "A prior supplies a preference over positions. Steering changes how attention is distributed; the original context remains. How strongly should the prior intervene?",
    "先验提供对不同位置的偏好。引导改变注意力的分配方式，同时保留原始上下文。先验应该介入多强？"
  ],
  [
    "Push the prior as strongly as possible",
    "把先验强度推到最大"
  ],
  [
    "More steering is not automatically better. An imperfect prior can draw attention away from necessary context.",
    "引导越强并不一定越好。不完善的先验可能让注意力偏离必要的上下文。"
  ],
  [
    "Compare several strengths against a baseline",
    "与基线比较多种引导强度"
  ],
  [
    "A useful intervention needs a baseline, varied strengths, and an evaluation beyond this single example.",
    "有用的干预需要基线、多种强度，以及超出这个单一例子的评估。"
  ],
  [
    "Do not mistake a picture for proof.",
    "别把一张图当作证据。"
  ],
  [
    "A heatmap may look more sensible after steering. That alone cannot tell us whether the model became more accurate or robust.",
    "引导后的热图也许看起来更合理，但仅凭这一点，无法判断模型是否更准确或更稳健。"
  ],
  [
    "Check outputs on held-out obfuscated code",
    "在留出的混淆代码上检查输出"
  ],
  [
    "You are asking whether the intervention improves the task, rather than only the visualization.",
    "你在检验干预是否改善了任务表现，而不只是改善可视化。"
  ],
  [
    "Declare success from the prettier heatmap",
    "因为热图更好看就宣布成功"
  ],
  [
    "A prettier heatmap is an explanation candidate, not an accuracy result. Outcome evaluation is still required.",
    "更好看的热图是一种解释候选，不是准确率结果。仍然需要评估最终输出。"
  ],
  [
    "Meaning survives the rename.",
    "名称变了，语义仍在。"
  ],
  [
    "You followed a path from surface cues to program structure, then to intervention and evaluation. Now use the lab to manipulate a toy distribution, or test your tracing in the challenge.",
    "你从表面线索走到了程序结构，再走向干预和评估。接下来可以在实验台调整教学注意力分布，或者在挑战中检验代码追踪能力。"
  ],
  [
    "Concept network: names, code, structural prior, output",
    "概念关系图：名称、代码、结构先验与输出"
  ],
  [
    "NAMES",
    "标识符名称"
  ],
  [
    "PRIOR",
    "先验"
  ],
  [
    "OUTPUT",
    "输出"
  ],
  [
    "Attention Control Room · Bill Research",
    "注意力控制室 · Bill 科研"
  ],
  [
    "Attention Control Room",
    "注意力控制室"
  ],
  [
    "ATTENTION STEERING / CANDIDATE B · INTERACTIVE EXPERIMENT",
    "注意力引导 / 候选 B · 交互实验"
  ],
  [
    "Move attention without changing the code. Explore how a structural preference interacts with a deliberately authored baseline.",
    "保持代码不变，调整注意力分配。探索结构偏好如何与手工设定的教学基线相互作用。"
  ],
  [
    "Toy attention distributions only. No model is loaded. These values are invented for this explanation and are not reported paper measurements.",
    "这里只使用教学注意力分布，没有加载模型。数值为讲解而设定，并非论文报告的测量结果。"
  ],
  [
    "Intervention controls",
    "干预控制"
  ],
  [
    "Code appearance",
    "代码外观"
  ],
  [
    "Descriptive names",
    "有含义的名称"
  ],
  [
    "Renamed identifiers",
    "重命名后的标识符"
  ],
  [
    "Structural preference",
    "结构偏好"
  ],
  [
    "Return-value slice",
    "返回值切片"
  ],
  [
    "AST-inspired",
    "AST 启发的偏好"
  ],
  [
    "CFG-inspired",
    "CFG 启发的偏好"
  ],
  [
    "Uniform control",
    "均匀分布对照"
  ],
  [
    "Steering strength β",
    "引导强度 β"
  ],
  [
    "Reset experiment",
    "重置实验"
  ],
  [
    "Demo rule",
    "教学规则"
  ],
  [
    "N = token count; a = baseline; p = prior; Z normalizes the weights. This is the demo’s rule, not a claim to reproduce the paper’s exact implementation.",
    "N 是 token 数量；a 是基线；p 是先验；Z 用于归一化权重。这是演示采用的规则，并非对论文具体实现的复现。"
  ],
  [
    "Code attention map",
    "代码注意力图"
  ],
  [
    "DESCRIPTIVE",
    "描述性命名"
  ],
  [
    "RENAMED",
    "已重命名"
  ],
  [
    "Each token’s fill follows the steered mass. Select a token to inspect both distributions.",
    "每个 token 的填充颜色对应引导后的注意力权重。点击 token 可以比较两个分布。"
  ],
  [
    "Baseline total",
    "基线总量"
  ],
  [
    "Steered total",
    "引导后总量"
  ],
  [
    "Distribution change",
    "分布变化"
  ],
  [
    "Where the mass moves",
    "权重移向哪里"
  ],
  [
    "Gray = baseline · green = steered. Values sum to 100% within each distribution.",
    "灰色表示基线，绿色表示引导后权重。每个分布内部的数值合计为 100%。"
  ],
  [
    "A manually chosen preference for the returned accumulator, its update, and the controlling predicate. This is not an automatically computed program slice.",
    "手工设置对返回累加器、更新操作和控制条件的偏好。这不是自动计算得到的程序切片。"
  ],
  [
    "A hand-authored preference for syntax roles: loops, tests, arithmetic operators, updates, and returns. No AST parser is running.",
    "手工设置对循环、判断、算术运算符、更新和返回等语法角色的偏好。这里没有运行 AST 解析器。"
  ],
  [
    "A hand-authored preference for control-flow decisions and exits. No real control-flow graph is extracted.",
    "手工设置对控制流决策和出口的偏好。这里没有提取真实的控制流图。"
  ],
  [
    "Every position has equal preference. Under this demo’s multiplicative rule, uniform steering leaves the baseline unchanged at every β.",
    "每个位置具有相同的偏好。在这个演示的乘法规则下，不论 β 取何值，均匀引导都不会改变基线。"
  ],
  [
    "Interactive code tokens",
    "可交互的代码 token"
  ],
  [
    "Total variation distance: one half of the sum of absolute mass changes.",
    "总变差距离：各位置权重变化绝对值之和的一半。"
  ],
  [
    "Names",
    "名称"
  ],
  [
    "Tests",
    "判断"
  ],
  [
    "Control",
    "控制流"
  ],
  [
    "Updates",
    "更新"
  ],
  [
    "Punct.",
    "标点"
  ],
  [
    "Trace, Then Decide · Bill Research",
    "先追踪，再判断 · Bill 科研"
  ],
  [
    "Trace, Then Decide",
    "先追踪，再判断"
  ],
  [
    "ATTENTION STEERING / CANDIDATE C · CODE-TRACING GAME",
    "注意力引导 / 候选 C · 代码追踪挑战"
  ],
  [
    "Six short Python puzzles. Ignore the names, track the operations, and check your answer against the explanation.",
    "六道简短的 Python 题目。放下名称的暗示，追踪实际操作，再对照解释检查答案。"
  ],
  [
    "Authored code-tracing exercise, not a model benchmark or a replication of the paper’s results. Snippets are shown as Python; this page checks against verified answers without executing arbitrary code.",
    "这些代码追踪题为教学而编写，不是模型基准，也不复现论文结果。代码以 Python 展示；页面使用已核对的答案评分，不执行任意输入代码。"
  ],
  [
    "PROGRESS",
    "进度"
  ],
  [
    "SCORE",
    "得分"
  ],
  [
    "Rename identifiers",
    "重命名标识符"
  ],
  [
    "Show descriptive names",
    "显示有含义的名称"
  ],
  [
    "Predict the printed value",
    "预测打印的数值"
  ],
  [
    "Show dependency hint",
    "显示依赖提示"
  ],
  [
    "What is printed?",
    "会打印什么？"
  ],
  [
    "Next puzzle →",
    "下一题 →"
  ],
  [
    "Show final review →",
    "查看最终复盘 →"
  ],
  [
    "Correct.",
    "正确。"
  ],
  [
    "Follow the trace.",
    "再沿着执行过程看看。"
  ],
  [
    "Run complete.",
    "本轮完成。"
  ],
  [
    "01 · Accumulation",
    "01 · 累加"
  ],
  [
    "Follow the predicate, then check whether the update adds 1 or the value itself.",
    "沿判断条件追踪，再检查更新操作累加的是 1，还是数值本身。"
  ],
  [
    "Only 4 and 8 pass the evenness test. The update adds each value, so 0 + 4 + 8 = 12.",
    "只有 4 和 8 通过偶数判断。更新操作累加每个数值，因此 0 + 4 + 8 = 12。"
  ],
  [
    "02 · Loop state",
    "02 · 循环状态"
  ],
  [
    "Which iterations reach the update? Each successful iteration adds exactly one.",
    "哪些轮次执行了更新？每个满足条件的轮次只增加 1。"
  ],
  [
    "5 and 8 exceed 3. Two iterations add 1, so the result is 2.",
    "5 和 8 大于 3。两个轮次各增加 1，因此结果为 2。"
  ],
  [
    "03 · Dependency order",
    "03 · 依赖顺序"
  ],
  [
    "An integer assignment stores the evaluated value. It is not a live formula.",
    "整数赋值保存的是计算后的值，不是会持续更新的公式。"
  ],
  [
    "right (or q) receives 3 + 2 = 5 before left changes. Reassigning left does not recompute right.",
    "在 left 改变之前，right（或 q）已经得到 3 + 2 = 5。重新给 left 赋值不会重新计算 right。"
  ],
  [
    "04 · Branches",
    "04 · 分支"
  ],
  [
    "Only one branch executes. Evaluate the condition before the arithmetic.",
    "只会执行一个分支。先判断条件，再计算算术表达式。"
  ],
  [
    "6 > 4 is true, so answer becomes 6 − 1 = 5. The else branch does not execute.",
    "6 > 4 为真，因此 answer 变为 6 − 1 = 5。else 分支不会执行。"
  ],
  [
    "05 · Aliasing",
    "05 · 别名"
  ],
  [
    "Both names refer to the same mutable list; no list copy was made.",
    "两个名称指向同一个可变列表，并没有复制列表。"
  ],
  [
    "other and items reference the same list. Appending through either name makes its length 3.",
    "other 和 items 引用同一个列表。通过任意一个名称追加元素，都会使这个列表的长度变为 3。"
  ],
  [
    "06 · Early return",
    "06 · 提前返回"
  ],
  [
    "A return exits the entire function immediately, not just the current iteration.",
    "return 会立即退出整个函数，而不只是结束当前循环轮次。"
  ],
  [
    "2 fails the test. 7 passes and is returned immediately; the loop never reaches 9.",
    "2 不满足条件。7 满足条件并被立即返回；循环不会再处理 9。"
  ],
  [
    "Paper: Post-Hoc Attention Steering of Large Language Models for Robust Code Understanding under Obfuscation ↗",
    "论文：Post-Hoc Attention Steering of Large Language Models for Robust Code Understanding under Obfuscation ↗"
  ],
  [
    "01 · Accumulation · Correct",
    "01 · 累加 · 正确"
  ],
  [
    "01 · Accumulation · Review",
    "01 · 累加 · 复盘"
  ],
  [
    "02 · Loop state · Correct",
    "02 · 循环状态 · 正确"
  ],
  [
    "02 · Loop state · Review",
    "02 · 循环状态 · 复盘"
  ],
  [
    "03 · Dependency order · Correct",
    "03 · 依赖顺序 · 正确"
  ],
  [
    "03 · Dependency order · Review",
    "03 · 依赖顺序 · 复盘"
  ],
  [
    "04 · Branches · Correct",
    "04 · 分支 · 正确"
  ],
  [
    "04 · Branches · Review",
    "04 · 分支 · 复盘"
  ],
  [
    "05 · Aliasing · Correct",
    "05 · 别名 · 正确"
  ],
  [
    "05 · Aliasing · Review",
    "05 · 别名 · 复盘"
  ],
  [
    "06 · Early return · Correct",
    "06 · 提前返回 · 正确"
  ],
  [
    "06 · Early return · Review",
    "06 · 提前返回 · 复盘"
  ]
],
  patterns: [
    {re: /^(\d+) choices recorded$/, en: "$1 choices recorded", zh: "已记录 $1 次选择"},
    {re: /^(\d+) correct$/, en: "$1 correct", zh: "答对 $1 题"},
    {re: /^Token (\d+): (.*), steered attention ([\d.]+) percent$/, en: "Token $1: $2, steered attention $3 percent", zh: "Token $1：$2，引导后的注意力为百分之 $3"},
    {re: /^Token (\d+) “(.*)” · baseline ([\d.]+)% → steered ([\d.]+)% · prior ([\d.]+)%$/, en: "Token $1 “$2” · baseline $3% → steered $4% · prior $5%", zh: "Token $1 “$2” · 基线 $3% → 引导后 $4% · 先验 $5%"},
    {re: /^Answer (.+)$/, en: "Answer $1", zh: "答案 $1"},
    {re: /^(\d+) \/ (\d+) correct\. Hints used on (\d+) rounds\. This is practice feedback, not evidence about model performance\.$/, en: "$1 / $2 correct. Hints used on $3 rounds. This is practice feedback, not evidence about model performance.", zh: "答对 $1 / $2 题，共有 $3 题使用了提示。这是练习反馈，不代表模型性能。"},
    {re: /^Your answer: (.+) · Correct: (.+)$/, en: "Your answer: $1 · Correct: $2", zh: "你的答案：$1 · 正确答案：$2"},
  ]
});

window.BillI18n.register({strings:[
  [
    "q = 3  → skip\nq = 4  → t = 4\nq = 7  → skip\nq = 8  → t = 12",
    "q = 3  → 跳过\nq = 4  → t = 4\nq = 7  → 跳过\nq = 8  → t = 12"
  ],
  [
    "return t\n   ↑ depends on\nt += q\n   ↑ guarded by\nq % 2 == 0",
    "return t\n   ↑ 依赖于\nt += q\n   ↑ 受条件控制\nq % 2 == 0"
  ],
  [
    "original attention + structural preference\n                 ↓\n        redistributed attention",
    "原始注意力 + 结构偏好\n                 ↓\n          重新分配后的注意力"
  ],
  [
    "baseline → same evaluation cases\nsteered  → same evaluation cases\n          compare outcomes",
    "基线   → 相同评估样例\n引导后 → 相同评估样例\n          比较最终结果"
  ],
  [
    "surface ≠ semantics\nattention ≠ proof\ncontrolled evaluation matters",
    "表面线索 ≠ 语义\n注意力 ≠ 证明\n需要有对照的评估"
  ]
]});
