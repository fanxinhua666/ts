let sy01:symbol = Symbol(1) // 唯一的
let sy02:symbol = Symbol(1) // 唯一的


// console.log(sy01, sy02) // 返回俩个相同的  Symbol(1) Symbol(1)
// console.log(sy01 == sy02)  // false
// 如何要让两个symbol 返回一个true 呢
// console.log(Symbol.for('abc') === Symbol.for('abc')) // true
// Symbol.for 会全局symbol 查看有没有注册过这个key ，如果有拿来直接用
// let obj = {
//     name: 1,
//     [sy01]: 111,  // [sy01] 使用索引签名，可以显示为symbol 
//     [sy02]: 222 // 使用symbol 避免属性key 重名
// }
// console.log(obj)
// for in 的问题不能读取 symbol 
// for(let key in obj) {
//     console.log(key)  //  name
// }
// console.log(Object.keys(obj))  // ['name']
// console.log(Object.getOwnPropertyNames(obj)) // ['name']
console.log(Object.getOwnPropertySymbols(obj)) // 只能获取 symbol 的属性值，不包含 name

// 完美类型 同时拿到symbol 和name 属性  Reflect.ownkeys()
console.log(Reflect.ownKeys(obj)) // ['name',Symbol(1) ,Symbol(1)]