/**
 *  类的混入
 * 
 */

class N1 {
    type: boolean  = false
  
    changeType() {
        this.type = !this.type
    }
}

class N2 {
    name:string = 'zs'
    getName():string {
       return this.name
    }
}
class N3 implements N1,N2 {
   
    type:boolean = false
    name:string = 'zs'
    changeType!: (() => void) 
    getName!:(() => string)
}
mixins(N3,[N1,N2])
function mixins(curCla:any,itemCls:any[]) {
    itemCls.forEach(item => {
        console.log(item)
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            // console.log(name)
            curCla.prototype[name] = item.prototype[name]
        })
    })
}
let ccc =new N3()
ccc.changeType()
console.log(ccc.type)
console.log(ccc.getName())