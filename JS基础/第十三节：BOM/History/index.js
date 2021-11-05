window.onload = function () {

    /*
        History
            - 对象可以用来操作浏览器向前或者向后翻页
     */

    var btn1 = document.getElementById("btn1");
    btn1.onclick = function() {
        /*
            length：可以获取到当前访问的链接数量
         */
        alert(history.length);
    };

    var btn2 = document.getElementById("btn2");
    btn2.onclick = function () {
        /*
            back()：可以用来回退到上一个页面，作用和浏览器的回退按钮一样
         */
        history.back();
    };

    var btn3 = document.getElementById("btn3");
    btn3.onclick = function () {
        /*
            forward()：可以跳转到下一个页面，作用和浏览器的前进按钮一样
         */
        history.forward();
    };

    var btn4 = document.getElementById("btn4");
    btn4.onclick = function () {
        /*
            go()：可以跳转到指定的页面
                - 参数
                    - 1、向前跳转一个页面
                    - 2、向前跳转两个页面
                    - -1、向后跳转一个页面
                    - -2、向后跳转两个页面
                    。。。。。。
         */
        history.go(2);
    };

};