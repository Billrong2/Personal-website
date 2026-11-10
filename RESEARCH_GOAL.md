# 科研网站迭代目标

跟踪事项：[Research showcase goal #1](https://github.com/Billrong2/Personal-website/issues/1)。

把现有 Matrix 科研世界扩展为可以实际操作的论文展示空间。第一轮覆盖目前公开识别的六项 Bill 科研工作，每项提供 **Story / Lab / Challenge 三个独立候选，共 18 个**，供逐项体验、选择和修改。公开识别范围不代表完整履历；未公开工作不在本轮范围。

本轮只扩展科研内容。生活世界、游戏世界及第四个保留入口不纳入内容改造。所有代码和文档写入限定在 `Billrong2/Personal-website`；论文项目仓库和参考网站仅供只读研究，不向它们提交修改。

## 当前状态

2026-11-10：六项工作、18 个可交互样例及总览已完成。全部样例通过脚本与主要状态检查；浏览器验证了 18 页加载、六项工作的实验／挑战关键反馈、窄栏比较，以及总览筛选与选择保存。具体范围见 [VALIDATION.md](VALIDATION.md)。GitHub Pages 的启用与线上验收仍待确认。

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
- [x] 生活、游戏页面未被本轮功能改造；其他科研项目仓库没有写入。
- [x] 构建文件包含全部候选。
- [ ] GitHub Pages 启用、发布状态和实际可访问地址核验。

## 下一轮

先让 Bill 比较每项工作的三个候选，再决定保留、合并或替换形式；随后逐项增加真实论文图表、可公开数据、解释深度和交互细节。参考站的其他形式登记在 [REFERENCE_INVENTORY.md](REFERENCE_INVENTORY.md)，只是未来科研适配备选，不代表本轮已经实现。
