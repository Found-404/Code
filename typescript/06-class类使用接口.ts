// interface Perosn{
//     name:string,
//     age?:number,
//     say():void
// }

// /**
//  * implements Person作用，让user类中使用Person接口
//  * 适合约束类中 特定 的属性
//  */
// class User implements Perosn{
//     constructor(){

//     }

//     name:'12'

//     say(){

//     }

//     bar = 123
// }


interface PERSON{
    name:string
    age:number
}


// 定义一个类
class PerosnTwo{
    // constructor 是什么
    // 构造器
    // 执行：new Perosn super
    constructor(options){
        let {name,age}= options
        // 给实例对象添加静态属性
        // this.name = name;
        // this.age = age;
    }
    private cname='aaa'  //仅在内部使用
    protected b = 'bbb'  //仅在本类和子类中访问使用
    public d = 'ddd'   //任意部分都可以访问
    // 添加的是原型方法
    get(){  
        console.log(this.cname);
    }
}





// 类的作用：创建实例对象
let p = new PerosnTwo({
    name:'found',
    age:19
})

interface User extends PerosnTwo{
    test:string
}

class User extends PerosnTwo{
    constructor(test){
        // super触发PersonTwo类中的构造器
        super({name:'found',age:19});
        this.test=test

    }

}

let u=new User({
    test:'123'
})

