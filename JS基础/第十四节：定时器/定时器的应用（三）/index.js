window.onload = function () {

    //获取按钮和div对象
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    //设置全局变量
    var timer;

    /*
        设计一个函数，来执行向左或向右的动画
            - obj：要执行的动画对象
            - attr：要执行动画的样式，比如：left  top  width  height
            - speed：执行动画移动的速度
            - target：执行动画的目标位置
            - callback：回调函数，将会在动画执行完毕以后执行
     */
    function move(obj, attr, speed, target, callback) {

        //防止多次点击出现叠加效果
        clearInterval(obj.timer);

        //获取元素的位置
        var current = parseInt(getStyle(obj, attr));

        //判断速度的正负
        //如果从0到800移动，速度为正
        //如果从800到0移动，速度为负
        if (current > target) {
            //目标位置小于800
            speed = -speed;
        }

        //开启定时器
        //向执行动画的对象种添加一个属性，用来保存自己的定时器标识
        obj.timer = setInterval(function () {

            //获取box原来的left的值，parseInt()方法为取整
            var oldValue = parseInt(getStyle(obj, attr));

            //在旧值的基础上增加
            var newValue = oldValue + speed;

            //向左移动时，需要判断newValue是否小于target
            //向右移动时，需要判断newValue是否大于target
            if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target;
            }

            //将新值设置给box1
            obj.style[attr] = newValue + "px";

            //元素块到达目标位置，停止移动
            if (newValue === target) {
                clearInterval(obj.timer);

                //动画执行完毕，调用回调函数
                callback();
            }

        }, 30);

    }

    //为btn1绑定事件，红色向右移动
    btn1.onclick = function () {

        /*
            要求：点击按钮之后，div向右移动（left值增大），并当元素移动到800px时，使其停止移动动画
         */
        move(box1, "left", 10, 800, function () {
            alert("动画执行完毕！");
        });

    };

    //为btn2绑定事件，红色向左移动
    btn2.onclick = function () {

        /*
            要求：点击按钮之后，div向左移动（left值减小），并当元素移动到0时，使其停止移动动画
         */
        move(box1, "left", 10, 0, function () {
            alert("动画执行完毕！");
        });

    };

    //为btn3绑定事件，蓝色向右移动
    btn3.onclick = function () {

        /*
            要求：点击按钮之后，div向左移动（left值减小），并当元素移动到0时，使其停止移动动画
         */
        move(box2, "left", 15, 1000, function () {
            alert("动画执行完毕！");
        });

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
