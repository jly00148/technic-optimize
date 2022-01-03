/*
 * @Author: jly
 * @Date: 2022-01-02 17:02:25
 * @LastEditTime: 2022-01-03 20:59:29
 * @FilePath: \technic-optimize\01-array-object\02-object\09-Object.getOwnPropertyNames.js
 */

// Object.getOwnPropertyNames:获取到对象的属性名，存储到一个数组中,此方法跟Object.keys相似但是又不同

var obj = {name:'jly',age:18,msg:{major:'computer'}}

var arr = Object.getOwnPropertyNames(obj)
// var arr = Object.keys(obj)

console.log(arr);