interface Test {
    a:string
}

// extends 接口继承
// study中有了Test所有配置
interface study extends Test{
    foo():string
}

let objTwo:study={
    foo(){
        return '123'
    },
    a:'123'
}