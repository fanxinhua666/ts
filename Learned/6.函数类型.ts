/**
 *  函数类型
 *  1.函数定义类型和返回值 | 箭头函数定义类型和返回值
 *  2.函数默认的参数 | 函数可选参数
 *  3. 参数是一个对象如何定义
 *  4. 函数this类型
 *  5. 函数重载
 */
//  1.1 普通函数的参数和返回值的定义
// function add(a:number,b:number):number {
//     return a + b;
// }   
// 1.2  箭头函数参数和返回值的定义 = 默认值 ？ 可选参数，不能混参
// const add = (a:number = 20,b:number = 1, c?:number):number => a+b;
// 1.3 参数为对象
// interface User {
//     name:string
//     age:number
// }
// function add(user:User):User{
//     user.age = user.age+10
//     return user
// };
// console.log(add({name:'zs',age:18}))
//ts 增强 可以定义this 的类型，第一个参数里定义
// interface Obj {
//     age:number[]
//     add:(this:Obj,num:number) => void
// }

// let obj:Obj = {
//     age:[1,2,3,4],
//     add(this:Obj,num:number) {
//         this.age.push(num)
//     }
// }
// obj.add(10)
// console.log(obj)

/**
 *  函数重载 -- 一个方法，参数不同
 *   findOne 查找一个
 *   find   查找所有
 *   add    添加一个
 *   edit   修改一个 
 *   下面案例只是操作数字数组，操作其他增删改查，有待学习
*/
// 1 数据
let user: number[] = [1, 2, 3, 4, 5];
function findNum(edit: number, value: number): number[];
function findNum(id: number): number[];     // 1.2 如果传入了id就查询单个
// function findNum(add: number[]): number[];   // 此重载签名与其实现签名不兼容 
function findNum(): number[];               // 1.3 如果没有传入任何东西就查询所有

// 此重载签名与其实现签名不兼容
// else if (Array.isArray(ids)) {
//     user.push(...ids);
//     return user;
// }
// 2 函数体
function findNum(ids?: number, value?: number, add?: number[]): number[] {
    if (typeof ids === 'number' && typeof value === 'number') {
        console.log(true)
        for (let i = 0; i < user.length; i++) {
            if (user[i] == ids) {
                console.log(i)
                user[i] = value as number;
            }
        }
        return user
    }
    else if (typeof ids === 'number') {
        return user.filter(v => v == ids)
    }

    else {
        return user
    }
}
console.log(findNum()) // 查询到了所有的数据