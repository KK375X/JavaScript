window.onload = function () {

    /*
        拖拽box元素
            - 拖拽的流程
                - 1、当鼠标在被拖拽元素上按下时，开始拖拽（onmousedown）
                - 2、当鼠标移动时，被拖拽元素跟随鼠标移动（onmousemove）
                - 3、当鼠标松开时，被拖拽元素固定在当前位置（onmouseup）
     */
    //获取box
    var box = document.getElementById("box");

    //当鼠标在被拖拽元素上按下时，开始拖拽（onmousedown）
    box.onmousedown = function (event) {
        //解决兼容性问题
        event = event || window.event;

        /*
            div的偏移量 鼠标.clientX - 元素.offsetLeft
            div的偏移量 鼠标.clientY - 元素.offsetTop
         */
        var ol = event.clientX - box.offsetLeft;
        var ot = event.clientY - box.offsetTop;

        //为document绑定一个onmousemove
        document.onmousemove = function (event) {
            //解决兼容性问题
            event = event || window.event;

            //当鼠标移动时，被拖拽元素跟随鼠标移动（onmousemove）
            //获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改box的位置，实现div的移动效果
            box.style.left = left + "px";
            box.style.top = top + "px";

        };

        //为document绑定一个鼠标松开事件
        document.onmouseup = function () {
            //当鼠标松开时，被拖拽元素固定在当前位置（onmouseup）
            //取消document的onmousemove事件
            document.onmousemove = null;

            //取消document的onmouseup事件
            document.onmouseup = null;
        };

        /*
            当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，此时会导致拖拽功能的异常，这个是浏览器提
            供的默认行为，如果不希望发生这个行为，则可以通过return false来取消默认行为，但对IE8不支持。
         */
        return false;

    };

};