/*
 * @Author: jly
 * @Date: 2022-01-05 00:10:16
 * @LastEditTime: 2022-01-06 23:46:58
 * @FilePath: \technic-optimize\07-judge-type\02-instanceof.js
 */

// instanceof一般用于检测引用数据类型，A instanceof B，如果A是B的实例的话返回true否则返回false，用于判断复杂数据类型(Array,Object,RegExp)

console.log('string' instanceof String);//false
console.log(10 instanceof Number);//false
console.log(true instanceof Boolean);//false
console.log(null instanceof Object);//false
console.log([11,22,33] instanceof Array);//true
console.log({name:'jly'} instanceof Object);//true
console.log(function fn(){} instanceof Function);//true
console.log(new Date() instanceof Date);//true
console.log(new Number() instanceof Number);//true
console.log(new String() instanceof String);//true
console.log(new Boolean() instanceof Boolean);//true
console.log(/^123$/ instanceof RegExp);//true