# Git分支基本操作
## 分支创建
```
git branch newBranch1
git checkout newBranch1
git push -u origin newBranch1

```

## 分支合并
主分支默认为master,其他分支用户自己定，在这里使用dev表示
1. 首先切换到master分支上
```
git checkout master
```
2. 确保master代码是最新的代码
```
git pull origin master
```
3. 然后我们把dev分支的代码合并到master上
```
git merge dev
```
4. 然后查看状态及执行提交命令
```
git status

On branch master
Your branch is ahead of ‘origin/master’ by 12 commits.
(use “git push” to publish your local commits)
nothing to commit, working tree clean
```
//上面的意思就是你有12个commit，需要push到远程master上
5. 执行将刚才合并的代码，提交到master
```
git push origin master
```
## 分支删除
### 删除本地分支   

删除本地分支， 如分支名dev
```
git branch -D dev
```
###  删除远程分支
```
git push origin -d dev
```
### 清理本地不存在的远程分支

```
git remote prune origin
```

说明： 先要切换到需要删除的分支，然后切换到其他分支，然后再删除本地分支，然后再删除远程分支

## git checkout

文件修改后，放弃修改，直接使用暂存的文件给覆盖。也可以用于目录
```
git checkout -- filename
```