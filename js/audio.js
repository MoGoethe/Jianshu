var timer;
var audio = {
/* 
	获取MP3播放列表，歌词列表，歌手信息
*/
	music_list:[
		{"address":"7.mp3","lrc":"7.lrc","singer":"杨宗纬","name":"一场恋爱","time":"189"},
		{"address":"1.mp3","lrc":"1.lrc","singer":"纯音乐","name":"Always(Inst)","time":"205"},
		{"address":"2.mp3","lrc":"2.lrc","singer":"T[伊莱美]","name":"Always","time":"205"},
		{"address":"3.mp3","lrc":"3.lrc","singer":"CHEN[EXO] & Punch","name":"Everytime","time":"189"},
		{"address":"4.mp3","lrc":"4.lrc","singer":"金娜英 & Mad Clown","name":"再次见到你","time":"235"},
		{"address":"5.mp3","lrc":"5.lrc","singer":"纯音乐","name":"再次见到你(Inst)","time":"235"},
		{"address":"6.mp3","lrc":"6.lrc","singer":"Lyn","name":"With you","time":"254"}
	],

/*
	播放与暂停
*/
togglePlay: function(){
	var _this = document.getElementById('audio');
	clearInterval(timer);
	if($("#play").hasClass("icon-play")){
		$("#play").removeClass("icon-play").addClass("icon-pause");
		$(".disc").css({"animation-play-state":"running"});
     	_this.play();
     	timer = setInterval(audio.count,1000);
	}else{
		$("#play").removeClass("icon-pause").addClass("icon-play");
		_this.pause();
		clearInterval(timer);
		$(".disc").css({"animation-play-state":"paused"});
	}
	audio._likes();
},
/*
	计时器，进度条
*/
	count:function(){
			var _this = document.getElementById('audio');
			var _time =	parseInt(_this.duration);
			var _timeMin = parseInt(_time/60)>10?parseInt(_time/60):"0"+parseInt(_time/60);
			var _timeSec = parseInt(_time%60)>10?parseInt(_time%60):"0"+parseInt(_time%60);
			var _stringTime = "-"+_timeMin+":"+_timeSec;
			var t = $("#countdown").attr("time");
			var w = 0;
			var m =Math.floor( t /60);
			var s = Math.floor(t%60);
			if(t==0){
				$("#time_ring").width(0);
				$("#countdown").attr("time",_time);
				$("#countdown").html(_stringTime);
				$(".disc").removeClass("start");
				clearInterval(timer);
				$("#play").removeClass("icon-pause").addClass("icon-play");
				$(".disc").css({"animation-play-state":"paused"});
				return false;
			}			

			t = t - 1;
			w = ((_time-t)/_time).toFixed(3)*350;
			if(s<10){s="0"+s;};
			$("#time_ring").width(w);
			$("#countdown").attr("time",t);
			$("#countdown").html("-0"+m+":"+s);
		},
/* 
	开启与关闭静音
 */
	toggleMute:function(){
		var _this = document.getElementById('audio');
		if($("#mute").hasClass("active")){
			$("#mute").removeClass("active");
			_this.muted = false; //开启静音
		}else{
			$("#mute").addClass("active");
			_this.muted = true;
		}
	},
/*
	上一曲与下一曲
*/
	next:function(){
		var _this = document.getElementById('audio');
		var _nextMusicId = parseInt($("#musicid").val())+1;
		 _nextMusicId = _nextMusicId > audio.music_list.length-1? 0 :_nextMusicId;
		$("#musicid").val(_nextMusicId);		
		var nextMusicSrc ="./music/" +audio.music_list[_nextMusicId].address;
		_this.src = nextMusicSrc;
		$("#play").addClass("icon-play");
		$("#countdown").attr("time",audio.music_list[_nextMusicId].time);
		$(".singer").html(audio.music_list[_nextMusicId].singer);
		$(".music-info").html(audio.music_list[_nextMusicId].name);
		audio.togglePlay();

	},
	prev:function(){
		var _this = document.getElementById('audio');
		var _nextMusicId = parseInt($("#musicid").val())-1;
		 _nextMusicId = _nextMusicId > audio.music_list.length-1? 0 :_nextMusicId;
		$("#musicid").val(_nextMusicId);		
		var nextMusicSrc ="./music/" +audio.music_list[_nextMusicId].address;
		_this.src = nextMusicSrc;
		$("#play").addClass("icon-play");
		$("#countdown").attr("time",audio.music_list[_nextMusicId].time);
		$(".singer").html(audio.music_list[_nextMusicId].singer);
		$(".music-info").html(audio.music_list[_nextMusicId].name);
		audio.togglePlay();
	},
	/* 喜欢 */
	likes:function(){
		var _thisMusicId = $("#musicid").val();
		if($("#likes").hasClass("like")){
			$("#likes").attr("class","nomal icon-heart-empty");
			$(".list li").eq(_thisMusicId).attr("like","");
		}else{
			$("#likes").attr("class","nomal icon-heart like");
			$(".list li").eq(_thisMusicId).attr("like","like");
		}
	},
	_likes:function(){
		var _thisMusicId = $("#musicid").val();
		if($(".list li").eq(_thisMusicId).attr("like") =="like"){
			$("#likes").attr("class","nomal icon-heart like");
		}else{
			$("#likes").attr("class","nomal icon-heart-empty");
		}
	},
	/* 选择一首播放	*/
	choice:function(id){
		var _this = document.getElementById('audio');
		 id = id > audio.music_list.length-1? 0 :id;
		$("#musicid").val(id);		
		var nextMusicSrc ="./music/" +audio.music_list[id].address;
		_this.src = nextMusicSrc;
		$("#play").addClass("icon-play");
		$("#countdown").attr("time",audio.music_list[id].time);
		$(".singer").html(audio.music_list[id].singer);
		$(".music-info").html(audio.music_list[id].name);
		audio.togglePlay();
	},

	/* 获取音频列表*/
	getList:function(){
		var music_list_str='';
		for(var i=0; i<audio.music_list.length;i++){
			var list_str;
			list_str ="<li onclick=audio.choice("+i+") like=\"\">"+audio.music_list[i].name+"<span>"+audio.music_list[i].singer+"</span></li>";
			music_list_str += list_str;
		}
		music_list_str +='<li class="nomal close icon-double-angle-left"></li>';
		$(".list").html(music_list_str);
	},
	/*加载中*/
	onProcess:function(){
		$("#load").css({"display":"block"})
	},
	/* 暂停待播放中 */
	onCanPlay:function(){
		console.log("可以播放");
		$("#load").css({"display":"none"});
		clearInterval(timer);
		
	},
	onWaiting:function(){
		console.log("正在等待");
		$("#load").css({"display":"block"});
		
		timer = setInterval(audio.count,1000);
	}

}

audio.getList();

$("#play").click(function(){audio.togglePlay()});
$("#mute").click(function(){audio.toggleMute()});
$("#next").click(function(){audio.next()});
$("#prev").click(function(){audio.prev()});
$("#likes").click(function(){audio.likes()});
$("#menu").click(function(){
	$(".list").toggleClass("active");
	$(".container").toggleClass("open");
});
$(".close").click(function(){
	$(".list").removeClass("active");
	$(".container").removeClass("open");
})

