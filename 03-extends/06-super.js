/*
 * @Author: jly
 * @Date: 2021-10-12 03:26:22
 * @LastEditTime: 2021-10-12 04:22:15
 * @FilePath: \technic-optimize\03-extends\06-super.js
 */

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayMsg(){
        console.log('sayMsg...')
    }
}



// super既能当作方法调用也能当对象使用,当做方法调用时只有是在子类构造函数constructor方法内；当做对象使用时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。 

class Student extends Person{
    constructor(name,age,major){
        /*
         *注意点：
         * 1. super代表了父类Person的构造函数，但是返回的是子类Student的实例，即super内部的this指的是Student实例，
         * 2. super()在这里相当于Person.prototype.constructor.call(this)。相当于Person.prototype.constructor.call(this)/Person.call(this)，
         * 3. this是子类new出的实例，如果子类没有定义constructor方法，constructor方法会被默认创建，并默认调用super函数
        */

        //  当作方法调用
        super(name,age)
        this.major = major;
    }
}

var s = new Student('jly',18,'computer');
console.log(s);// Student { name: 'jly', age: 18, major: 'computer' }
