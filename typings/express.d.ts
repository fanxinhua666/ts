declare module 'express' {
    interface Router {
        get(path:string,cb: (req:any,res:any)=> void):void
    }
    interface App {
        use(path:string,router:any):void
        listen(port:number,cb?:()=> void)
    }
    interface Express {
        ():App
        Router():Router

    }
    const express:Express
    export default express
    declare var a:number  // 扩充 变量
    // 扩充 函数
    declare function name(params:type) {
        
    }
    // 扩充 类
    declare class Vue {

    }
    // 扩充 枚举类型 命名空间等
    declare enum C {

    }
}