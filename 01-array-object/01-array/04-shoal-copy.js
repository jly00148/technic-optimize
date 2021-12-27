/*
 * @Author: jly
 * @Date: 2021-12-26 01:15:32
 * @LastEditTime: 2021-12-27 17:09:23
 * @FilePath: \technic-optimize\01-array-object\01-array\04-shoal-copy.js
 */


var arr = [11,22,33];

// 浅copy一：
var arr1 = arr;

// console.log(arr1 ===arr);
// ------------------------------------------------------------------

// 浅copy二：
var arr2 = arr.slice()//不传参或者传参数0，默认从0开始可以复制数组。
// console.log(arr === arr1);