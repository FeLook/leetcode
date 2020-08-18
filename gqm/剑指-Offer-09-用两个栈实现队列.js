/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * 
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：[null,null,3,-1]
 * 
 * 举例：
 * CQueue 表示新建一个CQueue对象，对应的所需参数为[]，即此操作不需要参数。
 * appendTail 表示执行一个appendTail()操作，对应要被操作的元素为3。
 * deleteHead 表示执行一个deleteHead操作，对应的所需参数为[]，即此操作不需要参数。
 * deleteHead 表示执行一个deleteHead操作，对应的所需参数为[]，即此操作不需要参数。
 * 以上的输入其实是一个代码执行的步骤描述与其对应所需参数。
 */

var CQueue = function () {
  this.warehouse1 = [];
  this.warehouse2 = [];
};

CQueue.prototype.appendTail = function (value) {
  this.warehouse1.push(value);
};
CQueue.prototype.deleteHead = function () {
  if (this.warehouse2.length) {
    return this.warehouse2.pop();
  }
  if (!this.warehouse1.length) {
    return -1;
  }
  while (this.warehouse1.length) {
    this.warehouse2.push(this.warehouse1.pop());
  }
  return this.warehouse2.pop();
};
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */