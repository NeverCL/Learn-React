# Promise

1. Promise 是一个对象，构造函数的参数为一个函数，函数签名为：`(resolve,reject)=>{}`
1. Promise 对象的 then 方法如果没有返回值则返回自身的Promise, 当内部函数调用 resolve 时，则隐式调用then方法
1. Promise 对象的 catch 方法如果没有返回值则返回自身的Promise, 当内部函数调用 reject 时，则隐式调用then方法
1. Promise 对象的内部函数 在new Promise的时候就会执行

## 示例

new Promise() 会立即调用内部函数：

`new Promise((resolve, reject) => console.log(10) || resolve(100))//.then(i => console.log(i));`

catch 能捕获异常 可移除 throw 报错：

`new Promise((resolve, reject) => { throw '123' }).then(i => console.log(i))//.catch(e => console.log(e));`