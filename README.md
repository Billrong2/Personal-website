# 四个世界，一个 Bill

Xiaokai (Bill) Rong 的个人网站首页。本轮只做首页与入口，后续逐个完善内容。

## GitHub Pages

发布来源选择 `main` 分支的 `/docs` 目录。该目录包含可直接部署的静态文件，不需要安装依赖或运行构建。

在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中，将 Source 设为 **Deploy from a branch**，Branch 设为 **main**，目录设为 **/docs**，点击 **Save**。最终网站地址以 GitHub Pages 设置页显示的地址为准。

仓库可保持 Private；私有仓库启用 Pages 需要支持该功能的 GitHub 方案。Pages 网站本身通常公开。当前是否已启用，以 GitHub 设置页状态为准。

## 打开预览

运行 `python build.py` 后，直接双击 `artifacts/xiaokai-homepage.html`，即可离线查看首页及三个世界。字体、场景、交互已包含在单文件内；点击入口切换世界，页面上的返回首页链接可回到总首页。

修改源文件后，可用 Python 3 在此目录执行 `python -m http.server 8000 --directory docs`，在浏览器打开 `http://localhost:8000` 查看。`python build.py` 会在本仓库的 `artifacts` 目录重新生成单文件 HTML 与源码 ZIP。

## 四个入口

- 生活：第 03 个候选的暖色像素小屋，有小人、猫与房间热点。日常、旅行、随手记暂时显示内容整理中。
- 科研：第 02 个候选的绿色 Matrix / CRT 风格，保留可输入命令的终端、研究简介、三个项目仓库与两篇论文。
- 游戏：第 04 个候选的蓝紫霓虹像素都市。游戏、角色、冒险记录入口暂时显示内容整理中。
- 未命名：保留第四个位置，尚未启用。

## 视觉与操作

总首页沿用第 04 个候选方向：像素城市、屋顶小人、Matrix 风格代码屏与持续雨幕。主色为深蓝紫和玫红，生活入口加入少量暖橙。各个世界使用上面对应的独立视觉，科研世界有意保留绿色。场景随窗口尺寸绘制，适配宽屏与手机；提供场景暂停，并尊重系统减少动态效果的偏好。

## 音乐

保留 Faded Light 音乐开关和音量控制，默认关闭、音量 12%。当前尚未附带歌曲音频，因此点击不会假装播放。

拿到可以使用的 MP3/WAV 后，将文件放入 `docs/assets/audio/`，在 `docs/index.html` 的 `#music-toggle` 上填写 `data-audio-src`。`data-loop-start` 与 `data-loop-end` 可指定循环片段（秒，end 为 0 表示曲尾），`data-crossfade` 默认为 8 秒。实际音频接入后应试听并调整片段，才能确认听感是否自然。

循环引擎先在内存中交叉混合头尾，再使用 Web Audio 原生循环，没有依赖定时器重新播放的间隙。播放器会记住音量，但不会自动播放。

## 文件

- `docs/index.html`：页面样式、结构、像素场景与交互。
- `docs/worlds/life.html`：生活世界，像素房间。
- `docs/worlds/research.html`：科研世界，Matrix 终端。
- `docs/worlds/play.html`：游戏世界，融合雨城。
- `docs/music.js`：音频加载、音量与循环引擎。
- `docs/assets/fonts/`：本地字体与许可证。
- `build.py`：自包含预览和源码打包。

此前四个设计候选独立保留，仓库内为已选定的正式首页与三个世界页面。
