/*
 * @Author: jly
 * @Date: 2021-10-06 02:20:30
 * @LastEditTime: 2021-10-06 02:39:01
 * @FilePath: \technic-optimize\03-extends\04-constructor-extends4.js
 */

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayMsg = function(){
    console.log('my name ' + this.name + ' and my age is ' +  this.age + ' years old');
}

// --------------------------------------分割线--------------------------------------

function Student(name,age,major){
    this.major = major;
    Person.call(this,name,age)
}


Student.prototype = Object.create(Person.prototype)

// 同例constructor要指向本身构造函数Student
Student.prototype.constructor = Student;

var s = new Student('jly',18);

// sayMsg能够被调用到
s.sayMsg()
