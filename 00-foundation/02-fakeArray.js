/*
 * @Author: jly
 * @Date: 2021-10-23 15:54:17
 * @LastEditTime: 2021-10-23 16:06:28
 * @FilePath: \technic-optimize\00-foundation\02-fakeArray.js
 */

/*
    *1.伪数组特点：
        1）具有length属性
        2）能够用数组的遍历方法遍历
        3）不具有数组的push，pop等方法

    *2.哪些是伪数组？
        1）函数的argument参数
        2）调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组
        3）诸如var obj5 = { 99: ‘abc’, length: 100 }这样的数据也是伪数组
*/

// 伪数组转化为真数组：
// 1） 声明一个空数组，通过遍历伪数组把它们重新添加到新的数组中：
var aLi = document.querySelectorAll('li');
var arr = [];
for (var i = 0; i < aLi.length; i++) {
    arr[arr.length] = aLi[i]
}

// 2） 使用数组的slice()方法 它返回的是数组，使用call或者apply指向伪数组：
var arr = Array.prototype.slice.call(aLi);

// 3）ES6中数组的新方法 from()：
function test(){
    var arg = Array.from(arguments);
    arg.push(5);
    console.log(arg);//1,2,3,4,5
}
test(1,2,3,4);

// 4数组扩展：
[...fakeArr]