window.onload = function () {

    /*
        使div根据不同的方向键向不同的方向移动
            - 37：向左
            - 38：向上
            - 39：向右
            - 40：向下
     */
    //为document绑定一个键盘事件
    document.onkeydown = function (event) {
        event = event || window.event;
        var box = document.getElementById("box");
        var speed = 10;

        //进行键盘按键判断
        switch (event.keyCode) {
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




    };

};