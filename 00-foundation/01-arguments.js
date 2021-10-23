/*
 * @Author: jly
 * @Date: 2021-10-23 15:20:23
 * @LastEditTime: 2021-10-23 15:53:15
 * @FilePath: \technic-optimize\00-foundation\01-arguments.js
 */

/*
 *  1.调用函数时默认传递了两个参数:
 *   1) this
 *      -this指向，window还是global(node非严格模式)或者是改变this的对象
 *   2) arguments
 *      -arguments是一个类数组对象，可以通过索引来操作数据，也可以获取长度
 *      -在调用函数时，所传递的实参都会在arguments中保存
 *      arguments.length获取实参的长度
 *  
 * 2.判断是否是数组的方式：
     1）arr instanceof Array;
     2) Array.isArray(arr)
    
 *  3.callee:arguments.callee方法返回一个函数本身
 */

function Foo() {
    // console.log(arguments.length);2
    console.log(arguments.callee === Foo);
}

Foo('name',18)