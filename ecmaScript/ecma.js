"use strict";
/**
 * 内置对象 Number，Date，RegExp，Error，XMLHttprequest
 *
 */
// let num1One:Number = new Number(1);
// let date1s:Date = new Date()
// let reg1s:RegExp = new RegExp(/\w/)
// let error1s:Error = new Error('err')
// let XHR111:XMLHttpRequest = new XMLHttpRequest()
/**
 * DOM  HTMLElement  HTML(Div 元素名称div，LI 。。。)Element
 * NodeList 普通集合类型
 * NodeListOf 类型不固定  混合集合类型
 */
// let div1s = document.querySelector('footer')
// let NODElist:NodeList = document.querySelectorAll('div li')
// let NODElistof:NodeListOf<HTMLDivElement | HTMLLIElement> = document.querySelectorAll('div li')
// let local:Storage = localStorage
// let local11:Location = location
let promise = new Promise(r => r(1111));
promise.then(res => console.log(res)); //res.提示数字的一些方法，《string》会提示字符串的方法
let cookies111 = document.cookie;
console.log(cookies111); // document is not defined 主要的原因没有使用html
