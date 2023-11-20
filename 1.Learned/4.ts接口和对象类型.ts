// /**
//  *  接口和对象类型
//  * interface 重名，重合
//  * interface 任意key
//  * interface ？ readonly
//  * interface 接口继承
//  * interface 定义函数类型
//  * 索引签名： [propName:string]:any ，属性值任意的字符，后面定义对象属性可以随意加，
//  * 前面定义过的name，age，必须有的，后面其他属性不会强校验
//  * age?number ?为可选值
//  */
// // 2 实现接口继承的类B的定义
// interface B {
//     xxx:string
// }
// // 1 定义接口类型
// interface Axxsxs {
//     name:string
//     readonly id:string
//     readonly cb:()=>boolean
    
// }
// // 1.1 定义重合的接口类型,重名会重合
// interface Axxsxs {
//     age?:number
//     [propName:string]:any 
// }
// // 1.2 定义对象类型，不能多也不能少属性，完全和interface定义的接口类型一模一样
// let a11:Axxsxs = {
//     name: '小满',
//     id: '1234',
//     age: 30,
//     cb: () => false  // 定义接口类型时，添加readonly ，cb函数不能随意修改了
// }
// // 2.1 实现接口继承的类A的定义
// interface A extends B {
//     aaa:string
// }
// // 2.2 带有继承的对象定义，符合A类和B类定义的参数一致
// let a12:A = {
//     xxx:'abc',
//     aaa: 'xxx'
// }

// // 3.1 定义函数类型的接口, 返回的参数为数字的数组
// interface Fn {
//     (name:string):number[]
// }
// // .2 定义函数

// const a13:Fn = function(name:string) {
//     return [1]
// }