# 科研交互形式参考目录

参考站：[nietztein.github.io](https://nietztein.github.io/)；公开目录：[misc/toys.json](https://nietztein.github.io/misc/toys.json)。审阅日期：2026-11-10。这里只记录标题、可观察的交互形式和本项目自己的科研适配设想，不包含参考站源码或整段描述。

该目录有 **56 个独立应用形式**：首页展示 46 个，书库视图 18 个，其中 8 个重叠。另记录 11 个顶层导航标签。此清单是未来研究界面备选库，**不表示已经全部实现**。当前交付范围仅为 [RESEARCH_GOAL.md](RESEARCH_GOAL.md) 中六项工作、每项三个候选；本轮 QA 范围见 [VALIDATION.md](VALIDATION.md)。

## 当前三类候选的参考关系

| 当前形式 | 最相关的参考形式 | 本项目应用方式 |
|---|---|---|
| Story | Paper Theatre | 自写论文故事、选择和反馈，解释问题、方法与局限。 |
| Lab | Grokking microscope、Obfuscation playground、Constellations、Flows | 自写示例与状态逻辑，通过参数、依赖图和流程探索方法。 |
| Challenge | Obfuscation game | 自写预测题、评分规则、解释和重置行为。 |

这些是形式上的参考关系，不是代码移植；一项 Lab 可以结合多种形式，不能据此将参考目录中对应应用标为已经实现。

## 56 个形式与未来科研适配

“本轮形式参考”表示已用于选择 Story / Lab / Challenge 的方向；“备选”表示后续 backlog。入口路径用于定位公开参考资料，不是本仓库文件。

| ID | 参考标题 | 本项目科研适配设想 | 范围 | 参考入口 |
|---|---|---|---|---|
| 1 | Virtual library | 将论文、实验与数据集组织成可搜索的研究资料架。 | 备选 | `misc/01-virtual-library/` |
| 4 | Obfuscation playground | 切换输入干预，比较执行结果或相关代码片段。 | Lab 形式参考 | `misc/04-obfuscation-playground/` |
| 5 | Obfuscation game | 先猜输出再报告把握程度，随后查看研究方法解释。 | Challenge 形式参考 | `misc/05-obfuscation-game/` |
| 7 | Grokking microscope | 调整阶段或参数，观察明确标注的教学状态变化。 | Lab 形式参考 | `misc/07-grokking-microscope/` |
| 8 | Git film timeline | 将方法开发或复现实验的里程碑排列为时间线。 | 备选 | `misc/08-git-film-timeline/` |
| 9 | Harvard Classics oracle | 按研究问题抽取有来源的论文阅读提示。 | 备选 | `misc/09-harvard-classics/` |
| 10 | Haiku clock | 轮换显示简短研究问题，点击进入对应论文。 | 备选 | `misc/10-haiku-clock/` |
| 11 | Poetry form checker | 检查论文摘要是否包含问题、方法和证据等结构。 | 备选 | `misc/11-poetry-form-checker/` |
| 12 | Translation aligner | 并排对齐论文段落、代码及中文讲解。 | 备选 | `misc/12-translation-aligner/` |
| 13 | Aozora frequency reader | 给术语添加频率和定义提示，帮助入门读者阅读。 | 备选 | `misc/13-aozora-frequency-reader/` |
| 14 | Bookshelf poster | 生成可打印的个人论文与项目概览。 | 备选 | `misc/14-bookshelf-poster/` |
| 15 | Daylight clock | 显示协作者所在时区，辅助安排研究讨论。 | 备选 | `misc/15-daylight-clock/` |
| 16 | Fake paper titles | 用标注为虚构的标题练习发现含糊研究表述。 | 备选 | `misc/16-fake-paper-titles/` |
| 17 | Bookshelf Tetris | 把研究条目按方法、任务或年份归位。 | 备选 | `misc/17-bookshelf-tetris/` |
| 18 | Zipf Karaoke | 通过节奏化显隐引导访客注意关键研究术语。 | 备选 | `misc/18-zipf-karaoke/` |
| 19 | Tokenizer Aquarium | 观察代码或自然语言被分词的不同方式。 | 备选 | `misc/19-tokenizer-aquarium/` |
| 20 | Library Roguelike | 沿问题、方法、实验和局限逐室探索一篇论文。 | 备选 | `misc/20-library-roguelike/` |
| 21 | Tide Table for Prose | 比较术语替换如何改变技术陈述的含义。 | 备选 | `misc/21-tide-table/` |
| 22 | Shelf Genome | 用组合视图对比任务、方法、数据和评估维度。 | 备选 | `misc/22-shelf-genome/` |
| 23 | Read-Order Oracle | 根据前置知识规划论文阅读顺序。 | 备选 | `misc/23-read-order-oracle/` |
| 24 | Book Exchange | 以明确虚构的代币分配实验预算，练习研究取舍。 | 备选 | `misc/24-book-exchange/` |
| 25 | Grammar Fossil Dig | 逐层揭开代码上下文与依赖信息的来源。 | 备选 | `misc/25-grammar-fossil-dig/` |
| 26 | Homophone Bridge | 展示名称相似却语义不同的 API 或研究概念。 | 备选 | `misc/26-homophone-bridge/` |
| 27 | Pidgin Generator | 比较领域术语转换的收益与信息损失。 | 备选 | `misc/27-pidgin-generator/` |
| 28 | Dead Authors' Local Time | 为研究团队提供各地时间与可用窗口视图。 | 备选 | `misc/28-dead-authors-clock/` |
| 29 | Palimpsest | 擦除表面信息，露出注释、证据或隐藏的代码依赖。 | 备选 | `misc/29-palimpsest/` |
| 30 | Site Reverse Engineer | 通过有限证据推断程序行为，再解释推断边界。 | 备选 | `misc/30-site-reverse-engineer/` |
| 31 | Blog Post Speedrun | 提供限时理解任务；成绩只代表当前练习。 | 备选 | `misc/31-blog-speedrun/` |
| 32 | Latentland Map | 以地图连接论文的概念、前提与结论。 | 备选 | `misc/32-latentland-map/` |
| 33 | Ghost Commit Player | 以只读提交记录回放科研代码的演进。 | 备选 | `misc/33-ghost-commit-player/` |
| 34 | Passport Atlas | 展示公开会议、合作机构与研究经历的地理分布。 | 备选 | `misc/34-passport-atlas/` |
| 35 | Library Orrery | 用轨道组织论文年份、主题与引用关联。 | 备选 | `misc/35-library-orrery/` |
| 36 | Prose Weather | 用规则检查研究文字的长句、含糊指代和术语密度。 | 备选 | `misc/36-prose-weather/` |
| 37 | Marginalia Séance | 浏览明确引述来源的论文旁注，不模拟作者真实发言。 | 备选 | `misc/37-marginalia-seance/` |
| 38 | Handwriting Foundry | 制作手写式研究便签或交互标注。 | 备选 | `misc/38-handwriting-foundry/` |
| 39 | Babel Hexagon | 枚举小型程序或约束空间，解释规模增长。 | 备选 | `misc/39-babel-hexagon/` |
| 40 | Stacks | 以可漫游的资料室组织论文与可运行演示。 | 备选 | `misc/40-shelf-raycaster/` |
| 41 | Spectrogram Painter | 将数值轨迹映射为声音，并同时保留可读数值。 | 备选 | `misc/41-spectrogram-painter/` |
| 42 | Phonograph | 把论文讲解分章朗读，便于逐段导航。 | 备选 | `misc/42-blog-phonograph/` |
| 43 | Bookshelf Planetarium | 用星区划分科研主题，用星点进入具体工作。 | 备选 | `misc/43-shelf-planetarium/` |
| 44 | Text Tartan | 把代码、依赖或实验配置编码为可解释的纹理。 | 备选 | `misc/44-text-tartan/` |
| 45 | Reading Room | 提供聚焦单篇论文、笔记与相关示例的阅读空间。 | 备选 | `misc/45-reading-room/` |
| 46 | Terminus | 用终端命令查找论文、列出方法和打开候选。 | 备选 | `misc/46-shelf-terminus/` |
| 47 | Spine Wall | 用紧凑竖条浏览大量论文与年份。 | 备选 | `misc/47-spine-wall/` |
| 48 | Sunburst | 按领域、任务和方法逐层展开研究目录。 | 备选 | `misc/48-library-sunburst/` |
| 49 | Strata | 按发表时间与研究主题叠层呈现工作。 | 备选 | `misc/49-publication-strata/` |
| 50 | Constellations | 连接代码节点、依赖、论文和证据，点击解释关系。 | Lab 形式参考 | `misc/50-author-constellations/` |
| 51 | Flows | 逐步展示输入、代理角色、分析阶段与输出。 | Lab 形式参考 | `misc/51-library-flows/` |
| 52 | By the Numbers | 展示来源明确的论文数量、主题分布等目录统计。 | 备选 | `misc/52-library-by-numbers/` |
| 53 | Runs | 跟踪复现或阅读系列的进度与后续步骤。 | 备选 | `misc/53-series-tracker/` |
| 54 | Card Catalog | 用结构化卡片检索论文、方法和复现材料。 | 备选 | `misc/54-card-catalog/` |
| 55 | Paper Theatre | 以分支故事呈现研究问题、预测、结果和局限。 | Story 形式参考 | `misc/55-paper-theatre/` |
| 56 | Theatre Studio | 为论文故事提供脚本编辑与预览工具。 | 备选 | `misc/56-theatre-studio/` |
| 57 | Kamishibai Printer | 把交互讲解整理成可打印的研究演示卡。 | 备选 | `misc/57-kamishibai-printer/` |
| 58 | Haruiro | 将研究摘要排成可导出的海报或讲解卡。 | 备选 | `misc/58-haruiro/` |
| 101 | True Shuffle | 随机选择论文阅读或练习任务，并避免重复。 | 备选 | `misc/101-true-shuffle/` |

## 11 个参考导航标签

| 参考标签 | 科研版本规划 | 本轮状态 |
|---|---|---|
| About | 研究者简介、方向和联系入口。 | 未来备选 |
| Education | 教育与研究训练背景；待用户确认所需细节。 | 未来备选 |
| Publications | 六项已识别工作与各自的三个候选。 | 纳入本轮候选组织；完整标签页不作完成承诺 |
| Writing & press | 研究解读、公开报道与技术写作。 | 未来备选 |
| Blog | 实验笔记、复现记录与方法解释。 | 未来备选 |
| Teaching | 围绕论文方法组织教程与练习。 | 未来备选 |
| Presentations | 论文讲解、演示和报告材料。 | 未来备选 |
| Experience | 公开研究经历与合作信息。 | 未来备选 |
| Bookshelf | 论文阅读目录与资料视图。 | 未来备选 |
| Misc | 研究小游戏与实验候选入口。 | 纳入本轮候选组织；完整标签页不作完成承诺 |
| Saved | 本地收藏的论文、候选与阅读笔记。 | 未来备选 |

## 范围与来源约束

本轮所有写入仅发生在 `Billrong2/Personal-website`。参考站及其他研究仓库只读；生活、游戏内容保持当前范围。将来采用上述其他形式前，应先确定对应研究目的，再更新目标与验收项。

参考站首页含禁止未经许可分发的版权声明。虽然其仓库包含 CC BY-SA 4.0 文本，部分语言／文本数据有明确单独许可，但未找到覆盖全站源码的统一复用授权。因此本项目采用原创界面与教学逻辑，不移植参考站源码；如以后复用独立许可的数据或依赖，需逐项保留相应来源与许可证。本说明保留在仓库文档中，原创实现不需要添加声称模板改编的首页署名。
