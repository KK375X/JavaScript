window.onload = function () {

    /*
        要求：使div根据不同的方向键向不同的方向移动
            - 37：向左
            - 38：向上
            - 39：向右
            - 40：向下
     */

    /*
        修改部分：
            - 开启一个定时器，来控制div的移动速度，消除开始的停顿效果
     */
    //定义速度变量
    var speed = 10;

    //创建方向变量
    //通过修改dir来影响移动的方向
    var dir = 0;

    //为document绑定一个键盘事件
    document.onkeydown = function (event) {
        event = event || window.event;

        //使dir等于按键的值，相当于修改div的移动方向
        dir = event.keyCode;
    };

    //为document绑定一个松开鼠标，停止移动的事件
    document.onkeyup = function (event) {
        event = event || window.event;

        //直接将dir设置为0
        dir = 0;
    };

    //获取div对象
    var box = document.getElementById("box");

    //开启定时器
    setInterval(function () {

        //进行键盘按键判断
        switch (dir) {
            case 37:
                // alert("向左"); left值减小
                box.style.left = box.offsetLeft - speed + "px";
                break;
            case 38:
                // alert("向上"); top值减小
                box.style.top = box.offsetTop - speed + "px";
                break;
            case 39:
                //alert("向右");  left值增加
                box.style.left = box.offsetLeft + speed + "px";
                break;
            case 40:
                //alert("向下");  top值增加
                box.style.top = box.offsetTop + speed + "px";
                break;
        }
    }, 30);

};