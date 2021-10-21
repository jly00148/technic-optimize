/*
 * @Author: jly
 * @Date: 2021-10-20 04:40:31
 * @LastEditTime: 2021-10-20 05:02:32
 * @FilePath: \technic-optimize\04-this-direct\03-bind\01-bind.js
 */

/**
 * 注意点：
 * 1.bind不会立即执行，需要调用的时候才会执行
 * 2.bind返回一个新的函数
 */

var obj = {name:"jly"}

function foo(){
    console.log(this.name)
}
    var a= 1;
var _foo = foo.bind(obj)

console.log(_foo === foo);//false