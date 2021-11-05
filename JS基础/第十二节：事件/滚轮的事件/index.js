window.onload = function () {

    /*
        当滚轮向下滚动时，box边长
        当滚轮向上滚动时，box变短
     */
    //获取box对象
    var box = document.getElementById("box");

    //为box绑定一个鼠标滚轮事件
    /*
        onmousewheel鼠标滚轮滚动事件，会在滚轮滚动时触发，但是火狐不支持该属性，在火狐中需要使用DOMMouseScroll来绑定
        滚动事件，注意该事件需要通过addEventListener()函数来绑定
     */
    box.onmousewheel = function (event) {
        event = event || window.event;

        //判断鼠标滚轮滚动的方向，可以用event.wheelDelta方法，向上滚动为正，向下滚动为负
        //event.detail方法为适配火狐浏览器而添加的
        //需要提前初始化该方法（不初始化也不错）
        event.wheelDelta = undefined;
        if (event.wheelDelta >0 || event.detail < 0){
            //向上滚，通过修改样式，使div变短
            box.style.height = box.clientHeight - 10 + "px";
        } else {
            //向下滚，通过修改样式，使div变长
            box.style.height = box.clientHeight + 10 + "px";
        }

        /*
            使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false，需要event来取消默
            认行为event.preventDefault()。为了同时使IE8支持该函数，需要下面该写法
         */
        event.preventDefault && event.preventDefault();

        /*
            当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为，如果不希望发生，则可以取消默认行为
         */
        return false;

    };

    //为解决兼容性问题，用函数的形式传递写，而不是直接写方法或函数
    bind(box, "DOMMouseScroll", box.onmousewheel);

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