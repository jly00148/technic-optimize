/*
 * @Author: jly
 * @Date: 2021-10-04 15:24:41
 * @LastEditTime: 2021-10-04 17:34:20
 * @FilePath: \technic-optimize\01-array-object\09-Object.defineProperty.js
 */

var obj = {}

// Object对象设置属性方式一：
obj.name = 'jly'

// Object对象设置属性方式二：
obj['age'] = 18

// console.log(obj); { name: 'jly', age: 18 }

// 这样设置属性是周四后续是可以更改的而且对象是可枚举，通过循环遍历的方式来获取对象的属性，
// 但是有些时候定义对象之后，在后续无法更改属性或者无法枚举，这个时候就需要用到Object.defineProperty()方法

// -------------------------------------------------分割线-------------------------------------------------

/**
 * @static:Object.defineProperty(obj,prop,descriptor)
 * @description: 通过定义属性的元数据信息精确控制属性的行为
 * @param:object 对象 必填 定义属性对象
 * @param:prop String|Symbol 必填 要定义或修改属性的名称
 * @param:descriptor object 必填 将被定义的或修改的属性描述符
 * @return:返回被传递给函数的对象obj
 */

