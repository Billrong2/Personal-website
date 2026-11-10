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
    "FOLLOW THE TRACE.",
    "沿着轨迹追踪。"
  ],
  [
    "PREDICT THE NEXT STATE.",
    "预测下一个状态。"
  ],
  [
    "TRACE, DON’T GUESS.",
    "追踪，不只猜测。"
  ],
  [
    "PredEx · Candidate A · FOLLOW THE TRACE.",
    "PredEx · 候选 A · 沿着轨迹追踪。"
  ],
  [
    "PredEx · Candidate B · PREDICT THE NEXT STATE.",
    "PredEx · 候选 B · 预测下一个状态。"
  ],
  [
    "predex · Candidate C · TRACE, DON’T GUESS.",
    "PredEx · 候选 C · 追踪，不只猜测。"
  ],
  [
    "FSE 2025 · PredEx · CANDIDATE A",
    "FSE 2025 · PredEx · 候选 A"
  ],
  [
    "FSE 2025 · PredEx · CANDIDATE B",
    "FSE 2025 · PredEx · 候选 B"
  ],
  [
    "FSE 2025 · PredEx · CANDIDATE C",
    "FSE 2025 · PredEx · 候选 C"
  ],
  [
    "A / Branching research story · Trace a final output back through variable states and control flow.",
    "A / 分支研究故事 · 从一个最终输出，走回每一步变量与控制流。"
  ],
  [
    "B / Execution microscope · Change the input, step through execution and inspect each target variable’s context.",
    "B / 执行轨迹显微镜 · 改变输入、逐步执行，并观察每个目标变量需要的上下文。"
  ],
  [
    "C / Six execution puzzles · Predict states, check branches and revisit each step through its explanation.",
    "C / 六轮执行挑战 · 预测状态、检查分支，再用解释回看每一步。"
  ],
  [
    "TOY TRACE",
    "确定性教学模拟 / TOY TRACE"
  ],
  [
    "· This page runs JavaScript equivalent to the fixed example below. It is not a Python runtime, an LLM call or a paper benchmark.",
    "· 此页面只执行下面这个固定例子的 JavaScript 等价逻辑。不是 Python 运行环境，不调用 LLM，也不是论文基准结果。"
  ],
  [
    "01 / INPUT CONSOLE",
    "01 / 输入控制台"
  ],
  [
    "LIVE LOCAL SIMULATION",
    "本地即时模拟"
  ],
  [
    "Comma-separated integers (up to 8; leave blank for [])",
    "整数序列，逗号分隔（最多 8 个；留空表示 []）"
  ],
  [
    "Generate trace →",
    "生成轨迹 →"
  ],
  [
    "Mixed signs",
    "混合正负数"
  ],
  [
    "No positive values",
    "没有正数"
  ],
  [
    "All positive",
    "全是正数"
  ],
  [
    "Empty input",
    "空序列"
  ],
  [
    "02 / PROGRAM + BACKWARD CONTEXT",
    "02 / 程序与反向上下文"
  ],
  [
    "Which variable’s static context?",
    "查看哪个变量的静态上下文？"
  ],
  [
    "mean / average",
    "mean / 平均值"
  ],
  [
    "total / positive sum",
    "total / 正数总和"
  ],
  [
    "count / positive count",
    "count / 正数个数"
  ],
  [
    "Current execution line",
    "当前执行行"
  ],
  [
    "Dark green: context for the selected variable",
    "深绿色底：所选变量的上下文"
  ],
  [
    "PER-VARIABLE CONTEXT",
    "逐变量上下文"
  ],
  [
    "03 / EXECUTION STATE",
    "03 / 执行状态"
  ],
  [
    "VALUE",
    "当前值"
  ],
  [
    "TOTAL",
    "总和"
  ],
  [
    "COUNT",
    "计数"
  ],
  [
    "MEAN",
    "平均值"
  ],
  [
    "Current input",
    "本次输入"
  ],
  [
    "Scrub the timeline",
    "拖动时间线"
  ],
  [
    "← Previous step",
    "← 上一步"
  ],
  [
    "Play trace",
    "播放轨迹"
  ],
  [
    "Next step",
    "下一步"
  ],
  [
    "Next step →",
    "下一步 →"
  ],
  [
    "Back to start",
    "回到起点"
  ],
  [
    "Waiting for print",
    "等待 print"
  ],
  [
    "04 / TRACE TAPE — CLICK ANY STEP",
    "04 / 轨迹带 — 点击任意步骤"
  ],
  [
    "Execution steps",
    "执行步骤"
  ],
  [
    "A line can execute more than once inside a loop. The bright step marks the current state; values are recorded after the statement executes.",
    "同一行会在循环中出现多次。亮色步骤对应当前状态；这里记录的是语句执行之后的值。"
  ],
  [
    "Where does PredEx make predictions?",
    "PredEx 在哪里做“预测”？"
  ],
  [
    "The paper combines program analysis with LLM prediction: analysis handles determined execution flow, while per-variable predictive backward slices supply context at uncertain branches. Here all inputs and operations are known, so the entire trace is computed exactly. It illustrates variable context and execution states without pretending to make model predictions. Line highlights are authored slices for this fixed program, not a general slicer.",
    "论文将程序分析与 LLM 预测结合：确定的执行流交给程序分析，遇到不确定性时，用每个变量的预测性反向切片提供相关上下文。这个例子的输入与所有操作都已知，因此我们能精确计算整条轨迹；它展示变量上下文和执行状态，不假装发生了模型预测。行高亮是这个固定程序的手工教学切片，不是通用切片器。"
  ],
  [
    "total needs the input, initialization, loop variable and positive-value branch. Updating count and computing mean do not affect total.",
    "total 需要输入、初始化、循环变量和正数分支。count 的更新与 mean 的计算不会改变 total。"
  ],
  [
    "count always increases by 1, but value > 0 determines whether that update executes. The input and branch therefore belong to its context.",
    "count 的增量虽然固定为 1，但是否执行由 value > 0 决定，所以输入与分支也属于相关上下文。"
  ],
  [
    "mean reads total and count, and uses count to guard against division by zero. Both variables’ contexts are needed.",
    "mean 读取 total 与 count，并用 count 作除零保护。因此两个变量的相关上下文都要保留。"
  ],
  [
    "Initialize total = 0.",
    "初始化 total = 0。"
  ],
  [
    "Initialize count = 0.",
    "初始化 count = 0。"
  ],
  [
    "count is 0, so the guard selects mean = 0.",
    "count 为 0，保护分支令 mean = 0。"
  ],
  [
    "[] · No loop iterations",
    "[] · 没有循环迭代"
  ],
  [
    "Enter up to 8 integers from -99 to 99, separated by commas. The previous trace is preserved.",
    "请输入最多 8 个 -99 到 99 的整数，用英文逗号分隔。旧轨迹保留。"
  ],
  [
    "Pause",
    "暂停"
  ],
  [
    "TRACE CASE / 02",
    "轨迹案例 / 02"
  ],
  [
    "YOU / TRACE INVESTIGATOR",
    "你 / 轨迹调查者"
  ],
  [
    "AN ANSWER WITHOUT A TRACE",
    "没有过程的答案"
  ],
  [
    "REVIEW / MISSING EVIDENCE",
    "复查 / 缺失的证据"
  ],
  [
    "VARIABLE OF INTEREST",
    "目标变量"
  ],
  [
    "STEP 01 / SELECT A TARGET",
    "步骤 01 / 选择目标"
  ],
  [
    "TOTAL-SPECIFIC CONTEXT",
    "total 的专属上下文"
  ],
  [
    "STEP 02 / VARIABLE-SPECIFIC",
    "步骤 02 / 按变量区分"
  ],
  [
    "BACKWARD DATA + CONTROL LINKS",
    "反向数据与控制依赖"
  ],
  [
    "STEP 03 / BLEND THE EVIDENCE",
    "步骤 03 / 结合证据"
  ],
  [
    "DETERMINISTIC TOY EXECUTION",
    "确定性的教学执行"
  ],
  [
    "STEP 04 / CHECK A TRANSITION",
    "步骤 04 / 检查状态变化"
  ],
  [
    "REPAIR A TRACE",
    "修复轨迹"
  ],
  [
    "REVIEW / CONTROL DEPENDENCE",
    "复查 / 控制依赖"
  ],
  [
    "TRACE COMPLETE",
    "轨迹完成"
  ],
  [
    "RESULT / PREDICT WITH CONTEXT",
    "结果 / 带着上下文预测"
  ],
  [
    "Goal: explain how mean is formed, rather than just guess the final number.",
    "目标：解释 mean 的形成过程，而不只是猜最后的数字。"
  ],
  [
    "Does a correct output prove understanding?",
    "输出正确，就算理解了吗？"
  ],
  [
    "You guessed that this program prints 3.0. But an execution trace also includes values, branches and state changes in each iteration. Where should we begin?",
    "你猜到这个程序会输出 3.0。但一条执行轨迹还包含每轮循环的值、分支与状态变化。我们从哪里开始？"
  ],
  [
    "Trace each variable at every step",
    "追踪每个变量在每一步的变化"
  ],
  [
    "Choice: keep the execution process and inspect each state.",
    "选择：保留执行过程，检查每一步状态。"
  ],
  [
    "Remember only the answer 3.0",
    "只记住答案 3.0"
  ],
  [
    "The final number is correct, but the execution trace is still unexplained.",
    "最终数字正确，但还没有解释执行轨迹。"
  ],
  [
    "Matching results do not guarantee matching intermediate reasoning.",
    "结果一致，并不保证中间推理一致。"
  ],
  [
    "A right answer can come from a wrong process.",
    "同一个答案，可能来自错误过程。"
  ],
  [
    "A final output does not reveal whether a prediction used the right control flow or variable values. Focus on one variable, then find the code relevant to it.",
    "只看最后输出，无法知道预测是否使用了正确的控制流或变量值。把问题拆成某个变量的预测，再找与它有关的代码。"
  ],
  [
    "Choose a target variable to trace",
    "选择一个变量作为追踪目标"
  ],
  [
    "Replace a whole-program guess with inspectable variable states.",
    "把整体猜测改成可检查的变量状态。"
  ],
  [
    "Different variables may need different context.",
    "每个变量需要的上下文可以不同。"
  ],
  [
    "First ask: whose state are we predicting?",
    "先问：在预测谁？"
  ],
  [
    "mean depends on total and count, which depend on the values that pass the condition. Should prediction receive all code at once, or a context organized around these relationships?",
    "mean 依赖 total 和 count；而 total 与 count 又依赖哪些 value 通过了条件。你要把全部代码一股脑交给预测，还是组织相关的上下文？"
  ],
  [
    "Trace dependencies backward from mean",
    "从 mean 反向追踪依赖"
  ],
  [
    "Choice: organize predictive context around the target variable.",
    "选择：围绕目标变量组织预测上下文。"
  ],
  [
    "Trace backward from total, then compare with mean",
    "先从 total 反向追踪，再与 mean 比较"
  ],
  [
    "Choice: compare the contexts of two variables.",
    "选择：比较两个变量的上下文差异。"
  ],
  [
    "Context depends on the target; it need not always be identical.",
    "上下文与目标相关，而不是每次完全相同。"
  ],
  [
    "A new variable brings a new set of clues.",
    "换一个变量，换一束线索。"
  ],
  [
    "Explaining updates to total does not require the count updates or final division. For mean, both become important.",
    "要解释 total 的更新，不需要 count 的累积或最后的除法。要解释 mean，这两部分又变得重要。"
  ],
  [
    "Return to the backward slice for mean",
    "回到 mean 的反向切片"
  ],
  [
    "Recognize that per-variable contexts can differ.",
    "认识到 per-variable 上下文能不同。"
  ],
  [
    "This story uses authored slices; see the paper for the actual PredEx method.",
    "本故事使用手写切片，真实 PredEx 方法请见论文。"
  ],
  [
    "Static relationships constrain dynamic predictions.",
    "静态关系，约束动态猜测。"
  ],
  [
    "Static analysis exposes dependencies and control conditions; an execution trace records state changes for actual inputs. PredEx uses analysis for determined execution flow and per-variable predictive backward slices to help model prediction at uncertain branches, then continues execution. This story uses authored teaching slices.",
    "静态分析揭示依赖与控制条件；执行轨迹关注实际输入下发生的状态变化。PredEx 让程序分析处理确定部分，在不确定分支利用逐变量的预测式反向切片辅助模型预测，再继续执行。本故事的切片是手写教学示意。"
  ],
  [
    "Check conditions and states in every iteration",
    "逐轮核对条件与状态"
  ],
  [
    "Compare structural clues with step-by-step states.",
    "将结构线索与逐步状态进行对照。"
  ],
  [
    "This table is a deterministic calculation for the fixed example, not paper prediction data.",
    "此表是这个固定例子的确定计算，非论文预测数据。"
  ],
  [
    "When a negative value appears, what changes?",
    "负数出现时，谁发生变化？"
  ],
  [
    "The second iteration has value = -1. The condition is false, so neither total nor count updates. Which description matches the trace?",
    "第二轮 value 是 -1。条件不满足，因此 total 和 count 都不更新。哪一个描述忠于这条轨迹？"
  ],
  [
    "total=2, count=1; only advance the loop",
    "total=2，count=1；只推进循环"
  ],
  [
    "Correct: skip both updates and proceed to the next iteration.",
    "正确：跳过两个更新语句，再进入下一轮。"
  ],
  [
    "total=1, count=2; accumulate every element",
    "total=1，count=2；所有元素都累积"
  ],
  [
    "This prediction ignores the control condition value > 0.",
    "这一预测忽略了 value > 0 的控制条件。"
  ],
  [
    "Repair the step, not just the final answer.",
    "修正步骤，而不是只修改最后的答案。"
  ],
  [
    "Find the step where the trace diverges.",
    "找到错误发生的那一步。"
  ],
  [
    "The mistake is in the negative-value branch, not the final division. Adding the condition to the target context explains why this iteration must leave the accumulated state unchanged.",
    "发生偏差的是负数分支，不是最终除法。把条件加入目标变量上下文，能解释为什么这一轮不应改变累积状态。"
  ],
  [
    "Keep the corrected trace",
    "保留修正后的轨迹"
  ],
  [
    "Repaired: the negative branch changes neither total nor count.",
    "已修正：负数分支不改变 total 与 count。"
  ],
  [
    "The interactive lab computes this toy example, without calling a model.",
    "交互实验会真正执行这个玩具算例，但不调用模型。"
  ],
  [
    "Give execution prediction a traceable path.",
    "让执行预测有一条可追踪的路。"
  ],
  [
    "PredEx studies the combination of static analysis and predictive execution. This story introduces the question and intuition. In the lab, change inputs, choose a variable and inspect the trace step by step.",
    "PredEx 的研究主题是融合静态分析与预测式执行。这里的故事只呈现问题与直觉；你可以到实验台修改输入、选择变量并逐步核对轨迹。"
  ],
  [
    "01 / POSITIVE FILTER",
    "01 / 正数筛选"
  ],
  [
    "What is the final total in this fixed example?",
    "这个固定例子的最终 total 是多少？"
  ],
  [
    "Negative values do not pass the if condition.",
    "负数不满足 if 条件。"
  ],
  [
    "Only 2 and 4 are accumulated, so total = 6.",
    "只有 2 与 4 进入累积，total = 6。"
  ],
  [
    "Correct. Only 2 and 4 are accumulated, so total = 6.",
    "正确。 只有 2 与 4 进入累积，total = 6。"
  ],
  [
    "Look again. Only 2 and 4 are accumulated, so total = 6.",
    "再看一下。 只有 2 与 4 进入累积，total = 6。"
  ],
  [
    "02 / INTERMEDIATE STATE",
    "02 / 中间状态"
  ],
  [
    "What are total and count after processing -1?",
    "处理完 -1 后，total 与 count 是什么？"
  ],
  [
    "The question is about the end of iteration two, not the entire loop.",
    "我们问第二轮结束，不是整个循环结束。"
  ],
  [
    "The first iteration produces (2,1). In the second, the condition is false and the state remains unchanged.",
    "第一轮把状态改成 (2,1)；第二轮条件为假，状态保持不变。"
  ],
  [
    "Correct. The first iteration produces (2,1). In the second, the condition is false and the state remains unchanged.",
    "正确。 第一轮把状态改成 (2,1)；第二轮条件为假，状态保持不变。"
  ],
  [
    "Look again. The first iteration produces (2,1). In the second, the condition is false and the state remains unchanged.",
    "再看一下。 第一轮把状态改成 (2,1)；第二轮条件为假，状态保持不变。"
  ],
  [
    "03 / ZERO DIVISION GUARD",
    "03 / 除零保护"
  ],
  [
    "What is mean when there are no positive values?",
    "没有正数时，mean 是多少？"
  ],
  [
    "A Python conditional expression evaluates only its selected branch.",
    "Python 条件表达式只求值被选中的分支。"
  ],
  [
    "count=0 selects else 0, so total/count is not evaluated.",
    "count=0，因此走 else 0，不会计算 total/count。"
  ],
  [
    "The program must divide by zero",
    "程序必定除零"
  ],
  [
    "1. The program must divide by zero",
    "1. 程序必定除零"
  ],
  [
    "It cannot be determined",
    "无法确定"
  ],
  [
    "4. It cannot be determined",
    "4. 无法确定"
  ],
  [
    "Correct. count=0 selects else 0, so total/count is not evaluated.",
    "正确。 count=0，因此走 else 0，不会计算 total/count。"
  ],
  [
    "Look again. count=0 selects else 0, so total/count is not evaluated.",
    "再看一下。 count=0，因此走 else 0，不会计算 total/count。"
  ],
  [
    "04 / TARGET-SPECIFIC CONTEXT",
    "04 / 目标相关上下文"
  ],
  [
    "Which part is unnecessary when explaining only the accumulation of total?",
    "若只解释 total 的累积，哪部分不需要？"
  ],
  [
    "The target is total, not mean.",
    "目标变量是 total，不是 mean。"
  ],
  [
    "In this example without other side effects, count and mean do not affect total. Context can vary with the target variable.",
    "在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。"
  ],
  [
    "The input values",
    "输入 values"
  ],
  [
    "1. The input values",
    "1. 输入 values"
  ],
  [
    "The condition value > 0",
    "value > 0 条件"
  ],
  [
    "2. The condition value > 0",
    "2. value > 0 条件"
  ],
  [
    "The initial value of total",
    "total 的初始值"
  ],
  [
    "3. The initial value of total",
    "3. total 的初始值"
  ],
  [
    "The count updates and final mean division",
    "count 的更新与最后的 mean 除法"
  ],
  [
    "4. The count updates and final mean division",
    "4. count 的更新与最后的 mean 除法"
  ],
  [
    "Correct. In this example without other side effects, count and mean do not affect total. Context can vary with the target variable.",
    "正确。 在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。"
  ],
  [
    "Look again. In this example without other side effects, count and mean do not affect total. Context can vary with the target variable.",
    "再看一下。 在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。"
  ],
  [
    "05 / ORDER OF UPDATES",
    "05 / 更新顺序"
  ],
  [
    "What are a and b after the second iteration?",
    "第二轮结束后 a 和 b 各是多少？"
  ],
  [
    "Within an iteration, a reads the newly updated b.",
    "同一轮里，a 会读取刚更新过的 b。"
  ],
  [
    "Iteration one gives b=2,a=4; iteration two gives b=5,a=10. Tracking statements in order is more accurate than treating assignments as simultaneous.",
    "第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。"
  ],
  [
    "Correct. Iteration one gives b=2,a=4; iteration two gives b=5,a=10. Tracking statements in order is more accurate than treating assignments as simultaneous.",
    "正确。 第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。"
  ],
  [
    "Look again. Iteration one gives b=2,a=4; iteration two gives b=5,a=10. Tracking statements in order is more accurate than treating assignments as simultaneous.",
    "再看一下。 第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。"
  ],
  [
    "06 / BLENDED EXECUTION",
    "06 / 融合执行"
  ],
  [
    "Which description matches the research direction of PredEx?",
    "哪种解释符合 PredEx 的研究方向？"
  ],
  [
    "Blending gives structural analysis and prediction distinct roles.",
    "“融合”意味着结构性分析与预测各有角色。"
  ],
  [
    "PredEx combines program analysis with prediction and organizes predictive backward slices per variable. This page demonstrates only deterministic small programs and conceptual boundaries.",
    "PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。"
  ],
  [
    "Ignore program structure and inspect only the final output",
    "忽略程序结构，只看最终输出"
  ],
  [
    "1. Ignore program structure and inspect only the final output",
    "1. 忽略程序结构，只看最终输出"
  ],
  [
    "Analyze determined parts and use variable-relevant slices to support prediction at uncertain branches",
    "确定部分由分析处理，不确定分支借助变量相关切片辅助预测"
  ],
  [
    "2. Analyze determined parts and use variable-relevant slices to support prediction at uncertain branches",
    "2. 确定部分由分析处理，不确定分支借助变量相关切片辅助预测"
  ],
  [
    "This page executes a real LLM system",
    "本页执行了一套真实 LLM"
  ],
  [
    "3. This page executes a real LLM system",
    "3. 本页执行了一套真实 LLM"
  ],
  [
    "All predicted traces are guaranteed exact",
    "所有预测轨迹都保证精确"
  ],
  [
    "4. All predicted traces are guaranteed exact",
    "4. 所有预测轨迹都保证精确"
  ],
  [
    "Correct. PredEx combines program analysis with prediction and organizes predictive backward slices per variable. This page demonstrates only deterministic small programs and conceptual boundaries.",
    "正确。 PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。"
  ],
  [
    "Look again. PredEx combines program analysis with prediction and organizes predictive backward slices per variable. This page demonstrates only deterministic small programs and conceptual boundaries.",
    "再看一下。 PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。"
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
    "re": "^(\\d+) / (\\d+) STEPS$",
    "en": "$1 / $2 STEPS",
    "zh": "第 $1 / $2 步"
  },
  {
    "re": "^输入 (\\d+)$",
    "en": "Input $1",
    "zh": "输入 $1"
  },
  {
    "re": "^输入 (\\d+) · 当前元素$",
    "en": "Input $1 · current element",
    "zh": "输入 $1 · 当前元素"
  },
  {
    "re": "^已生成 (\\d+) 个确定性执行步骤。$",
    "en": "Generated $1 deterministic execution steps.",
    "zh": "已生成 $1 个确定性执行步骤。"
  },
  {
    "re": "^读取输入：\\[([^\\]]*)\\]$",
    "en": "Read input: [$1]",
    "zh": "读取输入：[$1]"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：读取输入：\\[([^\\]]*)\\]$",
    "en": "Step $1, line $2: Read input: [$3]",
    "zh": "步骤 $1，行 $2：读取输入：[$3]"
  },
  {
    "re": "^初始化 total = 0。$",
    "en": "Initialize total = 0.",
    "zh": "初始化 total = 0。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：初始化 total = 0。$",
    "en": "Step $1, line $2: Initialize total = 0.",
    "zh": "步骤 $1，行 $2：初始化 total = 0。"
  },
  {
    "re": "^初始化 count = 0。$",
    "en": "Initialize count = 0.",
    "zh": "初始化 count = 0。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：初始化 count = 0。$",
    "en": "Step $1, line $2: Initialize count = 0.",
    "zh": "步骤 $1，行 $2：初始化 count = 0。"
  },
  {
    "re": "^第 (\\d+) 轮：value = (-?\\d+)。$",
    "en": "Iteration $1: value = $2.",
    "zh": "第 $1 轮：value = $2。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：第 (\\d+) 轮：value = (-?\\d+)。$",
    "en": "Step $1, line $2: Iteration $3: value = $4.",
    "zh": "步骤 $1，行 $2：第 $3 轮：value = $4。"
  },
  {
    "re": "^测试 (-?\\d+) > 0 → True；进入分支。$",
    "en": "Test $1 > 0 → True; enter the branch.",
    "zh": "测试 $1 > 0 → True；进入分支。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：测试 (-?\\d+) > 0 → True；进入分支。$",
    "en": "Step $1, line $2: Test $3 > 0 → True; enter the branch.",
    "zh": "步骤 $1，行 $2：测试 $3 > 0 → True；进入分支。"
  },
  {
    "re": "^测试 (-?\\d+) > 0 → False；跳过累加。$",
    "en": "Test $1 > 0 → False; skip the updates.",
    "zh": "测试 $1 > 0 → False；跳过累加。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：测试 (-?\\d+) > 0 → False；跳过累加。$",
    "en": "Step $1, line $2: Test $3 > 0 → False; skip the updates.",
    "zh": "步骤 $1，行 $2：测试 $3 > 0 → False；跳过累加。"
  },
  {
    "re": "^将 (-?\\d+) 加入 total → (-?\\d+)。$",
    "en": "Add $1 to total → $2.",
    "zh": "将 $1 加入 total → $2。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：将 (-?\\d+) 加入 total → (-?\\d+)。$",
    "en": "Step $1, line $2: Add $3 to total → $4.",
    "zh": "步骤 $1，行 $2：将 $3 加入 total → $4。"
  },
  {
    "re": "^count 增加 1 → (\\d+)。$",
    "en": "Increase count by 1 → $1.",
    "zh": "count 增加 1 → $1。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：count 增加 1 → (\\d+)。$",
    "en": "Step $1, line $2: Increase count by 1 → $3.",
    "zh": "步骤 $1，行 $2：count 增加 1 → $3。"
  },
  {
    "re": "^计算 (-?\\d+) / (\\d+) → ([-\\d.e+]+)。$",
    "en": "Compute $1 / $2 → $3.",
    "zh": "计算 $1 / $2 → $3。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：计算 (-?\\d+) / (\\d+) → ([-\\d.e+]+)。$",
    "en": "Step $1, line $2: Compute $3 / $4 → $5.",
    "zh": "步骤 $1，行 $2：计算 $3 / $4 → $5。"
  },
  {
    "re": "^count 为 0，保护分支令 mean = 0。$",
    "en": "count is 0, so the guard selects mean = 0.",
    "zh": "count 为 0，保护分支令 mean = 0。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：count 为 0，保护分支令 mean = 0。$",
    "en": "Step $1, line $2: count is 0, so the guard selects mean = 0.",
    "zh": "步骤 $1，行 $2：count 为 0，保护分支令 mean = 0。"
  },
  {
    "re": "^print\\(mean\\) 输出 ([-\\d.e+]+)。$",
    "en": "print(mean) outputs $1.",
    "zh": "print(mean) 输出 $1。"
  },
  {
    "re": "^步骤 (\\d+)，行 (\\d+)：print\\(mean\\) 输出 ([-\\d.e+]+)。$",
    "en": "Step $1, line $2: print(mean) outputs $3.",
    "zh": "步骤 $1，行 $2：print(mean) 输出 $3。"
  },
  {
    "re": "^✓ 01 / POSITIVE FILTER — 6\\. 只有 2 与 4 进入累积，total = 6。$",
    "en": "✓ 01 / POSITIVE FILTER — 6. Only 2 and 4 are accumulated, so total = 6.",
    "zh": "✓ 01 / 正数筛选 — 6。只有 2 与 4 进入累积，total = 6。"
  },
  {
    "re": "^○ 01 / POSITIVE FILTER — 6\\. 只有 2 与 4 进入累积，total = 6。$",
    "en": "○ 01 / POSITIVE FILTER — 6. Only 2 and 4 are accumulated, so total = 6.",
    "zh": "○ 01 / 正数筛选 — 6。只有 2 与 4 进入累积，total = 6。"
  },
  {
    "re": "^✓ 02 / INTERMEDIATE STATE — total=2, count=1\\. 第一轮把状态改成 \\(2,1\\)；第二轮条件为假，状态保持不变。$",
    "en": "✓ 02 / INTERMEDIATE STATE — total=2, count=1. The first iteration produces (2,1). In the second, the condition is false and the state remains unchanged.",
    "zh": "✓ 02 / 中间状态 — total=2, count=1。第一轮把状态改成 (2,1)；第二轮条件为假，状态保持不变。"
  },
  {
    "re": "^○ 02 / INTERMEDIATE STATE — total=2, count=1\\. 第一轮把状态改成 \\(2,1\\)；第二轮条件为假，状态保持不变。$",
    "en": "○ 02 / INTERMEDIATE STATE — total=2, count=1. The first iteration produces (2,1). In the second, the condition is false and the state remains unchanged.",
    "zh": "○ 02 / 中间状态 — total=2, count=1。第一轮把状态改成 (2,1)；第二轮条件为假，状态保持不变。"
  },
  {
    "re": "^✓ 03 / ZERO DIVISION GUARD — 0\\. count=0，因此走 else 0，不会计算 total/count。$",
    "en": "✓ 03 / ZERO DIVISION GUARD — 0. count=0 selects else 0, so total/count is not evaluated.",
    "zh": "✓ 03 / 除零保护 — 0。count=0，因此走 else 0，不会计算 total/count。"
  },
  {
    "re": "^○ 03 / ZERO DIVISION GUARD — 0\\. count=0，因此走 else 0，不会计算 total/count。$",
    "en": "○ 03 / ZERO DIVISION GUARD — 0. count=0 selects else 0, so total/count is not evaluated.",
    "zh": "○ 03 / 除零保护 — 0。count=0，因此走 else 0，不会计算 total/count。"
  },
  {
    "re": "^✓ 04 / TARGET-SPECIFIC CONTEXT — count 的更新与最后的 mean 除法\\. 在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。$",
    "en": "✓ 04 / TARGET-SPECIFIC CONTEXT — The count updates and final mean division. In this example without other side effects, count and mean do not affect total. Context can vary with the target variable.",
    "zh": "✓ 04 / 目标相关上下文 — count 的更新与最后的 mean 除法。在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。"
  },
  {
    "re": "^○ 04 / TARGET-SPECIFIC CONTEXT — count 的更新与最后的 mean 除法\\. 在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。$",
    "en": "○ 04 / TARGET-SPECIFIC CONTEXT — The count updates and final mean division. In this example without other side effects, count and mean do not affect total. Context can vary with the target variable.",
    "zh": "○ 04 / 目标相关上下文 — count 的更新与最后的 mean 除法。在这个没有其他副作用的例子里，count 与 mean 不反向影响 total。上下文可以随目标变量改变。"
  },
  {
    "re": "^✓ 05 / ORDER OF UPDATES — a=10, b=5\\. 第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。$",
    "en": "✓ 05 / ORDER OF UPDATES — a=10, b=5. Iteration one gives b=2,a=4; iteration two gives b=5,a=10. Tracking statements in order is more accurate than treating assignments as simultaneous.",
    "zh": "✓ 05 / 更新顺序 — a=10, b=5。第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。"
  },
  {
    "re": "^○ 05 / ORDER OF UPDATES — a=10, b=5\\. 第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。$",
    "en": "○ 05 / ORDER OF UPDATES — a=10, b=5. Iteration one gives b=2,a=4; iteration two gives b=5,a=10. Tracking statements in order is more accurate than treating assignments as simultaneous.",
    "zh": "○ 05 / 更新顺序 — a=10, b=5。第一轮 b=2,a=4；第二轮 b=5,a=10。逐句状态更新比把所有赋值当同时发生更准确。"
  },
  {
    "re": "^✓ 06 / BLENDED EXECUTION — 确定部分由分析处理，不确定分支借助变量相关切片辅助预测\\. PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。$",
    "en": "✓ 06 / BLENDED EXECUTION — Analyze determined parts and use variable-relevant slices to support prediction at uncertain branches. PredEx combines program analysis with prediction and organizes predictive backward slices per variable. This page demonstrates only deterministic small programs and conceptual boundaries.",
    "zh": "✓ 06 / 融合执行 — 确定部分由分析处理，不确定分支借助变量相关切片辅助预测。PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。"
  },
  {
    "re": "^○ 06 / BLENDED EXECUTION — 确定部分由分析处理，不确定分支借助变量相关切片辅助预测\\. PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。$",
    "en": "○ 06 / BLENDED EXECUTION — Analyze determined parts and use variable-relevant slices to support prediction at uncertain branches. PredEx combines program analysis with prediction and organizes predictive backward slices per variable. This page demonstrates only deterministic small programs and conceptual boundaries.",
    "zh": "○ 06 / 融合执行 — 确定部分由分析处理，不确定分支借助变量相关切片辅助预测。PredEx 结合程序分析与预测，并为变量组织预测式反向切片。本页仅演示确定的小程序与概念边界。"
  }
];
window.BillI18n.register({strings,patterns:patterns.map(p=>({...p,re:new RegExp(p.re,'u')}))});
})();
