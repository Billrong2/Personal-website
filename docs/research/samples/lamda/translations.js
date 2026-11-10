/* Authored English / Chinese copy for this work. Game state and code remain unchanged. */
(()=>{'use strict';
const strings = [
  [
    "Candidate navigation",
    "候选页面导航"
  ],
  [
    "All candidates",
    "全部候选"
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
    "RESEARCH",
    "科研"
  ],
  [
    "TOY CHALLENGE",
    "教学挑战 / TOY CHALLENGE"
  ],
  [
    "· These questions use authored programs. Scores describe this exercise only, not paper results or model performance.",
    "· 题目是手工构造的小程序；得分仅表示本页答题情况，不是论文实验指标或模型性能。"
  ],
  [
    "YOUR INVESTIGATION",
    "你的调查"
  ],
  [
    "Six short questions. Choose an answer, then read the explanation.",
    "六个短问题。先选择，再看解释。"
  ],
  [
    "Use number keys 1–4.",
    "支持数字键 1–4。"
  ],
  [
    "Hints do not reduce your score.",
    "提示不扣分。"
  ],
  [
    "Restart challenge",
    "重新挑战"
  ],
  [
    "Show hint",
    "显示提示"
  ],
  [
    "Next question →",
    "下一题 →"
  ],
  [
    "Choose an answer to inspect the reasoning.",
    "选择一个答案，查看推理。"
  ],
  [
    "RUN COMPLETE",
    "挑战完成"
  ],
  [
    "Behind each answer are dependencies and conditions.",
    "答案背后，还有依赖与条件。"
  ],
  [
    "Try again",
    "再来一次"
  ],
  [
    "Try the lab →",
    "去实验台试一试 →"
  ],
  [
    "Paper DOI ↗",
    "论文 DOI ↗"
  ],
  [
    "Back to Research",
    "返回科研世界"
  ],
  [
    "· Original interactive implementation for Bill’s research website.",
    "· 为 Bill 科研网站编写的原创交互样例。"
  ],
  [
    "TOY DEMO",
    "教学样例 / TOY DEMO"
  ],
  [
    "· Authored programs illustrate the research question. These are not paper results, and no real LLM or general-purpose analyzer runs here.",
    "· 这里使用手工构造的小程序说明研究问题。不是论文实验结果，不运行真实 LLM，也不是通用的程序分析器。"
  ],
  [
    "Story progress",
    "故事进度"
  ],
  [
    "CASE FILE",
    "调查档案"
  ],
  [
    "ILLUSTRATIVE",
    "教学示意"
  ],
  [
    "DECISION LOG",
    "决策记录"
  ],
  [
    "Investigation started.",
    "开始调查。"
  ],
  [
    "Previous step",
    "上一步"
  ],
  [
    "Restart story",
    "重新开始"
  ],
  [
    "Open the lab →",
    "打开实验台 →"
  ],
  [
    "Investigation complete. Compare the three candidates and choose a format for your paper.",
    "调查结束。比较三个候选，再决定哪种形式适合你的论文。"
  ],
  [
    "Choose an action to advance the story.",
    "选择一个行动，推进故事。"
  ],
  [
    "See summary →",
    "查看总结 →"
  ],
  [
    "Reset",
    "重置"
  ],
  [
    "THE MISSING PROGRAM.",
    "缺失的程序。"
  ],
  [
    "REBUILD THE CONTEXT.",
    "重建上下文。"
  ],
  [
    "DEPENDENCY DETECTIVE.",
    "依赖侦探。"
  ],
  [
    "LλMDA · Candidate A · THE MISSING PROGRAM.",
    "LλMDA · 候选 A · 缺失的程序。"
  ],
  [
    "lamda · Candidate B · REBUILD THE CONTEXT.",
    "LλMDA · 候选 B · 重建上下文。"
  ],
  [
    "lamda · Candidate C · DEPENDENCY DETECTIVE.",
    "LλMDA · 候选 C · 依赖侦探。"
  ],
  [
    "ICSE 2026 · LλMDA · CANDIDATE A",
    "ICSE 2026 · LλMDA · 候选 A"
  ],
  [
    "ICSE 2026 · LλMDA · CANDIDATE B",
    "ICSE 2026 · LλMDA · 候选 B"
  ],
  [
    "ICSE 2026 · LλMDA · CANDIDATE C",
    "ICSE 2026 · LλMDA · 候选 C"
  ],
  [
    "A / Branching research story · Find dependencies in incomplete code, keeping observations, inferences and assumptions distinct.",
    "A / 分支研究故事 · 在缺失代码中寻找依赖，区分观察、推断与假设。"
  ],
  [
    "B / Dependence graph lab · Toggle reconstruction assumptions and type clues, then inspect dependencies within the original snippet.",
    "B / 依赖图实验台 · 开关重建假设，改变类型线索，再看原片段的依赖范围。"
  ],
  [
    "C / Six dependency puzzles · Find what actually affects the output, separating the known from the unknown.",
    "C / 六轮依赖挑战 · 找到真正影响输出的线索，把未知与已知分开。"
  ],
  [
    "TOY LAB",
    "可操作教学模型 / TOY LAB"
  ],
  [
    "· Authored code and dependence graphs. No paper measurements, real LLM, compiler or Joern are used here.",
    "· 手工构造的代码与关系图。不是论文实验数据，不调用真实 LLM、编译器或 Joern。"
  ],
  [
    "01 / RECONSTRUCTION ASSUMPTIONS",
    "01 / 重建假设"
  ],
  [
    "Add an illustrative load_rows reconstruction",
    "添加一个教学用 load_rows 重建"
  ],
  [
    "New source edges remain inferences; they do not become original evidence.",
    "新增的来源边始终标为推断，不把它变成原始证据。"
  ],
  [
    "Candidate element type",
    "候选元素类型"
  ],
  [
    "Unknown: preserve type uncertainty",
    "未知：保留类型不确定性"
  ],
  [
    "Dictionary records with numeric price",
    "字典记录：含数值 price"
  ],
  [
    "Integers: no string-key access",
    "整数：不支持字符串键"
  ],
  [
    "Backward-tracing target",
    "反向追踪目标"
  ],
  [
    "print(total) / output",
    "print(total) / 输出"
  ],
  [
    "total / accumulation",
    "total / 累积"
  ],
  [
    "amount / item price",
    "amount / 每项价格"
  ],
  [
    "rows / input",
    "rows / 输入"
  ],
  [
    "Project onto the original snippet",
    "只展示原始片段范围"
  ],
  [
    "Check this candidate",
    "检查这个候选"
  ],
  [
    "02 / DEPENDENCE MAP",
    "02 / 依赖关系图"
  ],
  [
    "Dependence graph for the fixed snippet",
    "固定片段的依赖关系图"
  ],
  [
    "Solid edges are observed relationships; dashed edges come from the proposed reconstruction. Bright nodes are in the selected target’s backward context.",
    "实线为片段中的已知关系，虚线为候选重建；亮色节点属于所选目标的反向依赖范围。"
  ],
  [
    "Relationships in the snippet",
    "片段中的关系"
  ],
  [
    "Reconstruction assumptions",
    "重建引入的假设"
  ],
  [
    "BACKWARD CONTEXT",
    "反向上下文"
  ],
  [
    "03 / ORIGINAL SNIPPET",
    "03 / 原始代码片段"
  ],
  [
    "04 / EVIDENCE BOUNDARY",
    "04 / 证据边界"
  ],
  [
    "Augment context, analyze, then project back.",
    "补上下文，然后分析，再投影回来。"
  ],
  [
    "LλMDA uses LLMs and compiler feedback to reconstruct analyzable context, applies traditional dependence analysis, and focuses the results on the original snippet. This fixed graph is authored for teaching; changing the type checks the proposal against observed operations.",
    "LλMDA 用 LLM 与编译器反馈重建可分析的上下文，结合传统依赖分析，再聚焦原片段的结果。这里的图是为这个固定片段手写的教学模型；切换类型会检验候选与已见操作是否一致。"
  ],
  [
    "The total node merges loop iterations. This is not a complete control-flow graph or general PDG. Values, exceptions, aliases and other cases require real analysis.",
    "图中 total 节点合并了循环各轮状态；不是完整的控制流图或通用 PDG。输入值、异常、别名等更多情况需要真实分析。"
  ],
  [
    "After changing assumptions, click “Check this candidate” to inspect consistency with the operations.",
    "切换假设后，点击“检查这个候选”查看操作一致性诊断。"
  ],
  [
    "Type conflict: integers do not support row[\"price\"]. Reject this candidate; the graph retains only syntax-level clues from the snippet.",
    "类型冲突：整数不支持 row[\"price\"]。此候选不可接受；图仅保留片段中的语法级线索。"
  ],
  [
    "This fixed candidate is consistent with indexing and numeric addition. The real system still needs compiler feedback and traditional analysis; consistency does not imply uniqueness.",
    "这个固定候选与索引、数值相加操作一致。真实系统仍需编译反馈和传统分析；一致不代表唯一。"
  ],
  [
    "The type assumption fits the uses, but the missing function is not reconstructed. Its source remains unknown.",
    "类型假设与使用处一致，但缺失函数没有重建。仍保留未知来源。"
  ],
  [
    "The type is unresolved. Preserve uncertainty; do not declare the reconstruction validated.",
    "类型尚未确定。保留不确定性，不能宣布重建通过验证。"
  ],
  [
    "TYPE CONFLICT",
    "类型冲突"
  ],
  [
    "UNRESOLVED",
    "尚未确定"
  ],
  [
    "CONSISTENT TOY",
    "教学候选一致"
  ],
  [
    "proposed source",
    "候选来源"
  ],
  [
    "PARTIAL PROGRAM / 01",
    "不完整程序 / 01"
  ],
  [
    "YOU / PROGRAM ANALYST",
    "你 / 程序分析者"
  ],
  [
    "ASSUMPTION CHECK",
    "假设检查"
  ],
  [
    "REVIEW / TYPE EVIDENCE",
    "复查 / 类型证据"
  ],
  [
    "OBSERVED EVIDENCE",
    "观察到的证据"
  ],
  [
    "STEP 01 / READ THE USES",
    "步骤 01 / 查看使用处"
  ],
  [
    "CONSERVATIVE GRAPH",
    "保守依赖图"
  ],
  [
    "STEP 02 / KEEP THE HOLE",
    "步骤 02 / 保留缺失部分"
  ],
  [
    "PROPOSED RECONSTRUCTION",
    "候选重建"
  ],
  [
    "STEP 03 / PROPOSE, THEN CHECK",
    "步骤 03 / 先提出，再检查"
  ],
  [
    "UNCERTAINTY REVIEW",
    "不确定性复查"
  ],
  [
    "REVIEW / SCIENTIFIC CLAIMS",
    "复查 / 研究结论"
  ],
  [
    "TYPE CHECK / TOY FIXTURE",
    "类型检查 / 教学样例"
  ],
  [
    "STEP 04 / TEST CONSISTENCY",
    "步骤 04 / 检查一致性"
  ],
  [
    "CASE CLOSED / NOT CERTAINTY",
    "调查结束 / 仍有不确定性"
  ],
  [
    "RESULT / YOUR RECONSTRUCTION",
    "结果 / 你的重建"
  ],
  [
    "We can see how the data is used, but not where it comes from.",
    "能看见使用处，但看不见数据来源。"
  ],
  [
    "A program with a missing piece.",
    "有一段代码，缺了一半。"
  ],
  [
    "The implementation of load_rows is absent. You want to know which inputs the final output depends on. What comes first?",
    "函数 load_rows 的实现不在片段里。你想理解最后一行输出依赖哪些输入。第一步怎么办？"
  ],
  [
    "Record missing information, then trace known relationships",
    "先记录缺失信息，再追踪已知关系"
  ],
  [
    "Choice: retain the unknown function body instead of treating a guess as a fact.",
    "选择：把未知函数体保留下来，不把猜测当事实。"
  ],
  [
    "Assume load_rows returns any iterable",
    "直接假设 load_rows 返回任何可迭代对象"
  ],
  [
    "Choice: propose a testable assumption.",
    "选择：提出一个可检验的假设。"
  ],
  [
    "Being iterable does not explain the later indexing operation.",
    "“可迭代”不足以解释后续索引操作。"
  ],
  [
    "One guess is not enough.",
    "一个猜测，还不够。"
  ],
  [
    "Lists, dictionaries and strings can all be iterated over, but row[\"price\"] requires each element to support string-key access. The uses constrain candidate types.",
    "列表、字典、字符串都可能参与迭代，但 row[\"price\"] 需要每个元素支持字符串键访问。我们能用使用处约束候选类型。"
  ],
  [
    "Return to the uses and look for type constraints",
    "回到使用处寻找类型约束"
  ],
  [
    "Revision: distinguish an iterable collection from elements that support a price key.",
    "修正：区分“数据可迭代”与“每个元素支持 price 键”。"
  ],
  [
    "The relationships come from the snippet; concrete types still need inference.",
    "关系来自片段；具体类型仍需要推断。"
  ],
  [
    "Work backward from the uses.",
    "从使用处，往回看。"
  ],
  [
    "Addition connects amount to total, while string-key indexing constrains the shape of row. These operations alone do not prove that the real loader returns one particular structure.",
    "加法把 amount 与 total 联系起来，字符串键索引约束 row 的形状。但仅凭这些操作，不能证明真实加载器一定返回某一种结构。"
  ],
  [
    "Propose a list of records with numeric price fields",
    "提出“记录列表，price 为数字”的重建"
  ],
  [
    "Proposed candidate: each record has a numeric price. This is not a verified fact.",
    "提出候选：每条记录有数值 price；这不是已验证的事实。"
  ],
  [
    "Keep the unknown source without reconstructing it",
    "不做重建，先保留未知源节点"
  ],
  [
    "Choice: first build a conservative local dependence graph.",
    "选择：先建立保守的局部依赖图。"
  ],
  [
    "An unknown source is not the same as no dependency.",
    "未知来源不等于没有依赖。"
  ],
  [
    "A visible gap is useful, too.",
    "图上留一个洞，也有价值。"
  ],
  [
    "Even without understanding the internals of load_rows, we can trace known dependencies inside the snippet. Showing the unknown part is more honest than silently removing it.",
    "即使不能解释 load_rows 内部，仍能追踪片段里的已知数据依赖。把未知部分画出来，比默默删除它更诚实。"
  ],
  [
    "Add a proposed reconstruction and compare the new relationships",
    "加入候选重建，比较会多出什么关系"
  ],
  [
    "Compare the conservative graph with the graph containing assumptions.",
    "将保守图与带假设图进行对照。"
  ],
  [
    "This is an illustrative reconstruction, not an actual LλMDA output.",
    "这是教学用重建，不是 LλMDA 的实际生成结果。"
  ],
  [
    "Turn the missing part into a candidate.",
    "让缺失部分成为候选。"
  ],
  [
    "Reconstruction lets the graph extend to a source, but generated code need not match the original code. How should the new relationships appear?",
    "重建使依赖图可以延伸到数据源，但生成的代码未必等于原代码。你会如何展示新增的关系？"
  ],
  [
    "Use dashed source edges and record the assumptions",
    "把候选来源画成虚线，并记录假设"
  ],
  [
    "Evidence boundary: mark reconstructed sources as assumptions, not static facts.",
    "正确边界：重建引入的来源标为假设，而不是静态事实。"
  ],
  [
    "Make every edge look equally certain",
    "让所有边看起来一样确定"
  ],
  [
    "Risk: the visual certainty exceeds the evidence.",
    "风险：图形的确定感超过了证据。"
  ],
  [
    "Analysis needs to communicate both provenance and uncertainty.",
    "分析结果需要表达来源与不确定性。"
  ],
  [
    "A beautiful graph can still mislead.",
    "漂亮的图，也会误导。"
  ],
  [
    "If inferred and observed edges look identical, a reader may mistake the reconstruction for fact. Label the candidate separately before validation.",
    "如果推测边与观察边完全相同，读者会把重建当作事实。我们把候选单独标注，再进入验证。"
  ],
  [
    "Restore the assumption labels and continue",
    "恢复假设标签并继续"
  ],
  [
    "Revision: distinguish known data flow from the proposed reconstruction.",
    "修正：区分已知数据流与候选重建。"
  ],
  [
    "A local consistency check is not a whole-program correctness proof.",
    "局部一致性检查不是全程序正确性证明。"
  ],
  [
    "Consistent does not mean unique.",
    "一致，不代表唯一。"
  ],
  [
    "Toy inputs can rule out obviously incompatible candidates, but multiple bodies may satisfy the same uses. LλMDA augments context with compiler feedback, applies traditional dependence analysis, and projects results back to the original snippet. The goal is to analyze incomplete programs, not recover a unique ground truth.",
    "玩具数据能帮助排除明显不兼容的候选，但多个函数体都能满足相同使用处。LλMDA 用编译器反馈辅助补全上下文，再由传统依赖分析计算关系，并把结果映射回原始片段。研究的目标是帮助分析不完整程序，不是恢复唯一真相。"
  ],
  [
    "Inspect the dependency slice and final boundary",
    "查看依赖切片与最终边界"
  ],
  [
    "A passing check supports this teaching candidate only; the missing source remains uncertain.",
    "检查通过只支持这个教学候选；未知来源仍有不确定性。"
  ],
  [
    "See the paper for the full method and empirical evaluation.",
    "完整论文的方法与实证评价请见论文记录。"
  ],
  [
    "Complete the analysis. Keep the question marks.",
    "补全分析，保留问号。"
  ],
  [
    "You extracted dependencies, constrained reconstruction with type clues, and kept assumptions explicit. This is one way into the research question behind LλMDA. In the lab, change those assumptions and watch the graph respond.",
    "你从片段中提取依赖，用类型线索约束重建，再明确标注假设。这是理解 LλMDA 研究问题的一条路径；实验台可以切换这些假设，亲自观察图的变化。"
  ],
  [
    "01 / DIRECT DEPENDENCE",
    "01 / 直接依赖"
  ],
  [
    "Which definition does print(y) read directly?",
    "print(y) 直接读取了哪个定义？"
  ],
  [
    "First consider only the variable named in the print statement.",
    "先只看 print 语句里出现的变量。"
  ],
  [
    "print reads y directly; y is transitively dependent on x. Direct and transitive dependencies are different.",
    "print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。"
  ],
  [
    "x on line 1",
    "第 1 行的 x"
  ],
  [
    "1. x on line 1",
    "1. 第 1 行的 x"
  ],
  [
    "y on line 2",
    "第 2 行的 y"
  ],
  [
    "2. y on line 2",
    "2. 第 2 行的 y"
  ],
  [
    "Both lines directly",
    "两行都直接读取"
  ],
  [
    "3. Both lines directly",
    "3. 两行都直接读取"
  ],
  [
    "No dependency",
    "没有依赖"
  ],
  [
    "4. No dependency",
    "4. 没有依赖"
  ],
  [
    "Correct. print reads y directly; y is transitively dependent on x. Direct and transitive dependencies are different.",
    "正确。 print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。"
  ],
  [
    "Look again. print reads y directly; y is transitively dependent on x. Direct and transitive dependencies are different.",
    "再看一下。 print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。"
  ],
  [
    "02 / BACKWARD SLICE",
    "02 / 反向切片"
  ],
  [
    "Which statement can be excluded when computing print(total)?",
    "为了计算 print(total)，哪条语句可以排除？"
  ],
  [
    "Trace backward from the output rather than including statements just because they are nearby.",
    "从输出变量往回追踪，不要把仅仅相邻的语句算进去。"
  ],
  [
    "In this arithmetic snippet, label does not contribute to total and has no side effects. The output slice contains lines 1, 3 and 4.",
    "这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。"
  ],
  [
    "The definition of values",
    "values 的定义"
  ],
  [
    "1. The definition of values",
    "1. values 的定义"
  ],
  [
    "The definition of label",
    "label 的定义"
  ],
  [
    "2. The definition of label",
    "2. label 的定义"
  ],
  [
    "The definition of total",
    "total 的定义"
  ],
  [
    "3. The definition of total",
    "3. total 的定义"
  ],
  [
    "The print statement",
    "print 语句"
  ],
  [
    "4. The print statement",
    "4. print 语句"
  ],
  [
    "Correct. In this arithmetic snippet, label does not contribute to total and has no side effects. The output slice contains lines 1, 3 and 4.",
    "正确。 这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。"
  ],
  [
    "Look again. In this arithmetic snippet, label does not contribute to total and has no side effects. The output slice contains lines 1, 3 and 4.",
    "再看一下。 这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。"
  ],
  [
    "03 / TYPE CONSTRAINT",
    "03 / 类型约束"
  ],
  [
    "Which candidate structure is consistent with every observed operation?",
    "哪种候选结构与所有已见操作一致？"
  ],
  [
    "Consider iteration, string-key indexing and numeric addition together.",
    "同时考虑迭代、字符串键索引与数值加法。"
  ],
  [
    "A list of records is one consistent candidate, not a unique proof. Uses alone do not recover the real implementation of load_rows.",
    "记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。"
  ],
  [
    "rows is a sequence of integers",
    "rows 是一串整数"
  ],
  [
    "1. rows is a sequence of integers",
    "1. rows 是一串整数"
  ],
  [
    "rows is a sequence of dictionaries with numeric price fields",
    "rows 是一串带数值 price 键的字典"
  ],
  [
    "2. rows is a sequence of dictionaries with numeric price fields",
    "2. rows 是一串带数值 price 键的字典"
  ],
  [
    "rows is any string",
    "rows 是任意字符串"
  ],
  [
    "3. rows is any string",
    "3. rows 是任意字符串"
  ],
  [
    "The snippet uniquely proves the original function body",
    "片段唯一证明了原函数体"
  ],
  [
    "4. The snippet uniquely proves the original function body",
    "4. 片段唯一证明了原函数体"
  ],
  [
    "Correct. A list of records is one consistent candidate, not a unique proof. Uses alone do not recover the real implementation of load_rows.",
    "正确。 记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。"
  ],
  [
    "Look again. A list of records is one consistent candidate, not a unique proof. Uses alone do not recover the real implementation of load_rows.",
    "再看一下。 记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。"
  ],
  [
    "04 / CONTROL DEPENDENCE",
    "04 / 控制依赖"
  ],
  [
    "Which condition decides whether line 4 executes?",
    "哪条条件决定第 4 行是否执行？"
  ],
  [
    "If value becomes negative, which line makes the update get skipped?",
    "如果把 value 改成负数，哪一行让更新被跳过？"
  ],
  [
    "The condition on line 3 controls line 4. The loop also supplies outer control structure; the question asks for the immediate if condition.",
    "第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。"
  ],
  [
    "The name of the loop variable",
    "for 的变量名"
  ],
  [
    "2. The name of the loop variable",
    "2. for 的变量名"
  ],
  [
    "No condition",
    "没有条件"
  ],
  [
    "4. No condition",
    "4. 没有条件"
  ],
  [
    "Correct. The condition on line 3 controls line 4. The loop also supplies outer control structure; the question asks for the immediate if condition.",
    "正确。 第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。"
  ],
  [
    "Look again. The condition on line 3 controls line 4. The loop also supplies outer control structure; the question asks for the immediate if condition.",
    "再看一下。 第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。"
  ],
  [
    "05 / MISSING CONTEXT",
    "05 / 缺失上下文"
  ],
  [
    "How should dependencies on the unknown function be represented?",
    "未知函数的依赖应该如何表示？"
  ],
  [
    "Unknown does not mean nonexistent or certain.",
    "未知不代表不存在，也不等于已确定。"
  ],
  [
    "The visible snippet supports x → y → print. The internal source of external_loader must remain unknown or be explicitly marked as inferred.",
    "可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。"
  ],
  [
    "Remove the loader node because it is hidden",
    "删除 loader 节点，因为看不见"
  ],
  [
    "1. Remove the loader node because it is hidden",
    "1. 删除 loader 节点，因为看不见"
  ],
  [
    "Declare that x must equal 0",
    "宣布 x 一定等于 0"
  ],
  [
    "2. Declare that x must equal 0",
    "2. 宣布 x 一定等于 0"
  ],
  [
    "Keep the unknown source and mark proposed reconstruction separately",
    "保留未知源；候选重建单独标记"
  ],
  [
    "3. Keep the unknown source and mark proposed reconstruction separately",
    "3. 保留未知源；候选重建单独标记"
  ],
  [
    "Generate a random solid edge",
    "随机生成一条实线边"
  ],
  [
    "4. Generate a random solid edge",
    "4. 随机生成一条实线边"
  ],
  [
    "Correct. The visible snippet supports x → y → print. The internal source of external_loader must remain unknown or be explicitly marked as inferred.",
    "正确。 可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。"
  ],
  [
    "Look again. The visible snippet supports x → y → print. The internal source of external_loader must remain unknown or be explicitly marked as inferred.",
    "再看一下。 可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。"
  ],
  [
    "06 / ANALYSIS BOUNDARY",
    "06 / 分析边界"
  ],
  [
    "Which description best captures the roles in LλMDA?",
    "LλMDA 的角色分工，哪种描述最合适？"
  ],
  [
    "Reconstruction and dependence analysis are separate steps.",
    "注意重建与依赖分析是不同步骤。"
  ],
  [
    "LλMDA augments context using LLMs and compiler feedback, combines traditional dependence analysis, and focuses on the original snippet. This page does not run that system.",
    "LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。"
  ],
  [
    "Let the LLM guess all dependency edges directly",
    "LLM 直接猜完所有依赖边即可"
  ],
  [
    "1. Let the LLM guess all dependency edges directly",
    "1. LLM 直接猜完所有依赖边即可"
  ],
  [
    "Use compiler feedback for reconstruction, analyze dependencies traditionally, then project back to the snippet",
    "编译反馈辅助重建，传统分析计算依赖，再映射回片段"
  ],
  [
    "2. Use compiler feedback for reconstruction, analyze dependencies traditionally, then project back to the snippet",
    "2. 编译反馈辅助重建，传统分析计算依赖，再映射回片段"
  ],
  [
    "One toy run proves the reconstruction is the original program",
    "一次玩具运行证明重建等于原程序"
  ],
  [
    "3. One toy run proves the reconstruction is the original program",
    "3. 一次玩具运行证明重建等于原程序"
  ],
  [
    "Longer generated code guarantees better accuracy",
    "生成更长代码就保证更准"
  ],
  [
    "4. Longer generated code guarantees better accuracy",
    "4. 生成更长代码就保证更准"
  ],
  [
    "Correct. LλMDA augments context using LLMs and compiler feedback, combines traditional dependence analysis, and focuses on the original snippet. This page does not run that system.",
    "正确。 LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。"
  ],
  [
    "Look again. LλMDA augments context using LLMs and compiler feedback, combines traditional dependence analysis, and focuses on the original snippet. This page does not run that system.",
    "再看一下。 LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。"
  ]
];
const patterns = [
  {
    "re": "^ROUND (\\d+) / (\\d+)$",
    "en": "ROUND $1 / $2",
    "zh": "第 $1 / $2 题"
  },
  {
    "re": "^COMPLETED / (\\d+) ROUNDS$",
    "en": "COMPLETED / $1 ROUNDS",
    "zh": "已完成 / $1 题"
  },
  {
    "re": "^本轮答对 (\\d+) / (\\d+)，使用 (\\d+) 次提示。下面保留每题的概念与正确答案，方便比较这个候选的教学效果。$",
    "en": "You answered $1 / $2 correctly and used $3 hints. Review the concepts and correct answers below to compare this teaching format.",
    "zh": "本轮答对 $1 / $2，使用 $3 次提示。下面保留每题的概念与正确答案，方便比较这个候选的教学效果。"
  },
  {
    "re": "^LINE (\\d+)$",
    "en": "LINE $1",
    "zh": "第 $1 行"
  },
  {
    "re": "^(.*)。重建源被投影隐藏；它仍是一个显式假设。$",
    "en": "$1. The reconstructed source is hidden by projection; it remains an explicit assumption.",
    "zh": "$1。重建源被投影隐藏；它仍是一个显式假设。"
  },
  {
    "re": "^✓ 01 / DIRECT DEPENDENCE — 第 2 行的 y\\. print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。$",
    "en": "✓ 01 / DIRECT DEPENDENCE — y on line 2. print reads y directly; y is transitively dependent on x. Direct and transitive dependencies are different.",
    "zh": "✓ 01 / 直接依赖 — 第 2 行的 y。print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。"
  },
  {
    "re": "^○ 01 / DIRECT DEPENDENCE — 第 2 行的 y\\. print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。$",
    "en": "○ 01 / DIRECT DEPENDENCE — y on line 2. print reads y directly; y is transitively dependent on x. Direct and transitive dependencies are different.",
    "zh": "○ 01 / 直接依赖 — 第 2 行的 y。print 直接读取 y；y 又通过传递依赖关联到 x。直接依赖与传递依赖不同。"
  },
  {
    "re": "^✓ 02 / BACKWARD SLICE — label 的定义\\. 这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。$",
    "en": "✓ 02 / BACKWARD SLICE — The definition of label. In this arithmetic snippet, label does not contribute to total and has no side effects. The output slice contains lines 1, 3 and 4.",
    "zh": "✓ 02 / 反向切片 — label 的定义。这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。"
  },
  {
    "re": "^○ 02 / BACKWARD SLICE — label 的定义\\. 这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。$",
    "en": "○ 02 / BACKWARD SLICE — The definition of label. In this arithmetic snippet, label does not contribute to total and has no side effects. The output slice contains lines 1, 3 and 4.",
    "zh": "○ 02 / 反向切片 — label 的定义。这个纯算术片段中 label 没有参与 total 的计算，也没有副作用；输出切片为 1、3、4。"
  },
  {
    "re": "^✓ 03 / TYPE CONSTRAINT — rows 是一串带数值 price 键的字典\\. 记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。$",
    "en": "✓ 03 / TYPE CONSTRAINT — rows is a sequence of dictionaries with numeric price fields. A list of records is one consistent candidate, not a unique proof. Uses alone do not recover the real implementation of load_rows.",
    "zh": "✓ 03 / 类型约束 — rows 是一串带数值 price 键的字典。记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。"
  },
  {
    "re": "^○ 03 / TYPE CONSTRAINT — rows 是一串带数值 price 键的字典\\. 记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。$",
    "en": "○ 03 / TYPE CONSTRAINT — rows is a sequence of dictionaries with numeric price fields. A list of records is one consistent candidate, not a unique proof. Uses alone do not recover the real implementation of load_rows.",
    "zh": "○ 03 / 类型约束 — rows 是一串带数值 price 键的字典。记录列表是一个一致的候选，不是唯一证明。仅凭使用处不能恢复 load_rows 的真实实现。"
  },
  {
    "re": "^✓ 04 / CONTROL DEPENDENCE — value > 0\\. 第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。$",
    "en": "✓ 04 / CONTROL DEPENDENCE — value > 0. The condition on line 3 controls line 4. The loop also supplies outer control structure; the question asks for the immediate if condition.",
    "zh": "✓ 04 / 控制依赖 — value > 0。第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。"
  },
  {
    "re": "^○ 04 / CONTROL DEPENDENCE — value > 0\\. 第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。$",
    "en": "○ 04 / CONTROL DEPENDENCE — value > 0. The condition on line 3 controls line 4. The loop also supplies outer control structure; the question asks for the immediate if condition.",
    "zh": "○ 04 / 控制依赖 — value > 0。第 3 行条件控制第 4 行执行；循环也提供外围控制结构。这里问的是直接 if 条件。"
  },
  {
    "re": "^✓ 05 / MISSING CONTEXT — 保留未知源；候选重建单独标记\\. 可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。$",
    "en": "✓ 05 / MISSING CONTEXT — Keep the unknown source and mark proposed reconstruction separately. The visible snippet supports x → y → print. The internal source of external_loader must remain unknown or be explicitly marked as inferred.",
    "zh": "✓ 05 / 缺失上下文 — 保留未知源；候选重建单独标记。可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。"
  },
  {
    "re": "^○ 05 / MISSING CONTEXT — 保留未知源；候选重建单独标记\\. 可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。$",
    "en": "○ 05 / MISSING CONTEXT — Keep the unknown source and mark proposed reconstruction separately. The visible snippet supports x → y → print. The internal source of external_loader must remain unknown or be explicitly marked as inferred.",
    "zh": "○ 05 / 缺失上下文 — 保留未知源；候选重建单独标记。可见片段支持 x → y → print 的关系；external_loader 的内部来源需保留未知或明确标注推断。"
  },
  {
    "re": "^✓ 06 / ANALYSIS BOUNDARY — 编译反馈辅助重建，传统分析计算依赖，再映射回片段\\. LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。$",
    "en": "✓ 06 / ANALYSIS BOUNDARY — Use compiler feedback for reconstruction, analyze dependencies traditionally, then project back to the snippet. LλMDA augments context using LLMs and compiler feedback, combines traditional dependence analysis, and focuses on the original snippet. This page does not run that system.",
    "zh": "✓ 06 / 分析边界 — 编译反馈辅助重建，传统分析计算依赖，再映射回片段。LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。"
  },
  {
    "re": "^○ 06 / ANALYSIS BOUNDARY — 编译反馈辅助重建，传统分析计算依赖，再映射回片段\\. LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。$",
    "en": "○ 06 / ANALYSIS BOUNDARY — Use compiler feedback for reconstruction, analyze dependencies traditionally, then project back to the snippet. LλMDA augments context using LLMs and compiler feedback, combines traditional dependence analysis, and focuses on the original snippet. This page does not run that system.",
    "zh": "○ 06 / 分析边界 — 编译反馈辅助重建，传统分析计算依赖，再映射回片段。LλMDA 用 LLM 与编译器反馈补上下文，结合传统依赖分析并聚焦原片段。此页面并未运行该系统。"
  }
];
window.BillI18n.register({strings,patterns:patterns.map(p=>({...p,re:new RegExp(p.re,'u')}))});
})();
