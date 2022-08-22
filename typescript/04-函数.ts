// 函数

function add(a:number,b:number):number {
    return a+b
}

// 1.错误  2.死循环
function errEmiter():never {
    throw new Error();
    console.log('1111');
}


function add1({first,s}:{first:number,s:number}):number {
    return first+s
}

// <found>声明一个类型变量
// :found

function fooTwo<found>(a:found) {

}

fooTwo<string>('123')
fooTwo<number>(123)
fooTwo<boolean>(true)