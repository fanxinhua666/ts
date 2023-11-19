/**
 *      枚举类型
 *
 */
// 早期很咯的方法
// const fCn = (type:string) => {
//     if(type === 'red') {
//         return 0
//     }
//     if(type === 'green') {
//         return 1
//     }
//     if(type === 'bkue') {
//         return 2
//     }
// }
// 升级一点的方法
// let obg = {
//     red:0,
//     green: 1,
//     blue:2
// }
// 枚举类型 默认从0开始索引 
// 1,默认 number 类型
// enum Color {
//     red,
//     green,
//     blue
// }
// console.log(Color.red) // 0
// console.log(Color.green) // 1 
// console.log(Color.blue) // 2
// // 2.number 自动增长 自定义枚举类型
// enum Color {
//     red = 1,
//     green,
//     blue
// }
// console.log(Color.red)  // 1
// console.log(Color.green) // 2
// console.log(Color.blue) // 3
// 3.string 枚举类型
// enum Color {
//     red = 'red',
//     green = 'green',
//     blue = 'blue'
// }
// console.log(Color.red)  // red
// console.log(Color.green) // green
// console.log(Color.blue) // blue
// 4.异构枚举：字符串和数字混合的类型
// enum Color {
//    yes = 1,
//    no = 'no'
// }
// console.log(Color.yes)  // 1
// console.log(Color.no) // no
// // 5. 接口枚举
// enum Color {
//     red ,
//     green = 'green',
//     blue =1
// }
// interface A1231 {
//     yes:Color.blue
// }
// let obj:A1231 = {
//     yes: Color.blue,
// }
// // 6: const 枚举,不用const types编译为返回一个对象，用了types = 一个常量 
// const enum Types {
//     success,
//     fail
// }
// let code:number = 0
// if(code === Types.success) {
//     console.log(Types.success)
// }
// 7反向映射 它包含了正向映射(name -> value) 和反向映射(value -> name)
// 注意的是： 不要为字符串枚举成员生成反向映射
var Types;
(function (Types) {
    Types[Types["success"] = 0] = "success";
    Types[Types["fail"] = 1] = "fail";
})(Types || (Types = {}));
var success = Types.success;
console.log(success);
var key = Types[success];
console.log(key);
