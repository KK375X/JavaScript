window.onload = function () {
    //绑定inner，box1和box2样式
    var inner = document.getElementById("inner");
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    //获取btn按钮
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    var btn03 = document.getElementById("btn03");
    var btn04 = document.getElementById("btn04");
    var btn05 = document.getElementById("btn05");

    //绑定单击响应函数
    //以下介绍的这些属性都是只读的，不能修改
    btn01.onclick = function () {
        /*
            clientWidth
            clientHeight
                - 这两个属性可以获取元素的可见高度和宽度
                - 返回值没有px（不是字符串），是数值，可以直接计算
                - 会获取元素的宽度和高度，包括内容区和内边距

         */
        alert(inner.clientWidth+", "+inner.clientHeight);
    };

    btn02.onclick = function () {
        /*
            offsetWidth
            offsetHeight
                - 可以获取元素的整个的宽和高，包括内容区、内边距和边框
         */
        alert(inner.offsetWidth+", "+inner.offsetHeight);
    };

    btn03.onclick = function () {
        /*
            offsetParent
                - 可以获取当前元素的定位元素
                - 会获取到离当前元素最近的，开启定位的祖先元素
                - 如果所有的祖先元素都没有开启定位，则返回body
         */
        var op = inner.offsetParent;
        alert(op);
    };

    btn04.onclick = function () {
        /*
            offsetLeft：当前元素相对于定位父元素的水平偏移量
            offsetTop：当前元素相对于定位父元素的垂直偏移量
         */
        alert(inner.offsetLeft+", "+inner.offsetTop);
    };

    btn05.onclick = function () {
        /*
            scrollWidth：滚动条的滚动宽度最大值
            scrollHeight：滚动条的滚动高度最大值
         */
        alert(box1.scrollWidth+", "+box1.scrollHeight);
    };

    /*
        以下方法和上述方法类似，只做简单阐述
            - scrollLeft：可以获取水平滚动条滚动的距离
            - scrollTop：可以获取垂直滚动条滚动的距离
            - 当scrollHeight - scrollTop == clientHeight时，说明垂直滚动条到底了
            - 当scrollWidth - scrollLeft == clientWidth时，说明水平滚动条到底了
     */
};