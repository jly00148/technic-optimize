// Object.entries(obj)遍历对象
/*
*Object.entries(obj)
*参数obj为对象
*返回值为由对象键值对组成的二位数组
*/

var obj = {
    name:'jly',
    age:18,
    sex:'man'
}

// console.log(Object.entries(obj)) [ [ 'name', 'jly' ], [ 'age', 18 ], [ 'sex', 'man' ] ]

// ----------------------------------------------------------------------------------------------

// Object.entries(arr)遍历数组
/*
*Object.entries(arr)
*参数arr为数组
*返回值为数组每一项和它的下标组成的二维数组
*/

var arr = [11,22,33,44];
// console.log(Object.entries(arr))[ [ '0', 11 ], [ '1', 22 ], [ '2', 33 ], [ '3', 44 ] ]
