window.onload = function () {

    /*
        要求：当鼠标在areaDiv中移动时，在showMsg中显示鼠标的坐标
     */
    //获取两个div对象
    var areaDiv = document.getElementById("areaDiv");
    var showMsg = document.getElementById("showMsg");

    /*
        onmousemove：该事件会让鼠标在元素中移动时触发

        事件对象：当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数，
                 在事件对象中封装了当前事件相关的一切信息。
     */
    areaDiv.onmousemove = function (event) {
        /*
            在IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下浏览器中，是将事件对象作为window对象的属性保存的
         */
        //解决方法：如果浏览器中不会传递事件对象，就将其设置为window对象的属性使用
        if (!event) {
            event = window.event;
        }

        /*
            clientX：可以获取鼠标指针的水平坐标
            clientY：可以获取鼠标指针的垂直坐标
         */

        //获取坐标
        var x = event.clientX;
        var y = event.clientY;

        //在showMsg中显示鼠标的坐标
        showMsg.innerHTML = "x = " + x + ", " + "y = " + y + "。";
    };

};