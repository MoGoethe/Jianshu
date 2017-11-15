#平滑过渡效果的开关

####示例
这里是一个 [Demo](http://mogoethe.github.io/resume/turn_off.html"github demo").

###现在开始吧...

####准备材料
1. 编辑器：sublime text3
2. 谷歌浏览器： chrome

####html代码
<pre><code>   
```<header></header>
<div class="container">   //这是一个大容器，里面可以放很多的div.col
	<div class="col">	//这是横向整列的一个容器
		<div class="choice">    //这才是按钮本身
			<a href="#" class="button" id="button">
				<span class="icon"></span>
			</a>
		</div>
	</div>
</div>```
</code></pre>

####css代码
<pre><code>
body,html{
	background-color: #eee;
	margin: 0;
	padding: 0;
}
header{
	width: 100%;
	height: 150px;
	background-color: #2A324B;
}
.container{
	width: 960px;
	margin: 0 auto;
	background-color: #fff;
	padding: 30px 0;
}
.col{
	width: 100%;
	height: auto;
	padding: 0;
	margin: 20px 0;
	padding: 50px 0;
	background-color: #2A324B;
}
.choice{
	width: 150px;
	height: 50px;
	border-radius: 25px;
	margin: 0 auto;
	position: relative;
	border:2px solid #fff;
	background-color: #0096cf;
	text-align: center;
	line-height: 50px;
	font-size: 26px;
	color: #fff;
}
.button{
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background-color: #00A8E8;
	/* #d9534f;*/
	display: block;
	box-shadow: 2px 3px 8px rgba(0,0,0,.7);
	transition: all 0.5s;
	text-align: center;
	margin-top: 0;
	position: absolute;
	top: 0
}

.icon{	
	width: 0;height: 0;
	position: absolute;
	margin: 22px -13px;
}
.icon:before{
	content: '';
	width: 19px;
	height: 3px;
	background-color: #fff;
	display: block;
	position: absolute;
	-webkit-transform: translate(-50%, 5px) rotate(40deg);
              transform: translate(-50%, 5px) rotate(40deg);
    border-radius: 3px;
	transition:  all .5s;
}
.icon:after{
	content: '';
	width: 3px;
	height: 33px;
	background-color: #fff;
	display: block;
	position: absolute;
	-webkit-transform: translate(16px, -15px) rotate(45deg);
              transform: translate(16px, -15px) rotate(45deg);
    border-radius: 3px;
	transition:  all .5s;
}
.choice.active .button{
	margin-left: 100px;
	box-shadow: -2px 3px 8px rgba(0,0,0,.7);
}
.choice.active .icon:before{
	width: 33px;
	height: 3px;
	-webkit-transform: translate(-5px, 3px) rotate(45deg);
              transform: translate(-5px, 3px) rotate(45deg);
}
.choice.active .icon:after{
	width: 3px;
	height: 33px;
	-webkit-transform: translate(10px, -12px) rotate(45deg);
              transform: translate(10px, -12px) rotate(45deg);
}
</code></pre>

####然后你就可以在浏览器中看见
![Alt text](./img/right.png)

####接下来我们给他把效果加上去
<pre><code>
```
<script src="js/jquery.min.js"></script> //这里我引用了jquery，要换成自己的路径哦~
<script>
	$("#button").click(function(){//按钮点击的时候触发事件
		$(".choice").toggleClass("active");   //toggleClass函数的作用是，添加或移除active，
		//有就移除，没有就添加。
	})
</script>
	```	

</code></pre>

####刷新页面，然后我们点击按钮就会得到...
![Alt text](./img/error.png)
而且他在变换时候的效果也是渐变过来的哟,怎么样，是不是比用替换图片完成效果好多了呢？
这里的代码还有很多没有优化的地方，就交给你们自己完成啦~