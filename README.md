# AlgorithmUnlock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#################### GIT INSTRUCTIONS ####################

    - I use the command shell terminal to do a lot of this: commands will be put into ``
    - For when I do use the version control sidebar: button names into ""

## To start a new branch:
    - Run `git pull` on the master branch to make sure you have the latest updates
    - Run `git checkout -b branchname` to create a new branch.
        (It's best to name your branch something informative. I also add my name- ex. meagan/updateReadme.)
    - Never edit the master branch directly

## If you find you have accidentally edited the master branch (or Stashing your Changes):
    - In the version control sidebar, click the three buttons at the top
    - Select "Stash (include untracked)" at the bottom of the list
    - Checkout your new branch
    - Back in version control, pop the stash. "Pop Latest Stash" will work, but if you want to pop an older stash, "Pop Stash" will give you a list of all your stashes.

## To check in your edits and merge to master:
    - Review. Use the version control sidebar, go back through every file you touched, and make sure everything is correct.
    - In version control: type a description of what you did in the branch into the top textbox, then hit ctrl-enter OR use the options to commit all. If you know how to use staged commits, great; if not, default to committing all, even unstaged.
    - Click the sync button next to the branch name at the bottom of the screen. It'll either be a cloud symbol or an up and a down arrow with numbers. This uploads your branch to GitHub.
    - In GitHub, create a pull request on your new branch. If your branch was uploaded correctly, it should give you that option right on your Code or Pull Request screen. Assign at least one person as a reviewer. The rest of the settings should be fine on default.
    - When someone has approved the code, making sure there aren't any glaring bugs or bad errors in the code, go ahead and merge the pull request into master. I prefer squash merges for simplicity, but any of the options will do. 
    - Unless you still have changes on it for some reason, delete your old branch. This reduces clutter.

## To get someone else's changes onto your branch
    - Stash all your changes, if you have any. Instructions for that are above.
    - Run `git checkout master`
    - Run `git pull`
    - Run `git checkout branchname`
    - Run `git merge master`
    - Pop the stash and make absolutely sure every single conflict is resolved. Most of the time, there won't be any, but they cause problems later if left unresolved. 

## To update a branch during the pull request process
    - Simply go back to that branch, make your changes, and commit again. The pull request will update automatically.

## TL;DR
    - Stash your changes when moving from one branch to another
    - Run `git pull` from master to get the latest pull requests
    - Run `git merge master` from your branch to get those changes onto your branch
    - Run `git checkout branchname` to switch branches; add the -b flag if it's a new branch
    - Name your branches and describe your commits
    - Never edit master directly; always use pull requests
    - Always get someone else's approval before completing your pull request and merging to master
    - Don't Panic- we can probably fix whatever you did; just shoot me (Meagan) a text and a screenshot
    - Have fun!
