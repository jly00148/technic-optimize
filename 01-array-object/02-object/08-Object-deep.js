/*
 * @Author: jly
 * @Date: 2022-01-01 17:33:14
 * @LastEditTime: 2022-01-01 17:42:30
 * @FilePath: \technic-optimize\01-array-object\02-object\08-Object-deep.js
 */
var obj = {
    name:'jly'
}

// 方法一：
// var deepObj = {...obj}

// 方法二：JSON方法

var deepObj1 = JSON.stringify(obj)

// console.log(deepObj1 === '{"name":"jly"}'); true

var deepObj2 = JSON.parse(deepObj1)
// console.log(deepObj2);{ name: 'jly' }


// console.log(obj === deepObj2); false