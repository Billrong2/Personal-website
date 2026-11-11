# 科研网站迭代目标

跟踪事项：[Research showcase goal #1](https://github.com/Billrong2/Personal-website/issues/1)。

把现有 Matrix 科研世界扩展为可以实际操作的论文展示空间。第一轮覆盖目前公开识别的六项 Bill 科研工作，每项提供 **Story / Lab / Challenge 三个独立候选，共 18 个**，供逐项体验、选择和修改。公开识别范围不代表完整履历；未公开工作不在本轮范围。

内容扩展集中在科研世界。生活世界、游戏世界及第四个保留入口不增加新内容；本轮为首页和全部页面补齐中英切换。所有代码和文档写入限定在 `Billrong2/Personal-website`；论文项目仓库和参考网站仅供只读研究，不向它们提交修改。

## 当前状态

2026-11-10：六项工作、18 个可交互样例及总览已完成。全部样例通过脚本与主要状态检查；浏览器验证了 18 页加载、六项工作的实验／挑战关键反馈、窄栏比较，以及总览筛选与选择保存。具体范围见 [VALIDATION.md](VALIDATION.md)。GitHub Pages 的启用与线上验收仍待确认。

## 本轮新增：六个独立游戏与全站双语

保留全部 18 个候选，另加入六个具有独立场景与玩法的科研游戏。全站 30 个页面默认英文，可切换中文；选择保存在当前浏览器并同步到比较窗口的内嵌页面。语言切换保留当前交互状态。具体测试与发布状态以 [VALIDATION.md](VALIDATION.md) 为准。

| 工作 | 游戏 | 页面 |
|---|---|---|
| CodeSteer | Code Steer | [attention.html](docs/research/games/attention.html) |
| AdaptAgent | Contract Courier | [adaptagent.html](docs/research/games/adaptagent.html) |
| LλMDA | The Missing City | [lamda.html](docs/research/games/lamda.html) |
| Behavioral Alignment | Mirror District | [alignment.html](docs/research/games/alignment.html) |
| PredEx | The Execution Express | [predex.html](docs/research/games/predex.html) |
| SAFEMIN | The Contradiction Citadel | [safemin.html](docs/research/games/safemin.html) |

这六个游戏是论文概念的教学实现，继续遵循下方的研究结果边界。Faded Light 音频尚未附带，GitHub Pages 线上发布仍未确认。

## Code Steer 玩法修订 — 2026-11-11

主标题保持 **Code Steer**，电流迷宫只作为进入论文后的场景。从 `return _0x91` 出发，走近混淆节点、读取运行记录、绑定观察值，再亲手接线并发出验证脉冲。四组节点要求五条手动连接；同一个当前值必须分别接入更新和条件判断，检查节点不会自动完成切片。

移除装饰性粉色干扰与预先暴露的答案路线。错误电流只表示访客错误的追踪假设，不能暗示标识符混淆改变真实数据流。同样算出 12 的无关节点、数值相同的输入副本都必须按定义与使用关系排除。程序与输出始终保持不变；连接验证通过后才出现绿色电流与含义标签。

八项逻辑测试、169 条节点间移动路线、五条接线的完整浏览器通关和重置已检查；中英切换保留状态。详细范围见 [VALIDATION.md](VALIDATION.md)。

## 18 个候选映射

每个候选都应具备明确操作、可见反馈和重置／重新开始。Story 通过有选择的叙事解释研究问题，Lab 用可调整的示例演示机制，Challenge 让访客先预测再查看解释。

| 工作 | 候选 | 体验名称 | 页面 |
|---|---|---|---|
| CodeSteer (`attention`) | Story | 在噪声中找到线索 | [story.html](docs/research/samples/attention/story.html) |
| CodeSteer (`attention`) | Lab | Attention 显微镜 | [lab.html](docs/research/samples/attention/lab.html) |
| CodeSteer (`attention`) | Challenge | 混淆代码破译 | [challenge.html](docs/research/samples/attention/challenge.html) |
| AdaptAgent (`adaptagent`) | Story | 代码跨仓库的交接 | [story.html](docs/research/samples/adaptagent/story.html) |
| AdaptAgent (`adaptagent`) | Lab | 适配流水线 | [lab.html](docs/research/samples/adaptagent/lab.html) |
| AdaptAgent (`adaptagent`) | Challenge | 修复任务室 | [challenge.html](docs/research/samples/adaptagent/challenge.html) |
| LλMDA (`lamda`) | Story | 补全上下文，保留边界 | [story.html](docs/research/samples/lamda/story.html) |
| LλMDA (`lamda`) | Lab | 依赖星图 | [lab.html](docs/research/samples/lamda/lab.html) |
| LλMDA (`lamda`) | Challenge | 切片考古 | [challenge.html](docs/research/samples/lamda/challenge.html) |
| Behavioral Alignment (`alignment`) | Story | 两种读者，同一段代码 | [story.html](docs/research/samples/alignment/story.html) |
| Behavioral Alignment (`alignment`) | Lab | 理解行为观测台 | [lab.html](docs/research/samples/alignment/lab.html) |
| Behavioral Alignment (`alignment`) | Challenge | 语义一致性配对 | [challenge.html](docs/research/samples/alignment/challenge.html) |
| PredEx (`predex`) | Story | 一条执行路径的旅程 | [story.html](docs/research/samples/predex/story.html) |
| PredEx (`predex`) | Lab | 预测执行轨迹 | [lab.html](docs/research/samples/predex/lab.html) |
| PredEx (`predex`) | Challenge | 输出侦探 | [challenge.html](docs/research/samples/predex/challenge.html) |
| SAFEMIN (`safemin`) | Story | 删减之前，先验证 | [story.html](docs/research/samples/safemin/story.html) |
| SAFEMIN (`safemin`) | Lab | 约束验证工作台 | [lab.html](docs/research/samples/safemin/lab.html) |
| SAFEMIN (`safemin`) | Challenge | 安全删减挑战 | [challenge.html](docs/research/samples/safemin/challenge.html) |

## 内容依据

| 工作 | 论文 |
|---|---|
| CodeSteer | [Post-Hoc Attention Steering of Large Language Models for Robust Code Understanding under Obfuscation](https://arxiv.org/abs/2609.26102) |
| AdaptAgent | [AdaptAgent: A Multi-agent, Domain-Guided Reasoning Framework for Code Adaptation](https://arxiv.org/abs/2608.04459) |
| LλMDA | [Large Language Model-Aided Partial Program Dependence Analysis](https://doi.org/10.1145/3744916.3773119) |
| Behavioral Alignment | [On Behavioral Alignment of Model-Code and Human-Code Understandability via Behavioral Proxies](https://arxiv.org/abs/2609.26101) |
| PredEx | [Blended Analysis for Predictive Execution](https://doi.org/10.1145/3729402) |
| SAFEMIN | [Large Language Models for Safe Minimization](https://aashishyadavally.github.io/assets/pdf/pub-icse2025-(2).pdf) |

## 原型与研究结果的边界

- 候选是浏览器中的教学原型，使用人工编写的例子、可检查的规则和确定性逻辑；不宣称正在调用真实 LLM、完整论文系统、编译器或 SMT 求解器，除非以后确实接入并明确说明。
- 示例注意力、分支、置信度、评分、图形和性能数值必须标明来源；演示值不得包装成论文实验测量、真实模型输出或用户群体统计。
- 对应论文的方法事实、作者信息和链接来自公开资料；论文结果与原型产生的反馈应明确区分。研究描述不得因玩法而改变核心方法。
- 展示能说明机制的小例子；不得把有限示例上的成功解释为真实系统的可靠性、验证证明或论文结果复现。
- 不需要访客提供 API 密钥，不向外部模型服务上传访客输入。未来若增加联网能力，应另行明确输入如何处理。

## 验收清单

- [x] 科研入口可到达六项工作和全部 18 个候选；每项均能回到该工作和科研总览。
- [x] 18 个页面分别加载成功，资源和内部链接正常，没有阻断运行的脚本错误。
- [x] 每个 Story 的选择、推进、解释及重置实际工作；不是只有静态文字或失效按钮。
- [x] 每个 Lab 的输入会改变可解释的状态或结果，重置能恢复初始状态。
- [x] 每个 Challenge 能提交答案、给出正确性／解释并重新开始。
- [x] 关键方法与来源核对一致；演示数据、预设答案和局限表达清楚。
- [x] 桌面与约 400px 比较窗下展示和关键操作已检查；使用原生可访问控件并提供减少动态效果样式。
- [ ] 真机触屏、超宽屏与完整键盘回归留待下一轮。
- [x] 生活、游戏页面只增加双语支持，未扩展内容或玩法；其他科研项目仓库没有写入。
- [x] 构建检查包含全部 18 个候选、六个独立游戏及双语资源。
- [x] 本轮双语和六个独立游戏的代表性浏览器操作已验收，完整逻辑与测试范围见 VALIDATION.md。
- [ ] GitHub Pages 启用、发布状态和实际可访问地址核验。

## 下一轮

先让 Bill 比较每项工作的三个候选，再决定保留、合并或替换形式；随后逐项增加真实论文图表、可公开数据、解释深度和交互细节。参考站的其他形式登记在 [REFERENCE_INVENTORY.md](REFERENCE_INVENTORY.md)，只是未来科研适配备选，不代表本轮已经实现。
