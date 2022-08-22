// 类型别名：给某个静态类型重新给一个名字的时候
type str = string;
type num = number;



type dataItem = {
    name:str,
    age:number
    test?:number  //?: 设置test为可有可无的属性
}



let datas:dataItem[]=[
    {
        name:'123',
        age:19
    }
]


// interface 接口 
// 作用：自定义对象类型
interface item {
    name:string,
    age:number
    test?:number  //?: 设置test为可有可无的属性
    foo:()=>string  //foo属性赋值为函数
    readonly a:boolean  //设置a属性为只读属性，不可修改
    [propName:string]:any  //对象中存在一个属性/值不确定的时候
    bar():number //bar赋值为函数，返回值number
}

let obj:item={
    name:'dfdf',
    age:123,
    foo(){return '123'},
    a:true,
    dd:"dwd",
    bar(){return 123}
}

// interface 为一个函数
interface say{
    (word:string):string
}

const foo:say=(word)=>{
    return '123'
}

interface StringArray{
    [index:number]:number
}

let strtHree:StringArray=[5,6,4,6,5];
// let strtSecond:StringArray='152122';



// obj.a = false //a属性为只读属性


// 对于自定义对象类型问题：
// 能用interface，不用type 类型别名
