// 1 type A = string & number 定义的类型是字符串类型又是数字类型会推断为never类型
// 2 执行会报错，使用never类型更适合 或 有死循环
// function xm():never  {
//     throw new Error('err') // 1
//     // while(true) {

//     // }  // 2
// }

// 3 定义联合类型最低层的never 会被忽略掉
// type AAA = void | number | never 
// 案例3
type AAA = '说' | "学" | "斗" | "唱" | "逗"

function crossTalk(value:AAA) {
    switch(value) {
        // 类型推断 说学逗唱 为字符
        case "\u8BF4":
            console.log('说')
            break
        case "\u5B66":
            console.log('学')
            break
        case "\u6597":
            console.log('斗')
            break
        case "\u5531":
            console.log('唱')
            break
        case "\u9017":
            console.log('逗')
            break
        default:
            // 兜底逻辑使用never 类型 已声明“err”，但从未读取其值。ts(6133)
            // 不能将类型“string”分配给类型“never”。ts(2322)
            // 以上报错，追加case 类型推断出来的逗
            let err:never = value
            console.log(err + '没有定义类型')
            break
    }
}
crossTalk('学') // 只能输入 说学逗唱 斗