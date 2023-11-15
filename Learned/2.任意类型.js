"use strict";
/**
 * npm i ts-node -g     执行ts文件，相当于node 执行js文件
 * npm i xmzs -g        '小满的nrm' mmp ls 切换淘宝源
 * mmp ls 查看镜像
 * mmp use taobao 选择镜像源
 * mmp current 查看当前镜像
 * mmp ping 测试镜像速度
 * mmp add 自定义镜像源
 * mmp delete 删除自定义镜像
 * mmp rename 重命名
 * mmp edit 编辑自定义的源
 * help
 * 1. nodejs
 *          2. npm i typescript -g  tsc -v
 *          3. npm i ts-node -g   执行ts文件
 *          4. npm init -y  初始化项目包文件
 *          5.tsc --init    生成tsconfig.json
 *          6.npm i @types/node -D  声明文件
 *          top1：  any类型 为任意类型 unknown 不知道leix，包含以下所有类型
 *          top2:   Object类型，
 *          top3：  Number，String，Boolean
 *          top4:   number，string，boolean
 *          top：5  1，‘xiaom’ false
 *          top6:   never类型
 * unknown 类型的值只能赋值给自身类型或者是any类型，不能赋值给别的类型
 * unknown 类型没有办法读任何属性 方法页不可以调用
 */
let a = 1;
let b = 5;
// b = a;  不能将类型“unknown”分配给类型“number”。
let xiaoman = {
    age: 20
};
// console.log(xiaoman.age) // xiaoman”的类型为“未知”,方法也不可以执行，比any 更加安全
