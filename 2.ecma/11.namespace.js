"use strict";
exports.__esModule = true;
exports.A = void 0;
// 命名空间
// 暴露命名空间对象
var A;
(function (A) {
    // 嵌套的命名空间
    var B;
    (function (B) {
        B.a = 6;
    })(B = A.B || (A.B = {}));
})(A = exports.A || (exports.A = {}));
// 使用命名空间
// 命名空间合并，有2个一样就会合并
(function (A) {
    var B;
    (function (B) {
        B.b = 88;
    })(B = A.B || (A.B = {}));
})(A = exports.A || (exports.A = {}));
