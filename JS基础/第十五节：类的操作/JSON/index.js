window.onload = function () {

    /*
        JSON
            - JS中的对象只有JS认识，其他语言都不认识

            - JS就是一个特殊格式的字符串，这个字符串可以被任意的语言识别，并且可以转换成任意语言的对象，JSON在开发中
              主要用来数据的交互

            - JSON
                - JS对象表示法（JavaScript  Object  Notation）
                - JSON和JS对象的格式一样，但是JSON字符串中的属性名必须加双引号，其他的和JS一致

            - JSON分类
                - 1、对象 {}
                - 2、数组 []

            - JSON中允许的值
                - 1、字符串
                - 2、数值
                - 3、布尔值
                - 4、null
                - 5、对象（不包括函数对象）
                - 6、数组
     */

    //创建一个JSON对象
    var obj = '{"name": "孙悟空", "age": 20, "gender": "男"}';

    //创建一个JSON数组
    var arr = '[1, 2, 3, "hello", true]';


    /*
        - 将JSON中的字符串转换成JS的对象
            - 在JS中，为我们提供了一个工具类，就叫JSON，这个对象可以将JSON转换为JS对象，也可以将JS对象

        - JSON --> JS对象
            - JSON.parse()
                - 可以将JSON字符串转换为JS对象
                - 需要一个JSON对象作为参数，会将该字符串转换为JS对象
     */
    var jsObject = JSON.parse(obj);
    console.log(jsObject);


    //创建一个JS对象
    var obj2 = {name: "猪八戒", age: 20, gender: "男"};

    /*
        JS对象 --> JSON
            - JSON.stringify()
            - 可以将一个JS对象转换成JSON字符串
            - 需要一个JS对象作为参数，会返回一个JSON字符串
     */
    var str = JSON.stringify(obj2);
    console.log(str);


};























