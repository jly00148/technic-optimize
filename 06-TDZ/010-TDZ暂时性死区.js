/*
 * @Author: jly
 * @Date: 2021-12-21 01:12:44
 * @LastEditTime: 2021-12-21 15:22:25
 * @FilePath: \technic-optimize\06-TDZ\010-TDZ暂时性死区.js
 */
var a = 1;
var a = 2;

console.log(a);

function foo(){

    console.log(a); // Cannot access 'a' before initialization。原因是形成暂时性死区。

    let a = 2;
}

foo()
    // 总结：
    /* 
        1.什么是暂时性死区？
            -ES6规定，在代码块内使用let或const定义的变量或常量从一开始就形成了封闭作用域，凡是在定义之前使用这些变量就会报错。
            也就是说，在代码块内使用let或const定义变量或者常量之前，该变量或者常量都是不可用的，在语法上称为暂时性死区TDZ
        1.为什y偶么不能访问到外部a？
            -因为用let定义存在暂时性死区。
        2.为什么要有暂时性死区？
            -暂时性死区主要是为了减少运行时错误，防止变量或者常量在定义之前就使用，从而导致意料之外的错误发生。
     */
