"use strict";
// 1.2 定义对象类型，不能多也不能少属性，完全和interface定义的接口类型一模一样
let a11 = {
    name: '小满',
    id: '1234',
    age: 30,
    cb: () => false // 定义接口类型时，添加readonly ，cb函数不能随意修改了
};
// 2.2 带有继承的对象定义，符合A类和B类定义的参数一致
let a12 = {
    xxx: 'abc',
    aaa: 'xxx'
};
// .2 定义函数
const a13 = function (name) {
    return [1];
};
