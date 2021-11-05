window.onload = function () {

    //获取box和btn
    var box1 = document.getElementById("box1");
    var btn = document.getElementById("btn");

    //为btn绑定单击响应事件
    btn.onclick = function () {

        //修改box样式
        /*
            通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面这样的执行的性能
            是比较差的，而且这种形式当我们要修改多个样式时，也不太方便
         */
        /*
            box.style.backgroundColor = "blue";
            box.style.width = "200px";
            box.style.height = "200px";
        */


        //我们希望一行代码，同时修改多个样式
        /*
            - 修改box的class属性来间接修改样式，只需修改一次，就可同时修改多个样式，浏览器只需重新渲染
            一次页面即可，性能比较好
         */
        // box1.className = "b2";

        //加 class属性的写法，一定要加空格
        // box1.className += " b2";

        //调用函数的写法，添加一个类
        // addClass(box1, "b2");

        //移除一个类
        // removeClass(box1, "b2");

        //判断class属性中是否含有cn
        // hasClass(box1, "b2");

        //toggleClass方法，含有则删除，没有则添加
        toggleClass(box1, "b2");

    };

};


/*
    定义一个函数，用来向一个元素中添加指定的class属性值
        - obj：要添加属性的元素
        - cn：要添加的属性值
 */
function addClass(obj, cn) {
    //检查obj中是否含有cn，如果有就不添加，没有则添加
    if (!hasClass(obj, cn)) {
        obj.className +=  " " + cn;
    }
}


/*
    定义一个函数，判断一个元素中是否含有指定的class属性值
        - obj：要添加属性的元素
        - cn：要添加的属性值
 */
function hasClass(obj, cn) {
    //判断obj中有没有cn，有：返回true；没有：返回false
    //创建一个正则表达式，\b为单词边界
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}


/*
    删除一个元素中指定的class属性
 */
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    //删除class属性值，用空串代替
    obj.className = obj.className.replace(reg, "");

}


/*
    toggleClass可以用来切换一个类
        - 如果元素中有该类，则删除
        - 如果元素中没有该类，则添加
 */
function toggleClass(obj, cn) {
    //判断obj中是否含有cn
    if (hasClass(obj, cn)) {
        //obj中含有cn，删除obj中的cn
        removeClass(obj, cn);
    } else {
        //obj中没有cn。添加cn到obj中
        addClass(obj, cn);
    }

}