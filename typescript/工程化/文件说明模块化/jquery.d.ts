// 说明import $ from 'jquery'
// 是一个模块

// 坑：命名问题：
//     - 文件名 xx.d.ts 跟 declare module 'xx' 一致


interface Style {
    width?:string
    height?:string
    fontSize?:string
    color?:string
}

// 自定义一个接口
// 可以用来指定对应的数据类型
interface jqueryRes{
    html(str:string):jqueryRes
    css(params:Style):jqueryRes
    append(parmas:jqueryRes):jqueryRes
}

declare module 'jquery'{
    // 指定$内容可以是一个函数
    function $(params:()=>void):void
    // 指定$内容可以是一个字符串
    function $(params:string):jqueryRes

    // 指定$是一个对象
    namespace ${
        namespace fn{
            // 指定 $.fn.init() 是一个实例对象
            class init{}
            // 指定 $.fn.init() 是一个函数
            function init():void
        }
    }


    // 暴露出$
    export = $
}

