## 第一节：JS基础知识

### 1、JS的HELLO  World

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <!-- JS代码需要编写在script标签中 -->
    <script type="text/javascript">
        // 控制浏览器弹出警告框
        // alert("Hello world！")

        // 在页面中输出一个内容
        // document.write("看我出不出来！！！")

        // 向控制台输出一个内容
        // console.log("你猜我出现在哪里？？")
    </script>

</head>
<body>

</body>
</html>
```



### 2、JS的基本语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

    <!--
        - JS中严格区分大小写
        - JS中每一条语句以分号结尾
        - JS中会忽略多个空格和换行，所以我们可以格式化代码，使其更美观
    -->
    <script type="text/javascript"></script>

</head>
<body>

</body>
</html>
```



### 3、JS的编写位置

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <!-- 外部引入JS代码 -->
    <!--
        script标签一旦引入了外部文件，就不能在编写代码了，即使编写了也会被浏览器忽略。
        如果需要，可以再写一个script标签
    -->
    <script type="text/javascript" src="index.js"></script>
    <script>
        alert("我是内部的弹出框")
    </script>

</head>
<body>

</body>
</html>
```

```javascript
alert("看我弹没弹出来！！！");
```



### 4、JS的变量和自变量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script>
        /*
            - 字面量：不可改变的值
                - 比如：123，456，789
                - 字面量都是可以直接使用的，但是我们不会直接使用字面量
            - 变量：变量可以保存字面量，而且变量的值也是随时可以改变的
                - 比如：x=123
         */

        // 声明变量：用var关键字声明一个变量
        var x = 123;
        alert(x)
    </script>

</head>
<body>

</body>
</html>
```



### 5、JS的标识符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 标识符
                 - 在JS中所有的自主命名变量都是标识符
                 - 标识符需要遵循的规则：
                    - 1、标识符中可以含有字母、_、$
                    - 2、标识符不能以数字开头
                    - 3、标识符不能是关键字或者保留字
         */
        var x = 123;
        alert(x);

    </script>

</head>
<body>

        
</body>
</html>
```



## 第二节：JS的数据类型

### 1、字符串

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 数据类型指的是变量的类型
                - String      字符串   基本数据类型
                - Number      数值     基本数据类型
                - Boolean     布尔值   基本数据类型
                - Null        空值     基本数据类型
                - Undefined   未定义   基本数据类型
                - Object      对象     基本数据类型
         */
        var str = 'Hello world!!!!';
        console.log(str);

    </script>
</head>
<body>

</body>
</html>
```



### 2、Number

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript ">
        /*
            - Number:包括整数和浮点数

            - 可以使用运算符typeof来检查变量的类型
                - 语法：typeof 变量名

            - JS中可以表示的数字的最大值 Number.MAX_VALUE(1.7976931348623157e+308)
                - 如果使用Number表示的数字超过了最大值，则会返回一个Infinity表示正无穷，反之，表示负无穷

            - JS中可以表示的数字的最小值 Number.MIN_VALUE(5e-324)

            - NaN是一个特殊的数字，表示Not A Number
         */
        var a = 123;
        var b = '123';

        alert(typeof a);
        alert(typeof b);
    </script>

</head>
<body>

</body>
</html>
```



### 3、布尔值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - Boolean布尔值：用来逻辑判断
                - true
                - false
         */
        var bool = true;

        alert(bool)

    </script>

</head>
<body>

</body>
</html>
```



### 4、Null和Underfined

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - Null类型的值只有一个，就是null
                - null这个值专门用来表示一个为空的对象
                - 使用typeof检查一个null值时，会返回Object

            - Undefined类型的值只有一个，就是Undefined
         */
        var a = null;

        alert(a)
    </script>

</head>
<body>

</body>
</html>
```



## 第三节：JS的强制类型转换

### 1、转换为String

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 强制类型转换
                - 指将一个数据类型强制转换成其他的数据类型

            - 将其他类型转换成String
                - 方法一：使用toString()方法，不会影响原变量，只会返回转型后的值
                    - 示例：xxx.toString()

                - 方法二：调用String()函数，转换数据作为参数传入（推荐使用）
                    - 示例：String(xxx)
         */
    </script>

</head>
<body>

</body>
</html>
```



### 2、转换为Number

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 将其他的数据类型转换为Number
                - 方法一：使用Number()函数，将需要转换的数据作为参数传入
                    - 示例：Number(xxx)

                    - 字符串  -->  数字
                        - 纯数字的字符串，直接转换成数字
                        - 字符串中含有非数字的内容，转换成NaN
                        - 字符串是一个空串或者全是空格，转换为0

                    - 布尔值  -->  数字
                        - true   转换成  1
                        - false  转换成  0

                    - Null  -->  数字(0)

                    - Undefined  -->  数字(NaN)


                - 方法二：专门用来转换字符串
                    - parseInt()：把一个字符串转化成一个整数
                        - 将字符串中有效的整数部分提取出来，然后进行转换。一旦碰到非数字位数，则停止转换，无论后面是否还有整数部分

                    - parseFloat()：把一个字符串转化成一个浮点数
                        - 和parseInt()类似，但是它可以处理有效的小数

                   - 如果对非String使用parseInt()或parseFloat()，它会先将其转换成String，然后再操作
         */
    </script>

</head>
<body>

</body>
</html>
```



### 3、转换为Boolean

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 将其他数据类型转换为Boolean
                - 使用Boolean()函数
                    - 数字  -->  布尔
                        除了0和NaN，其余的都是true

                    - 字符串  -->  布尔
                        除了空串，其余的都是true

                    - Null和Undefined  -->  false

                    - 对象  -->  true
         */
    </script>

</head>
<body>

</body>
</html>
```





### 4、其他进制的数字

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 在JS中，用0x开头表示16进制的数字
                - 示例：var a = 0x10     -->    输出：16

            - 在JS中，用0开头表示8进制的数字
                - 示例：var a = 070      -->    输出：56

            - 在JS中，用0b开头表示2进制的数字
                - 示例：var a = 0b10     -->    输出：2
                - 某些浏览器不支持，也用的很少
         */

        /*
            - 像“070”这种字符串，有些浏览器会当成8进制解析，有的会当成10进制解析
                - 可以在parseInt()中传递第二个参数，来指定数字的进制
         */
        var a = "070";
        var b = "070";
        a = parseInt(a, 8);
        b = parseInt(b, 10);
        console.log(a);
        console.log(b);
    </script>

</head>
<body>

</body>
</html>
```



## 第四节：运算符

### 1、算数运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 运算符：对一个或多个值进行算数运算，并返回一个结果
                - +（加）：都是数字则相加；都是字符串则拼接；任何值和字符串做加法运算，都会先转换成字符串，然后再和字符串做拼接
                - -（减）：对两个值进行减法运算；任何值和字符串做减法运算，字符串都会转换成Number，再做减法运算
                - *（乘）：对两个值进行乘法运算
                - /（除）：对两个值进行除法运算
                - %（取余）：对值进行取余运算

            - 注意事项：
                - 任何值和NaN做运算都得NaN
                - 任何值做 + 运算都会先转换成字符串，然后拼接
                - 任何值做 -、*、/ 运算时都会自动转换成Number
         */
        var a = 123;
        var result = a + 1;
        console.log(typeof result);
        console.log(result);
    </script>

</head>
<body>

</body>
</html>
```



### 2、一元运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 一元运算符：只需要一个值就可以进行运算
                - +（正号）
                - -（负号）

            - 对于非Number类型的值
                - 他会先转换成Number，然后再做运算
                - 可以对一个其他的数据类型使用 + ，来将其转换成Number
                - 它的原理和Number()函数一样
         */
        var a = +123;
        var b = -123;
        console.log("a = " + a);
        console.log("b = " + b);
    </script>

</head>
<body>

</body>
</html>
```



### 3、自增和自减

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 自增运算符：++
                - 通过自增可以使变量在原来的基础上增加1
                - 对一个变量自增以后，原变量的值会立即自增1
                    - a++的值等于原变量的值（自增前的值）
                    - ++a的值等于新值（自增后的值）

            - 自减运算符：--
                - 通过自减可以使变量在自身的基础上减1
                    - a--的值等于原变量的值（自减前的值）
                    - --a的值等于新值（自减后的值）
         */
        var a = 1;
        a = a + 1;
        console.log("a = " + a);

        // 练习
        var n1 = 10, n2 = 20;
        var n = n1++;
        console.log('n = ' + n);    //10
        console.log('n1 = ' + n1);  //11
        n = ++n1;
        console.log('n = ' + n);    //12
        console.log('n1 =' + n1);   //12
        n = n2--;
        console.log('n = ' + n);    //20
        console.log('n2 = ' + n2);  //19
        n = --n2;
        console.log('n = ' + n);    //18
        console.log('n2 = ' + n2);  //18

    </script>

</head>
<body>

</body>
</html>
```



### 4、逻辑运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - !:非
                - 对一个布尔值进行取反操作
                - 可以对任意数据类型取两次反，来将其转换成布尔值

            - &&：与
                - 对符号两侧的值进行“与”运算，并返回相应的结果
                - 一假都假，全真才真
                - 找false的
                    - 如果第一个值为true，则必然返回第二个值
                    - 如果第一个值为false，则直接返回第一个值

            - ||：或
                - 对符号两侧的值进行“或”运算，并返回相应的结果
                - 一假也真，全假才假
                - 找true的
                    - 如果第一个值为true，则直接返回第一个值
                    - 如果第一个值为false，则必然返回第二个值
         */
    </script>

</head>
<body>

</body>
</html>
```



### 5、赋值运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 赋值运算符：将左边的值赋值给右边的值
                - +：直接将左边的值赋值给右边

                - +=：将左边的值先做完加法运算，再赋值给右边

                - -=：将左边的值先做完减法运算，再赋值给右边

                - *=：将左边的值先做完乘法运算，再赋值给右边

                - /=：将左边的值先做完除法运算，再赋值给右边
         */
    </script>

</head>
<body>

</body>
</html>
```



### 6、关系运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 大于号：>

            - 大于等于：>=

            - 小于号：<

            - 小于等于：<=

            - 非数值的情况
                - 对于非数值的比较，会将其转换成数字，然后再比较
                - 如果符号两侧都是字符串时，不会将其转换成数字进行比较，而会将其转换成Unicode编码进行比较大小
         */
    </script>

</head>
<body>

</body>
</html>
```



### 7、相等运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 相等运算符 ==：用来比较两个值是否相等
                - 相等返回true，否则返回false
                - 当使用 == 来比较两个值时，如果值的类型不同，则会自动转换成相同的类型进行比较

            - 不相等运算符 !=：用来比较两个值是否不相等
                - 相等返回false，否则返回true
                - 不相等也会对变量进行自动的类型转换，如果转换后相等它也会返回false

            - 全等运算符 ===：用来判断两个值是否全等，和相等类似，但是它不会自动做类型转换
                - 如果两个值类型不同，直接返回false

            - 不全等运算符 !==：用来判断两个值是否不全等，和不等类似，但是它不会自动做类型转换
                - 如果两个值类型不同，直接返回true
         */

        /*
            - Undefined衍生自Null
                - 这两个值做相等判断时，会返回true

            - 注意：NaN不和任何值相等，包括它本身
                - 可以通过isNaN()函数来判断一个值是否是NaN
                - 相等和不相等都会做类型的自动转换，全等和不全等都不会自动做类型转换

         */
        console.log(undefined == null);     //相等返回true
        console.log(NaN == NaN);            //false
        console.log(undefined === null);    //全等但不相等返回false
        console.log(1 !== '1')              //不全等返回true
    </script>

</head>
<body>

</body>
</html>
```



### 8、条件（三元)运算符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 条件运算符：也叫三元运算符
                - 语法：条件表达式 ？ 语句1 ： 语句2;
                
                - 执行流程
                    - 1、条件运算符在执行时，首先对条件表达式进行求值
                    - 2、如果该值为true，则执行语句1，并返回执行结果
                    - 3、如果该值为false，则执行语句2，并返回执行结果
                    
                - 如果条件的表达式的求值结果是一个非布尔值，会将其转换成布尔值后计算
         */
        var a = 10;
        var b = 20;
        var result = a > b ? a : b;
        alert("result =" + result)
    </script>

</head>
<body>

</body>
</html>
```



## 第五节：流程控制语句

### 1、if条件判断语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">

        /*
            - 语法一：
                if(条件表达式)
                    语句;
         */
        var a = 10;
        if (a > 1)
            alert("你猜我出来吗？？");


        /*
            - 语法二：
                if(条件表达式) {
                    语句。。。。
                } else {
                    语句。。。。
                }
         */
        var age = 50;
        if (age >= 60) {
            alert("您已经退休了！！！")
        } else {
            alert("您还没有退休！！！")
        }


        /*
            - 语法三:
                if(条件表达式) {
                    语句。。。。
                } else if(条件表达式) {
                    语句。。。。
                } else if(条件表达式) {
                    语句。。。。
                } else{
                    语句。。。。
                }

            - 该语句中只有一个代码块被执行，一旦有一个代码块被执行，则下面的代码块都不会被执行
         */


    </script>

</head>
<body>

</body>
</html>
```



```html
<!-- 练习 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>text</title>

    <script type="text/javascript">
        /*
            - prompt()函数：
                - 作用：弹出一个文本框，用户可以输入字符串类型的数据，该字符串会作为提示框的提示文字

                - 返回值类型：String类型，所以要在前面加个 + 号进行类型转换

                - 语法：var str = prompt("xxx");
        */

        /*
            - 题目一：
                从键盘输入小明的期末成绩:
                当成绩为100时，'奖励一辆BMW'
                当成绩为[80-99]时，奖励一台iphone15s'
                当成绩为[60-80]时，‘奖励一本参考书'
                其他时，什么奖励也没有
        */
        var score = prompt("请输入小明的期末成绩：");
        if (score == 100) {
            alert("奖励一辆BMW");
        } else if (score >= 80 && score <=99) {
            alert("奖励一台iphone15s");
        } else if (score >= 60 && score <80) {
            alert("奖励一本参考书")
        } else {
            alert("什么奖励也没有")
        }


        /*
            - 题目二：
                编写程序，由键盘输入三个整数分别存入变量num1、num2、 num3,
                对他们进行排序，并且从小到大输出。
         */
        /* 加个加号进行类型转换 */
        var num1 = +prompt("请输入num1");
        var num2 = +prompt("请输入num2");
        var num3 = +prompt("请输入num3");
        var min, m, max;
        if (num1 > num2 && num1 > num3) {
            max = num1;
            if (num2 > num3) {
                m = num2;
                min = num3;
            } else {
                m = num3;
                min = num2;
            }
        } else if (num2 > num1 && num2 > num3) {
            max = num2;
            if (num1 > num3) {
                m = num1;
                min = num3;
            } else {
                m = num3;
                min = num1;
            }
        } else if (num3 > num1 && num3 > num2) {
            max = num3;
            if (num1 > num2) {
                m = num1;
                min = num2;
            } else {
                m = num2;
                min = num1;
            }
        }
        alert("最小值为：" + min + "；其次为：" + m + "；最大值为：" + max + "。");

    </script>

</head>
<body>

</body>
</html>
```



### 2、switch条件分支语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 条件分支语句也叫switch语句
                - 原理：在执行时依次将case后的表达式的值和switch后的条件表达式的值进行全等比较。如果为true，此执行该处代码，反之继续往下比较。

                - 语法：
                    switch(条件表达式) {
                        case 表达式:语句....;break;
                        case 表达式:语句....;break;
                        case 表达式:语句....;break;
                        default:语句....;break;
                    }
         */
        var num = 1;
        switch (num) {
            case 1:alert("壹");break;
            case 2:alert("贰");break;
            case 3:alert("叁");break;
            default:alert("无匹配数据");break;
        }

    </script>

</head>
<body>

</body>
</html>
```



```html
<!-- 练习 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>text</title>

    <script type="text/javascript">
        /*
            - 练习一：
                从键盘接收整数参数，如果该数为1-7,打印对应的星期，否则打印非法参数。
         */
        var num = +prompt("请输入一个数字：");
        switch (num) {
            case 1:alert("星期一");break;
            case 2:alert("星期二");break;
            case 3:alert("星期三");break;
            case 4:alert("星期四");break;
            case 5:alert("星期五");break;
            case 6:alert("星期六");break;
            case 7:alert("星期日");break;
            default:alert("非法参数");break;
        }


        /*
            - 练习二：
                对于成绩大于60分的，输出'合格'，低于60分的， 输出'不合格'
         */
        var score = +prompt("请输入成绩：");
        switch (parseInt(score/10)) {
            case 6: case 7: case 8: case 9: case 10:alert("合格");break;
            case 0: case 1: case 2: case 3: case 4: case 5:alert("不合格");break;
            default:alert("非法参数");break;
        }


    </script>

</head>
<body>

</body>
</html>
```



### 3、while和do...while循环语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - while()循环：
                - 语法：while(条件表达式) {
                           语句。。。。
                       }
         */
        var i = 1;
        while (i <= 10) {
            alert(i++);
        }


        /*
            - do...while()循环：
                - 语法:do {
                          语句。。。。
                       } while(条件表达式);

                - 作用：和while()循环一样，但是保证了循环至少执行一次
         */
    </script>

</head>
<body>

</body>
</html>
```

```html
<!-- 练习 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>text</title>

    <script type="text/javascript">
        /*
            - 题目一：
                假如投资的几年利率为5%，试求从1000块增长到5000块，需要花费多少年
         */
        var money = 1000;
        var time = 0;
        while (money <= 5000) {
            money = money*1.05;
            time ++;
        }
        alert(time + "年。");


        /*
            - 题目二（可以重复输入）：
                从键盘输入小明的期末成绩:
                当成绩为100时，'奖励一辆BMW'
                当成绩为[80-99]时，奖励一台iphone15s'
                当成绩为[60-80]时，‘奖励一本参考书'
                其他时，什么奖励也没有
         */
        while (true) {
            var score = prompt("请输入小明的成绩：");
            // 判断输入的数据是否合法
            if (score >= 0 && score <= 100) {
                break;
            } else {
                alert("请输入有效的分数！");
            }
        }
        if (score == 100) {
            alert("奖励一辆BMW");
        } else if (score >= 80 && score <=99) {
            alert("奖励一台iphone15s");
        } else if (score >= 60 && score <80) {
            alert("奖励一本参考书")
        } else {
            alert("什么奖励也没有")
        }


    </script>

</head>
<body>

</body>
</html>
```



### 4、for循环语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - for()循环：
                - 语法：for(初始话表达式; 条件表达式; 更新表达式) {
                           语句....
                       }
         */
        for (var i=1; i<=10; i++) {
            alert(i);
        }
    </script>

</head>
<body>

</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>text</title>

    <script type="text/javascript">
        /*
            - 题目一：
                打印1-100之间所有奇数之和

            var sum = 0;
            for (var i=1; i<= 100; i+=2) {
                sum +=i;
            }
            alert("奇数之和为：" + sum);
         */


        /*
            - 题目二：
                打印1-100之间所有7的倍数的个数及总和

            var count = 0;
            var sum = 0;
            for (var i=1; i<=100; i++) {
                if (i % 7 == 0) {
                    count ++;
                    sum +=i;
                }
            }
            alert("个数为" + count + "，总和为" + sum);
         */


        /*
            - 题目三：
                水仙花数是指一个3位数，它的每个位上的数字的3次幕之和等于它本身。
                (例如:1^3+5^3+3^3=153),请打印所有的水仙花数。

            for (var i=100; i<1000; i++){
                var a = parseInt(i%10);
                var b = parseInt((i/10)%10);
                var c = parseInt(i/100);
                if (a*a*a + b*b*b + c*c*c == i) {
                    alert(i);
                }
            }
        */


        /*
            - 题目四：
                在页面中接收一个用户输入的数字，并判断该数是否是质数。
                质数:只能被1和它自身整除的数，1不是质数也不是合数，质数必须是大于1的自然数。
         */
        while (true) {
            var num = +prompt("请输入一个数字：");
            if (num <= 1) {
                alert("请输入大于1的数字！");
            } else {
                var flag = 1;
                for (var i=2; i<=num/2; i++) {
                    if (num % i == 0) {
                        flag = 0;
                        break;
                    }
                }
                if (flag == 1) {
                    alert(num + "是质数。");
                } else {
                    alert(num + "不是质数。");
                    break
                }
            }
        }

		
        /*
            - 题目：打印九九乘法表
         */
        for (var i=1; i<=9; i++) {
            for (var j=1; j<=i; j++) {
                document.write(j + "*" + i + "=" + i*j + "&nbsp&nbsp&nbsp");
            }
            document.write("<br/>");
        }
        
    </script>

</head>
<body>

</body>
</html>
```



### 5、break，continue和计时器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - break关键字
                - 作用：可以用来退出switch或循环语句

                - 作用范围：立即终止离它最近的那个循环语句

            - continue关键字
                - 作用：可以跳过当此循环

                - 作用范围：立即跳过离它最近的那个循环语句
         */


        /*
            - 可以为循环语句创建一个label，来标识当前的循环
                - 语法：label:循环语句

                - 使用方法：使用break语句时，可以在break后面跟一个label，这样break将会结束指定的循环语句

            outer:        //为循环语句设置label
            for (var i=1; i<=10; i++) {
                console.log("外层循环" + i);
                for (var j=1; j<=10; j++) {
                    break outer;    //直接终止指定的循环语句
                    console.log("内层循环" + j);
                }
            }
         */


        /*
            - 计时器：
                - console.time("计时器的名字")：可以用来开启一个计时器
                - console.timeEnd("计时器的名字")：可以用来终止一个计时器
                - 在开发者模式的控制器里可以看到计时器的数值
         */
        console.time("text");       //开启计时器
        for (var i=1; i<=9; i++) {
            for (var j=1; j<=i; j++) {
                document.write(j + "*" + i + "=" + i*j + "&nbsp&nbsp&nbsp");
            }
            document.write("<br/>");
        }
        console.timeEnd("text");    //终止计时器

    </script>

</head>
<body>

</body>
</html>
```



## 第六节：对象和属性

### 1、对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 对象的分类：
                - 1、内建对象
                    - 由ES标准中定义的对象，在任何的ES的实现中都可以使用
                    - 比如：Math，String，Number，Boolean。。。。

                - 2、宿主对象
                    - 由JS的运行环境提供的对象，目前来将主要指浏览器提供的对象
                    - 比如BOM，DOM

                - 3、自定义对象
                    - 由开发人员自己创建的对象
         */


        /*
            - 创建对象
                - 使用new关键字调用构造函数constructor
         */
        var obj = new Object();


        /*
            - 在对象中保存的值称为属性

            - 向对象中添加属性
                - 语法：对象.属性名 = 属性值;

         */

        //向obj中添加一个name属性
        obj.name = "孙悟空";
        //向obj中添加一个gender属性
        obj.gender = "男";
        //向obj中添加一个age属性
        obj.age = 18;

        console.log("创建后obj的值为" + obj);

        /*
            - 读取对象中的属性
                - 语法：对象.属性名;

                - 如果读取对象中没有的属性，不会报错而是会返回undefined
         */
        console.log("创建名称属性" + obj.name);
        console.log("创建性别属性" + obj.gender);
        console.log("创建年龄属性" + obj.age);


        /*
            - 修改对象的属性值
                - 语法：对象.属性值 = 新值;
         */
        obj.name = "Tom";
        console.log("修改对象的名称属性后为" + obj.name);


        /*
            - 删除对象的属性
                - 语法：delete 对象.属性名;
         */
        delete obj.name;
        console.log("删除对象的名称属性后为" + obj);

    </script>

</head>
<body>

</body>
</html>
```



### 2、属性和属性名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        var obj = new Object();

        /*
            - 属性名：
                - 对象的属性名不强制要求遵守标识符的规范

                - 如何想用特殊的属性名，需要另一种方式
                    - 语法：对象["属性名"] = 属性值;
                    - 使用[]这种形式操作属性，更加的灵活，可以直接在[]中传递一个变量，这样变量的值是多少就会读取那个属性
         */
        obj["123"] = 789;
        obj["nihao"] = "你好";

        var n = "123";
        console.log(obj["123"]);
        console.log(obj[n]);

        var n = "nihao";
        console.log(obj["nihao"]);
        console.log(obj[n]);


        /*
            - 属性值：
                - JS对象的属性值可以是任意的数据类型，甚至可以是一个对象
         */
        //创建一个对象
        var obj2 = new Object();
        obj2.name = "猪八戒";
        obj2.gender = "男";
        obj2.age = 18;

        //将obj2设置为obj的属性
        obj.test = obj2;

        console.log(obj.test);


        /*
            - in运算符：
                - 检查一个对象中是否有指定的属性，有则返回true，没有则返回false
                - 语法："属性名" in 对象;
         */
        //检查obj中是否有text2属性
        console.log("test" in obj);
        console.log("test2" in obj);
        
        
    </script>

</head>
<body>

</body>
</html>
```



### 3、基本数据类型和引用数据类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 基本数据类型：
                - String，Number，Boolean，Null，undefined

            - 引用数据类型：
                - Object
         */
        //设置两个变量a和b（基本数据类型）
        var a = 123;
        var b = a;
        console.log("a = " + a);
        console.log("b = " + b);


        //设置两个对象obj和obj2（引用数据类型）
        var obj = new Object();
        obj.name = "孙悟空";
        var obj2 = obj;
        obj.name = "猪八戒";       //修改obj的name属性，同时影响到了obj2的name属性，因为obj和obj2使用的都是obj的地址，obj2只是指向了那
        console.log(obj.name);
        console.log(obj2.name);


        /*
            - JS中的变量都是保存到栈内存中的
                - 基本数据类型的值直接在栈内存中存储，值与值之间是独立存在的，修改一个变量不会影响到其他变量

                - 对象是保存在堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是内存的地址（对象的引用），如果两个变量保存的是同一个变量的引用，当其中一个修改变量属性时，其他的也会受到影响

                - 当比较两个基本数据类型的值时，就是比较值。当比较两个引用数据类型时，比较的是对象的地址。
         */

    </script>


</head>
<body>

</body>
</html>
```



### 4、对象字面量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 使用对象字面量来创建一个对象
                - 优点：
                    - 可以直接在创建对象时，直接指定对象中的属性
                        - 语法：{属性名:属性值, 属性名:属性值, ......}
                        - 注意：对象字面量的属性名可以加引号也可以不加，如果是一些特殊的名字，则必须要加
         */

        //创建一个对象
        var obj = {};       //相当于var obj = new Object();
        obj.name = "孙悟空";
        console.log(obj);


        var obj2= {
            name:"猪八戒",
            gender:"男",
            age:18,
            test:{
                name:"沙和尚"
            }
        };
        console.log(obj2);

    </script>

</head>
<body>

</body>
</html>
```



## 第七节：函数和对象

### 1、函数简介

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 函数 Function
                - 函数中可以封装一些功能（代码），在需要时可以执行这些功能（代码）

                - 封装到函数中的代码不会被立即执行，会在函数调用的时候执行
                    - 调用语法：函数对象();

            //创建一个函数对象
            var fun = new Function();


            //可以将封装的代码一字符串的形式传递给构造函数
            var fun2 = new Function("console.log('这是我的第一个函数！');");

            //调用函数
            fun2();
         */



        /*
            - 使用函数声明来创建函数
                - 语法：
                    function 函数名([形参1, 形参2, ......]) {
                        语句......
                    }
         */
        //创建一个函数
        function fun() {
            console.log("这是我的第一行代码");
            document.write("这是我的第二行代码")
        }

        // 调用fun函数
        fun();



        /*
            - 使用函数表达式来创建函数
                - 语法：
                    var 函数名 = function([形参1, 形参2, ......]) {
                        语句......
                    };
         */
        // 创建一个函数
        var fun2 = function () {
            console.log("我是匿名函数中封装的代码");
        };

        // 调用函数
        fun2();

    </script>


</head>
<body>

</body>
</html> 
```



### 2、函数的参数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 定义一个用来求两个数和的函数
                - 可以在函数的()中指定一个或多个形参（形式参数）

         */
        function  sum(a, b) {
            console.log(a+b);
        }

        /*
            - 在调用函数时，可以在()中指定实参（实际参数）
                - 不会检查实参的类型
         */
        sum(1, 1);


        /*
            - 当我们的参数过多时，可以将参数封装到一个对象中，然后通过对象传递
         */
        // 创建函数
        function print(obj) {
            document.write("我是"+obj.name+"，我"+obj.age+"了，我是"+obj.gender+"生，我住在"+"花果山");
        }

        // 创建一个对象
        var obj = {
            name:"孙悟空",
            age:18,
            gender:"男",
            address:"花果山"
        };

        // 调用对象
        print(obj);

        
    </script>

</head>
<body>

</body>
</html>
```



### 3、函数的返回值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 创建一个函数，用来计算三个数的和
                - 可以使用 return 来设置返回值
                    - 语法：return 值;
         */
        function sum(a, b, c) {
            var sum = a + b + c;
            return sum;
        }

        var result = sum(1, 2, 3);
        alert(result)


    </script>


</head>
<body>

</body>
</html>
```



```html
<!-- 练习 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 题目一：
                定义一个函数，判断一个数字是否是偶数，如果是返回true,否则返回false
         */
        function test1(number) {
            // if (number%2 == 0) {
            //     return true;
            // }
            // return false;
            return (number % 2 == 0);
        }
        var number = +prompt("请输入一个数字：");
        var result1 = test1(number);
        alert(result1);


        /*
            - 题目二：
                定义一个函数，可以根据半径计算一个圆的面积，并返回计算结果
         */
        function test2(r) {
            return 3.1415926*r*r;
        }
        var r = +prompt("请输入一个半径值：");
        var result2 = test2(r);
        alert(result2);


    </script>
    
</head>
<body>

</body>
</html>
```



### 4、立即执行函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 立即执行函数：
                - 函数定义完，立即被调用，往往只会执行一次
         */
        (function (a, b) {
                alert("我是一个立即执行函数");
                console.log("a =" + a);
                console.log("b =" + b);
        })(123, 456);


    </script>

</head>
<body>

</body>
</html>
```



### 5、方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        // 创建一个对象
        var obj = new Object();

        // 向对象中添加属性
        obj.name = "孙悟空";
        obj.age = 18;

        // 对象的属性值可以是任何的数据类型，还可以是函数
        obj.sayName = function () {
            console.log(obj.name);
        };

        function fun() {
            console.log(obj.name);
        }

        //调方法
        obj.sayName();

        // 调函数
        fun();

        /*
            - 函数也可以成为对象的属性，我们称这个函数是这个对象的方法，调用这个函数就说调用对象的方法（method）
         */

        
    </script>

</head>
<body>

</body>
</html>
```



### 6、枚举

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        var obj = {
            name:"孙悟空",
            age:18,
            gender:"男",
            address:"花果山"
        };
        
        /*
            - 枚举
                - 作用：可以枚举对象中的属性

                - 使用方法：使用 for ... in 语句
                    - 语法：for(var 变量 in 对象) {
                                语句......
                           }
                    - for ... in 语句对象中有几个属性，循环体就会执行几次
         */
        for (var n in obj) {
            console.log(n + ":" + obj[n]);
        }

    </script>

</head>
<body>

</body>
</html>
```



### 7、声明提前问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 变量的声明提前：
                - 使用var关键字声明的变量，会在所有代码执行之前被声明

            - 函数的声明提前：
                - 使用函数声明形式创建的函数 function() {}，它会在所有代码执行之前被创建
                - 使用函数表达式创建的函数，不会被声明提前，所以不能在声明之前被调用
         */
        // 函数声明，会被提前创建
        function fun() {
            console.log("我是由函数声明创建的。");
        }

        // 函数表达式，不会被提前创建
        var fun1 = function () {
            console.log("我是由函数表达式创建的。");
        };

        // 调用函数声明创建的函数
        fun();

        // 调用函数表达式声明创建的函数
        fun1();


    </script>

</head>
<body>

</body>
</html>
```



### 8、作用域

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 作用域：一个变量的作用范围
                - 全局作用域：
                    - 直接编写在script标签中的JS代码，都在全局作用域
                    - 页面打开时创建，关闭时销毁
                    - 在全局作用域中有一个全局对象Window，由浏览器创建，供我们使用
                    - 创建的变量都会作为window对象的属性保存
                    - 创建的函数都会作为window对象的方法保存
                    - 全局作用域的变量是全局变量，在页面的任何部位都可以访问到

                - 函数作用域：
                    - 调用函数时创建函数作用域，函数执行完毕后，函数作用域销毁
                    - 每调用一次函数，就会创建一个函数作用域，他们之间是互相独立的
                    - 在函数作用域中可以访问到全局作用域的变量
                    - 在全局作用域中无法访问到函数作用域的变量
                    - 使用 var 关键字声明的变量，会在函数中所有代码执行之前被声明执行


         */
        // 创建一个全局变量
        var a = 10;

        function fun() {
            // 创建一个函数变量
            var b = 20;

            // 访问全局变量
            console.log("a =" + a);
        }

        fun();

        // 访问函数中的函数变量
        console.log("b =" + b);



    </script>

</head>
<body>

</body>
</html>
```



### 9、this

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 解析器在每次调用函数时，都会向函数内部传递进隐含参数（this）
                - this指向的是一个对象，我们称为函数的上下文对象
                - 调用方式：
                    - 以函数的形式调用，this永远都是Window
                    - 以方法的形式调用，this就是调用方法的那个对象
         */
        // 创建一个name变量
        var name = "全局";

        // 创建一个fun函数
        function fun() {
            console.log(this.name);
        }

        // 创建两个对象
        var obj1 = {
            name:"孙悟空",
            sayName:fun
        };

        var obj2 = {
            name:"沙和尚",
            sayName:fun
        };

        // 我们希望调用obj1.sayName()时可以输出obj1的名字
        obj1.sayName();

        // 我们希望调用obj2.sayName()时可以输出obj2的名字
        obj2.sayName();

        
    </script>

</head>
<body>

</body>
</html>
```



### 10、使用工厂创建对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 使用工厂批量创建对象
         */
        // 利用函数创建局部对象
        function createPerson(name, age, gender) {
            // 创建局部对象
            var obj = {
                name:name,
                age:age,
                gender:gender,
                sayName:function () {
                    console.log(this.name);
                }
            };

            // 将局部对象返回，使其变成全局对象
            return obj;
        }

        // 调用函数，获得新对象
        var new_obj1 = createPerson("孙悟空", 18, "男");
        var new_obj2 = createPerson("猪八戒", 19, "男");
        var new_obj3 = createPerson("沙和尚", 20, "男");

        // 在控制台打印新对象的信息
        console.log(new_obj1);
        console.log(new_obj2);
        console.log(new_obj3);

    </script>

</head>
<body>

</body>
</html>
```



### 11、构造函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 构造函数：和普通函数没有区别，但是习惯首字母大写

            - 构造函数和普通函数的不同点：
                - 普通函数是直接调用
                - 构造函数通过 new 关键字来调用

            - 构造函数的执行流程：
                - 立刻创建一个新的对象
                - 将新建的对象设置为函数中的this，在构造函数中可以使用this来引用新建的对象
                - 逐行执行函数中的代码
                - 将新建的对象作为返回值返回

            - 使用同一个构造函数创建的对象，我们称为一类对象，也将构造函数称为一个类

            - 通过构造函数创建的对象，称为该类的实例

            - 使用 instanceof 可以检查一个对象是否是一个类的实例
                - 语法：对象 instanceof 构造函数
                    如果是，则返回true，否则返回false

            - this的情况:
                - 1.当以函数的形式调用时，this是window
                - 2.当以方法的形式调用时，谁调用方法this就是谁
                - 3.当以构造函数的形式调用时，this就是新创建的那个对象
         */

        // 构造一个函数
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.sayName = function () {
                document.write("Hello，大家好，我是" + this.name + "。<br/>");
            }
        }

        // 调用构造函数
        var per1 = new Person("孙悟空", 18, "男");
        var per2 = new Person("猪八戒", 19, "男");
        var per3 = new Person("沙和尚", 20, "男");

        // 控制台打印
        console.log(per1);
        console.log(per2);
        console.log(per3);

        // 调用构造函数里的方法
        per1.sayName();
        per2.sayName();
        per3.sayName();

        // 判断是否是一个类
        console.log(per1 instanceof Person);
        console.log(per2 instanceof Person);
        console.log(per3 instanceof Person);

    </script>

</head>
<body>

</body>
</html>
```



```html
<!-- 补充说明 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>supplement</title>

    <script type="text/javascript">
        /*
            - 使所有同类型的对象使用同一个方法
         */
        // 构造一个函数
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.sayName = fun(name);
        }

        // 定义共享方法，防止内存空间浪费
        function fun(name) {
            document.write("Hello，大家好，我是" + name + "。<br/>");
        }

        // 调用构造函数
        var per1 = new Person("孙悟空", 18, "男");
        var per2 = new Person("猪八戒", 19, "男");
        var per3 = new Person("沙和尚", 20, "男");

    </script>

</head>
<body>

</body>
</html>
```



### 12、原型对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 问题来源：将函数定义在全局作用域中，污染了全局作用域的命名空间，也很不安全

            - 原型：prototype
                - 每创建一个函数，解析器都会向函数中添加一个属性prototype
                - 这个属性对应着一个对象，这个对象就是我们所谓的原型对象
                - 当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造
                  函数的原型对象，我们可以通过 __proto__ 来访问该属性
                - 原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我
                  们可以将对象中共有的内容，统一设置到原型对象中
                - 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如
                  果没有则会去原型对象中寻找，如果找到则直接使用
                - 原型就相当于一个公共的、都可以访问到的区域
                - 以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原
                  型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对
                  象都具有这些属性和方法了

         */
        // 声明一个对象
        function MyClass() {

        }

        // 创建一个对象
        var mc = new MyClass();

        // 比较两个隐含对象
        document.write(mc.__proto__ == MyClass.prototype);

        // 修改对象的MyClass原型中添加属性a
        MyClass.prototype.a = 123;

        // 打印刚刚添加的属性a
        document.write("<br/>" + MyClass.prototype.a);

    </script>

</head>
<body>

</body>
</html>
```



```html
<!-- 补充 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>supplement</title>

    <script type="text/javascript">
        // 创建一个构造函数
        function MyClass() {

        }

        // 向原型中添加一个name属性
        MyClass.prototype.name = "我是原型中的名字";

        // 定义对象
        var mc = new MyClass();

        // 打印
        document.write(mc.name);

        /*
            - 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true

            - 可以使用对象的 hasOwnProperty() 方法来检查对象自身中含有该属性
                - 使用该方法，只有对象自身中含有需要检查的属性时，才会返回true

            - 原型对象也是对象，所以它也有原型，当我们使用一个对象的属性或方法时，会现在自身中
              寻找，自身中如果有，则直接使用，如果没有则去原型对象中寻找，如果原型对象中与，则
              使用，如果没有则去原型的原型中寻找，直到找到Object对象的原型，Object对象的原型
              没有原型，如果在Object中依然没有找到，则返回undefined
         */
        // 检查 name 属性是否在mc对象中
        console.log("name" in mc);

        // 检查 name 属性是否在mc对象中（name在原型对象中，所以不在对象中）
        console.log(mc.hasOwnProperty("name"));


    </script>


</head>
<body>

</body>
</html>
```



### 13、toString()方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值

            - 可以为原型对象添加一个toString()方法，方便统一的管理
         */
        // 构造一个函数
        function Person(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        // 创建一个实例
        var per1 = new Person("孙悟空", 18, "男");
        var per2 = new Person("猪八戒", 19, "男");
        var per3 = new Person("沙和尚", 20, "男");

        // 如果我们希望在输出对象时不输出[object object]，可以为原型对象添加一个toString()方法
        Person.prototype.toString = function () {
            return ("Person[name="+this.name+",age="+this.age+",gender="+this.gender+"]");
        };

        var result1 = per1.toString();
        var result2 = per2.toString();
        var result3 = per3.toString();

        // 打印
        console.log("result1 =" + result1);
        console.log("result2 =" + result2);
        console.log("result3 =" + result3);
        
    </script>

</head>
<body>

</body>
</html>
```



### 14、垃圾回收机制

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 垃圾回收(GC)
                - 就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾
                  这些垃圾积攒过多以后，会导致程序运行的速度过慢，所以我们需要一个
                  垃圾 回收的机制，来处理程序运行过程中产生垃圾
                - 当一个对象没有 任何的变量或属性对它进行引用，此时我们将永远无
                  法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的
                  内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。在JS中拥有
                  自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要
                  也不能进行垃圾回收的操作
         */

        // 创建一个对象
        var obj = new Object();

        // 提示进行回收语句
        obj = null;
    </script>

</head>
<body>

</body>
</html>
```



### 15、call()和apply()方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        function fun() {
            alert(this.name);
        }
        
        /*
             - call()和apply()方法
                - 都是函数对象的方法，需要通过函数对象来调用
                - call()方法可以将实参在对象之后依次传递
                - apply()方法需要将实参邓庄到一个数组中统一传递

            - 在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this

            - this的情况：
                - 以函数形式调用时，this永远都是window
                - 以方法的形式调用时，this是调用方法的对象
                - 以构造函数的形式调用时，this是新创建的那个对象
                - 使用call()和app1y()调用时，this是指定的那个对象

         */
        // 以下三种调用方法效果一样
        // fun.call();
        // fun.apply();
        // fun();

        // 创建对象
        var obj = {name:"obj"};

        // 两种方法调用
        fun.call(obj);
        fun.apply(obj);


    </script>

</head>
<body>

</body>
</html>
```



### 16、arguments

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 在调用函数时，浏览器每次都会传递进两个隐含的参数:
                - 1.函数的上下文对象this
                - 2.封装实参的对象arguments
                    - arguments是一个类数组对象，它也可以是通过索引来操作数据，也可以获取长度
                    - 在调用函数时，我们所传递的实参都会在arguments中保存
                    - arguments.length可以用来获取实参的长度
                    - 我们即使不定义形参，也可以通过arguments来使用实参
                    - arguments有一个属性叫做callee，它对应一个函数对象，就是当前正在指向的函数的对象
         */
        function fun() {
            // 检查arguments是否是数组
            console.log(Array.isArray(arguments));

            // 获取类数组的长度
            console.log(arguments.length);

            // 获取索引为0的元素的值
            console.log(arguments[0]);

            console.log(arguments.callee);
        }

        fun("hello", true, 123);

    </script>

</head>
<body>

</body>
</html>
```





## 第八节：数组

### 1、数组简介

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 数组(Array)：数组也是一个对象
                - 数组和我们普通对象功能类似，也是用来存储一些值的。

                - 不同的是普通对象是使用字符串作为属性名的，而数组时使用数字来作为索引操作元素

                - 索引：从0开始的整数就是索引

                - 数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据
         */
        // 创建数组对象
        var arr = new Array();

        // 使用typeof检查数组时，会返回一个object
        // console.log(typeof arr);


        /*
            - 向数组中添加元素
                - 语法：数组[索引] = 值;

            - 读取数组中的元素
                - 语法：数组[索引];
                - 读取到不存在的索引不会报错，而是返回undefined

            - 获取数组的长度：可以使用length属性来获取数组的长度(元素的个数)
                - 语法：数组.length
                - 对于连续的数组，使用length可以获取到数组的长度(元素的个数)
                - 对于非连续的数组，使用length会获取到数组的最大的索引+1，尽量不要创建非连续的数组
                - 修改length：
                    - 修改的length大于原长度，则多余的部分会空出来
                    - 修改的length小于原长度，则多余的部分会被删除

            - 向数组的最后一位添加元素
                - 语法：数组[数组.length] = 值;

         */
        // 添加元素
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;

        // 向数组的最后一位添加元素
        arr[arr.length] = 40;

        // 获取数组长度
        console.log(arr.length);

        // 读取元素
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
        console.log(arr[3]);

    </script>

</head>
<body>

</body>
</html>
```



### 2、数组字面量

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 使用字面量来创建数组
                - 语法：var 数组 = [];
                - 使用字面量创建数组时，可以直接往数组里添加元素

            - 使用构造函数创建数组时，也可以同时添加元素
                - 将要添加的元素作为构造函数的参数传递
                - 元素之间使用 , 隔开

            - 只传递一个整数时
                - 字面量数组：那个整数就是该元素的值
                - 构造函数数组：那个整数就是该数组的长度

            - 数组中的元素可以是任意的数据类型
         */
        // 创建一个字面量数组
        var arr = [1, 2, 3, 4, 5];

        // 使用构造函数创建数组
        var arr2 = new Array(1, 2, 3, 4, 5, 6);

        console.log(arr.length);
        console.log(arr2.length);


        /*
            - 数组中也可以放置对象和函数
         */
        // 放置对象
        var arr3 = [{name:"孙悟空"}, {name:"猪八戒"}, {name:"沙和尚"}];
        console.log(arr3[1].name);

        // 放置函数
        var arr4 = [function fun1() {alert("第一个函数！")}, function fun2() {}, function fun3() {}];
        console.log(arr4[1]);
        arr4[0]();      // 调用

    </script>

</head>
<body>

</body>
</html>
```



### 3、数组的方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        // 创建一个数组
        var arr = ["孙悟空", "猪八戒", "沙和尚"];


        /*
            - push()
                - 该方法可以向数组末尾添加一个或多个元素，并返回数组长度
                - 可以将要添加的元素作为方法的参数传递，会自动添加到末尾
         */
        var result = arr.push("唐僧", "白龙马");
        console.log(arr);
        console.log("数组的长度为：" + result);


        /*
            - pop()
                - 该方法可以删除数组的最后一个元素，并将被删除的元素作为返回值返回
         */
        result = arr.pop();
        console.log(arr);
        console.log("被删除的元素为：" + result);


        /*
            - unshift()
                - 向数组的开头添加一个或多个元素，并返回新数组的长度
                - 向前面插入元素之后，原先元素的索引会依次后移
         */
        result = arr.unshift("如来佛祖", "玉皇大帝");
        console.log(arr);
        console.log("数组的长度为：" + result);


        /*
            - shift()
                - 可以删除数组的第一个元素，被删除的元素当作返回值返回
         */
        result = arr.shift();
        console.log(arr);
        console.log("被删除的元素为：" + result);
        
    </script>

</head>
<body>

</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index2</title>

    <script type="text/javascript">
        // 创建一个数组
        var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白龙马"];

        /*
            - slice()
                - 可以从数组中提取指定元素
                - 该方法不会改变原数组，而是将截取的数组封装到一个新数组中返回
                - 参数：（左闭右开）
                    - 第一个参数：截取开始位置的索引（包括开始索引）
                    - 第二个参数：截取结束位置的索引（不包括结索引，可以省略不写）
                    - 可以传递一个负值，如果传递一个负值，则从后往前计算
         */
        // 截取孙悟空和猪八戒
        var result = arr.slice(0, 2);

        console.log("原数组为：" + arr);
        console.log("新数组为：" + result);


        /*
            - splice()
                - 可以删除，替换，添加指定位置的元素
                - 该方法会将指定元素从原数组中删除，并将删除的值作为返回值返回
                - 参数：
                    - 第一个参数：开始位置的索引
                    - 第二个参数：删除数量
                    - 第三个及以后的参数：可以传递一些新的元素，新元素会插入到开始位置索引的前面
         */
        result = arr.splice(0, 2, "牛魔王", "铁扇公主", "红孩儿");

        console.log("原数组为：" + arr);
        console.log("新数组为：" + result);


    </script>

</head>
<body>

</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index3</title>

    <script type="text/javascript">
        // 创建一个数组
        var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白龙马"];
        var arr2 = ["牛魔王", "铁扇公主", "红孩儿"];


        /*
            - concat()
                - 连接两个或多个数组（也可以是单个的元素），并将新数组返回
                - 该方法不会对原数组产生印象
         */
        var result = arr.concat(arr2);
        console.log(result);


        /*
            - join()
                - 该方法可以将数组转换成字符串，默认用 , 连接起来了
                - 该方法不会对原数组产生影响
                - 在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符
         */
        result = arr.join("+++");
        console.log(result);


        /*
            - reverse()
                - 该方法用来翻转数组
                - 该方法会直接修改原数组
         */
         arr.reverse();
         console.log(arr);


        /*
            - sort()
                - 可以对数组的元素进行排序
                - 会影响原数组
                - 默认Unicode编码排序
                    - 即使对于纯数字的数组，使用sort()排序时，也会按照Unicode编码
                      来排序，所以对数字讲排序时，可能会得到错误的结果
                - 可以在sort()中添加回调函数来指定排序规则
                    - 回调函数中需要定义两个形参，使用哪个不确定，但第一个形参的值
                      一定在第二个形参的值前边
                    - 浏览器会根据回调函数的返回值来决定元素的顺序
                        - 如果返回一个大于0的值，则元素会交换位置
                        - 如果返回一个小于等于0的值，则元素位置不变
         */
        var arr3 = [5, 2, 9, 4, 1, 0, 4, 6, 3];
        arr3.sort(function (a, b) {
            return (a - b);     // 升序排列
            return (b - a);     // 降序排列
        });
        console.log(arr3);


    </script>

</head>
<body>

</body>
</html>
```





### 4、数组的遍历

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        // 创建一个数组
        var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白龙马"];
        
        /*
            - 数组的遍历：将数组中的元素都读取出来
         */
        for (var i=0; i<arr.length; i++) {
            console.log(arr[i]);
        }
        
    </script>

</head>
<body>

</body>
</html>
```



```html
<!-- 练习 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>

    <script type="text/javascript">
        // 准备工作

        // 创建函数对象
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // 修改Person的toString()方法
        Person.prototype.toString = function () {
            return ("Person[name="+this.name+",age="+this.age+"]");
        };

        // 创建一个Person对象
        var per1 = new Person("孙悟空", 18);
        var per2 = new Person("猪八戒", 28);
        var per3 = new Person("红孩儿", 8);
        var per4 = new Person("蜘蛛精", 16);
        var per5 = new Person("二郎神", 38);

        // 将这些person对象放入到一个数组中
        var perArr = [per1, per2, per3, per4, per5];

        /*
            - 题目：
                创建一个函数，可以将perArr中的满18岁的Person提取出来，然后封装到一个新的数组中并返回
         */
        // 创建函数
        function fun(perArr) {
            // 定义新的数组和新数组的下标
            var new_perArr = [];
            var j = 0;

            // 遍历数组
            for (var i=0; i<perArr.length; i++) {
                if (perArr[i].age >= 18) {
                    new_perArr.push(perArr[i]);
                    j++;
                }

            }

            // 返回新数组
            return new_perArr;
        }

        // 调用函数
        var result = fun(perArr);

        // 打印结果
        for (var i=0; i<result.length; i++) {
            console.log(result[i]);
        }
        
        
    </script>

</head>
<body>

</body>
</html>
```



### 5、for Each方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - for Each()方法：遍历数组的方法
                - IE8及以下不支持
         */
        // 创建一个数组
        var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白龙马"];


        /*
            - for Each()方法需要一个函数作为参数
                - 像这种函数，由我们创建但是不由我们调用的，我们称为回调函数
                - 数组中有几个函数就会执行几次。每次执行时，浏览器会将遍历到的元素以实参的形式传递进来
                - 浏览器会在回调函数中传递了三个函数
                    - 第一个参数就是正在遍历的参数
                    - 第二个参数就是正在遍历元素的索引
                    - 第三个参数就是正在遍历的数组
         */
        // 回调函数
        arr.forEach(function (value, index, object) {
            console.log(value);
            console.log(index);
            console.log(object);
        })

    </script>

</head>
<body>

</body>
</html>
```



## 第九节：类对象

### 1、Date对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - Date对象
                - 在JS中使用Date对象表示一个时间
         */
        // 创建一个时间对象
        // 使用构造函数创建Date对象，会封装成当前代码执行的时间
        var d = new Date();
        console.log(d);

        // 创建一个指定时间的对象
        // 需要在构造函数中传递一个表示时间的字符串作为参数
        // 日期格式  月份/日/年 时:分:秒
        var d2 = new Date("12/03/2021 11:10:30");    // 2021年12月3号11点10分30秒
        console.log(d2);


        // getDate()：获取当前日期对象的几日
        var date = d.getDate();
        console.log(date);

        // getDay()：获取当前日期对象是周几（返回一个0~6的值，0表示周日）
        date = d.getDay();
        console.log(date);

        // getMonth()：获取当前日期对象的月份（返回一个0~11的值，1月返回0，2月返回1......）
        date = d.getMonth();
        console.log(date);

        // getFullYear()：获取当前日期对象的年份
        date = d.getFullYear();
        console.log(date);

        /*
            - getTime()
                - 获取当前日期对象的时间戳
                - 时间戳：从格林威治标准时间的1970年1月1日0时0分日秒到当前日期所花费的毫秒数(1秒=1000毫秒)
                - 计算机底层保存时间都是时间戳
         */
        var time = d.getTime();
        console.log(time);

        // 直接获取当前时间的时间戳
        var time2 = Date.now();
        console.log(time2);
        
    </script>

</head>
<body>

</body>
</html>
```



### 2、Math对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="">
        /*
            - Math对象
                - Math和其他的对象不同，它不是一个构造函数
                - Math属于工具类不用创建对象，里边封装了数学运算相关的属性和方法
         */
        // Math.PI表示圆周率3.1415926
        console.log(Math.PI);

        // abs()计算一个数的绝对值
        console.log(Math.abs(-10));

        // ceil()可以对一个数进行向上取整
        console.log(Math.ceil(1.5));

        // floor()可以对一个数进行向下取整
        console.log(Math.floor(1.5));

        // round()可以对一个数进行四舍五入取整
        console.log(Math.round(1.5678));

        /*
            - Math.random()可以生成一个0~1之间的随机数
                - 生成0~x之间的随机数
                    - Math.round(Math.random()*x);
                - 生成x~y之间的随机数
                    - Math.round(Math.random()*(y-x)+x);
         */
        console.log(Math.random());
        // 生成0~10之间的随机数
        console.log(Math.round(Math.random()*10));
        // 生成1~6之间的随机数
        console.log(Math.round(Math.random()*5+1));

        // max()可以获取多个数中的最大值
        var max = Math.max(1, 2, 3, 4, 5, 6);
        console.log(max);

        // min()可以获取多个数中的最大值
        var min = Math.min(1, 2, 3, 4, 5, 6);
        console.log(min);

        // Math.pow(x, y)：返回x的y次幂
        console.log(Math.pow(2, 3));

        // Math.sqrt()：对一个数进行开方运算
        console.log(Math.sqrt(12));
        
    </script>

</head>
<body>

</body>
</html>
```



### 3、包装类

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
                - String()：将基本数据类型的字符串转换成String对象

                - Number()：将基本数据类型的数字转换成Number对象

                - Boolean()：将基本数据类型的布尔值转换成Boolean对象

                - 注意：我们在实际应用中不会使用基本数据类型的对象

            - 方法和属性之能添加给对象，不能添加给基本数据类型，当我们对一些基本数据类型的值去调用
              属性和方法时，浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法，调用
              完以后，再将其转换为基本数据类型
         */
        // 创建三个类型的对象
        var str = new String("Hello");
        var num = new Number(3);
        var bool = new Boolean(true);

        // 向num中添加一个属性
        num.hello = "abcdef";
        console.log(num.hello);


    </script>

</head>
<body>

</body>
</html>
```



### 4、字符串的方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        // 创建一个字符串
        var str = "Hello World!!!";

        /*
            - 在底层字符串是以字符数组的形式保存的
         */
        // length：获取字符数组的长度
        console.log(str.length);


        // charAt：根据索引返回字符串中指定位置的字符
        console.log(str.charAt(0));


        // charCodeAt()：根据索引返回字符串中指定位置字符的unicode编码
        console.log(str.charCodeAt(0));


        // String.fromCharCode()：根据字符unicode编码获取字符
        console.log(String.fromCharCode(20013));


        // concat()：连接两个或多个字符串，作用和 + 一样，不会对原字符串产生影响
        var result = str.concat("Hello JS!!!");
        console.log(result);


        /*
            - indexOf()：检索字符串中是否含有指定的内容
                - 如果含有指定内容，返回第一次出现的索引；反之则返回-1
                - 可以指定第二个参数，表示从该位置开始查找
                - 从前往后找
         */
        result = str.indexOf("W", 2);
        console.log(result);


        /*
            - lastIndexOf()：检索字符串中是否含有指定的内容
                - 如果含有指定内容，返回第一次出现的索引；反之则返回-1
                - 可以指定第二个参数，表示从该位置开始查找
                - 从后往前找
         */
        result = str.lastIndexOf("o", 10);
        console.log(result);


        /*
            - slice()：从字符串中截取指定内容
                - 不会影响原数组
                - 返回截取的内容（左闭右开）
                    - 第一个：开始位置的索引
                    - 第二个：结束位置的索引（可以省略）
                    - 传递一个负数，从后面开始计算位置
         */
        str = "abcdefghijklm";
        result = str.slice(0, 5);
        console.log(result);


        /*
            - substring()：截取一个字符串，与slice()类似
                - 不会改变原数组
                - 参数：（左闭右开）
                    - 第一个：开始位置索引
                    - 第二个：结束位置索引
                    - 不同的是这个方法不能接受负值作为参数
                        - 如果传递了一个负值，则默认使用0
                        - 还可以自动调整参数的位置，如果第二个参数小于第一个，则自动交换参数位置
         */
        result = str.substring(1, 6);
        console.log(result);


        /*
            - substr()：截取一个字符串
                - 参数：
                    - 第一个：截取开始位置的索引
                    - 第二个：截取的长度
         */
        result = str.substr(2, 7);
        console.log(result);


        /*
            - split()：可以将一个字符串拆分成一个数组
                - 参数：需要一个字符串作为拆分数组的依据
         */
        str = "abc,def,ghi,jkl,mno";
        result = str.split(",");
        console.log(result);
        console.log(Array.isArray(result));


        // toUpperCase()：将字符串转换成大写，不会影响原字符串
        result = str.toUpperCase();
        console.log(result);

        // toLowerCase()：将字符串转换成小写，不会影响原字符串
        result = result.toLowerCase();
        console.log(result);

    </script>

</head>
<body>

</body>
</html>
```



## 第十节：正则表达式

### 1、正则表达式简介

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 正则表达式用于定义一些字符串的规则
                - 计算机可以根据正则表达式，来检查一个字符串是否符合规则
                - 获取将字符串中符合规则的内容提取出来
                - 使用typeof检查正则对象，会返回Object
                - 语法：var 变量 = new RegExp("正则表达式", "匹配模式");
                    - 在构造函数中可以传递一个匹配模式作为第二个参数
                        - "i"：忽略大小写
                        - "g"：全局匹配模式
                        - 可以设置多个匹配模式，顺序无所谓
         */

        // 创建正则表达式对象
        // 这个正则表达式可以检测字符串中是否含有a或A
        var reg = new RegExp("a", "i");

        /*
            - 正则表达式的方法：test( )
                - 使用这个方法可以用来检查一个字符串是否符合正则表达式的规则
                    - 如果符合则返回true,否则返回false
         */
        console.log(reg.test("Abcdef"));


    </script>

</head>
<body>

</body>
</html>
```



### 2、正则语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 使用字面量创建正则表达式
                - 语法：var 变量 = /正则表达式/匹配模式
                - 使用字面量的方式更加简单
                - 使用函数创建更加灵活
         */
        // 使用字面量创建正则表达式
        var reg = /a/i;     // 和 var reg = new RegExp("a", "i"); 效果一样

        console.log(reg.test("abc"));


        // 创建一个正则表达式，检查一个字符串中是否含有a或b
        // 使用 | 表示或者的意思
        reg = /a|b/i;
        console.log(reg.test("acd"));


        // 创建一个正则表达式检查一个字符串中是否有字母
        // [] 里的内容也是或的关系，和 | 作用一样
        // [a-z] 任意的小写字母
        // [A-Z] 任意的大写字母
        // [A-z] 任意字母，包括大写和小写
        reg = /[a-b]/i;
        console.log(reg.test("acd"));


        // 检查一个字符串中是否含有abc或adc或aec
        reg = /a[bde]c/;
        console.log(reg.test("aecgdf"));


        // 检查一个字符串是否含有除了ab之外的值
        // [^ ] 除了
        reg = /[^ab]/;
        console.log(reg.test("abcd"));  // 除ab之外还有cd，所以是true

    </script>

</head>
<body>

</body>
</html>
```



### 3、字符串和正则的方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        var str = "1a2b3c4d5e6f7";


        /*
            - split()：将字符串拆分成数组
                - 方法中可以传递一个正则表达式作为参数，方法将会根据正则表达式去拆分字符串
         */
        var result = str.split("c");
        console.log(result);

        // 根据任意字母将字符串拆分
        result = str.split(/[A-z]/);
        console.log(result);


        /*
            - search()：搜索字符串中是否含有指定内容
                - 搜索到指定内容，返回第一次出现的索引，反之返回-1
                - 它可以接受一个正则表达式作为参数，根据正则表达式检索字符串
                - 只会查找第一个，即使设置全局匹配也没用
         */
        str = "Hello abc Hello aec afc adc";
        result = str.search("abc");
        console.log(result);

        // 搜索字符串中是否含有abc或aec或afc或adc
        result = str.search(/a[befd]c/);
        console.log(result);


        /*
            - match()：根据正则表达式将符合条件的内容提取出来
                - 默认情况下match()只会找到第一个符合要求的内容
                - 可以设置正则表达式为全局匹配模式进行查找
                - match()会将匹配到的内容封装到一个数组中返回
         */
        str = "1a2b3c4d5e6f7";
        result = str.match(/[A-z]/gi);       // 全局匹配和忽略大小写两种匹配模式
        console.log(result);


        /*
            - replace()：将字符串中指定内容替换为新的内容
                - 参数：
                    - 第一个字符串：被替换的内容，可以接受一个正则表达式作为参数
                    - 第二个字符串：新的内容
                - 默认只会替换第一个检索到的需要替换的字符串
         */
        result = str.replace(/[a-z]/gi, "@_@");
        console.log(result);


    </script>

</head>
<body>

</body>
</html>
```



### 4、正则表达式语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 量词：通过量词可以设置一个内容出现的次数
                - {n}：正好出现n次
                - {m, n}：出现 m 到 n 次
                - {m, }：出现 m 次以上
                - +：至少一个
                - *：0个或多个，相当于{0, }
                - ?：0个或1个，相当于{0,1}
         */
        // 创建一个正则表达式来检查一个字符串中是否含有aaa
        var reg = /a{3}/;
        console.log(reg.test("aaabcc"));

        // 查找ababab
        reg = /(ab){3}/;
        console.log(reg.test("ababab"));

        reg = /ab{1,3}/;
        console.log(reg.test("abbab"));

        reg = /ab{1,}/;
        console.log(reg.test("abbbbbb"));

        reg = /ab+c/;
        console.log(reg.test("abbbbbbc"));

        reg = /ab*c/;
        console.log(reg.test("abbbbbbc"));

        reg = /ab?c/;
        console.log(reg.test("abc"));


        /*
            - 检查一个字符串是否以a开头
                - ^：表示开头
         */
        reg = /^a/;     // 以a开头
        console.log(reg.test("bcabc"));

        /*
            - 检查一个字符串是否以a结尾
                - $：表示结尾
         */
        reg = /a$/;     // 以a结尾
        console.log(reg.test("bcabc"));

        /*
            - 如果在正则表达式中同时使用 ^ 和 $ 则要求字符串必须完全符合正则表达式
         */
        reg = /^a|a$/;
        console.log(reg.test("abcba"));



        /*
            - 练习：
                创建一个正则表达式，用来检查一个字符串是否是一个手机号

                - 手机号的规则：
                    - 必须以1开头
                    - 第二位是3~9中的任意数字
                    - 三位以后任意数字九个

                    - ^1  [3-9]  [0-9]{9}$
         */
        var phoneStr = "13567890123";

        var phoneReg = /^1[3-9][0-9]{9}$/;
        console.log("手机号格式是： " + phoneReg.test(phoneStr));
        

    </script>

</head>
<body>

</body>
</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index2</title>

    <script type="text/javascript">
        /*
            - 检查一个字符串中是否含有 .
                - .：可以匹配任意字符
                - 在正则表达式中使用 \ 作为转义字符
                    - \.：表示 .
                    - \\：表示 \

            - 注意：
                - 使用构造函数时，由于它的参数是一个字符串，而 \ 是字符串中转义字符
        */
        var reg = /\./;
        console.log(reg.test("abc.bca"));

        reg = /\\/;
        console.log(reg.test("abc\\bca"));


        /*
            - \w：任意字母、数字、下划线
            - \W：除了字母、数字、下划线
            - \d：任意的数字[0~9]
            - \D：除了数字[^0~9]
            - \s：空格
            - \S：除了空格
            - \b：单词边界
            - \B：除了单词边界
         */
        reg = /\w/;
        console.log(reg.test("abc"));

        reg = /\W/;
        console.log(reg.test("%%%"));

        reg = /\bchild\b/;
        console.log(reg.test("Hello children"));


        // 接受一个用户输入
        var str = "         ad   min      ";
        console.log(str);

        // 去除掉字符串中前后的空格
        // 去除空格就是使用 "" 来替换空格
        // str = str.replace(/\s/g, "");

        // 去除开头的空格
        str = str.replace(/^\s*/, "");
        console.log(str);

        // 去除结尾的空格
        str = str.replace(/\s*$/, "");
        console.log(str);

        // 完整正则表达式
        str = str.replace(/^\s|\s*$/g, "");
        console.log(str);


    </script>

</head>
<body>

</body>
</html>
```



### 5、邮箱的正则

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 电子邮件
                hello@abc.com.cn

            - 邮箱规则
                - 任意字母数字下划线
                - .任意字母数字下划线
                - @
                - 任意字母数字
                - .任意字母（2~5位）
                - .任意字母（2~5位）

            - \w{3, }  (\.\w+)*  @  [A-z0-9]+  (\.[A-z]{2,5}){1,2}
         */
        var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
        var email = "abc@abc.com";
        console.log(emailReg.test(email));

        
    </script>

</head>
<body>

</body>
</html>
```



## 第十一节：DOM

### 1、DOM的简介

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - 文档（Document）：文档表示的就是整个的HTML网页文档

            - 对象（Object）：对象表示将网页中的每一个部分都转换为了一个对象

            - 模型（Model）：使用模型来表示对象之间的关系，这样方便我们获取对象

            - 节点（Node）：是构成我们网页的最基本的组成部分，网页中的每一个部分都可以称为是一个节点
                - 比如：html标签、属性、文本、注释、整个文档等都是一个节点
                - 虽然都是节点，但是实际上他们的具体类型是不同的
                - 比如：标签我们称为元素节点、属性称为属性节点、文本称为文本节点、文档称为文档节点
                - 节点的类型不同，属性和方法也都不尽相同
                - 种类：
                    - 文档节点：整个HTML文档
                    - 元素节点：HTM文档中的HTML标签
                    - 属性节点：元素的属性
                    - 文本节点：HTML标签中的文本内容
         */
    </script>

</head>
<body>

    <button id="btn">我是一个按钮</button>

    <script type="text/javascript">
        /*
            - 浏览器已经对我们提供了文档节点对象，这个对象是window的属性
            - 可以在网页中直接使用，文档节点代表的是整个网页
         */
        console.log(document);

        // 获取button对象
        var btn = document.getElementById("btn");
        console.log(btn.innerHTML);
        console.log(btn);

        // 修改按钮的文字
        btn.innerHTML = "我是修改过的新按钮";
        console.log(btn.innerHTML);

    </script>

</body>
</html>
```



### 2、事件的简介

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
    <!--
        - 我们可以在事件对应的属性中设置一些JS代码，当事件被触发时，这些代码将会被执行

        - 下面这种写法我们称为结构和行为耦合，不方便维护，不推荐使用
    -->
    <!--    <button id="btn" onclick="alert('讨厌，点我干嘛！')">我是一个按钮</button> -->
    <button id="btn">我是一个按钮</button>


    <script type="text/javascript">
        /*
            - 事件：用户和浏览器之间的互动行为
                - 比如：点击按钮、鼠标移动、关闭窗口。。。
         */

        /*
            - 可以为按钮的对应事件绑定处理函数的形式来响应事件
         */
        // 获取按钮对象
        var btn = document.getElementById("btn");

        // 绑定一个单击事件
        // 像这种位单击事件绑定的函数，我们称为点击响应事件
        btn.onclick = function () {
            alert("你还点？？？");
        }
        

    </script>

</body>
</html>
```



### 3、文档的加载

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <script type="text/javascript">
        /*
            - onload事件会在整个页面加载完成之后才触发
                - 为Window绑定onload事件
                - 该事件对应的响应函数将会在页面完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载
         */
        // 页面加载完成才触发
        window.onload = function () {
            // 获取id为btn的按钮
            var btn = document.getElementById("btn");

            //  为按钮绑定一个单击响应函数
            btn.onclick = function () {
                alert("Hello！！！");
            };
        }
    </script>

</head>
<body>

    <button id="btn">点我一下</button>

    <script type="text/javascript">
        /*
            - 浏览器在加载一个页面时，是由上向下的顺序加载的
                - 读取到一行就运行一行

            - 将JS代码编写到页面的下部，就是为了在页面加载完毕后在执行JS代码
         */
        // 获取id为btn的按钮
        // var btn = document.getElementById("btn");

        //  为按钮绑定一个单击响应函数
        // btn.onclick = function () {
        //     alert("Hello！！！");
        // }
        
    </script>

</body>
</html>
```



### 4、DOM查询

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Untitled Document</title>

    <link rel="stylesheet" type="text/css" href="css.css" />

    <script type="text/javascript">

        /*
         * - 定义一个函数，专门用来为指定元素绑定单击响应函数
         * 	    - 参数：
         * 		    - idStr 要绑定单击响应函数的对象的id属性值
         * 		    - fun 事件的回调函数，当单击元素时，该函数将会被触发
         */
        function myClick(idStr , fun){
            var btn = document.getElementById(idStr);
            btn.onclick = fun;
        }

        window.onload = function(){

            
            //为id为btn01的按钮绑定一个单击响应函数
            var btn01 = document.getElementById("btn01");
            btn01.onclick = function(){
                //查找#bj节点
                var bj = document.getElementById("bj");
                //打印bj
                //innerHTML 通过这个属性可以获取到元素内部的html代码
                alert(bj.innerHTML);
            };


            //为id为btn02的按钮绑定一个单击响应函数
            var btn02 = document.getElementById("btn02");
            btn02.onclick = function(){
                //查找所有li节点
                //getElementsByTagName()可以根据标签名来获取一组元素节点对象
                //这个方法会给我们返回一个类数组对象，所有查询到的元素都会封装到对象中
                //即使查询到的元素只有一个，也会封装到数组中返回
                var lis = document.getElementsByTagName("li");

                //打印lis
                //alert(lis.length);

                //变量lis
                for(var i=0 ; i<lis.length ; i++){
                    alert(lis[i].innerHTML);
                }
            };


            //为id为btn03的按钮绑定一个单击响应函数
            var btn03 = document.getElementById("btn03");
            btn03.onclick = function(){
                //查找name=gender的所有节点
                var inputs = document.getElementsByName("gender");

                //alert(inputs.length);

                for(var i=0 ; i<inputs.length ; i++){
                    /*
                     * innerHTML用于获取元素内部的HTML代码的
                     * 	对于自结束标签，这个属性没有意义
                     */
                    //alert(inputs[i].innerHTML);
                    /*
                     * 如果需要读取元素节点属性，
                     * 	直接使用 元素.属性名
                     * 		例子：元素.id 元素.name 元素.value
                     * 		注意：class属性不能采用这种方式，
                     * 			读取class属性时需要使用 元素.className
                     */
                    alert(inputs[i].className);
                }
            };

            //为id为btn04的按钮绑定一个单击响应函数
            var btn04 = document.getElementById("btn04");
            btn04.onclick = function(){

                //获取id为city的元素
                var city = document.getElementById("city");

                //查找#city下所有li节点
                var lis = city.getElementsByTagName("li");

                for(var i=0 ; i<lis.length ; i++){
                    alert(lis[i].innerHTML);
                }

            };

            //为id为btn05的按钮绑定一个单击响应函数
            var btn05 = document.getElementById("btn05");
            btn05.onclick = function(){
                //获取id为city的节点
                var city = document.getElementById("city");
                //返回#city的所有子节点
                /*
                 * childNodes属性会获取包括文本节点在呢的所有节点
                 * 根据DOM标签标签间空白也会当成文本节点
                 * 注意：在IE8及以下的浏览器中，不会将空白文本当成子节点，
                 * 	所以该属性在IE8中会返回4个子元素而其他浏览器是9个
                 */
                var cns = city.childNodes;

                //alert(cns.length);

                /*for(var i=0 ; i<cns.length ; i++){
                    alert(cns[i]);
                }*/

                /*
                 * children属性可以获取当前元素的所有子元素
                 */
                var cns2 = city.children;
                alert(cns2.length);
            };

            //为id为btn06的按钮绑定一个单击响应函数
            var btn06 = document.getElementById("btn06");
            btn06.onclick = function(){
                //获取id为phone的元素
                var phone = document.getElementById("phone");
                //返回#phone的第一个子节点
                //phone.childNodes[0];
                //firstChild可以获取到当前元素的第一个子节点（包括空白文本节点）
                var fir = phone.firstChild;

                //firstElementChild获取当前元素的第一个子元素
                /*
                 * firstElementChild不支持IE8及以下的浏览器，
                 * 	如果需要兼容他们尽量不要使用
                 */
                //fir = phone.firstElementChild;

                alert(fir);
            };

            //为id为btn07的按钮绑定一个单击响应函数
            myClick("btn07",function(){

                //获取id为bj的节点
                var bj = document.getElementById("bj");

                //返回#bj的父节点
                var pn = bj.parentNode;

                alert(pn.innerHTML);

                /*
                 * innerText
                 * 	- 该属性可以获取到元素内部的文本内容
                 * 	- 它和innerHTML类似，不同的是它会自动将html去除
                 */
                //alert(pn.innerText);


            });


            //为id为btn08的按钮绑定一个单击响应函数
            myClick("btn08",function(){

                //获取id为android的元素
                var and = document.getElementById("android");

                //返回#android的前一个兄弟节点（也可能获取到空白的文本）
                var ps = and.previousSibling;

                //previousElementSibling获取前一个兄弟元素，IE8及以下不支持
                //var pe = and.previousElementSibling;

                alert(ps);

            });

            //读取#username的value属性值
            myClick("btn09",function(){
                //获取id为username的元素
                var um = document.getElementById("username");
                //读取um的value属性值
                //文本框的value属性值，就是文本框中填写的内容
                alert(um.value);
            });


            //设置#username的value属性值
            myClick("btn10",function(){
                //获取id为username的元素
                var um = document.getElementById("username");

                um.value = "今天天气真不错~~~";
            });


            //返回#bj的文本值
            myClick("btn11",function(){

                //获取id为bj的元素
                var bj = document.getElementById("bj");

                //alert(bj.innerHTML);
                //alert(bj.innerText);

                //获取bj中的文本节点
                /*var fc = bj.firstChild;
                alert(fc.nodeValue);*/

                alert(bj.firstChild.nodeValue);


            });

        };


    </script>
</head>
<body>
<div id="total">
    <div class="inner">
        <p>
            你喜欢哪个城市?
        </p>

        <ul id="city">
            <li id="bj">北京</li>
            <li>上海</li>
            <li>东京</li>
            <li>首尔</li>
        </ul>

        <br>
        <br>

        <p>
            你喜欢哪款单机游戏?
        </p>

        <ul id="game">
            <li id="rl">红警</li>
            <li>实况</li>
            <li>极品飞车</li>
            <li>魔兽</li>
        </ul>

        <br />
        <br />

        <p>
            你手机的操作系统是?
        </p>

        <ul id="phone"><li>IOS</li> <li id="android">Android</li><li>Windows Phone</li></ul>
    </div>

    <div class="inner">
        gender:
        <input class="hello" type="radio" name="gender" value="male"/>
        Male
        <input class="hello" type="radio" name="gender" value="female"/>
        Female
        <br>
        <br>
        name:
        <input type="text" name="name" id="username" value="abcde"/>
    </div>
</div>
<div id="btnList">
    <div><button id="btn01">查找#bj节点</button></div>
    <div><button id="btn02">查找所有li节点</button></div>
    <div><button id="btn03">查找name=gender的所有节点</button></div>
    <div><button id="btn04">查找#city下所有li节点</button></div>
    <div><button id="btn05">返回#city的所有子节点</button></div>
    <div><button id="btn06">返回#phone的第一个子节点</button></div>
    <div><button id="btn07">返回#bj的父节点</button></div>
    <div><button id="btn08">返回#android的前一个兄弟节点</button></div>
    <div><button id="btn09">返回#username的value属性值</button></div>
    <div><button id="btn10">设置#username的value属性值</button></div>
    <div><button id="btn11">返回#bj的文本值</button></div>
</div>
</body>
</html>
```



```css
@CHARSET "UTF-8";

body {
	width: 800px;
	margin-left: auto;
	margin-right: auto;
}

button {
	width: 300px;
	margin-bottom: 10px;
}

#btnList {
	float:left;
}

#total{
	width: 450px;
	float:left;
}

ul{
	list-style-type: none;
	margin: 0px;
	padding: 0px;
}

.inner li{
	border-style: solid;
	border-width: 1px;
	padding: 5px;
	margin: 5px;
	background-color: #99ff99;
	float:left;
}

.inner{
	width:400px;
	border-style: solid;
	border-width: 1px;
	margin-bottom: 10px;
	padding: 10px;
	float: left;
}
```





### 5、图片切换练习

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>

    <link rel="stylesheet" href="./index.css">

    <script type="text/javascript" src="index.js"></script>

</head>
<body>

    <div id="outer">

        <p id="info"></p>

        <img src="./image/1.jpg" alt="1">

        <button id="prev">上一张</button>
        <button id="next">下一张</button>

    </div>

</body>
</html>
```



```css
*{
    margin: 0;
    padding: 0;
}

#outer{
    width: 500px;
    margin: 50px auto;
    background-color: #99ff99;
    padding: 10px;
    text-align: center;
}

img{
    width: 500px;
}
```



```javascript
/*
    - 要求：点击按钮，切换图片
 */
window.onload = function () {

    // 获取两个按钮
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");


    /*
        - 要切换图片，就是修改img的src属性
     */


    // 获取img标签
    var img = document.getElementsByTagName("img")[0];


    // 创建一个数组，用来保存图片的路径
    var imgArr = ["./image/1.jpg", "./image/2.jpg", "./image/3.jpg", "./image/4.jpg", "./image/5.jpg"];


    // 创建一个变量，用来保存图片的索引
    var index = 0;


    // 最先调用函数，加载缓存数据
    information(index);

    // 文字提示函数
    function information(index) {
        // 设置提示文字
        // 获取id为info标签对象
        var info = document.getElementById("info");
        info.innerHTML = "一共" + (imgArr.length) + "张图片，当前第" + (index+1) + "张！";
    }


    // 分别为两个单击按钮绑定单击响应函数
    prev.onclick = function () {
        // alert("上一张");

        // 要修改一个元素的属性，就是 元素.属性 = 属性值;

        // 切换到上一张，index自减
        if (index == 0) {
            index = imgArr.length-1;
        } else {
            index--;
        }

        // 修改图片路径
        img.src = imgArr[index];

        // 调用函数，显示文字提示信息
        information(index);
    };

    next.onclick = function () {
        // alert("下一张");

        // 切换到下一张，index自减
        if (index == (imgArr.length-1)) {
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
```









































