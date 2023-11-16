var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 虚拟Dom 简单版的类
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 创建节点的方法
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    // 填充文本的方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    // 渲染方法
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    };
    return Dom;
}());
// 1 定义Vue 类  implements Vuecls 类型约束
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        var data = {
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
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
// 实例化Vue
var vm = new Vue({
    el: "#app"
});
console.log(vm);
// get set
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value + 'vvv';
        },
        set: function (newValue) {
            this._value = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var ress1 = new Ref('小满');
console.log(ress1);
