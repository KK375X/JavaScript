window.onload = function () {

    /*
        延时调用
            - 调用的函数不立马执行，而是隔一段时间以后再执行，而且只会执行一次
     */
    var timer = setTimeout(function () {
        alert("已经过了三秒种了，我被延时调用了")
    }, 3000);

    //使用clearTimeout()关闭延时调用
    clearTimeout(timer);

};