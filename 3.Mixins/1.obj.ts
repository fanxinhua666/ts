/**
 * 对象的混入
 * 
 */

interface Name {
    name:string
}

interface Age {
    age:number
}
interface Sex {
    sex:number
}

let n1:Name = {name: 'string'}
let n2:Age = {age: 19}
let n3:Sex = {sex: 1}


let obj  = Object.assign(n1,n2,n3)