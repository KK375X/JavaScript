window.onload = function () {

    /*
        Location
            - 该对象中封装了地址栏的信息
     */
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function () {
        //直接打印location，获取当前地址栏的完整路径
        alert(location);
    };

    var btn2 = document.getElementById("btn2");
    btn2.onclick = function () {
        /*
            如果将location属性修改为一个完整的路径或者相对路径，则页面会自动跳转到该路径的页面，并且生成历史记录
         */
        location = "http://www.baidu.com";
    };

    var btn3 = document.getElementById("btn3");
    btn3.onclick = function () {
        /*

            assign()：用来跳转到其他页面，作用和直接修改location一样
         */
        location.assign("http://www.baidu.com");
    };

    var btn4 = document.getElementById("btn4");
    btn4.onclick = function () {
        /*
            reload()：重新加载当前页面，作用和刷新按钮一样
                - 参数true：表示强制清空缓存
         */
        location.reload(true);
    };

    var btn5 = document.getElementById("btn5");
    btn5.onclick = function () {
        /*
            replace()：可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，不能回退，不会生成历史记录
         */
        location.replace("http://www.baidu.com");
    };

};