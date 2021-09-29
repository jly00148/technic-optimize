// 一：遍历对象:Object.values(obj)
/*
 * 参数obj是对象
 * 返回值是对象属性值的组成的数组
 */
var obj = {name:'jly',age:18,getMsg:function(){}}

// console.log(Object.values(obj)) [ 'jly', 18, [Function: getMsg] ]

// ----------------------------------------------------------------------

// 二：遍历对象:Object.values(arr)
/*
 * 参数arr是数组
 * 返回值是数组每一项组成的数组
 */

var arr = [2,4,5,7];
// console.log(Object.values(arr))[ 2, 4, 5, 7 ]