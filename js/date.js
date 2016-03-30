var calendar = {
    nowMonth: null,
    nowYear: null,
    nowDate: null,
    month : ['January','February','March','April','May','June','July','August','September','October','November','December'],
    getDates: function(M) {
        var D = new Date();
        D.setMonth(M + 1);
        D.setDate(0);
        return D.getDate()
    },
    getMonthOne: function(M) {
        var D = new Date();
        var D2 = new Date(D.getFullYear(), M, 1)
        return D2.getDay()
    },
    nowDate: function() {
        var D = new Date();
        calendar.nowMonth = D.getMonth();
        calendar.nowYear = D.getFullYear();
        calendar.nowDate = D.getDate();
        calendar.thisMonth = calendar.nowMonth;
        calendar.todayDate = String(calendar.nowYear) + String(calendar.nowMonth)+String(calendar.nowDate);
        $(".header-title").html(calendar.month[calendar.nowMonth])
    },//calendar.nowMonth + 1
    downM: function() {
        if (calendar.nowMonth >= 11) {
            alert("已经是最后一月了")
        } else {
            calendar.nowMonth += 1;
        }

        $(".header-title").html(calendar.month[calendar.nowMonth]);
        calendar.todayDate = String(calendar.nowYear) + String(calendar.nowMonth)+String(calendar.nowDate);
        calendar.initHtml();
        calendar.showOrHide(calendar.todayDate);
    },
    upM: function() {
        if (calendar.nowMonth <= 0) {
            alert("已经是第一月了")
        } else {
            calendar.nowMonth -= 1;
        }

        $(".header-title").html(calendar.month[calendar.nowMonth]);
        calendar.todayDate = String(calendar.nowYear) + String(calendar.nowMonth)+String(calendar.nowDate);
        calendar.initHtml();
        calendar.showOrHide(calendar.todayDate);
    },
    initHtml: function() {
        var Da = new Date();
        var dates = calendar.getDates(calendar.nowMonth);
        var day = calendar.getMonthOne(calendar.nowMonth);
        var _id = '';
        var zHtml = "";
        var d = 0;
        var dL = $(".dates li").length;
        var zLeng = 42;
        if (day != 0) {
            for (p = 0; p < day; p++) {
                zHtml += "<li></li>"
            }
        }
        for (i = 0; i < dates; i++) {
            id = String(calendar.nowYear) + String(calendar.nowMonth)+String(i+1);
            if (Da.getMonth() == calendar.nowMonth) {
                if (Da.getDate() == (i + 1)) {
                    zHtml += "<li datesId=\""+id+"\">" + (i + 1) + "</li>";
                } else {
                    zHtml += "<li datesId=\""+id+"\">" + (i + 1) + "</li>";
                }
            } else {
                zHtml += "<li datesId=\""+id+"\">" + (i + 1) + "</li>";
            }
        }

        $(".dates").html(zHtml);

        if(calendar.nowMonth == calendar.thisMonth){
            $(".dates li").eq(calendar.nowDate+1).addClass("active");
        }

        if (dL != zLeng) {
            for (k = 0; k < (zLeng - dL); k++) {
                $(".dates").append("<li></li>");
            }
        }
        calendar.showOrHide(calendar.todayDate);
    },
    showOrHide : function(id){
        $(".list li").each(function(){
            if($(this).attr("dataId") == id){
                $(this).addClass("active")
            }else{
                $(this).removeClass("active")
            }
        })
    },
    init : function(){
        calendar.nowDate();
        calendar.initHtml();
    }
}

calendar.init(); //初始化

$("#next").click(function() { calendar.downM() });//翻月点击事件
$("#prev").click(function() { calendar.upM() });//翻月点击事件

$(document).on("click", ".dates li", function () {//事件委托，显示当前日期需做的事务。
    var date = 0;
    date = $(this).attr("datesId");
    if($(this).html() != '') $(this).addClass("active").siblings().removeClass("active");
    calendar.showOrHide(date);
});

$(document).on("keydown", function (e) {//事件委托，显示当前日期需做的事务。
    e =window.event || e;
    //console.log();
    if(e.keyCode == 13 && $("#txtInput").is(":focus")){
        if($("#txtInput").val() =='' ){
            alert("The input box is empty.");
            return false;
        }
        var stringSting,thingType,innerHtml,date;
        date = $(".dates li.active").attr("datesid");
        var $li = $("<li class=\"active\"></li>");
        thingType = $("#thingstype").val();
        stringSting = $("#txtInput").val();
        innerHtml = "<span class=\"type\">· It's a <i>"+thingType+"</i> thing -</span><span class=\"discrib\">"+stringSting+"</span>";
        $li.attr("dataId",date).html(innerHtml);
        if($(".list").html() != ''){
            $(".list li:last-child").after($li);
        }else{
            $(".list").html($li);
        }
        
        $("#txtInput").val("");
    }
});