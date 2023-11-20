// 命名空间
// 暴露命名空间对象
export namespace A {
    // 嵌套的命名空间
    export namespace B {
        export const a = 6
    }
}
// 使用命名空间
// 命名空间合并，有2个一样就会合并
export namespace A {
    export namespace B {
        export const b = 88
    }
}