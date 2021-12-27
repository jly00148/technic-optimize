/*
 * @Author: jly
 * @Date: 2021-12-27 17:10:15
 * @LastEditTime: 2021-12-27 17:12:07
 * @FilePath: \technic-optimize\01-array-object\01-array\05-deep-copy.js
 */
var arr = [11,22,33];

// 深copy一：
var arr1 = arr.concat()
console.log(arr === arr1);

// ---------------------------------------------------------------

// 深copy二:不仅可拷贝数组还能拷贝对象（但不能拷贝函数）
var arr2 = JSON.parse(JSON.stringify(arr));
console.log(arr2 === arr);