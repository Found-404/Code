// declare myPlugin from 'zt-animate'

interface cssStyle{
    width?:number
    height?:number
}

interface options {
    begin:cssStyle
    end:cssStyle
    onstart?:()=>void
    onmove?:()=>void
    onend?:(e:EventInit)=>void

}


declare namespace  myPlugin {
    class animate {
        constructor(params:options)
    }
}




