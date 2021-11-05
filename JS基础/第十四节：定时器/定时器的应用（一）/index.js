window.onload = function () {

    //获取按钮和div对象
    var btn = document.getElementById("btn");
    var box = document.getElementById("box");

    //设置全局变量
    var timer;

    //为btn绑定事件
    btn.onclick = function () {

        /*
            要求：点击按钮之后，div向右移动（left值增大），并当元素移动到800px时，使其停止移动动画
         */

        //防止多次点击出现叠加效果
        clearInterval(timer);

        //开启定时器
        timer = setInterval(function () {

            //获取box原来的left的值
            var oldValue = parseInt(getStyle(box, "left"));

            //在旧值的基础上增加
            var newValue = oldValue + 10;

            //将新值设置给box
            box.style.left = newValue + "px";

            //达到800px，停止移动动画
            if (newValue === 800) {
                clearInterval(timer);
            }

        }, 30);

    };

};

/*
    定义一个函数，用来获取指定元素的当前样式
        - 目的：解决getComputedStyle()方法和currentStyle属性的局限性
        - 参数：
            obj：要获取的样式元素
            nameStyle：要获取的样式名
 */
function getStyle(obj, nameStyle) {
    //这里不用“.”而用“[]”的原因是nameStyle是形参，不能写死了
    if (window.getComputedStyle) {
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj, null)[nameStyle];
    } else {
        //IE的方式
        return obj.currentStyle[nameStyle];
    }
}
