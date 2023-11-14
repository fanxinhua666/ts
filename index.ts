// ts 可以定义this 的类型，第一个参数必须定义this的类型
interface obj {
    user:number[]
    add: (this:obj ,num:number) => void
}

let ob :obj = { 
    user:[1,2,3],
    add(this: obj ,num:number) {
        this.user.push(num)
    }
}
ob.add(4)
console.log(ob)