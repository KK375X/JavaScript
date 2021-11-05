window.onload = function () {

    /*
        要求：使图片可以自动切换
     */
    //获取img标签
    var img = document.getElementById("img");

    //创建一个数组，来保存image图片的路径信息
    var imgArr = ["image/1.png", "image/2.png", "image/3.png", "image/4.png", "image/5.png"];

    //获取“开始自动切换”和“关闭自动切换”按钮
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    //绑定单击响应事件
    //定义是否开始标志和索引
    var flag;
    var index = 0;
    btn1.onclick = function () {
        /*
            - 缺点：目前，我们每点击一次按钮，就会开启一个定时器，点击多次就会开启多个定时器，这就导致图片的切换速
                         度过快，并且我们只能关闭最后一次开启的定时器

            - 解决方法：在开启定时器前，将上一个定时器关闭
         */
        clearInterval(flag);

        flag = setInterval(function () {
            //索引自增和修改索引
            index++;
            index %= imgArr.length;

            //修改目录路径
            img.src = imgArr[index];
        }, 1000);
    };

    btn2.onclick = function () {
        clearInterval(flag);
    };

};

