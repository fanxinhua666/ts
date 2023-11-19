// 生成器 
// function* gen () {
//     yield 'xiaoman'
//     yield Promise.resolve('小满') // 异步
//     yield '大满'                  // 同步
// }
// const man= gen()

// console.log(man.next())
// console.log(man.next())
// console.log(man.next())
// console.log(man.next()) // 最后一次value = 'undefined' done = true

// 2。迭代器   Symbol.iterator  set map document  aegs 都有迭代器
// 2.1 set（）结构  生成的数组不带重复的内容 支持数字和字符串，不支持对象类型
// let set:Set<number> = new Set([1,1,2,3,4,4,3,5,8,2])
// console.log(set)
// let map: Map<any, any> = new Map()
// let Arr1 = [1, 2, 3]
// map.set(Arr1[0], '小满')
// map.set(Arr1[1], '大满')
// map.set(Arr1[2], '满意')
// console.log(map.get(Arr1))
// console.log(map)

// 伪数组 1,args 2,doccument.get  
// [Arguments]: {"0":1,"1": 2,"2": 3}  没有pop等方法，却有forEach 可用
function args(a: number, b: number, c: number) {
    console.log(arguments)  // 1
}
// let lis = document.querySelectorAll('li')
// args(1,2,3)
// forEach  原型
// const each = (value:any) => {
//     let It:any = value[Symbol.iterator]()
//     let next:any = {done: false}
//     while(!next.done) {
//         next = It.next()
//         if(!next.done) {
//             console.log(next.value)
//         }
//     }
// }
// each(map) // 输出key 和 value 的数组 [1,'xiaoman',2,'xxx']
// console.log(map)

// 5 迭代器的语法糖  for of 对象不能用
// for(let value of map) {
//     console.log(value)
// }

// 7 解构的底层逻辑也三调用 iterator 
// const  [ab1,bb1,cb1] = [1,2,3]
// const ab1 = [1, 2, 3]
// const copy = [...ab1, 4, 5, 6]
// console.log(copy)
// 8 对象支持 for of 
// let obj = {
//     max: 5,
//     current: 0,
//     [Symbol.iterator]() {
//         return {
//             max: this.max,
//             current: this.current,
//             next() {
//                 if (this.current == this.max) {
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 } else {
//                     return {
//                         value: this.current++,
//                         done: false
//                     }
//                 }
//             }
//         }
//     }
// }
// for(let value of obj) {
//     console.log(value)
// }
// let x = [...obj]
// console.log(x)