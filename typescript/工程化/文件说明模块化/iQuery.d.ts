// 说明$是一个函数
declare function $(
    params:()=>void
):void

interface Style {
    width?:string
    height?:string
    fontSize?:string
}



// 指定html中参数是一个字符串
interface jqueryRes {
    html(str:string):jqueryRes
    css(params:Style):jqueryRes
}


declare function $(
    params:string
):jqueryRes

// 说明$是一个对象
// namespace 解决命名冲突问题
declare namespace ${    
    // $.fn
    namespace fn {
        // new $.fn.init() 为一个实例类
        class init{}
        // $.fn.init() 是一个函数
        function init():void
    }
}



// ?---------------------------------

// interface Style {
//     width?:string
//     height?:string
//     fontSize?:string
//     color?:string
// }

// interface jqueryRes {
//     html(str:string):jqueryRes
//     css(params:Style):jqueryRes
//     append(params:jqueryRes):jqueryRes
// }

// declare module 'jquery'{

//     function $(
//         params:()=>void
//     ):void

//     function $(
//         params:string
//     ):jqueryRes

//     namespace ${    
//         // $.fn
//         namespace fn {
//             // new $.fn.init() 为一个实例类
//             class init{}
//             // $.fn.init() 是一个函数
//             function init():void
//         }
//     }
//     export = $
// }
