// promise 对象代表的是异步操作，有三种状态pending/resolved/rejected
// new Promise时，构造函数接受的参数是一个函数，该函数又接受两个函数作为参数：resolve和reject.这两个函数由js引擎提供
// resolve函数的作用为，将promise对象的状态由'未完成'变成'成功'
// 相反，reject函数的作用即为，将promise对象的状态由'未完成'变为'失败'，并将异步操作报出的错误，作为参数传递出去

const pp = new Promise((resolve, reject) => {
  reject('rejected');
})
console.log(pp);