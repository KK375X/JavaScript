
window.onload = function () {

    //点击btn01按钮，修改box01的大小
    //获取box01和btn01
    var box1 = document.getElementById("box1");
    var btn01 = document.getElementById("btn01");
    //为btn01绑定单击响应函数
    btn01.onclick = function () {
        //修改box01的宽度和高度
        /*
            通过JS修改元素的样式
                - 语法：元素.style.样式名 = 样式值;

                - 注意：如果样式名中含有“-”号，需要将这种样式名修改为驼峰命名（去掉减号，减号后第一个字母大写）

                - 通过style属性设置的样式都是内联样式，内联样式具有较高的优先级，所以会立即生效

                - 如果在样式中写了！important，则此时样式会有最高的优先级，即使通过JS也不能覆盖样式，此时将会
                  导致JS修改样式失效。
         */
        box1.style.width = "300px";
        box1.style.height = "300px";
        box1.style.backgroundColor = "blue";
    };


    //点击btn02按钮，读取内联样式中元素的样式信息
    var btn02 = document.getElementById("btn02");
    btn02.onclick = function () {
        /*
            通过JS读取元素的样式信息
                - 语法：元素.style.样式名;

                - 注意：通过style属性设置和读取的都是内联样式，无法读取样式表中的样式
        */
        alert(box1.style.width);
    };


    //点击btn03按钮，读取样式表中元素的样式信息
    var btn03 = document.getElementById("btn03");
    btn03.onclick = function () {

        //读取样式表中的宽度
        /*
            通过JS读取元素的宽度
                - 语法：元素.currentStyle.样式名;

                - 读取当前元素正在显示的样式信息

                - 注意：谷歌不支持该方法，只有IE支持
                        在其他浏览器中可以使用getComputedStyle()方法来获取当前的样式，是window的方法，可以直接调用

                - getComputedStyle()：需要两个参数
                    - 第一个，要获取样式的元素
                    - 第二个：可以传递一个伪元素，一般都传null
                    - 该方法会返回一个对象，该对象封装了当前元素的样式信息
                    - 语法：对象.样式名
                    - 如果获取的样式没有设置，则会获取到真实值，而不是默认值
         */
        // alert(box1.currentStyle.width);  只支持IE浏览器写法
        // var obj = getComputedStyle(box1, null);  支持所有浏览器写法
        // alert(obj.width+", "+obj.height+", "+obj.backgroundColor);

        //通过调用函数的形式获取样式信息
        alert(getStyle(box1, "width"));
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

