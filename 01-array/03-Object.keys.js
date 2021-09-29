// 一：遍历对象:Object.keys(obj)
/*
 * 参数obj是对象
 * 返回值是对象格格属性的组成的数组
 */
var obj = {name:'jly',age:18,getMsg:function(){}}

//console.log(Object.keys(obj)) [ 'name', 'age', 'getMsg' ]

// ----------------------------------------------------------------------

// 二：遍历对象:Object.keys(arr)
/*
 * 参数arr是数组
 * 返回值是数组下标组成的数组
 */

var arr = [1,2,3,4];
// console.log(Object.keys(arr)) [ '0', '1', '2', '3' ]

// 三：常用处理：
console.log(Object.keys(obj).map((key)=>{
    return obj[key]
}))