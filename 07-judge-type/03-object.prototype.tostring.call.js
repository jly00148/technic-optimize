/*
 * @Author: jly
 * @Date: 2022-01-06 23:51:42
 * @LastEditTime: 2022-01-07 00:01:03
 * @FilePath: \technic-optimize\07-judge-type\03-object.prototype.toString.call.js
 */

// 比较全面，能精确判断出数据类型，吸收typeof和instanceof优点

console.log(Object.prototype.toString.call('123456'));
console.log(Object.prototype.toString.call(12346));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call([11,22,33]));
console.log(Object.prototype.toString.call({name:'jly'}));
console.log(Object.prototype.toString.call(function fn(){}));
console.log(Object.prototype.toString.call(/^123$/));