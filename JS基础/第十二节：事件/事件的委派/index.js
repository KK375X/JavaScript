window.onload = function () {

    //点击按钮之后添加超链接
    //获取btn按钮和u1父节点
    var u1 = document.getElementById("u1");
    var btn = document.getElementById("btn");
    btn.onclick = function () {
        //创建一个li
        var li = document.createElement("li");
        li.innerHTML = "<a href='javascript:;' class='link'>新建的超链接</a>";

        //将li添加到u1中
        u1.appendChild(li);
    };


    //为每一个超链接都绑定一个单击响应函数
    /*
        这里我们为每个事件都添加了单击响应函数，这种操作比较麻烦，而且这些操作只能为已有的超链接设置事件，而新
        添加的超链接必须重新绑定
     */
    var allA = document.getElementsByTagName("a");

    //遍历
    // for (var i=0; i<allA.length; i++) {
    //     allA[i].onclick = function () {
    //         alert("我是a的单击响应函数！");
    //     };
    // }

    /*
        我们希望只绑定一次事件，即可应用到多个元素上，即使元素是后添加的。我们可以尝试将其绑定给元素的共同的祖先元素
            - 冒泡的应用：单击响应事件会从a标签冒到li标签，再冒到ul标签

        - 事件的委派：将事件统一绑定给元素的共同的祖先元素，这样当后代元素触发时，会一直冒泡到祖先元素，从而通过祖先
                     元素的响应函数来处理事件

        - 事件的委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
     */
    //为u1绑定一个单击响应函数
    u1.onclick = function (event) {
        event = event || window.event;

        /*
            target：event中的target表示的触发事件的对象
         */

        //如果触发事件的对象是我们期望的元素就执行，否则就不执行
        if (event.target.className === "link") {
            alert("我是ul标签里的一个超链接");
        }
    };

};