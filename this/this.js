//  test 1
var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();

// test2

var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }

person1.show1() // person1
person1.show1.call(person2) // person2

person1.show2() // person1
person1.show2.call(person2) // person2

person1.show3()() // window
person1.show3().call(person2) // person2
person1.show3.call(person2)() // window

person1.show4()()
person1.show4().call(person2)
person1.show4.call(person2)()

var a = {},
b = {key: "b"},
c = {key: "c"};
a[b] = 123;
console.log(a)
a[c] = 456;
console.log(a)
console.log(a[b])