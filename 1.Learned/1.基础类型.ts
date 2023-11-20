/**
 * 起步安装  1. nodejs
 *          2. npm i typescript -g  tsc -v 
 *          3. npm i ts-node -g   执行ts文件
 *          4. npm init -y  初始化项目包文件
 *          5.tsc --init    生成tsconfig.json
 *          6.npm i @types/node -D  声明文件
 *          7 npm i @types/node -D nodejs的声明文件
 *          // 声明文件 d.ts
            // npm i --save-dev @types/express
            // 手写 express 文件夹名称 typings 声明文件名称  为 express.d.ts
            // declare module 'express';
 * 
 */

    // number = [NaN,Infinity,123,decimal,hex,binary,octal...全部以十进制显示的]
    let num:number =123;
    let Ninfinity:number = Infinity;
    let decimal:number =  123;
    let hex:number = 0xf00d;
    let binary:number = 0b1010;
    let octal:number = 0o744;
    let str:string = '小曼'+ `${num}+ hex=${hex}='binary'=${binary}+octal=${octal}`
    console.log(str)
    let bl:boolean = true;
    let n:null = null;
   //  let b:undefined = undefined;
    // let v:void = null 一般用在函数上面
    // function myFn():void {
    //     return 123 // 不能将number类型赋值给void，函数无返回值
    // }
    // let v2:void =  undefined tsconfig.json "strict": false, 关闭严格模式