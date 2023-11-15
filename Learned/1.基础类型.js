"use strict";
/**
 * 起步安装  1. nodejs
 *          2. npm i typescript -g  tsc -v
 *          3. npm i ts-node -g   执行ts文件
 *          4. npm init -y  初始化项目包文件
 *          5.tsc --init    生成tsconfig.json
 *          6.npm i @types/node -D  声明文件
 *          7 tsc index.ts  tsc -w  //tsc 转换为js， -w 监视，+转换js
 *          8 npm i @vue/cli -g  安装vue cli工具， 1.VUE create 命令行工具创建项目 2.VUE ui 可视化创建项目工具
 */
// number = [NaN,Infinity,123,decimal,hex,binary,octal...全部以十进制显示的]
let num = 123;
let Ninfinity = Infinity;
let decimal = 123;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let str = '小曼' + `${num}+ hex=${hex}='binary'=${binary}+octal=${octal}`;
console.log(str);
let bl = true;
let n = null;
//  let b:undefined = undefined;
// let v:void = null 一般用在函数上面
// function myFn():void {
//     return 123 // 不能将number类型赋值给void，函数无返回值
// }
// let v2:void =  undefined tsconfig.json "strict": false, 关闭严格模式
