// 推论 1 一般赋值都可以推论出来数据类型，可以省略类型
// const STR = '123'
// const OBJ = {}
// 2 let arr； 不赋值默认为any类型
// 3 别名
// type s= number[] // s 为数字数组。。。也可以为string，number，对象等和interface 类使又不同
// 区别1 type 不能继承 只能 type s = A &|  B 交叉继承，使用联合类型
// 区别2 interface 不能使用联合类型
// 区别3 interface 重名会合并
// 4 extends 在表达式中有包含的意思, 会返回1
// type num11 = 1 extends number ? 1 : 0 // 只有 type num11 = 1 extends never ? 1 : 0 才为0
// let n1111:num11 = 0 // 不能将类型0赋值给类型1
// console.log(n1111) //在赋值前使用了num11，报错