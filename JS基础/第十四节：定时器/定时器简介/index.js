window.onload = function () {

    //获取count
    var count = document.getElementById("count");

    //使count中的内容自动切换
    /*
        setInterval()：定时调用
            - 可以将一个函数，每隔一段时间执行一次

            - 参数：
                - 1、需要被调用的函数
                - 2、每次调用间隔的时间，单位：毫末（1000毫秒 == 1秒）

            - 返回值：该方法会返回一个Number类型的返回值
                - 这个数字作为该定时器的唯一标识
                - 通过该返回值，可以调用clearInterval()方法关闭该计时器
                    - 参数：该定时器的返回值作为参数
     */
    var num = 1;
    var flag = setInterval(function () {
        num ++;
        count.innerHTML = num;
        if (num === 20) {
            //关闭浏览器
            clearInterval(flag);
        }
    }, 500);

};