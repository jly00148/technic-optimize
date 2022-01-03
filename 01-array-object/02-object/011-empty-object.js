/*
 * @Author: jly
 * @Date: 2022-01-02 16:24:56
 * @LastEditTime: 2022-01-02 17:02:15
 * @FilePath: \technic-optimize\01-array-object\02-object\011-empty-object.js
 */

// 判断空对象的五种方法

// var obj = {name:'jly',age:18}
var obj = {}

// 方法一：JSON.stringify方法
console.log(JSON.stringify(obj) === '{}');

// 方法二：for...in...
function emptyObj(){
    for(var val in obj){
        // 空对象不会走到这里
        return false
    }
    return true
}
console.log(emptyObj(obj))

// 方法三：Object.getOwnPropertyNames:获取到对象的属性名，存储到一个数组中
var emptyObj1 = Object.getOwnPropertyNames(obj)
console.log(emptyObj1.length === 0);

// 方法四：