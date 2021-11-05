window.onload = function () {

    //分别为三个div绑定单击响应事件
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");

    bind(box1, "click", function () {
        alert("我是box1的单击响应函数");
    });
    bind(box2, "click", function () {
        alert("我是box2的单击响应函数");
    });
    bind(box3, "click", function () {
        alert("我是box3的单击响应函数");
    });

    /*
        事件的传播分为三个阶段
            - 1.捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
            - 2.目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件
            - 3.冒泡阶段：事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件

     */
};

/*
    解决浏览器兼容性问题，需要使用自定义函数
        参数：
            - obj：要绑定事件的对象
            - eventStr：事件的字符踹（不要on）
            - callback：回调函数
*/
function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
        //大部分浏览器兼容的方式
        obj.addEventListener(eventStr, callback, false);
    } else {
        //this是谁由调用函数决定，callback.call(obj)
        //IE8及以下
        obj.attachEvent("on"+eventStr, function () {
            //在匿名函数中调用回调函数
            callback.call(obj);
        });
    }
}