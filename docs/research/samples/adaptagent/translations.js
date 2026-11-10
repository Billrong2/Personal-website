/* Authored bilingual copy. Shared runtime preserves interaction state. */
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
    "THE HANDOFF",
    "代码的交接"
  ],
  [
    "THE HANDOFF · Bill Research",
    "代码的交接 · Bill 科研"
  ],
  [
    "Candidate A · When code crosses repository boundaries, who should ask which questions?",
    "候选 A · 一段代码跨过仓库边界时，谁该问什么问题？"
  ],
  [
    "This story uses an authored teaching scenario to explain the research question. It is not a record of the paper’s experiments and does not call a real model.",
    "交互故事是为解释论文问题而创作的教学场景，不是论文实验记录，也没有调用真实模型。"
  ],
  [
    "CONTEXT SWITCHBOARD",
    "上下文控制台"
  ],
  [
    "CONTEXT SWITCHBOARD · Bill Research",
    "上下文控制台 · Bill 科研"
  ],
  [
    "Candidate B · Toggle context and see which assertions the candidate code fails.",
    "候选 B · 拨动上下文开关，看看候选代码在哪个断言上失效。"
  ],
  [
    "This page uses a fixed fictional API and local JavaScript assertions to demonstrate the role of context. No LLM requests or paper performance figures are involved.",
    "本页用固定的虚构 API 与本地 JavaScript 断言演示上下文作用；没有 LLM 请求，也不展示论文性能数字。"
  ],
  [
    "Adaptation workflow",
    "适配流程"
  ],
  [
    "PLAN",
    "规划"
  ],
  [
    "CONTEXT",
    "上下文"
  ],
  [
    "EDIT",
    "修改"
  ],
  [
    "VERIFY",
    "验证"
  ],
  [
    "Assemble the target repository’s context",
    "装配目标仓库的上下文"
  ],
  [
    "LOCAL FIXTURE",
    "本地教学示例"
  ],
  [
    "API definition",
    "接口定义"
  ],
  [
    "The return value is { data: { name, visits } }, rather than a flat object.",
    "返回值为 { data: { name, visits } }，而不是平坦对象。"
  ],
  [
    "Call sites and type conventions",
    "调用点与类型约定"
  ],
  [
    "visits is a string from the database; convert it with Number before incrementing.",
    "visits 从数据库返回字符串；增加次数前应转换为 Number。"
  ],
  [
    "Boundary behavior",
    "边界行为约定"
  ],
  [
    "For an empty response, return { name: \"unknown\", next: 0 }.",
    "响应为空时返回 { name: \"unknown\", next: 0 }。"
  ],
  [
    "Run verification",
    "执行验证"
  ],
  [
    "Check the normal response, numeric conversion, and empty response.",
    "检查正常响应、数字转换与空响应。"
  ],
  [
    "Run adaptation and verification",
    "运行适配与验证"
  ],
  [
    "Reset all",
    "全部重置"
  ],
  [
    "Generated candidate function",
    "生成的候选函数"
  ],
  [
    "VERIFICATION TERMINAL",
    "验证终端"
  ],
  [
    "Run results",
    "运行结果"
  ],
  [
    "This count covers these three teaching assertions, not the paper’s benchmark.",
    "这里计数的是这三个教学断言，不是论文基准。"
  ],
  [
    "Waiting to run. Change the context on the left, then run once.",
    "等待执行。修改左边上下文后，运行一次。"
  ],
  [
    "Data contract",
    "数据契约"
  ],
  [
    "Try turning off the API definition first, then only the type convention. The two missing pieces cause different failures.",
    "试试：先关掉接口定义，再只关掉类型约定。两个缺口会导致不同的失败。"
  ],
  [
    "The candidate changed. Run verification again.",
    "候选已变更，等待重新验证。"
  ],
  [
    "UNVERIFIED",
    "未验证"
  ],
  [
    "Verification is off. Generating code does not establish that its behavior is correct.",
    "验证已关闭。生成代码不代表行为已经正确。"
  ],
  [
    "Normal response / name",
    "正常响应 / 名称"
  ],
  [
    "Numeric conversion / count",
    "数字转换 / 次数"
  ],
  [
    "Empty response / fallback",
    "空响应 / 回退"
  ],
  [
    "PATCH THE CONTRACT",
    "修复接口契约"
  ],
  [
    "PATCH THE CONTRACT · Bill Research",
    "修复接口契约 · Bill 科研"
  ],
  [
    "Candidate C · Six migrations, six contracts that appearances can hide.",
    "候选 C · 六次迁移，六个容易被外表掩盖的契约。"
  ],
  [
    "Six hand-authored code-adaptation questions. The questions and scores are for teaching, not the paper’s dataset or model evaluation.",
    "六道手工构造的代码适配题。题目与得分仅用于教学，不是论文中的数据集或模型评测。"
  ],
  [
    "CONTRACT REPAIR",
    "契约修复"
  ],
  [
    "Give me a hint",
    "给我一个线索"
  ],
  [
    "Next question →",
    "下一题 →"
  ],
  [
    "View review →",
    "查看总评 →"
  ],
  [
    "REPAIR LOG",
    "修复记录"
  ],
  [
    "Only the first answer to each question counts. Feedback explains the contract and the mistake.",
    "每题第一次作答计分；反馈会解释契约与错误。"
  ],
  [
    "Adaptation checks complete",
    "适配检查完成"
  ],
  [
    "MISSION / CODE MIGRATION",
    "任务 / 代码迁移"
  ],
  [
    "A NEW REPOSITORY",
    "一个新仓库"
  ],
  [
    "same intention · different contract",
    "意图相同 · 契约不同"
  ],
  [
    "Working code, new repository: does it still hold?",
    "一段能运行的代码，换个仓库还成立吗？"
  ],
  [
    "You are moving code that reads a user’s name into a new repository. The old example uses fetchUser; the new repository provides client.request. This requires more than renaming a function.",
    "你要把“读取用户名称”的代码移入新仓库。旧示例使用 fetchUser，新仓库提供 client.request。任务不只是换一个函数名。"
  ],
  [
    "Adaptation requires understanding the target project’s interfaces, data, and constraints.",
    "适配需要理解目标项目的接口、数据与约束。"
  ],
  [
    "Old: name = fetchUser(id).name\nNew: client.request({ path: ... })",
    "旧：name = fetchUser(id).name\n新：client.request({ path: ... })"
  ],
  [
    "Replace the function name immediately",
    "先直接替换函数名"
  ],
  [
    "Get a first version quickly and see what happens.",
    "最快得到一版代码，看看会发生什么。"
  ],
  [
    "List the dependencies to confirm first",
    "先列出需要确认的依赖"
  ],
  [
    "Plan what to call, what it returns, and how failure is handled.",
    "把“调用什么、返回什么、失败怎么办”写成计划。"
  ],
  [
    "BRANCH / A QUICK GUESS",
    "分支 / 快速猜测"
  ],
  [
    "UNDEFINED",
    "未定义"
  ],
  [
    "a plausible edit can still be wrong",
    "看似合理的修改仍可能出错"
  ],
  [
    "The name is right. The return value is not.",
    "名字对了，返回值却不对。"
  ],
  [
    "You wrote response.name. In the test, response is { data: { name: \"Ada\" } }: the name is nested inside data. A function name alone does not reveal that difference.",
    "你写下 response.name。测试中 response 是 { data: { name: \"Ada\" } }，名称藏在 data 里面。只看函数名，无法发现这个差别。"
  ],
  [
    "A plausible edit needs evidence from the target project.",
    "看起来合理的修改，需要目标项目的证据来支持。"
  ],
  [
    "Return to the plan and inspect the response structure",
    "回到计划，查清返回结构"
  ],
  [
    "Turn this failure into a specific context requirement.",
    "让这次失败变成一个明确的上下文需求。"
  ],
  [
    "01 / PLAN",
    "01 / 规划"
  ],
  [
    "ASK BEFORE EDIT",
    "先问再改"
  ],
  [
    "API · types · error behavior",
    "API · 类型 · 错误处理"
  ],
  [
    "Break the task into checkable questions.",
    "把任务分成可检查的问题。"
  ],
  [
    "The planner asks three questions: What structure does the API return? Is the ID a string or a number? Does a failed request return an empty value or throw? Now decide who will find the evidence.",
    "规划者提出三个问题：接口返回什么结构？ID 是字符串还是数字？请求失败时返回空值还是抛错？接下来要决定让谁找这些证据。"
  ],
  [
    "This division of roles is a teaching abstraction for collaborative adaptation.",
    "这份角色分工是教学抽象，用来展示协作适配的思路。"
  ],
  [
    "Give every role the same code and ask each for a patch",
    "给所有角色同一段代码，直接各写一版"
  ],
  [
    "More roles do not necessarily provide more information.",
    "角色变多了，但信息未必变多。"
  ],
  [
    "Assign context gathering and editing by question",
    "按问题分配上下文收集与修改"
  ],
  [
    "Inspect definitions for interfaces and call sites for types; let the editor integrate the evidence.",
    "接口查项目定义，类型查调用点，修改者整合证据。"
  ],
  [
    "BRANCH / DUPLICATE EFFORT",
    "分支 / 重复工作"
  ],
  [
    "THREE GUESSES",
    "三次猜测"
  ],
  [
    "more answers ≠ better context",
    "更多答案 ≠ 更好上下文"
  ],
  [
    "Three suggestions repeat the same assumption.",
    "三个建议重复了同一个假设。"
  ],
  [
    "None of the three roles saw the target API definition, so all guessed response.name. Collaboration benefits from complementary information and clear responsibilities, not simply more answers.",
    "三个角色都没看到目标接口定义，于是都猜 response.name。协作的价值来自互补信息与明确职责，不是简单增加回答数量。"
  ],
  [
    "Without new evidence, multiple suggestions can share the same mistake.",
    "没有新证据，多个建议仍可能共享同一个错误。"
  ],
  [
    "Have the roles gather different missing context first",
    "让角色先补齐不同的上下文"
  ],
  [
    "Coordinate the next round around specific questions.",
    "用明确问题协调下一轮工作。"
  ],
  [
    "02 / CONTEXT",
    "02 / 上下文"
  ],
  [
    "EVIDENCE ARRIVES",
    "证据已到"
  ],
  [
    "the repository defines the contract",
    "仓库定义契约"
  ],
  [
    "Context gives the edit a basis.",
    "上下文让修改有了依据。"
  ],
  [
    "The API definition specifies data in the response; call sites show that the ID must be numeric; existing tests require an empty string for an empty response. You can submit now, or first turn these constraints into checks.",
    "接口定义说明返回 data；调用点说明 ID 要转数字；已有测试说明空响应应返回空字符串。你可以现在提交，也可以先把这些约束变成验证点。"
  ],
  [
    "The code is a small fictional example, not an actual patch from the paper.",
    "演示代码只是小型虚构示例，不是论文中的真实补丁。"
  ],
  [
    "The code looks right; submit it now",
    "代码看起来已经对了，直接提交"
  ],
  [
    "Skip the tests and leave the behavior unverified.",
    "不运行测试，保留未验证的风险。"
  ],
  [
    "Check normal responses, input types, and empty responses",
    "运行正常、类型、空响应三类检查"
  ],
  [
    "Evaluate the candidate patch through observable behavior.",
    "用可观察行为检验候选补丁。"
  ],
  [
    "BRANCH / UNVERIFIED",
    "分支 / 尚未验证"
  ],
  [
    "LOOKS RIGHT?",
    "看起来对了？"
  ],
  [
    "no evidence of behavior yet",
    "还没有行为证据"
  ],
  [
    "Looking right is not a verification result.",
    "“像正确答案”还不是验证结果。"
  ],
  [
    "Does the new code preserve the original task’s intent? Are boundary inputs handled according to the repository’s conventions? Without checks, these questions remain open.",
    "新的代码是否保持原任务意图？边界输入是否按仓库约定处理？如果没有检查，这些问题仍然悬着。"
  ],
  [
    "A failed check can reveal the next missing piece, rather than invalidate the entire approach.",
    "检查失败不一定说明整个方案无效，也可能指出下一步要补什么。"
  ],
  [
    "Add verification",
    "补做验证"
  ],
  [
    "Return to verification with explicit assertions.",
    "带着明确的断言返回验证阶段。"
  ],
  [
    "03 / VERIFY",
    "03 / 验证"
  ],
  [
    "CHECK THE CONTRACT",
    "检查契约"
  ],
  [
    "normal case · input type · empty result",
    "正常情况 · 输入类型 · 空结果"
  ],
  [
    "Verification gives the collaboration a shared endpoint.",
    "验证给协作一个共同的终点。"
  ],
  [
    "The normal response yields Ada, a string ID is converted correctly, and an empty response returns an empty string as required. These are checks for this teaching example, not AdaptAgent benchmark scores.",
    "正常响应得到 Ada，字符串 ID 被正确转换，空响应按约定返回空字符串。这些是该教学示例的检查，不是 AdaptAgent 的基准成绩。"
  ],
  [
    "Consult the paper for its actual method and experiments.",
    "实际论文的方法与实验，请以论文原文为准。"
  ],
  [
    "Record the plan, evidence, edit, and verification results",
    "记录计划、证据、修改和验证结果"
  ],
  [
    "Leave a reasoning record that someone else can inspect.",
    "把推理链变成下一个人能复查的记录。"
  ],
  [
    "MISSION / COMPLETE",
    "任务 / 完成"
  ],
  [
    "ADAPTED, WITH EVIDENCE",
    "有据可依的适配"
  ],
  [
    "plan → context → edit → verify",
    "规划 → 上下文 → 修改 → 验证"
  ],
  [
    "You completed an evidence-based migration.",
    "你完成的是有依据的迁移。"
  ],
  [
    "This branching story shows why adaptation needs target-project context, coordinated reasoning, and verification. In the lab, turn off a type of context and see which assertions fail.",
    "这个候选用分支故事说明：代码适配既需要目标项目上下文，也需要协调推理与验证。现在可以去实验页，亲自关掉某类上下文，看哪些断言开始失败。"
  ],
  [
    "Different choices illustrate mechanisms; they are not ablation results about the number of roles in the paper.",
    "不同的选择展示机制差异，不代表论文对具体角色数量作出的消融结论。"
  ],
  [
    "The return structure changed",
    "返回结构换了"
  ],
  [
    "client.read(id) → { data: { name: \"Ada\" } }\nGoal: obtain \"Ada\"",
    "client.read(id) → { data: { name: \"Ada\" } }\n目标：得到 \"Ada\""
  ],
  [
    "Which expression follows the new response structure?",
    "哪一个表达式遵守新接口的返回结构？"
  ],
  [
    "Match the two nested object levels to property accesses.",
    "把对象的两层花括号分别对应到属性访问。"
  ],
  [
    "name is inside data, so response.data.name is required.",
    "name 位于 data 对象中，因此需要 response.data.name。"
  ],
  [
    "Correct. name is inside data, so response.data.name is required.",
    "正确。name 位于 data 对象中，因此需要 response.data.name。"
  ],
  [
    "Not a match. name is inside data, so response.data.name is required.",
    "这次不匹配。name 位于 data 对象中，因此需要 response.data.name。"
  ],
  [
    "✓ The return structure changed",
    "✓ 返回结构换了"
  ],
  [
    "× The return structure changed",
    "× 返回结构换了"
  ],
  [
    "Correct choice: response.data.name. name is inside data, so response.data.name is required.",
    "正确选择：response.data.name。name 位于 data 对象中，因此需要 response.data.name。"
  ],
  [
    "The asynchronous boundary",
    "异步边界"
  ],
  [
    "async function load() { return { items: [2, 4] }; }\nGoal: return the length of items",
    "async function load() { return { items: [2, 4] }; }\n目标：返回 items 的长度"
  ],
  [
    "Inside an async function, how should you obtain the result?",
    "在 async function 内应该如何取得结果？"
  ],
  [
    "Calling an async function returns a Promise; items is available after it resolves.",
    "调用 async 函数先得到 Promise，等待解析后才有 items。"
  ],
  [
    "await load() resolves the Promise before items.length is accessed.",
    "await load() 解析 Promise，随后才能读取 items.length。"
  ],
  [
    "Correct. await load() resolves the Promise before items.length is accessed.",
    "正确。await load() 解析 Promise，随后才能读取 items.length。"
  ],
  [
    "Not a match. await load() resolves the Promise before items.length is accessed.",
    "这次不匹配。await load() 解析 Promise，随后才能读取 items.length。"
  ],
  [
    "✓ The asynchronous boundary",
    "✓ 异步边界"
  ],
  [
    "× The asynchronous boundary",
    "× 异步边界"
  ],
  [
    "Correct choice: (await load()).items.length. await load() resolves the Promise before items.length is accessed.",
    "正确选择：(await load()).items.length。await load() 解析 Promise，随后才能读取 items.length。"
  ],
  [
    "Number or string?",
    "数字还是字符串？"
  ],
  [
    "const record = { visits: \"7\" };\nGoal: return the next visit count, 8 (a number)",
    "const record = { visits: \"7\" };\n目标：返回下一次访问次数 8（数字）"
  ],
  [
    "Which expression satisfies the type convention?",
    "哪种写法满足类型约定？"
  ],
  [
    "In JavaScript, + concatenates when an operand is a string.",
    "JavaScript 的 + 遇到字符串会进行连接。"
  ],
  [
    "Number(\"7\") + 1 yields the number 8; the first two expressions produce the string \"71\".",
    "Number(\"7\") + 1 得到数字 8；前两种产生字符串 \"71\"。"
  ],
  [
    "Correct. Number(\"7\") + 1 yields the number 8; the first two expressions produce the string \"71\".",
    "正确。Number(\"7\") + 1 得到数字 8；前两种产生字符串 \"71\"。"
  ],
  [
    "Not a match. Number(\"7\") + 1 yields the number 8; the first two expressions produce the string \"71\".",
    "这次不匹配。Number(\"7\") + 1 得到数字 8；前两种产生字符串 \"71\"。"
  ],
  [
    "✓ Number or string?",
    "✓ 数字还是字符串？"
  ],
  [
    "× Number or string?",
    "× 数字还是字符串？"
  ],
  [
    "Correct choice: Number(record.visits) + 1. Number(\"7\") + 1 yields the number 8; the first two expressions produce the string \"71\".",
    "正确选择：Number(record.visits) + 1。Number(\"7\") + 1 得到数字 8；前两种产生字符串 \"71\"。"
  ],
  [
    "An empty response is not an empty object",
    "空响应不是空对象"
  ],
  [
    "Repository contract: return an empty list [] when response is null.\nNormal response: { rows: [1, 3] }",
    "仓库约定：response 为 null 时返回空列表 []。\n正常响应：{ rows: [1, 3] }"
  ],
  [
    "Which adaptation preserves the empty-response contract?",
    "哪种迁移保留了空响应约定？"
  ],
  [
    "Avoid accessing a property on null, then supply an empty-list fallback.",
    "先避免 null 属性访问，再提供空列表回退。"
  ],
  [
    "Optional chaining and nullish coalescing return [] for null and rows for a normal response.",
    "可选链和空值合并在 null 时返回 []；正常时返回 rows。"
  ],
  [
    "Correct. Optional chaining and nullish coalescing return [] for null and rows for a normal response.",
    "正确。可选链和空值合并在 null 时返回 []；正常时返回 rows。"
  ],
  [
    "Not a match. Optional chaining and nullish coalescing return [] for null and rows for a normal response.",
    "这次不匹配。可选链和空值合并在 null 时返回 []；正常时返回 rows。"
  ],
  [
    "✓ An empty response is not an empty object",
    "✓ 空响应不是空对象"
  ],
  [
    "× An empty response is not an empty object",
    "× 空响应不是空对象"
  ],
  [
    "Correct choice: response?.rows ?? []. Optional chaining and nullish coalescing return [] for null and rows for a normal response.",
    "正确选择：response?.rows ?? []。可选链和空值合并在 null 时返回 []；正常时返回 rows。"
  ],
  [
    "The parameter name changed",
    "参数名称改变"
  ],
  [
    "Old: lookup({ userId: 12 })\nNew definition: function lookup({ account_id }) { ... }",
    "旧：lookup({ userId: 12 })\n新定义：function lookup({ account_id }) { ... }"
  ],
  [
    "Which call maps the same intent to the target interface?",
    "哪个调用把相同意图映射到目标接口？"
  ],
  [
    "The target function destructures a property named account_id.",
    "目标函数解构的是一个名为 account_id 的属性。"
  ],
  [
    "Passing {account_id: 12} matches the target parameter destructuring.",
    "传入 {account_id: 12} 才与目标形参解构匹配。"
  ],
  [
    "Correct. Passing {account_id: 12} matches the target parameter destructuring.",
    "正确。传入 {account_id: 12} 才与目标形参解构匹配。"
  ],
  [
    "Not a match. Passing {account_id: 12} matches the target parameter destructuring.",
    "这次不匹配。传入 {account_id: 12} 才与目标形参解构匹配。"
  ],
  [
    "✓ The parameter name changed",
    "✓ 参数名称改变"
  ],
  [
    "× The parameter name changed",
    "× 参数名称改变"
  ],
  [
    "Correct choice: lookup({ account_id: 12 }). Passing {account_id: 12} matches the target parameter destructuring.",
    "正确选择：lookup({ account_id: 12 })。传入 {account_id: 12} 才与目标形参解构匹配。"
  ],
  [
    "Verify behavior",
    "验证应该针对行为"
  ],
  [
    "Migration goal: preserve the name, handle numeric fields correctly, and handle null responses.",
    "迁移目标：保留名称、正确处理数字字段和 null 响应。"
  ],
  [
    "Which set of checks directly covers these contracts?",
    "哪个检查集合直接覆盖了这些约定？"
  ],
  [
    "Test concrete inputs and outputs, rather than the appearance of code.",
    "测试具体输入与输出，而不是代码看上去像什么。"
  ],
  [
    "The three behavioral assertions cover the target contract; keywords and line counts do not guarantee behavior.",
    "三个行为断言覆盖目标契约；关键字和行数都不能保证行为。"
  ],
  [
    "Correct. The three behavioral assertions cover the target contract; keywords and line counts do not guarantee behavior.",
    "正确。三个行为断言覆盖目标契约；关键字和行数都不能保证行为。"
  ],
  [
    "Not a match. The three behavioral assertions cover the target contract; keywords and line counts do not guarantee behavior.",
    "这次不匹配。三个行为断言覆盖目标契约；关键字和行数都不能保证行为。"
  ],
  [
    "✓ Verify behavior",
    "✓ 验证应该针对行为"
  ],
  [
    "× Verify behavior",
    "× 验证应该针对行为"
  ],
  [
    "Correct choice: Assert normal values, numeric types, and the null fallback separately. The three behavioral assertions cover the target contract; keywords and line counts do not guarantee behavior.",
    "正确选择：分别断言正常值、数字类型和 null 回退。三个行为断言覆盖目标契约；关键字和行数都不能保证行为。"
  ],
  [
    "Check only whether the await keyword appears",
    "只检查是否出现了 await 关键字"
  ],
  [
    "A / Check only whether the await keyword appears",
    "A / 只检查是否出现了 await 关键字"
  ],
  [
    "Check only whether the code has fewer lines",
    "只查看代码行数是否变少"
  ],
  [
    "B / Check only whether the code has fewer lines",
    "B / 只查看代码行数是否变少"
  ],
  [
    "Assert normal values, numeric types, and the null fallback separately",
    "分别断言正常值、数字类型和 null 回退"
  ],
  [
    "C / Assert normal values, numeric types, and the null fallback separately",
    "C / 分别断言正常值、数字类型和 null 回退"
  ],
  [
    "PASS · Normal response / name",
    "PASS · 正常响应 / 名称"
  ],
  [
    "FAIL · Normal response / name",
    "FAIL · 正常响应 / 名称"
  ],
  [
    "PASS · Numeric conversion / count",
    "PASS · 数字转换 / 次数"
  ],
  [
    "FAIL · Numeric conversion / count",
    "FAIL · 数字转换 / 次数"
  ],
  [
    "PASS · Empty response / fallback",
    "PASS · 空响应 / 回退"
  ],
  [
    "FAIL · Empty response / fallback",
    "FAIL · 空响应 / 回退"
  ],
  [
    "Expected name = \"Ada\"",
    "期望 name = \"Ada\""
  ],
  [
    "Expected next = 8 (number)",
    "期望 next = 8（数字）"
  ],
  [
    "Expected {name: \"unknown\", next: 0}",
    "期望 {name: \"unknown\", next: 0}"
  ]
],
patterns:[
{re:/^SCENE (\d+)$/,en:'SCENE $1',zh:'第 $1 幕'},
{re:/^ROUND (\d+) \/ (\d+)$/,en:'ROUND $1 / $2',zh:'第 $1 / $2 题'},
{re:/^你完成了 (\d+) 个小型契约检查。$/,en:'You completed $1 small contract checks.',zh:'你完成了 $1 个小型契约检查。'},
{re:/^得分 (\d+) \/ (\d+)。展开右侧记录，复查接口、异步、类型和边界行为。$/,en:'Score: $1 / $2. Expand the review log to revisit interfaces, asynchrony, types, and boundary behavior.',zh:'得分 $1 / $2。展开右侧记录，复查接口、异步、类型和边界行为。'},
{re:/^BILL\.RESEARCH \/ ADAPTAGENT \/ CANDIDATE ([ABC])$/,en:'BILL.RESEARCH / ADAPTAGENT / CANDIDATE $1',zh:'BILL 科研 / ADAPTAGENT / 候选 $1'}
]});
