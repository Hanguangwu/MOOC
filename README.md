# CS 自学指南

> 一份面向所有自学计算机者的开源指南 —— 用开源社区已经开源的优质课程，少走弯路，在 2–3 年内成长为一个基础扎实的全能程序员。

新冠肆虐，网课当道，CS 爆火，这一系列的事件都让自学计算机成为了一种潮流。

随着欧美众多名校将质量极高的计算机课程全部开源，自学 CS 成了一件可操作性极强的事情。毫不夸张地说，只要你有毅力和兴趣，自学的成果完全不亚于你在国内任何一所大学受到的本科 CS 教育（当然，这里单指计算机专业领域，大学带给你的显然不止是专业知识）。

我很庆幸在自己大一的时候就选择了自学 CS 这条路，它让我爱上了计算机这门学科，也无比丰富了我的视野。

但自学这条路也有很多困难和阻力：课程繁多不知如何选择，资料零散甚至残缺，作业难度不知深浅，课内任务还需要花时间应付…… 这些主客观因素叠加到一起，使得好课虽多，却只能在收藏夹里吃灰。

于是在大学的第四个年头，我把这一路自学走来的经验和教训、把那些让我受益终身的课程记录下来，整理成了这本 **CS 自学指南**，希望能给所有想自学计算机的朋友一点帮助。

**目标**：让一个刚刚接触计算机的小白，可以完全凭借开源社区的优质资源，少走弯路，在 2–3 年内成长为一个有扎实的数学功底和代码能力，经历过数十个千行代码量 Project 的洗礼，掌握至少 C/C++/Java/JS/Python/Go/Rust 等主流语言，并对算法、电路、体系、网络、操统、编译、人工智能、机器学习、计算机视觉、自然语言处理、强化学习、密码学、信息论、博弈论、数值分析、统计学、分布式、数据库、图形学、Web 开发、云服务、超算等等方面均有所涉猎的全能程序员。此后，无论是选择科研还是就业，相信你都会有相当的竞争力。

## 📖 在线阅读

本书使用 [mdBook](https://rust-lang.github.io/mdBook/) 构建，并自动部署到 GitHub Pages：

**<https://hanguangwu.github.io/MOOC/>**

## 🗂️ 内容一览

全书按自学路线组织为若干板块，完整目录见 [`src/SUMMARY.md`](./src/SUMMARY.md)：

- **入门指南**：如何使用这本书、一个仅供参考的 CS 学习规划
- **必学工具**：翻墙、Vim、Emacs、Git、GitHub、GNU Make、CMake、LaTeX、Docker、Scoop、信息检索……
- **数学**：微积分与线代、信息论、离散数学与概率论、数值分析、凸优化
- **编程入门**：Python / C / C++ / Java / Rust / 函数式语言
- **电子基础** · **数据结构与算法** · **软件工程** · **计算机系统基础** · **体系结构**
- **操作系统** · **并行与分布式系统** · **系统安全** · **计算机网络** · **数据库系统**
- **编译原理** · **编程语言设计与分析** · **计算机图形学** · **Web 开发** · **数据科学**
- **人工智能** · **机器学习** · **机器学习系统** · **深度学习** · **深度生成模型** · **机器学习进阶**

## 🛠️ 本地构建

依赖：

- [Rust 工具链](https://www.rust-lang.org/tools/install)
- [mdBook](https://rust-lang.github.io/mdBook/)
- [mdbook-toc](https://github.com/badboy/mdbook-toc)
- [mdbook-katex](https://github.com/lzanini/mdbook-katex)（用于渲染数学公式）
- Python 3（用于生成目录）

安装工具：

```bash
cargo install mdbook
cargo install mdbook-toc
cargo install mdbook-katex
```

生成目录并本地预览：

```bash
python scripts/gen_summary.py   # 重新生成 src/SUMMARY.md
mdbook build                    # 构建静态站点到 ./book
mdbook serve                    # 本地预览 http://localhost:3000
```

## 🤖 自动生成目录

`src/SUMMARY.md` 由 [`scripts/gen_summary.py`](./scripts/gen_summary.py) **自动生成**，无需手工维护：

- 它按照脚本中 `STRUCTURE` 定义的顺序扫描 `src/docs/`，为每个板块生成一个 mdBook“Part”，板块内课程按 `FILE_ORDER` 的既定顺序排列；
- 每篇文档的目录标题取自其一级标题（`# ...`）；
- 自动忽略英文翻译文档（`*.en.md`）与 `SUMMARY.md` 本身；
- 新增课程文档后无需改动脚本，未在配置中列出的文件会按字母序自动追加，确保不会遗漏页面。

修改章节顺序或在本地新增文档后，重新运行脚本即可：

```bash
python scripts/gen_summary.py
```

## 🚀 部署

[`.github/workflows/gh-pages.yml`](./.github/workflows/gh-pages.yml) 在推送到 `main` 分支时自动执行：

1. 安装 mdBook 及其插件（toc、katex）；
2. 运行 `python3 scripts/gen_summary.py` 生成最新的目录；
3. `mdbook build`，并通过 `peaceiris/actions-gh-pages` 将 `./book` 发布到 GitHub Pages。

## 🙏 致谢与声明

本指南的内容整理自开源社区（参考并受益于 [PKUFlyingPig/cs-self-learning](https://github.com/PKUFlyingPig/cs-self-learning) 等优秀项目），版权归各课程与原作者所有，本项目仅供学习交流使用。
