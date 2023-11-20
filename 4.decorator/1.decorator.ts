/*
*  1.类型装饰 classecorator
*  2.属性装饰 PropertyDecorator
*  3. 参数装饰 parameterDecorator
*   4. 方法装饰 MethodDecorator     PropertyDescriptor 
*   5.装饰其工厂 
*   6. import ‘reflect-metadata’ 
*   7 。axios 
*/
// target  构造函数
const Base:ClassDecorator = (target) => {
    // console.log(target)
    // 不修改原来的类，通过prototype属性添加属性和方法
    target.prototype.xiaoman = 'xiaoman'
    target.prototype.fn = function() {
        console.log('hhhhh')
    
    }

}
@Base
class Http {

}
const http = new Http() as any
http.fn()
console.log(http.xiaoman)