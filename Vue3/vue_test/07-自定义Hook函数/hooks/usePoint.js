import {reactive,onMounted,onBeforeUnmount} from 'vue'

export default function() {
    // 实现鼠标打点的数据
    let point = reactive({
        x:0,
        y:0
    })

    // 实现鼠标打点的方法
    function clicks(ev){
        point.x = ev.pageX;
        point.y = ev.pageY;
        // console.log(ev.pageX);
    }

    // 实现鼠标打点相关的周期勾子
    onMounted(()=>{
        window.addEventListener('click',clicks)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',clicks)
    })

    return point
}