#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Automatically generate ``src/SUMMARY.md`` for the mdbook build.

Documentation layout
--------------------
* ``src/前言.md``      -- the foreword (prefix page, unnumbered)
* ``src/docs/``        -- the Chinese course pages, grouped by subject folder
* ``src/docs/*.en.md`` -- English translations, intentionally ignored by the
  generator because this book only ships the Chinese edition.

The generated table of contents follows the ordering of the upstream
*CS 自学指南* (cs-self-learning) project: the front matter opens the book, then
every subject area becomes an mdbook "part".  Inside a folder, files listed in
``FILE_ORDER`` keep their hand-picked order and any newly added file is appended
automatically (sorted) so a page is never silently dropped.

Usage::

    python scripts/gen_summary.py

``.github/workflows/gh-pages.yml`` runs this script right before ``mdbook
build`` so the summary is always regenerated on deploy.
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC = REPO_ROOT / "src"
DOCS = SRC / "docs"
OUTPUT = SRC / "SUMMARY.md"

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

# Unnumbered prefix pages that open the book, in order.
PREFIX = [
    "前言.md",
    "docs/使用指南.md",
    "docs/CS学习规划.md",
]

# Display titles for pages whose first heading is missing or not ideal.
TITLE_OVERRIDES = {
    "docs/必学工具/workflow.md": "日常学习工作流",
}

# Ordered top-level structure.  Each entry is one of:
#   ("part",    "<display title>", "<dir under src/docs>")
#   ("chapter", "<display title or None>", "<path relative to src>")
# ``None`` means "use the file's first level-1 heading".
STRUCTURE = [
    ("part", "必学工具", "必学工具"),
    ("chapter", None, "docs/好书推荐.md"),
    ("part", "数学", "数学"),
    ("part", "编程入门", "编程入门"),
    ("part", "电子基础", "电子基础"),
    ("part", "数据结构与算法", "数据结构与算法"),
    ("part", "软件工程", "软件工程"),
    ("part", "计算机系统基础", "计算机系统基础"),
    ("part", "体系结构", "体系结构"),
    ("part", "操作系统", "操作系统"),
    ("part", "并行与分布式系统", "并行与分布式系统"),
    ("part", "系统安全", "系统安全"),
    ("part", "计算机网络", "计算机网络"),
    ("part", "数据库系统", "数据库系统"),
    ("part", "编译原理", "编译原理"),
    ("part", "编程语言设计与分析", "编程语言设计与分析"),
    ("part", "计算机图形学", "计算机图形学"),
    ("part", "Web开发", "Web开发"),
    ("part", "数据科学", "数据科学"),
    ("part", "人工智能", "人工智能"),
    ("part", "机器学习", "机器学习"),
    ("part", "机器学习系统", "机器学习系统"),
    ("part", "深度学习", "深度学习"),
    ("part", "深度生成模型", "深度生成模型"),
    ("part", "机器学习进阶", "机器学习进阶"),
]

# Hand-picked file order (by file name) for folders/sub-folders.
FILE_ORDER = {
    "必学工具": [
        "翻墙.md", "Vim.md", "Emacs.md", "Git.md", "GitHub.md", "GNU_Make.md",
        "CMake.md", "LaTeX.md", "Docker.md", "Scoop.md", "workflow.md",
        "tools.md", "thesis.md", "信息检索.md",
    ],
    "数学": [
        "MITmaths.md", "MITLA.md", "information.md",
        "CS70.md", "CS126.md", "6.042J.md", "numerical.md", "convex.md",
        "The_Information_Theory_Pattern_Recognition_and_Neural_Networks.md",
    ],
    "编程入门": ["MIT-Missing-Semester.md", "DeCal.md"],
    "编程入门/Python": ["CS61A.md", "CS50P.md", "MIT6.100L.md"],
    "编程入门/C": ["CS50.md", "Duke-Coursera-Intro-C.md"],
    "编程入门/cpp": ["AUT1400.md", "CS106L.md", "CS106B_CS106X.md"],
    "编程入门/Java": ["MIT 6.092.md"],
    "编程入门/Rust": ["CS110L.md", "cs220.md", "cs431.md"],
    "编程入门/Functional": ["CS3110.md", "Haskell-MOOC.md"],
    "电子基础": ["EE16.md", "signal.md", "Signals_and_Systems_AVO.md"],
    "数据结构与算法": ["CS61B.md", "Algo.md", "6.006.md", "6.046.md", "CS170.md"],
    "软件工程": ["6031.md", "CS169.md", "17803.md"],
    "计算机系统基础": ["CSAPP.md", "CS110.md"],
    "体系结构": ["N2T.md", "CS61C.md", "DDCA.md", "CA.md"],
    "操作系统": ["MIT6.S081.md", "CS162.md", "NJUOS.md", "HITOS.md"],
    "并行与分布式系统": ["CS149.md", "MIT6.824.md"],
    "系统安全": [
        "CS161.md", "MIT6.1600.md", "MIT6.858.md", "CSE365.md", "CSE466.md",
        "SEEDLabs.md",
    ],
    "计算机网络": ["CS168.md", "CS144.md", "topdown_ustc.md", "topdown.md"],
    "数据库系统": ["CS186.md", "15445.md", "CS122.md", "CS346.md", "15799.md"],
    "编译原理": [
        "PKU-Compilers.md", "CS143.md", "NJU-Compilers.md", "CS420.md",
        "USTC-Compilers.md", "SJTU-Compilers.md",
    ],
    "编程语言设计与分析": [
        "CS242.md", "NJU-SoftwareAnalysis.md", "PKU-SoftwareAnalysis.md",
        "Cambridge-Semantics.md",
    ],
    "计算机图形学": [
        "GAMES101.md", "GAMES202.md", "GAMES103.md", "CS148.md", "15462.md",
        "USTC ComputerGraphics.md",
    ],
    "Web开发": ["mitweb.md", "CS142.md", "fullstackopen.md", "CS571.md"],
    "数据科学": ["Data100.md"],
    "人工智能": ["Neural Networks：Zero to Hero.md", "CS50.md", "CS188.md"],
    "机器学习": ["ML.md", "CS229.md", "CS189.md"],
    "机器学习系统": [
        "CMU15-442.md", "AICS.md", "CMU10-414.md", "EML.md", "MLC.md",
        "CSE234.md",
    ],
    "深度学习": [
        "CS230.md", "LHY.md", "CMU11-785.md", "MIT6-7960.md", "NYU-DLSP21.md",
        "EECS498-007.md", "CS231.md", "CS224n.md", "CS224w.md", "CS285.md",
    ],
    "深度生成模型": ["roadmap.md", "MIT6.S184.md"],
    "深度生成模型/大语言模型": [
        "CMU11-868.md", "CMU11-667.md", "CMU11-711.md", "CMU15-779.md",
    ],
    "机器学习进阶": ["roadmap.md", "CMU10-708.md", "STAT8201.md", "STA4273.md", "CS229M.md"],
}

# Sub-folders rendered as nested (un-clickable) groups inside a part.
SUBGROUPS = {
    "编程入门": [
        ("Python 语言", "Python"),
        ("C 语言", "C"),
        ("C++ 语言", "cpp"),
        ("Java 语言", "Java"),
        ("Rust 语言", "Rust"),
        ("函数式语言", "Functional"),
    ],
    "深度生成模型": [("大语言模型", "大语言模型")],
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def md_files(directory: Path) -> list[str]:
    """Return the sorted Chinese .md file names directly inside *directory*."""
    if not directory.is_dir():
        return []
    return sorted(
        p.name
        for p in directory.iterdir()
        if p.is_file() and p.suffix == ".md" and not p.name.endswith(".en.md")
    )


def first_heading(path: Path) -> str | None:
    try:
        with path.open(encoding="utf-8") as fh:
            for line in fh:
                if line.startswith("# "):
                    return line[2:].strip()
    except OSError:
        return None
    return None


def title_for(src_rel: str) -> str:
    if src_rel in TITLE_OVERRIDES:
        return TITLE_OVERRIDES[src_rel]
    heading = first_heading(SRC / src_rel)
    if heading:
        return heading
    return Path(src_rel).stem


def link(src_rel: str) -> str:
    """Build a destination mdbook can parse.

    mdbook's SUMMARY parser rejects a literal space (and some wide punctuation
    such as ``：``) inside a destination, so such paths are wrapped in angle
    brackets -- CommonMark's syntax for destinations containing spaces -- which
    mdbook resolves back to the real file name.
    """
    if any(ch.isspace() for ch in src_rel) or any(ch in src_rel for ch in "：()<>"):
        return f"<{src_rel}>"
    return src_rel


def order_files(dir_key: str, names: list[str]) -> list[str]:
    ordered = [n for n in FILE_ORDER.get(dir_key, []) if n in names]
    ordered += [n for n in names if n not in ordered]
    return ordered


def emit_dir(dir_key: str) -> list[str]:
    """Emit the chapters (and nested groups) for a folder under src/docs."""
    out: list[str] = []
    root = DOCS / dir_key

    for name in order_files(dir_key, md_files(root)):
        rel = f"docs/{dir_key}/{name}"
        out.append(f"- [{title_for(rel)}]({link(rel)})")

    declared = {sub for _, sub in SUBGROUPS.get(dir_key, [])}
    extra = [
        p.name
        for p in sorted(root.iterdir())
        if p.is_dir() and p.name not in declared and md_files(p)
    ] if root.is_dir() else []
    groups = SUBGROUPS.get(dir_key, []) + [(d, d) for d in extra]

    for display, sub in groups:
        sub_files = order_files(f"{dir_key}/{sub}", md_files(root / sub))
        if not sub_files:
            continue
        out.append(f"- [{display}]()")
        for name in sub_files:
            rel = f"docs/{dir_key}/{sub}/{name}"
            out.append(f"  - [{title_for(rel)}]({link(rel)})")
    return out


def generate() -> str:
    lines = ["# Summary", ""]

    for rel in PREFIX:
        lines.append(f"[{title_for(rel)}]({link(rel)})")
        lines.append("")

    used_dirs: set[str] = set()
    for node in STRUCTURE:
        if node[0] == "part":
            _, display, dir_key = node
            used_dirs.add(dir_key)
            lines.append(f"# {display}")
            lines.append("")
            lines.extend(emit_dir(dir_key))
            lines.append("")
        else:  # "chapter"
            _, display, rel = node
            lines.append(f"- [{display or title_for(rel)}]({link(rel)})")
            lines.append("")

    # Safety net: never drop a subject folder that is not yet configured.
    for p in sorted(DOCS.iterdir()):
        if p.is_dir() and p.name not in used_dirs and md_files(p):
            lines.append(f"# {p.name}")
            lines.append("")
            lines.extend(emit_dir(p.name))
            lines.append("")

    # Collapse trailing blank lines and always end with a single newline.
    while lines and lines[-1] == "":
        lines.pop()
    return "\n".join(lines) + "\n"


def main() -> int:
    if not DOCS.is_dir():
        print(f"error: docs directory not found: {DOCS}", file=sys.stderr)
        return 1
    OUTPUT.write_text(generate(), encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(REPO_ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
