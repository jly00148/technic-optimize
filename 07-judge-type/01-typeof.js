/*
 * @Author: jly
 * @Date: 2022-01-04 17:54:54
 * @LastEditTime: 2022-01-06 21:44:39
 * @FilePath: \technic-optimize\07-judge-type\01-typeof.js
 */

// typeof用于判断基本数据类型,但是判断复杂数据类型不准确

console.log(typeof 'String');//string
console.log(typeof 123456);//number
console.log(typeof true);//boolean
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof [11,22,33]);//object
console.log(typeof new Date());//object
console.log(typeof {name:'jly'});//object
console.log(typeof function fn(){});//function
console.log(typeof /^a.6$/);//object
console.log(typeof new String(123456));//object
console.log(typeof new Number(123));//object
console.log(typeof new Boolean(false));//object
console.log(typeof String);//function
console.log(typeof Array);//function
console.log(typeof Boolean);//function
console.log(typeof Number);//function