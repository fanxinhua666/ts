/**
 *  Object类型   可以是数字，字符串，数组，对象，函数等
 * 
 */
let a1:Object = 123;
let a2:Object = '123';
let a3:Object = [];
let a4:Object = {};
let a5:Object = () => 123;
/**
 *  小写object类型，常用于泛型约束
 *  它不支持原始类型的数字，字符串，boolean，只支持引用类型，[],{},函数
 */


/**
 * a: {}, 字面量对象类型,无法对变量进行赋值操作
 */
let a6:{} = 123;
let a7:{} = "123";
let a8:{} = [];
let a9:{} = {age: 1};
let a10:{} = () => 123;
// a9.age = 3;  // 不能对{}类型的值进行赋值操作