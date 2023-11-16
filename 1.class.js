"use strict";
// 虚拟Dom 简单版的类
class Dom {
    // 创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染方法
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
// 1 定义Vue 类  implements Vuecls 类型约束
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
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
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    }
}
// 实例化Vue
let vm = new Vue({
    el: "#app"
});
console.log(vm);
