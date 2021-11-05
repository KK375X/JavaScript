window.onload = function () {

    //自动增加imgList的宽度，不把宽度写死
    //获取imgList对象
    var imgList = document.getElementById("imgList");

    //获取所有的img标签
    var imgArr = document.getElementsByTagName("img");

    //设置imgList的宽度
    imgList.style.width = 520*imgArr.length + "px";


    //设置导航点居中
    //获取navDiv对象
    var navDiv = document.getElementById("navDiv");

    //获取outer对象
    var outer = document.getElementById("outer");

    //设置navDiv的left值，使navDiv居中
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";


    //设置第一个导航点为选中状态
    //获取所有的a标签
    var aArr = document.getElementsByTagName("a");

    //显示默认图片的索引
    var index = 0;

    //设置默认选中的效果
    aArr[index].style.backgroundColor = "black";


    //点击超链接，切换到指定图片
    //为所有的超链接绑定单击响应函数
    for (var i=0; i<aArr.length; i++) {
        //为每一个超链接添加一个num属性，防止索引错误
        aArr[i].num = i;

        //为超链接绑定单击响应函数
        aArr[i].onclick = function () {
            //获取点击超链接的索引，并将其设置为index
            index = this.num;

            //切换图片，通过修改偏移量
            /*
                第一张：索引为0，偏移量为0
                第二张：索引为1，偏移量为-520
                第三张：索引为2，偏移量为-1040
                。。。。。。
             */
            // imgList.style.left = -520*index + "px";

            //调用修改导航点的焦点的方法
            setA();

            //调用move函数，实现图片的轮播
            move(imgList, "left", 50, -520*index, function () {

            });

        };
    }


    //创建一个方法，用来设置选中的导航点样式
    function setA() {

        //遍历所有的超链接导航点，并将背景颜色设置为红色
        for (var i=0; i<aArr.length; i++) {
            //内联样式设置为空，使用样式表的默认样式
            aArr[i].style.backgroundColor = "";
        }

        //将选中的超链接导航点设置为黑色
        aArr[index].style.backgroundColor = "black";
    }


    //开启自动切换图片
    autoChange();

    //创建一个函数，用来自动切换图片
    function autoChange() {

        //开启一个定时器，用于定时去切换图片
        setInterval(function () {

            //使索引自增
            index ++;

            //实现循环
            index %= imgArr.length;

            //执行动画，切换图片
            move(imgList, "left", 50, -520*index, function () {

                //修改导航点
                setA();

            })

        }, 3000);

    }


    /*
        设计一个函数，来执行向左或向右的动画
            - obj：要执行的动画对象
            - attr：要执行动画的样式，比如：left  top  width  height
            - speed：执行动画移动的速度
            - target：执行动画的目标位置
            - callback：回调函数，将会在动画执行完毕以后执行
     */
    function move(obj, attr, speed, target, callback) {

        //防止多次点击出现叠加效果
        clearInterval(obj.timer);

        //获取元素的位置
        var current = parseInt(getStyle(obj, attr));

        //判断速度的正负
        //如果从0到800移动，速度为正
        //如果从800到0移动，速度为负
        if (current > target) {
            //目标位置小于800
            speed = -speed;
        }

        //开启定时器
        //向执行动画的对象种添加一个属性，用来保存自己的定时器标识
        obj.timer = setInterval(function () {

            //获取box原来的left的值，parseInt()方法为取整
            var oldValue = parseInt(getStyle(obj, attr));

            //在旧值的基础上增加
            var newValue = oldValue + speed;

            //向左移动时，需要判断newValue是否小于target
            //向右移动时，需要判断newValue是否大于target
            if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target;
            }

            //将新值设置给box1
            obj.style[attr] = newValue + "px";

            //元素块到达目标位置，停止移动
            if (newValue === target) {
                clearInterval(obj.timer);

                //动画执行完毕，调用回调函数
                callback();
            }

        }, 30);

    }

};