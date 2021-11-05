window.onload = function () {

    // alert(navigator.appName);

    /*
        Navigator
            - 代表当前浏览器的信息，通过该对象可以来识别不同的浏览器

            - 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了

            - 一般我们只会使用userAgent来判断浏览器的信息，userAgent是一个字符串， 这个字符串中包含有用来描述浏览
              器信息的内容，不同的浏览器会有不同的userAgent

            - 如果通过UserAgent不能判断，还可以通过一些浏 览器中特有的对象，来判断浏览器的信息
                比如: ActiveXObject

     */
    var ua = navigator.userAgent;

    if (/firefox/i.test(ua)) {
        alert("你是火狐");
    } else if (/chrome/i.test(ua)) {
        alert("你是Chrome");
    } else if (/msie/i.test(ua)  ||  "ActiveXObject" in window) {
        alert("你是IE");
    }

};
