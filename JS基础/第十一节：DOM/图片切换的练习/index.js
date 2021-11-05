/*
    - 要求：点击按钮，切换图片
 */
window.onload = function () {

    // 获取两个按钮
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    // - 要切换图片，就是修改img的src属性

    // 获取img标签
    var img = document.getElementsByTagName("img")[0];

    // 创建一个数组，用来保存图片的路径
    var imgArr = ["./image/1.jpg", "./image/2.jpg", "./image/3.jpg", "./image/4.jpg", "./image/5.jpg"];

    // 创建一个变量，用来保存图片的索引
    var index = 0;

    // 先调用函数，把缓存数据加载出来
    information(index);

    // 文字提示函数
    function information(index) {
        // 设置提示文字
        // 获取id为info标签对象
        var info = document.getElementById("info");
        info.innerHTML = "一共" + (imgArr.length) + "张图片，当前第" + (index+1) + "张！";
    }

    // 分别为两个单击按钮绑定单击响应函数
    //上一张
    prev.onclick = function () {
        // 要修改一个元素的属性，就是 元素.属性 = 属性值;
        // 切换到上一张，index自减
        if (index === 0) {
            index = imgArr.length-1;
        } else {
            index--;
        }
        // 修改图片路径
        img.src = imgArr[index];
        // 调用函数，显示文字提示信息
        information(index);
    };

    //下一张
    next.onclick = function () {
        // 切换到下一张，index自减
        if (index === (imgArr.length-1)) {
            index = 0;
        } else {
            index++;
        }
        // 修改图片路径
        img.src = imgArr[index];
        // 调用函数，显示文字提示信息
        information(index);
    };

};