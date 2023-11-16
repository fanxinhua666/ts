

/**
 *  class 的基本用法 
 *        1 继承
 *        2 类型约束
 *  implelemnt
 * class 的修饰符  readonly private protected public
 * 
 * super 的原理
 * 静态方法
 * get
 * set 
 * 
 */
interface Vnode {
    tag: string // div, section ,header...
    text?: string //123 
    children?: Vnode[]
}
// 虚拟Dom 简单版的类
class Dom {
    // 创建节点的方法
    createElement(el: string) {
        return document.createElement(el)
    }
    // 填充文本的方法
    setText(el: HTMLElement, text: string | null) {
        el.textContent = text
    }
    // 渲染方法
    render(data: Vnode) {
        let root = this.createElement(data.tag)
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item)
                root.appendChild(child)
            })
        } else {
            this.setText(root, data.text as string)
        }
        return root
    }
}
// 0 定义Vue 参数类型
interface Options {
    el: string | HTMLElement
}
// 0 定义Vue  脚手架类型
interface Vuecls {
    options: Options
    init(): void
}

// 1 定义Vue 类  implements Vuecls 类型约束
class Vue extends Dom implements Vuecls {

    options: Options;
    constructor(options: Options) {
        super();
        this.options = options
        this.init()
    }
    init(): void {
        let data: Vnode = {
            tag: "div",
            children: [
                {
                    tag: "section",
                    text: "我是子结点1",
                    children: [
                        {
                            tag: 'div',
                            text: "123"
                        }
                    ]
                },
                {
                    tag: "section",
                    text: "我是子结点2"
                }
            ]
        }
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) as HTMLElement : this.options.el
        app.appendChild(this.render(data))
    }
}
// 实例化Vue

let vm = new Vue({
    el: "#app"
})
console.log(vm)