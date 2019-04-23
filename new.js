/**
 * what happened when 'new' a Funtion ?
 * 1. 创建一个空对象
 * 2. 将空对象的隐式原型指向构造函数的显式原型
 * 3. 用 call（apply）改变 this
 * 4. 处理返回值：如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
 */

function Person(name) {
  this.name = name
}

let person = new Person('Sylvia')

/**
 * 相当于
 * let person = {}
 * person.__proto__ = Person.prototype
 * let result = Person.call(person, 'Sylvia')
 * return typeof result === 'obj' ? result: person
 */
