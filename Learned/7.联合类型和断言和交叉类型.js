"use strict";
/**
 * 联合类型
 * 类型断言
 * 交叉类
 *
 */
// 1 手机号类型
let phone = '0558-6143523';
// 2 联合类型
let tool = function (type) {
    return !!type; // !第一次为取反，第二次 转换为 true 或 false
};
// 定义函数参数为交叉类型
let xiaomange = (man) => {
    console.log(man);
};
// 函数参数 + 调用
xiaomange({
    name: '满哥',
    // age: 20,
    sex: 1
});
// 类型断言 欺骗ts执行，滥用拿不到结果 1 (num as string) 2 (<Man>sex)
let asFn = function (num) {
    console.log(num.length);
};
// asFn('12')
let asFun = (type) => {
    console.log(!!type.sex ? '男' : '女'); // 1. sex  
    console.log(type.name); // 2. name
};
// asFun({sex: 1,name: 'zs'})
/*
*  // (window as any).abc = 123  // window is not defined
*  // window.abcd = 123 //类型“Window & typeof globalThis”上不存在属性“abcd”。ts(2339)
*/
const fn = (type) => {
    return !type;
};
console.log(fn(-1)); // 欺骗并没有作用，还是返回1，要返回布尔值加！！
