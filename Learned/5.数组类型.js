"use strict";
/**
 * 定义数组类型     1 基础类型 arr: number[]
 *                2.泛型   arr:Array<boolean>
 */
let a14 = [1, 2, 3, 4, 5];
let a15 = [true, false];
// 2.2 定义对象数组
let a16 = [{ name: 'xiaoman', age: 20 }, { name: 'zs', age: 30 }];
// 3.1 定义多维数组，二维数组
let a17 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// 使用泛型 多维数组
let a18 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// 3.2 定义多维数组，三维数组
let a19 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];
// 使用泛型 多维数组
let a20 = [[[1], [2], [3]], [[4], [5], [6]], [[7], [8], [9]]];
// 数组大杂烩类型数组 1
let a21 = [1, '123', true, [1, 2, 3], { age: 12 }];
// 数组大杂烩类型数组 2 元组
let a22 = [1, '123', true, [1, 2, 3], { age: 12 }];
// 数组在函数中的类型  1接收 ...args 剩余参数 2，使用arguments 维数组 
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// 定义argument类型  IArguments
function a23(...args) {
    // console.log(args)
    // console.log(arguments)
    let a24 = arguments;
    let a26 = arguments;
    console.log(a26);
}
a23(1, 2, 3, 4);
