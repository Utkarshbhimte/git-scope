# Contributing to git-scope

First off, thank you for considering contributing to git-scope. It's people like you that make git-scope such a great tool.

## 1. Where do I go from here?

If you've noticed a bug or have a feature request, make one! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

## 2. Fork & create a branch

If this is something you think you can fix, then fork git-scope and create a branch with a descriptive name.

A good branch name would be (where issue #210 is the ticket you're working on):

```bash
git checkout -b 210-add-japanese-translations
```

## 3. Get the test suite running

Make sure you're using a recent version of Node.js. Install the development dependencies by running:

```bash
npm install
```

## 4. Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## 5. Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with git-scope's master branch:

```bash
git remote add upstream git@github.com:utkarshbhimte/git-scope.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master and push it!

```bash
git checkout 210-add-japanese-translations
git rebase master
git push --set-upstream origin 210-add-japanese-translations
```

Go to the git-scope repository and you should see recently pushed branches.

Choose your branch and make a pull request to the master branch. Make sure to provide a detailed description in the PR, and if there's an issue related to your PR, be sure to mention it.
