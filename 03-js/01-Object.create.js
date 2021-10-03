/*
 * @Author: jly
 * @Date: 2021-10-03 22:59:13
 * @LastEditTime: 2021-10-03 23:54:22
 * @FilePath: \technic-optimize\03-js\01-Object.create.js
 */

/*
 * @description: Object.create(param1,param2)基本用法以及与new出的实例区别
 * @param1:必选项对象，obc的原型对象
 * @param2:可选项对象，对象里是实例对象obc上的属性
 */

var obc = Object.create(
    // param1
    {
        a:'点赞',
        b:'投币',
        c:'收藏',
        d:'一键三连'
    },

    // param2
    {
        "name":{
            value:'jly'
        },
        "age":{
            value:18
        }
    }
)

// console.log(obc.__proto__); { a: '点赞', b: '投币', c: '收藏' } 
// console.log(obc.age); {name:'jly',age:18}

// -------------------------------------------分割线-------------------------------------------

// 与new的实例区别：
/*
    1.Object.create所创建的实例没有默认的原型对象，需要指定第一个参数为原型对象，而new出的实例有默认的原型的对象
    2.每秒生成的实例数量不一样
 */