##文档说明
<font style="color:#72c02c">
#####注：需要提交的文件***<font style="color:red">除开我们已经提供的外</font>***包括：  index.html;index_edit.html;   main.scss;   _theme.scss; 由main.scss生成的main.css; main.min.css
<br />css文件由scss文件生成，其中_theme.scss 用于页面颜色的配置,其中除开文字的颜色不用更改以外，背景色，前景色，鼠标移入效果，页面特效的所产生的色彩均使用_theme.scss文件作为配置文件填充颜色。
<br />
<br />
index_edit.html为index.html的编辑状态，只需要依次引入 jquery.min.js；jquery.drag.css ； jquery.edit.css； jquery.edit.js ； jquery.drag.js ；
</font>
######root 为项目文件夹
######项目文件目录结构
<font style="color: #09f;">
PROJECT（项目文件夹）  
<font style="color:#72c02c">|      |—css</font>  
|	     |      |       <font style="color: red;">|—basic.css（csshack以及基础布局——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—basic.min.css（basic.css的压缩文件——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—jquery.dad.css（编辑状态加载css文件之一——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—jquery.edit.css（编辑状态加载css文件之一——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—main.css（项目主页所需css样式，由scss文件生成）</font>  
|	     |      |       <font style="color: red;">|—main.min.css（main.css的压缩文件，由scss文件生成）</font>   
	<font style="color:#72c02c">|      |— images</font>  
|	     |<font style="color: red;">       |—所有图片（无子目录）</font>  
	<font style="color:#72c02c">|      |—js</font>  
|	     |      |       <font style="color: red;">|—无（js代码直接写到html页面中）</font>  
|	     |      |       <font style="color: red;">|—jquery.dad.js（编辑状态加载js文件之一——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—jquery.edit.js（编辑状态加载js文件之一——***禁止更改***）</font>  
|	     |      |       <font style="color: red;">|—slide.js（所有项目需要用到的轮播插件——***禁止更改***）</font>  
<font style="color:#72c02c">|      |—node_module（安装gulp或者其他前端自动化工具时由node自动生成）</font>  
<font style="color:#72c02c">|      |—scss</font>  
|      |       <font style="color: red;">|—_theme.scss（项目配色方案，字体大小等。参照完整示例里面的_theme.scss文件）</font>  
|      |       <font style="color: red;">|—main.scss（项目样式，生成项目所需css文件）</font>  
|— gulpfile.js (gulp配置文件如果使用其他的自动化工具则为工具配置js文件)  
|—  index.html（项目页面）
</font>

####注意：
<font style="color: red;">
#####1. 整个dist目录中除了img文件夹里面的图片需要自己从psd文件中切出来以外，其它任何文件不允许更改，项目页面的样式，即main.css文件，由main.scss文件生成，不允许手动更改。
#####2. 除开index.html文件以外，还需要做一个index_edit.html文件，此文件由index.html文件引入编辑状态所需的css，js文件即可。
</font>

****
##### ————————————★——CSS START——★————————————
****
###CSS文档说明
###完整示例：示例请参照 [index.html](./demo1.html "SeaseeYoul,github.io")

####1.css文件放置路径，引用说明：
本项目的css文件分别放在 **dist/css/base/xxx.css，dist/css/page/xxx.css，dist/css/module/xxx.css，dist/css/plugs/xxx.css，**共四个文件目录下。其中：

css/base：网页默认样式重置，基础布局的css文件。 包括：reset.css和basic.css文件。

css/page：单独每一个页面所用到的css文件， index.css。

css/module： 编辑状态所需css文件

css/plugs：页面所用到的插件所需加载的css文件。

####2.基础布局说明：示例请参照 [demo](./demo1.html "SeaseeYoul,github.io")

基础布局已经写好了，大家只需要直接使用就好了。

横向布局中 一个通栏 **div.wrap [写法请参照emmet]** 中只包含一个**div.grid**或者一个**div.grid.over**。一个div.grid中包含一个或者多个div.col
其中每个div.col的 w 之和必须为1180px，参照以下代码：

#####2.1 完全通栏，即展示内容已经到页面两端 如：大的banner图。

```
	<div class="wrap">     /*最外层容器，宽度为100%*/
		<div class="grid over">  /*表明这是100%宽度的一个容器*/
			<div class="col">    /*必须拥有一个这一层，即便没有任何表现意义，主要用于编辑状态的标识*/
				<div class="modulename"> /*详细内容模块由一个div包裹 */
					这里是详细内容
				</div>
			</div>	
		</div>
	</div>
```

#####2.2 通栏 ，但是内容居中。但是里面的文字图片等信息放在宽度为1180的一个div里面

```
	<div class="wrap">
		<div class="grid">/*这是一个宽度为1180px并且横向居中的一个容器*/
			<div class="col w1180">    // col无任何意义，但是必须拥有，w1180表示这个col的宽度为1180px,
			//宽度为1180后则不能再放置同层级的div 
				<div class="modulename">   /*详细内容模块由一个div包裹 */
					详细内容
				</div>
			</div>
		</div>
	</div>
```
或者：
```
	<div class="wrap">
		<div class="grid">
			<div class="col w860">  //宽度为860的 col，宽度不足 1180，则需补充一个宽度为300的div填满整个通栏，
			//相邻的两个div的左边距为 20px  所以这里的宽度是: 860 + 20 +300 = 1180 ，
				<div class="modulename">
						详细内容
				</div>
			</div>
			<div class="col w300">    //宽度为300的 col，
				<div class="modulename">
						详细内容
				</div>
			</div>
		</div>
	</div>
```
######一共会出现的情况共有8种：分别是：***<font style="color: #09f;">w1180; w860+w300; w780+380; w580+w580;w540+w300+w300;w420+w420+w300; w380+w380+w380;</font>***他们位置可以随意交换。也就是说：在一个居中对齐的一个 div.grid中 只会出项上述7种样式,如果出现特别的需求，另做特殊处理。

##### 2.3 纵向布局
这里所指的纵向布局是：按照设计师原本的效果，如果把模块在同一横向通栏中，高度无法水平对齐，那么就把它做成纵向布局。参照 [demo](https://baidu.com "SeaseeYoul,github.io")。其思想是：**一个宽度为1180px的容器包裹着两个或者三个纵向排列的容器，每个里面的内容使用一个 div.grid.over来包裹，使用 div.col.w*来确定这个容器的宽度 **


####3. css命名说明：
#####3.1 class的名字以顶层模块开始
所有的都使用class，可以使用伪类选择器，但是兼容性要做到IE8。方法不限，所有的class以顶层模块名开始。#####如律师简介：**这写为： .profile{ margin-top:20px; ......},律师简介下的详情写为：.profile .profile_detail{ color:#999999; ...... }，***<font style="color: #09f;">Css中不允许加载图片，所有的图片从html代码里面加载，包括背景图片</font>***

#####3.2 模块命名规则：
律师简介：
```
	.profile{
		律师简介的最外层，即col下的第一层。
	}

```
律师团队：
```
	.team{
		....
	}
```
成功案例：
```
	.case{
		...
	}

```
律师动态 / 新闻：
```
	.dynamic{
		...
	}
```
律师文集：
```
	.corpus{
		...
	}

```
法律法规：
```
	.statute{
		...
	}

```
在线咨询 / 咨询：
```
	.consult{
		...
	}
```
联系我们：
```
	.concat{
		...
	}
```
个人风采：
```
	.presence{
		...
	}
```
法律知识：
```
	.knowledge{
		...
	}
```
法律常识：
```
	.nous{
		...
	}
```
法律报道：
```
	.report{
		...
	}
```

办公环境：
```
	.environment{
		...
	}
```

荣誉：
```
	.honor{
		...
	}
```

法律文书：
```
	.amanuensis{
		...
	}
```
收费标准 / 计算器：
```
	.calculator{
		...
	}
```
办案流程：
```
	.flow{
		...
	}
```
业务领域：
```
	.business{
		...
	}
```
优势/团队优势：
```
	.advantage{
		...
	}
```
视频：
```
	.video{
		...
	}
```
计算器：
```
	.calculator{
		...
	}
```
用户评价：
```
	.evaluate{
		...
	}
```
其它/综合：
```
	.others{
		...
	}
```

#####3.3 模块内部命名规则：

图文混排用来描述时使用 **模块名+“-”+detail**,例如律师简介：
```
	.profile{
		...
	}
	.profile-detail{
		...
	}
```
用来做列表时使用 **模块名+“-”+list**,例如律师文集：
```
	.corpus{
		...
	}
	.corpus-list{
		...
	}
```




****
##### ————————————★——CSS END——★——————————
##### ————————————★——JS START——★———————————
****

###JS文档说明
####1. js文档路径，放置对应意义说明
js文件共放置在三个目录下，分别是： js/xxxx.js，js/pages/xxxx.js,js/plugs/xxx.js

分别对应的是：

js/xxx.js 为js库，如jquery.js，zepto.js angular.js 等文件。

js/pages/xxx.js 为单个页面所需用到的js文件，如 index.js

js/plugs/xxx.js 为插件所需用到的js，如 slide.js isscroll.js 等...

####2. js书写，命名规则

js变量名的定义不能随意，必须语义化。
例如需要声明一个时间对象和一个装人的数据的数组：
```
【错误示范】
var a = new Date();
var b = [];

【正确示范】
var date = new Date();
var person = [];
```
** 以下划线开头的变量通常被认为是 私有变量 **

** 字母全部大写的变量通常用被认为是常量**

** 普通变量使用驼峰命名，或者是匈牙利命名规则**


****
##### ——————————————JS END——————————————
##### ———————————EDIT_STATE START———————————
****


###轮播使用插件slide.js使用說明

在需要使用轮播效果的頁面中引入slide.js ,src地址爲 js/plugs/slide.js, **示例请参照 [demo](https://baidu.com "SeaseeYoul,github.io")。**

```
//示例代码一，全屏滚动
<script type="text/javascript">
	$('.ck-slide').ckSlide({
		autoPlay: true,//默认为不自动播放，需要时请以此设置
		dir: 'x',//默认效果淡隐淡出，x为水平移动，y 为垂直滚动
		interval:8000//默认间隔2000毫秒
	});
</script>
//示例代码二，只滚动一张图片
<script type="text/javascript">
$('.slide1').ckSlide({
	autoPlay: true,//默认为不自动播放，需要时请以此设置
	dir: 'x',//默认效果淡隐淡出，x为水平移动，y 为垂直滚动
	interval:3000,//默认间隔2000毫秒
	size:3
});
</script>

```
上述两段代码的区别为：**一个有size参数，另一个不带size参数。size参数描述的是当前整屏所显示的个数。** 上述两段代码分别请参照[全屏滚动](https://baidu.com "SeaseeYoul,github.io")，[单个滚动](https://baidu.com "SeaseeYoul,github.io")



****
##### ——————————————EDIT_STATE END——————————————★★★★★★
##### ————————————————ALL END————————————————★★★★★★★★★★
****
