// 动态类型

import { rejects } from "assert"
import { resolve } from "path"

// function xiaomanya(a:number,b:number) :Array<number> {
//     return [a+ b ]
// }

// function xiaomanya1(a:string,b:string) :Array<string> {
//     return [a+ b ]
// }

// function xiaomanyaya<T>(a:T,b:T):Array<T> {
//     return [a,b]
// }
// xiaomanyaya(1,2) // 推断 number 类型
// xiaomanyaya<number>(1,2) // 原型
// xiaomanyaya(true,false)  // 传什么类型的值，会自动推断什么类型的值，不需要声明更多的函数了

// 类型别名 定义泛型的用法

// type A<T> = string | number | T
// let a111:A<boolean> = ''
// let a112:A<undefined> = undefined
// let a113:A<null> = null
// 接口定义泛型
// interface Data<T> {
//     msg:T
// }
// // 可以自定义数据类型string number 等
// let data:Data<string> = {
//     msg: 'xiaoman'
// }
// function add<T = number,K = number>(a:T,b:K):Array<T|K> {
//     return [a,b]
// }

// add(1,'triee')

const axios = {
    get<T>(url:string):Promise<T>{
        return new Promise((resolve,reject)=> {
            let xhr:XMLHttpRequest = new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState ==4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}
interface Data {
    message:string
    code: number
}
axios.get<Data>('./data.json').then(res => {
    console.log(res)
})