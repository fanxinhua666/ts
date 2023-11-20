// 泛型约束用法  在类型后面跟一个extends 再跟一个约束的类型 add1<T extends number>(a:T,b:T) 

// function add1<T extends number>(a:T,b:T):number {
//     return a + b
// }
// add1(4,6)
// 使用接口约束
// interface Len {
//     length:number
// }
// function Fn<T extends Len> (a:T) {
//     console.log(a.length)
// }
// Fn('使用类型约束，更好的控制类型的范围')
// Fn([1,2,3,4,5,6,7])

// 约束对象
// let obj = {
//     name: 'zs',
//     sex: '女'
// }
// // age keyof 

// type Key = keyof typeof obj  // 对象类型推断为联合类型 type Key = "name" | "sex"

// function ob<T extends object,K extends keyof T>(obj:T,key:K) {
//     return obj[key] 
// }
// // 约束 对象的key 
// ob(obj, 'sex')
interface  Data {
    name:string
    age:number
    sex:string
}
// for in for(let key in obj)

type Opthions<T extends object> = {
    // [key in keyof T]?:T[key]
    readonly [key in keyof T]:T[key]
}
type B = Opthions<Data>