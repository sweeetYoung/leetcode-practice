function foo(){
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
    console.log(a)
    console.log(b)
  }
  console.log(b)
  console.log(c)
  console.log(d)
}
foo()

let myname= '极客时间'
{
  console.log(myname)
  let myname= '极客邦'
}
// 变量环境
// --
// 词法环境
// myname = undefined

for(let i = (setTimeout(()=>console.log(i), 2333) , 0); i < 2; i++) {

}
