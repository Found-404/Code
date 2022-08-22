let b:number = 10;

console.log(b);

// 对象
let data:{
    code:number,
    name:string,
    age?:number
}={
    code:200,
    name:'age',
    // age:18
}
console.log(data);

// 数组
let nums:number[] = [4,5,4,4,1,6,5,1,2,1];
let strs:string[] = ["qw","dq","qw","sd","ds"];


// 对象
let list:{
    name:string,
    age:number,
    data:object
}[]=[
    {
        name:'asas',
        age:18,
        data:[123,{},{},{}]
    }
]
console.log(list);


// 函数
// :()=>number要求赋值为函数，并且返回值为number类型
const getSage:()=>number=()=>{
    return 123
}
// :void 函数不能有返回值/或者返回undefined
function getSageTwo():void{

    return undefined
}

console.log(getSage);
console.log(getSageTwo);




// 类
class Person{}
// :Person约束静态类型为Person类实例对象
const perphon:Person = new Person()

console.log(perphon);



