window.onload = function () {

    /*
        事件的冒泡（Bubble）
            - 所谓的事件冒泡就是指事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
            - 在开发中大部分冒泡都是有用的，如果不希望发生事件冒泡，可以通过事件对象来取消事件冒泡
     */

    //为s1绑定一个单击响应函数
    var s1 = document.getElementById("s1");
    s1.onclick = function (event) {
        event = event || window.event;
        alert("我是span的单击响应函数！");

        //取消冒泡
        //可以将事件对象的cancelBubble设置为true，即可取消时间冒泡
        event.cancelBubble = true;
    };

    //为box绑定一个单击响应函数
    var box = document.getElementById("box");
    box.onclick = function (event) {
        event = event || window.event;
        alert("我是box的单击响应函数！");

        //取消冒泡
        //可以将事件对象的cancelBubble设置为true，即可取消事件冒泡
        event.cancelBubble = true;
    };

    //为body绑定一个单击响应函数
    document.onclick = function (event) {
        event = event || window.event;
        alert("我是body的单击响应函数！");

        //取消冒泡
        //可以将事件对象的cancelBubble设置为true，即可取消事件冒泡
        event.cancelBubble = true;
    };

};