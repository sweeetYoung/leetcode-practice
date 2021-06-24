// 原型链继承
function Parent (name) {
  this.name = name
  this.sex = 'boy'
  this.colors = ['white', 'black']
}
function Child () {
  this.feature = ['cute']
}
var parent = new Parent('parent')
Child.prototype = parent

var child1 = new Child('child1')  // child1: { feature: ['cute'] }
child1.sex = 'girl' // child1: { feature: ['cute'], sex: girl } 因为是直接新增一个属性
// 由于是push操作，得先找到colors数组，在实例对象parent上有，就拿来用，则改变了原型对象上的属性, 并且不会在实例上表现出来
// child1: { feature: ['cute'], sex: girl }
child1.colors.push('yellow')
child1.feature.push('sunshine') // child1: { feature: ['cute', 'sunshine'], sex: girl }

var child2 = new Child('child2') // child1: { feature: ['cute'] }

console.log(child1)
console.log(child2)

// child1.name是原型对象parent上的name，也就是'parent'，虽然我们在new Child的时候传递了'child1'，但它显然是无效的，因为接收name属性的是构造函数Parent，而不是Child。
console.log(child1.name) // parent
console.log(child2.colors) // ['white', 'black', 'yellow']

console.log(parent)

// a instanceof b
// 作用是查找a的_proto_是否指向b的prototype

// 构造函数继承
// 是指在子类的构造函数中通过call或apply调用父类构造函数
// 解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数
// 构造继承只能继承父类的实例属性和方法，不能继承父类原型的属性和方法

// ！！！使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类。
function Parent1 (name, sex) {
  this.name = name;
  this.sex = sex;
  this.colors = ['white', 'black']
}

function Child1 (name, sex) {
  Parent1.call(this, ...arguments)
}
var child_1 = new Child1('tony', 'girl');
child_1.colors.push('yellow'); //所以在这里，跟原型链继承不同是，child_1里的colors增加一项，不会影响其他实例
var child_2 = new Child1('peach', 'boy');

console.log(child_1);
console.log(child_2);

// 组合继承
// 使用组合继承时，父类构造函数会被调用两次
// 并且生成了两个实例，子类实例中的属性和方法会覆盖子类原型(父类实例)上的属性和方法，所以增加了不必要的内存
function Parent3 (name, colors) {
  this.name = name
  this.colors = colors
}
Parent3.prototype.features = ['cute']
function Child3 (name, colors) {
  this.sex = 'boy'
  Parent3.apply(this, [name, colors])
}
Child3.prototype = new Parent3()
Child3.prototype.constructor = Child3

var child3 = new Child3('child1', ['white']) // child3{name: 'child3', sex: boy, colors: ['white']}
child3.colors.push('yellow') // child3{name: 'child1', sex: boy, colors: ['white', 'yellow']}
child3.features.push('sunshine') // child3{name: 'child1', sex: boy, colors: ['white', 'yellow']}
var child4 = new Child3('child2', ['black']) // child4{name: 'child4', sex: boy, colors: ['black']}

console.log(child3) // child3{name: 'child1', sex: boy, colors: ['white', 'yellow']}
console.log(child4) // child4{name: 'child4', sex: boy, colors: ['black']}
console.log(Child3.prototype) // Parent{ name: undefined, sex: undefined, constructor: f Child(){} }

console.log(child3 instanceof Child3) // true
console.log(child3 instanceof Parent3) // true
