// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="前言.html">前言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/使用指南.html">如何使用这本书</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/CS学习规划.html">一个仅供参考的 CS 学习规划</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">1.</strong> 必学工具</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/翻墙.html"><strong aria-hidden="true">1.1.</strong> 翻墙</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/Vim.html"><strong aria-hidden="true">1.2.</strong> Vim</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/Emacs.html"><strong aria-hidden="true">1.3.</strong> Emacs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/Git.html"><strong aria-hidden="true">1.4.</strong> Git</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/GitHub.html"><strong aria-hidden="true">1.5.</strong> GitHub</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/GNU_Make.html"><strong aria-hidden="true">1.6.</strong> GNU Make</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/CMake.html"><strong aria-hidden="true">1.7.</strong> CMake</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/LaTeX.html"><strong aria-hidden="true">1.8.</strong> LaTeX</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/Docker.html"><strong aria-hidden="true">1.9.</strong> Docker</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/Scoop.html"><strong aria-hidden="true">1.10.</strong> Scoop</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/workflow.html"><strong aria-hidden="true">1.11.</strong> 日常学习工作流</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/tools.html"><strong aria-hidden="true">1.12.</strong> 实用工具箱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/thesis.html"><strong aria-hidden="true">1.13.</strong> 毕业论文</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/必学工具/信息检索.html"><strong aria-hidden="true">1.14.</strong> 信息检索</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/好书推荐.html"><strong aria-hidden="true">1.15.</strong> 好书推荐</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.</strong> 数学</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/MITmaths.html"><strong aria-hidden="true">2.1.</strong> MIT Calculus Course</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/MITLA.html"><strong aria-hidden="true">2.2.</strong> MIT18.06: Linear Algebra</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/information.html"><strong aria-hidden="true">2.3.</strong> MIT6.050J: Information theory and Entropy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/CS70.html"><strong aria-hidden="true">2.4.</strong> UCB CS70 : discrete Math and probability theory</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/CS126.html"><strong aria-hidden="true">2.5.</strong> UCB CS126 : Probability theory</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/6.042J.html"><strong aria-hidden="true">2.6.</strong> MIT 6.042J: Mathematics for Computer Science</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/numerical.html"><strong aria-hidden="true">2.7.</strong> MIT18.330 : Introduction to numerical analysis</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/convex.html"><strong aria-hidden="true">2.8.</strong> Stanford EE364A: Convex Optimization</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数学/The_Information_Theory_Pattern_Recognition_and_Neural_Networks.html"><strong aria-hidden="true">2.9.</strong> The Information Theory, Pattern Recognition, and Neural Networks</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.</strong> 编程入门</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/MIT-Missing-Semester.html"><strong aria-hidden="true">3.1.</strong> MIT-Missing-Semester</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/DeCal.html"><strong aria-hidden="true">3.2.</strong> UCB: Sysadmin DeCal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.3.</strong> Python 语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Python/CS61A.html"><strong aria-hidden="true">3.3.1.</strong> CS61A: Structure and Interpretation of Computer Programs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Python/CS50P.html"><strong aria-hidden="true">3.3.2.</strong> CS50P Introduction to Programming with Python</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Python/MIT6.100L.html"><strong aria-hidden="true">3.3.3.</strong> MIT6.100L: Introduction to CS and Programming using Python</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.4.</strong> C 语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/C/CS50.html"><strong aria-hidden="true">3.4.1.</strong> CS50: This is CS50x</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/C/Duke-Coursera-Intro-C.html"><strong aria-hidden="true">3.4.2.</strong> Introductory C Programming Specialization</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.5.</strong> C++ 语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/cpp/AUT1400.html"><strong aria-hidden="true">3.5.1.</strong> Amirkabir University of Technology 1400-2: Advanced Programming Course</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/cpp/CS106L.html"><strong aria-hidden="true">3.5.2.</strong> CS106L: Standard C++ Programming</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/cpp/CS106B_CS106X.html"><strong aria-hidden="true">3.5.3.</strong> Stanford CS106B/X: Programming Abstractions in C++</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.6.</strong> Java 语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Java/MIT 6.092.html"><strong aria-hidden="true">3.6.1.</strong> MIT 6.092: Introduction To Programming In Java</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.7.</strong> Rust 语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Rust/CS110L.html"><strong aria-hidden="true">3.7.1.</strong> CS110L: Safety in Systems Programming</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Rust/cs220.html"><strong aria-hidden="true">3.7.2.</strong> CS220: Programming Principles</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Rust/cs431.html"><strong aria-hidden="true">3.7.3.</strong> CS431: Concurrent Programming</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">3.8.</strong> 函数式语言</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Functional/CS3110.html"><strong aria-hidden="true">3.8.1.</strong> CS3110：OCaml Programming Correct + Efficient + Beautiful</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程入门/Functional/Haskell-MOOC.html"><strong aria-hidden="true">3.8.2.</strong> Haskell MOOC</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.</strong> 电子基础</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/电子基础/EE16.html"><strong aria-hidden="true">4.1.</strong> UCB EE16A&amp;B: Designing Information Devices and Systems I&amp;II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/电子基础/signal.html"><strong aria-hidden="true">4.2.</strong> UCB EE120: Signal and Systems</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/电子基础/Signals_and_Systems_AVO.html"><strong aria-hidden="true">4.3.</strong> MIT 6.007 Signals and Systems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">5.</strong> 数据结构与算法</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据结构与算法/CS61B.html"><strong aria-hidden="true">5.1.</strong> CS61B: Data Structures and Algorithms</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据结构与算法/Algo.html"><strong aria-hidden="true">5.2.</strong> Coursera: Algorithms I &amp; II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据结构与算法/6.006.html"><strong aria-hidden="true">5.3.</strong> MIT 6.006: Introduction to Algorithms</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据结构与算法/6.046.html"><strong aria-hidden="true">5.4.</strong> MIT 6.046: Design and Analysis of Algorithms</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据结构与算法/CS170.html"><strong aria-hidden="true">5.5.</strong> CS170: Efficient Algorithms and Intractable Problems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">6.</strong> 软件工程</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/软件工程/6031.html"><strong aria-hidden="true">6.1.</strong> MIT 6.031: Software Construction</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/软件工程/CS169.html"><strong aria-hidden="true">6.2.</strong> UCB CS169: software engineering</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/软件工程/17803.html"><strong aria-hidden="true">6.3.</strong> CMU 17-803: Empirical Methods</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">7.</strong> 计算机系统基础</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机系统基础/CSAPP.html"><strong aria-hidden="true">7.1.</strong> CMU CS15213: CSAPP</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机系统基础/CS110.html"><strong aria-hidden="true">7.2.</strong> CS110: Principles of Computer Systems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">8.</strong> 计算机体系结构</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/体系结构/N2T.html"><strong aria-hidden="true">8.1.</strong> Coursera: Nand2Tetris</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/体系结构/CS61C.html"><strong aria-hidden="true">8.2.</strong> CS61C: Great Ideas in Computer Architecture</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/体系结构/DDCA.html"><strong aria-hidden="true">8.3.</strong> ETH Zurich：Digital Design and Computer Architecture</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/体系结构/CA.html"><strong aria-hidden="true">8.4.</strong> ETH: Computer Architecture</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">9.</strong> 操作系统</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/操作系统/MIT6.S081.html"><strong aria-hidden="true">9.1.</strong> MIT 6.1810 (原 6.S081): Operating System Engineering</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/操作系统/CS162.html"><strong aria-hidden="true">9.2.</strong> CS162: Operating System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/操作系统/NJUOS.html"><strong aria-hidden="true">9.3.</strong> NJU OS: Operating System Design and Implementation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/操作系统/HITOS.html"><strong aria-hidden="true">9.4.</strong> HIT OS: Operating System</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">10.</strong> 并行与分布式系统</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/并行与分布式系统/CS149.html"><strong aria-hidden="true">10.1.</strong> CMU 15-418/Stanford CS149: Parallel Computing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/并行与分布式系统/MIT6.824.html"><strong aria-hidden="true">10.2.</strong> MIT 6.5840 (原 6.824): Distributed System</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">11.</strong> 系统安全</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/CS161.html"><strong aria-hidden="true">11.1.</strong> UCB CS161: Computer Security</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/MIT6.1600.html"><strong aria-hidden="true">11.2.</strong> MIT6.1600: Foundations of Computer Security</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/MIT6.858.html"><strong aria-hidden="true">11.3.</strong> MIT 6.858: Computer System Security</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/CSE365.html"><strong aria-hidden="true">11.4.</strong> ASU CSE365: Introduction to Cybersecurity</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/CSE466.html"><strong aria-hidden="true">11.5.</strong> ASU CSE466: Computer Systems Security</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/系统安全/SEEDLabs.html"><strong aria-hidden="true">11.6.</strong> SEEDLabs</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">12.</strong> 计算机网络</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机网络/CS168.html"><strong aria-hidden="true">12.1.</strong> CS 168：Introduction to the Internet: Architecture and Protocols</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机网络/CS144.html"><strong aria-hidden="true">12.2.</strong> CS144: Computer Network</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机网络/topdown_ustc.html"><strong aria-hidden="true">12.3.</strong> USTC Computer Networking:A Top-Down Approach</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机网络/topdown.html"><strong aria-hidden="true">12.4.</strong> Computer Networking: A Top-Down Approach</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">13.</strong> 数据库系统</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据库系统/CS186.html"><strong aria-hidden="true">13.1.</strong> UCB CS186: Introduction to Database System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据库系统/15445.html"><strong aria-hidden="true">13.2.</strong> CMU 15-445: Database Systems</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据库系统/CS122.html"><strong aria-hidden="true">13.3.</strong> Caltech CS 122: Database System Implementation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据库系统/CS346.html"><strong aria-hidden="true">13.4.</strong> Stanford CS 346: Database System Implementation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据库系统/15799.html"><strong aria-hidden="true">13.5.</strong> CMU 15-799: Special Topics in Database Systems</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">14.</strong> 编译原理</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/PKU-Compilers.html"><strong aria-hidden="true">14.1.</strong> PKU 编译原理实践</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/CS143.html"><strong aria-hidden="true">14.2.</strong> Stanford CS143: Compilers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/NJU-Compilers.html"><strong aria-hidden="true">14.3.</strong> NJU 编译原理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/CS420.html"><strong aria-hidden="true">14.4.</strong> CS420: Compiler Design</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/USTC-Compilers.html"><strong aria-hidden="true">14.5.</strong> USTC: Principles and Techniques of Compiler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编译原理/SJTU-Compilers.html"><strong aria-hidden="true">14.6.</strong> SJTU 编译原理</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">15.</strong> 编程语言设计与分析</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程语言设计与分析/CS242.html"><strong aria-hidden="true">15.1.</strong> CS242 Programming Languages</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程语言设计与分析/NJU-SoftwareAnalysis.html"><strong aria-hidden="true">15.2.</strong> NJU 软件分析</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程语言设计与分析/PKU-SoftwareAnalysis.html"><strong aria-hidden="true">15.3.</strong> 北京大学 软件分析技术</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/编程语言设计与分析/Cambridge-Semantics.html"><strong aria-hidden="true">15.4.</strong> Cambridge: Semantics of Programming Languages</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">16.</strong> 计算机图形学</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/GAMES101.html"><strong aria-hidden="true">16.1.</strong> GAMES101</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/GAMES202.html"><strong aria-hidden="true">16.2.</strong> GAMES202</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/GAMES103.html"><strong aria-hidden="true">16.3.</strong> GAMES103</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/CS148.html"><strong aria-hidden="true">16.4.</strong> Stanford CS148</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/15462.html"><strong aria-hidden="true">16.5.</strong> CMU 15-462 : COMPUTER GRAPHICS</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/计算机图形学/USTC ComputerGraphics.html"><strong aria-hidden="true">16.6.</strong> USTC Computer Graphics</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">17.</strong> Web开发</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/Web开发/mitweb.html"><strong aria-hidden="true">17.1.</strong> MIT Web Development Crash Course</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/Web开发/CS142.html"><strong aria-hidden="true">17.2.</strong> Stanford CS142: Web Applications</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/Web开发/fullstackopen.html"><strong aria-hidden="true">17.3.</strong> University of Helsinki: Full Stack open 2022</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/Web开发/CS571.html"><strong aria-hidden="true">17.4.</strong> CS571 Building UI (React &amp; React Native)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">18.</strong> 数据科学</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/数据科学/Data100.html"><strong aria-hidden="true">18.1.</strong> UCB Data100: Principles and Techniques of Data Science</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">19.</strong> 人工智能</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/人工智能/Neural Networks：Zero to Hero.html"><strong aria-hidden="true">19.1.</strong> 神经网络：从零到英雄</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/人工智能/CS50.html"><strong aria-hidden="true">19.2.</strong> CS50’s Introduction to AI with Python</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/人工智能/CS188.html"><strong aria-hidden="true">19.3.</strong> CS188: Introduction to Artificial Intelligence</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">20.</strong> 机器学习</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习/ML.html"><strong aria-hidden="true">20.1.</strong> Coursera: Machine Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习/CS229.html"><strong aria-hidden="true">20.2.</strong> CS229: Machine Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习/CS189.html"><strong aria-hidden="true">20.3.</strong> CS189: Introduction to Machine Learning</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">21.</strong> 机器学习系统</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/CMU15-442.html"><strong aria-hidden="true">21.1.</strong> CMU 15-442/642: Machine Learning Systems</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/AICS.html"><strong aria-hidden="true">21.2.</strong> 智能计算系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/CMU10-414.html"><strong aria-hidden="true">21.3.</strong> CMU 10-414/714: Deep Learning Systems</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/EML.html"><strong aria-hidden="true">21.4.</strong> MIT6.5940: TinyML and Efficient Deep Learning Computing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/MLC.html"><strong aria-hidden="true">21.5.</strong> Machine Learning Compilation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习系统/CSE234.html"><strong aria-hidden="true">21.6.</strong> CSE234: Data Systems for Machine Learning</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">22.</strong> 深度学习</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CS230.html"><strong aria-hidden="true">22.1.</strong> Coursera: Deep Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/LHY.html"><strong aria-hidden="true">22.2.</strong> 国立台湾大学：李宏毅机器学习</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CMU11-785.html"><strong aria-hidden="true">22.3.</strong> CMU 11-785: Introduction to Deep Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/MIT6-7960.html"><strong aria-hidden="true">22.4.</strong> MIT 6.7960: Deep Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/NYU-DLSP21.html"><strong aria-hidden="true">22.5.</strong> NYU DLSP21: NYU Deep Learning Spring 2021</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/EECS498-007.html"><strong aria-hidden="true">22.6.</strong> UMich EECS 498-007 / 598-005: Deep Learning for Computer Vision</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CS231.html"><strong aria-hidden="true">22.7.</strong> CS231n: CNN for Visual Recognition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CS224n.html"><strong aria-hidden="true">22.8.</strong> CS224n: Natural Language Processing</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CS224w.html"><strong aria-hidden="true">22.9.</strong> CS224w: Machine Learning with Graphs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度学习/CS285.html"><strong aria-hidden="true">22.10.</strong> CS285: Deep Reinforcement Learning</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">23.</strong> 深度生成模型</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/roadmap.html"><strong aria-hidden="true">23.1.</strong> 深度生成模型学习路线</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/MIT6.S184.html"><strong aria-hidden="true">23.2.</strong> MIT6.S184: Generative AI with Stochastic Differential Equations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">23.3.</strong> 大语言模型</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/大语言模型/CMU11-868.html"><strong aria-hidden="true">23.3.1.</strong> CMU 11-868: Large Language Model Systems</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/大语言模型/CMU11-667.html"><strong aria-hidden="true">23.3.2.</strong> CMU11-667: Large Language Models: Methods and Applications</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/大语言模型/CMU11-711.html"><strong aria-hidden="true">23.3.3.</strong> CMU 11-711: Advanced Natural Language Processing (ANLP)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/深度生成模型/大语言模型/CMU15-779.html"><strong aria-hidden="true">23.3.4.</strong> CMU 15-779: Advanced Topics in Machine Learning Systems (LLM Edition)</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">24.</strong> 机器学习进阶</span><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习进阶/roadmap.html"><strong aria-hidden="true">24.1.</strong> 机器学习进阶学习路线</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习进阶/CMU10-708.html"><strong aria-hidden="true">24.2.</strong> CMU 10-708: Probabilistic Graphical Models</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习进阶/STAT8201.html"><strong aria-hidden="true">24.3.</strong> Columbia STAT 8201: Deep Generative Models</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习进阶/STA4273.html"><strong aria-hidden="true">24.4.</strong> STA 4273 Winter 2021: Minimizing Expectations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/机器学习进阶/CS229M.html"><strong aria-hidden="true">24.5.</strong> STATS214 / CS229M: Machine Learning Theory</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

