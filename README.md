# git-scope

![npm](https://img.shields.io/npm/v/git-scope) ![license](https://img.shields.io/npm/l/git-scope)

> Quickly review all your repos' git status in one glance

git-scope is a command line tool that provides an overview of the git status, current branch, last commit message, and node_modules size for all repositories in a directory.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install git-scope globally to use it from any location on your computer.

```bash
npm install -g git-scope
```

## Usage

Navigate to the directory containing your repositories and run:

```bash
git-scope
```

git-scope will generate a table output in your terminal like this:

```mdx
┌─────────────┬─────────────────────┬─────────────┬───────────────────┬────────────────────┐
│ Folder Name │ Status              │ Current     │ Last Commit       │ Node Modules Size  │
│             │                     │ Branch      │                   │                    │
├─────────────┼─────────────────────┼─────────────┼───────────────────┼────────────────────┤
│ Repo1       │ All changes staged  │ main        │ Initial commit    │ 50 MB              │
├─────────────┼─────────────────────┼─────────────┼───────────────────┼────────────────────┤
│ Repo2       │ Unstaged changes    │ feature_xyz │ Updated Readme.md │ 120 MB             │
└─────────────┴─────────────────────┴─────────────┴───────────────────┴────────────────────┘
```

## Contributing

We welcome contributions! Please see [here](CONTRIBUTING.md) for details on how to contribute.

## License

[ISC](LICENSE) © Utkarsh Bhimte
