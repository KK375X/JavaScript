window.onload = function () {

    /*
        使div可以跟随鼠标移动
     */
    //获取box
    var box = document.getElementById("box");

    //绑定鼠标移动事件
    document.onmousemove = function (event) {
        //解决兼容性问题
        event = event || window.event;

        //获取鼠标的坐标
        /*
            clientX和clientY用于获取鼠标在当前的可见窗口的坐标，而div的偏移量是相对于整个页面的，
            所以可以使用pageX和pageY获取鼠标相对当前页面的坐标
         */
        // var left = event.clientX;
        // var top = event.clientY;
        var left = event.pageX;
        var top = event.pageY;

        //随着鼠标的移动，实时修改div的偏移量
        box.style.left = left + "px";
        box.style.top = top + "px";

    };

};