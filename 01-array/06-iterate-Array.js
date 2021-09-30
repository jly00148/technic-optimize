// 遍历数组的几种方法：

// 1.简单for循环 
for(j = 0; j < arr.length; j++) { } 

// 2. 优化版for循环
for(j = 0,len=arr.length; j < len; j++) {}

// 3.foreach
arr.forEach(function(){})

// 4.map 遍历
arr.map(function(){});

// 5.for ……in
var arr = new Array("first", "second", "third") 
for(var item in arr) {
    console.log(arr[item]+",");
}

// 6.for……of 遍历（需要ES6支持）
for(let value of arr) { 
    // console.log(value) first second third
 }

