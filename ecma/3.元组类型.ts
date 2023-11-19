/**
 *  元组（Tuple）：  --就是数组的变种
 *      ： 是固定数量的不同类型的元素的组合，而且数量三固定的。
 *      ：特点，在于可以把多个元素作为一个单元传递，如果一个方法需要返回多个值，
 *       可以把多个值作为元组返回，而不需要创建额外的类来表示
 * 
 *      let arr:[number,string] = [1,'str']
 *  let arr: readonly [x:number,y?:boolean] = [1]
 */
// let arr: readonly [x:number,y:boolean] = [1,true]
// 元组二维数组
// let excel:[string,string,number][] = [
//     ['小满','女',18],
//     ['小满','女',18],
//     ['小满','女',18],
//     ['小满','女',18],
// ]
// 元组类型别名的用法
// type first = arr[] // “arr”表示值，但在此处用作类型。是否指“类型 arr”?ts(2749)
// type first = typeof arr[0]  // 查看指定数组值的类型

// type first = typeof arr['length'] // 获取arr.length
// let abc:first = 123 // first 等于number arr[1],first等不布尔类型