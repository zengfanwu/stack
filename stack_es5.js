'use strict';

/*
 *author  zfw
 *2016-08-18
 *栈的实现类
 */

function Stack() {
  this.dataStore = [];
  this.top = 0;
};

//压入栈方法
Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;   //数组下标访问，push元素方法
};

//出栈方法
// 栈顶元素删除，top-1，将栈顶元素返回给调用者
Stack.prototype.pop = function () {
  if (this.top == 0) {
    return undefined;
  }
  var lastItem = this.dataStore.pop();
  this.top--;
  return lastItem;
  // return this.dataStore[--this.top];
};

//查看栈顶元素方法
Stack.prototype.peek = function () {
  return this.dataStore[this.top-1];
};

//返回栈内元素个数方法
Stack.prototype.length = function () {
  return this.top;
};

//清空栈
Stack.prototype.clear = function () {
  this.top = 0;
  this.dataStore.length = 0;
};

Stack.prototype.toString = function () {
  if (this.top == 0) {
    return "此栈为空！"
  }
  return this.dataStore.join("  ");
};
