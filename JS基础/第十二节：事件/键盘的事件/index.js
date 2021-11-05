window.onload = function () {

    /*
        - 键盘事件：
            - onkeydown：按键被按下，如果不松手，会一直处于触发状态
            - onkeyup：按键被松开
            - 键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document
     */
    document.onkeydown = function (event) {
        event = event || window.event;

        /*
            可以通过keyCode来获取按键的编码，通过它可以判断哪个按键被按下

            除了keyCode，事件对象中还提供了其他属性
                - altKey
                - ctrlKey
                - shiftKey
                    - 这三个属性分别判断alt、ctrl、shift是否被按下，如果被按下返回true，否则返回false
         */
        //判断一个“y”（89）是否被按下
        // if (event.keyCode === 89) {
        //     alert("y被按下！");
        // }

        //判断一个“y”（89）和ctrl是否同时被按下
        if (event.keyCode === 89 && event.ctrlKey) {
            alert("ctrl和y都被按下！");
        }

    };

    // document.onkeyup = function () {
    //     alert("按键被松开");
    // };


    //获取input
    var input = document.getElementsByTagName("input")[0];

    //绑定键盘事件函数
    input.onkeydown = function (event) {
        event = event || window.event;

        //要求：文本框中不能输入数字（48~57）
        if (event.keyCode >= 48 && event.keyCode <= 57) {
            /*
                在文本框中输入内容，是onkeydown的默认行为，如果取消默认行为，则输入的内容不会出现在文本框中
             */
            return false;
        }
    };

};