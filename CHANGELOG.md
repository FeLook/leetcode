### git 提交规范

1. commit信息要具备语义性，避免提交类似(bugfix、代码优化)等模棱两可的代码
2. commit保持独立性，不同的需求，不同的改动，应该提交对应的commit，避免改动N个地方，合并一个commit
3. commit时要确定每个文件的改动是否符合预期，避免提交临时代码
4. 拉取代码使用rebase（变基），命令行：```git pull --rebase```
5. 代码冲突一定要找冲突当事人确认，避免丢失部分代码
6. 代码及时推送到服务端

### commit message 规则
>如果tower里面有对应的bug或者需求，则提交信息最后必须添加 towerId: ${towerId}

提交信息一定是一下7个词中的一个，然后冒号+空格+提交内容。例如:
* fix: 页面不显示的bug
* test: 添加change-size的单元测试
具体细节如下：

[参考](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
#### 默认type
1. feat：新功能（feature）
2. fix：修补bug
3. docs：文档（documentation）
4. style： 格式（不影响代码运行的变动）
5. refactor：重构（即不是新增功能，也不是修改bug的代码变动）
6. test：增加测试
7. chore：构建过程或辅助工具的变动
8. revert：回滚代码

#### 自定义type
1. font: 添加、删除、变更字体文件
2. package: 添加、删除、变更npm包
3. editor: 更新编辑器代码
4. delete: 删除废弃代码，无用注释（不影响代码运行）****