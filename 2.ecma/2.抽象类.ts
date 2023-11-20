/**
 *  抽象类  基类
 * abstract 所定义的类为抽象类
 * abstract 所定义的方法，都只能描述 不能进行实现
 * 抽象类无法被实例化-->>派生类-去继承抽象类
 * 
 */
// 抽象类
abstract class Vue {
    name:string
    constructor(name?:string) {
        this.name = name as string
    }
    getName():string {
        return this.name 
    }

    abstract init(name: string) :void
}

// let abc = new Vue() //无法创建抽象类的实例。ts(2511)
// 派生类  1.抽象类.ts(18, 14): 非抽象类“React”不会实现继承自“Vue”类的抽象成员“init”。
class React extends Vue {
    constructor() {
        super()
    }
    init(name:string) {

    }
    setName(name:string) {
        this.name = name
    }
}
const  react = new React()

react.setName('小曼-思维')
console.log(react.getName())