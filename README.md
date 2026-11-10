# 四个世界，一个 Bill

Xiaokai (Bill) Rong 的个人网站：生活、科研、游戏，以及一个尚未命名的入口。

项目目标与后续进度记录在 [Issue #1](https://github.com/Billrong2/Personal-website/issues/1)。当前科研部分加入六项工作的交互候选画廊，每项工作各有三种体验，共 18 个本地样例；选定方向后再逐个完善。

## GitHub Pages

**Pages 尚未确认启用。** 仓库中的 `docs/` 已准备为发布目录，包含完整静态文件，不需要安装依赖或执行构建。

在仓库的 **Settings → Pages → Build and deployment** 中，将 Source 设为 **Deploy from a branch**，Branch 设为 **main**，目录设为 **/docs**，点击 **Save**。发布状态和最终网站地址以 GitHub Pages 设置页为准。

仓库按当前选择保持 Public；没有修改仓库的访问权限。`docs/.nojekyll` 保证文件按原样发布。

## 预览与打包

无需构建即可预览。在本仓库目录运行：

```sh
python -m http.server 8000 --directory docs
```

然后打开 `http://localhost:8000`。所有字体、页面和交互脚本均为本地资源，预览不依赖网络；论文、GitHub 项目等外部链接需要联网。

运行 `python build.py`，生成两个完整压缩包：

- `artifacts/personal-website-static.zip`：完整静态站点。解压后打开 `personal-website/index.html`；也可以在该目录运行 `python -m http.server 8000`，以获得和线上一致的访问方式。保留目录结构，首页、三个世界、科研画廊及 18 个样例即可互相访问。
- `artifacts/personal-website-source.zip`：可编辑的 `docs/`、README、素材说明、打包脚本及忽略规则。

打包前会检查三个世界、科研画廊及全部 18 个样例是否齐全。当前交付使用完整静态文件包，不再生成只包含三个世界的旧版单文件 HTML。`artifacts/` 与 `qa-*` 检查页面不进入站点源码包。

## 四个入口

- **生活**：第 03 个候选的暖色像素小屋，有小人、猫与房间热点。日常、旅行、随手记暂时显示内容整理中。
- **科研**：第 02 个候选的绿色 Matrix / CRT 风格。保留终端、研究简介和论文项目入口，并链接到研究候选画廊。
- **游戏**：第 04 个候选的蓝紫霓虹像素都市。游戏、角色、冒险记录入口暂时显示内容整理中。
- **未命名**：保留第四个位置，尚未启用。

总首页以蓝紫和玫红为主色，保留像素雨城与屋顶小人。各世界提供动态开关并尊重系统减少动态效果的偏好。

## 科研画廊与 18 个样例

入口为 `docs/research/index.html`。每项工作均提供三种候选：

| 工作目录 | A：论文故事 | B：交互实验台 | C：科研挑战 |
| --- | --- | --- | --- |
| `attention` | `story.html` | `lab.html` | `challenge.html` |
| `adaptagent` | `story.html` | `lab.html` | `challenge.html` |
| `lamda` | `story.html` | `lab.html` | `challenge.html` |
| `alignment` | `story.html` | `lab.html` | `challenge.html` |
| `predex` | `story.html` | `lab.html` | `challenge.html` |
| `safemin` | `story.html` | `lab.html` | `challenge.html` |

以上路径均位于 `docs/research/samples/` 下。画廊支持搜索、按年份筛选、并排比较，以及为每项工作选择 A、B 或 C。选择保存在当前浏览器，可以导出 JSON，用于后续逐项修改。论文信息、原始来源和演示范围见 `docs/research/sources.html` 及各样例说明。

## 音乐

首页保留 Faded Light 音乐开关和音量控制，默认关闭、音量 12%。**当前没有附带音频文件，尚不能播放歌曲。**

获得可供网站使用的 MP3/WAV 后，将文件放入 `docs/assets/audio/`，在 `docs/index.html` 的 `#music-toggle` 上填写 `data-audio-src`。`data-loop-start` 与 `data-loop-end` 可指定循环片段（秒，end 为 0 表示曲尾），`data-crossfade` 默认为 8 秒。接入实际音频后应试听调整，确认循环听感自然。

循环引擎在内存中交叉混合头尾，再使用 Web Audio 原生循环。播放器记住音量，但不会自动播放。

## 主要文件

- `docs/index.html`：四世界总首页。
- `docs/worlds/{life,research,play}.html`：三个独立风格的世界。
- `docs/research/index.html`：六项工作、18 个交互候选的画廊。
- `docs/research/catalog.js`：研究条目与候选名称。
- `docs/research/gallery.css`、`gallery.js`：画廊样式与选择交互。
- `docs/research/samples/`：18 个可独立访问的样例页面。
- `docs/research/sources.html`：论文来源及演示说明。
- `docs/music.js`：音频加载、音量与循环引擎。
- `docs/assets/fonts/`：本地字体与许可证。
- `build.py`：完整静态站点与源码打包。

此前四个设计候选独立保留；本仓库为选定的首页、三个世界，以及正在选择方向的科研体验。
