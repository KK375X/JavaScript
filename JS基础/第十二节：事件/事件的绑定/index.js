window.onload = function () {

    //获取btn1按钮
    var btn1 = document.getElementById("btn1");

    //为btn按钮绑定一个单击响应函数
    btn1.onclick = function () {
        alert("1");
    };
    //为btn按钮再绑定一个单击响应函数
    btn1.onclick = function () {
        alert("2");
    };
    /*
        - 使用 对象.事件 = 函数 的形式绑定响应函数，它只能同时为一个元素的一个事件绑定一个响应函数，不能绑定多个，如果
          绑定了多个，则后面的函数会覆盖掉前面的函数
     */

    /*
        addEventListener()
            - 通过这个方法也可以为元素绑定响应函数
            - 参数：
                - 1、事件的字符串，不需要带前缀on
                - 2、回调函数，当事件被触发时该函数被调用
                - 3、是否在捕获阶段触发事件，需要一个布尔值，一般都传false
            - 使用该方法可以同时为一个元素的相同事件绑定多个响应函数，这样当事件被触发时，响应函数将会按照函数的绑
              定顺序执行
     */
    //获取btn2按钮
    var btn2 = document.getElementById("btn2");

    //绑定新的单击事件函数
    btn2.addEventListener("click", function () {
        alert("1");
    }, false);
    btn2.addEventListener("click", function () {
        alert("2");
    }, false);
    btn2.addEventListener("click", function () {
        alert("3");
    }, false);

    /*
        attachEvent()
            - 在IE8中可以使用attachEvent()来绑定事件
            - 参数：
                - 1、事件的字符串，要加上on
                - 2、回调函数
            - 这个方法也可以为一个事件同时绑定多个处理函数，不同的是它是先执行后绑定，执行顺序和addEventListener()
              相反
     */
    //获取btn2按钮
    var btn3 = document.getElementById("btn3");

    //绑定新的单击事件函数
    btn3.attachEvent("onclick", function () {
        alert("1");
    });
    btn3.attachEvent("onclick", function () {
        alert("2");
    });
    btn3.attachEvent("onclick", function () {
        alert("3");
    });

};