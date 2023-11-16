

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
 * class 类型修饰符 readonly 修饰属性为只读
 *  属性和方法前面  private ： 只能在类的内部使用
 *                 protected：能够在父类和子类中使用
 *                  public ： 默认的，所有的类通用
 *  静态方法： Vnode.xxx,通过构造函数调用
 *  static： 在构造函数内部定义属性和方法加static，this指向构造函数
 * 实例方法： 通过new 构造出来 返回的对象          this 指向实例出来的对象
 * 
 */
// interface Vnode {
//     tag: string // div, section ,header...
//     text?: string //123 
//     children?: Vnode[]
// }
// // 虚拟Dom 简单版的类
// class Dom {
//     // 创建节点的方法
//     createElement(el: string) {
//         return document.createElement(el)
//     }
//     // 填充文本的方法
//     setText(el: HTMLElement, text: string | null) {
//         el.textContent = text
//     }
//     // 渲染方法
//     render(data: Vnode) {
//         let root = this.createElement(data.tag)
//         if (data.children && Array.isArray(data.children)) {
//             data.children.forEach(item => {
//                 let child = this.render(item)
//                 root.appendChild(child)
//             })
//         } else {
//             this.setText(root, data.text as string)
//         }
//         return root
//     }
// }
// // 0 定义Vue 参数类型
// interface Options {
//     el: string | HTMLElement
// }
// // 0 定义Vue  脚手架类型
// interface Vuecls {
//     options: Options
//     init(): void
// }

// // 1 定义Vue 类  implements Vuecls 类型约束
// class Vue extends Dom implements Vuecls {

//     options: Options;
//     constructor(options: Options) {
//         super();
//         this.options = options
//         this.init()
//     }
//     init(): void {
//         let data: Vnode = {
//             tag: "div",
//             children: [
//                 {
//                     tag: "section",
//                     text: "我是子结点1",
//                     children: [
//                         {
//                             tag: 'div',
//                             text: "123"
//                         }
//                     ]
//                 },
//                 {
//                     tag: "section",
//                     text: "我是子结点2"
//                 }
//             ]
//         }
//         let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) as HTMLElement : this.options.el
//         app.appendChild(this.render(data))
//     }
// }
// // 实例化Vue

// let vm = new Vue({
//     el: "#app"
// })
// console.log(vm)
// get set
class Ref {
    _value:any 
    constructor(value:any) {
        this._value = value
    }
    get value () {
        return this._value + 'vvv'
    }
    set value(newValue) {
         this._value = newValue
    }
}
const ress1 = new Ref('小满')
ress1.value = 'aaa'
console.log(ress1.value)