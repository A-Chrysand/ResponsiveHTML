var currentuser = JSON.parse(sessionStorage.getItem("file_currentuser"));
var classjson = new Array();
var classjsonsrc = "../../database/class.json";		//注意这里是以html文件为起点做相对位置的
var homeworkjson = new Array();
var homeworkjsonsrc = "../../database/homework.json";	//注意这里是以html文件为起点做相对位置的


window.onload = function () {

	readclassjsonfile();
	drawclasstable("#classtable");
	colorday();

	readhomeworkjsonfile();
	drawhomeworktable("#homeworktable");
	fillhomework();
	GBFheight(0, "pg1iframe");
	$("#classtabletitle").html(currentuser.banjistr + "课程表");
	$('#centerpagearea', parent.document).css("height", $("body").css("height"));

}

var unit_beiwanglutext_classname = "beiwanglutextunit";	//定义首行备忘录单元格
var unit_jieci_classname = "th_course"		//定义首列单元格（节次）的Classname
var unit_beiwanglu_classname = "beiwangluunit"//定义首行备忘录单元格
function drawclasstable(targetstr) {
	var unit_course_classname = "td_course"		//定义单元格的classname
	var unit_week_classname = "headCourse"		//定义首行单元格（周次）的classname

	var course_num = 5;//定义一天多少节课
	var table_cols = 8;
	var table_classname = "tableCourse";
	//更改名称也要改变CSS中的
	var div_ = $(targetstr);
	div_.append("<table class=\"" + table_classname + "\"></table>");//添加表格
	var table_ = $("." + table_classname);
	var tr_;
	for (var i = 0; i <= course_num; i++) {
		if (i == 0) {
			//添加周信息
			table_.append('<tr class="' + unit_week_classname + '"><th class="' + unit_jieci_classname + '"></th><th class="' + unit_jieci_classname + '">周一</th><th class="' + unit_jieci_classname + '">周二</th><th class="' + unit_jieci_classname + '">周三</th><th class="' + unit_jieci_classname + '">周四</th><th class="' + unit_jieci_classname + '">周五</th><th class="' + unit_jieci_classname + '">周六</th><th class="' + unit_jieci_classname + '">周日</th><th class="' + unit_beiwanglu_classname + '">备忘录</th></tr >');
		}
		else {
			//添加节课信息
			table_.append("<tr class=\"j" + i + "\"></tr>");	//\"为转义字符，转"
			tr_ = $(".j" + i);
			tr_.append("<th class=\"" + unit_jieci_classname + "\">" + i + "</th>");
			for (var j = 1; j <= table_cols; j++) {
				if (i == 1 && j == table_cols) {
					tr_.append("<td id=\"w" + j + "_j" + i + "\" class=\"" + unit_beiwanglutext_classname + "\" rowspan=\"" + course_num + "\" contentEditable=\"true\"></td>");
				}
				else if (j != table_cols) {
					tr_.append("<td id=\"w" + j + "_j" + i + "\" class=\"" + unit_course_classname + "\"></td>");
				}
			}
		}
	}
}

function readclassjsonfile() {
	var classrequest = new XMLHttpRequest();
	classrequest.open("get", classjsonsrc);
	classrequest.send(null);
	classrequest.onload = function () {
		if (classrequest.status == 200) {
			classjson = JSON.parse(classrequest.responseText);
			fillclass(classjson);
		}
	}
}

function fillclass(classjson) {
	var i, w, j;
	for (i in classjson[currentuser.banji]) {
		w = classjson[currentuser.banji][i].xingqi.toString();
		j = classjson[currentuser.banji][i].jieci.toString();
		$("#w" + w + "_j" + j).html(classjson[currentuser.banji][i].kemu);
	}
	$(".tableCourse .beiwanglutextunit").html("1、周日晚有班会课");
}


function colorday() {
	var myDate = new Date();/*
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日*/
	var days = myDate.getDay();
	var xingqi;
	var tableday = days;
	switch (days) {
		case 1:
			xingqi = '星期一';
			break;
		case 2:
			xingqi = '星期二';
			break;
		case 3:
			xingqi = '星期三';
			break;
		case 4:
			xingqi = '星期四';
			break;
		case 5:
			xingqi = '星期五';
			break;
		case 6:
			xingqi = '星期六';
			break;
		case 0:
			xingqi = '星期日';
			tableday = 7;
			break;
	}
	$("." + unit_jieci_classname).eq(tableday).css("color", "red");
	for (var i = 0; i <= 5; i++) {
		$("#w" + tableday + "_j" + i).css("background-color", "rgb(255, 247, 247)");
	}
	//var str = year + "年" + month + "月" + day + "日  " + days;*/
	return days;
}

function drawhomeworktable(targetstr2) {
	var table_classname = "homeworktable";			//定义<table>的classname
	var unit_caption_classname = "th_homework";		//定义首行表头的classname
	var unit_xuhao = "td_xuhao";					//定义第一列序号的classname
	var unit_xiangmu = "td_xiangmu"					//定义第二列项目的classname
	var unit_time = "td_time"						//定义第三列时间的classname
	var unit_doit = "td_doit"						//定义第四列doit的classname
	var hw_num = sessionStorage.getItem("ls_homeworkLength");									//定义有多少行作业
	//更改名称也要改变CSS中的
	var div_ = $(targetstr2);
	div_.append("<table class=\"" + table_classname + "\"></table>");//添加表格
	var table_ = $("." + table_classname);
	var tr_;


	for (var i = 0; i <= hw_num; i++) {
		if (i == 0) {
			//添加周信息
			table_.append('<tr class="' + unit_caption_classname + '"><th class="' + unit_caption_classname + " " + unit_xuhao + '">序号</th><th class="' + unit_caption_classname + " " + unit_xiangmu + '">项目</th><th class="' + unit_caption_classname + " " + unit_time + '">截止时间</th><th class="' + unit_caption_classname + " " + unit_doit + '">Do it</th><th class="' + unit_beiwanglu_classname + '">备忘录</th></tr >');
		}
		else {
			table_.append('<tr class="num' + i + '"></tr>');	//添加行元素
			tr_ = $(".num" + i);
			tr_.append("<td class=\"" + unit_xuhao + "\"> " + i + " </td>");		//添加首列序号
			tr_.append("<td class=\"" + unit_xiangmu + "\"> </td>");		//添加首列序号
			tr_.append("<td class=\"" + unit_time + "\">  </td>");		//添加首列序号
			tr_.append("<td class=\"" + unit_doit + "\"> </td>");		//添加首列序号
			if (i == 1) {
				tr_.append("<td class=\"" + unit_beiwanglutext_classname + "\" rowspan=\"" + hw_num + "\" contentEditable=\"true\"></td>");

			}
		}
	}
}

var hwcharacter = "homework1"
function readhomeworkjsonfile() {
	var homeworkrequest = new XMLHttpRequest();
	homeworkrequest.open("get", homeworkjsonsrc);
	homeworkrequest.send(null);
	homeworkrequest.onload = function () {
		if (homeworkrequest.status == 200) {
			homeworkjson = JSON.parse(homeworkrequest.responseText);
			var homeworkLength = homeworkjson.homework1.length;
			sessionStorage.setItem("ls_homeworkLength", homeworkLength);
			fillhomework(homeworkjson[hwcharacter]);
		}
	}

}
function fillhomework(hwdata) {
	for (var i in hwdata) {
		$(".td_xiangmu").eq(++i).html(hwdata[--i].subject + hwdata[i].title);
		$(".td_time").eq(++i).html(hwdata[--i].month + "月" + hwdata[i].day + "日");
		//由于eq(i=0)时为表头，会把数据写进表头，所以要先++i选择完后再--i读取数据
	}
	$(".td_doit").eq(3).html("<a href=\"https://www.educoder.net/\" target=\"_blank\">edu</a>" );
	$(".td_doit").eq(4).html("<a href=\"http://i.chaoxing.com/\" target=\"_blank\">学习通</a>" );
	$(".td_doit").eq(5).html("<a href=\"http://i.chaoxing.com/\" target=\"_blank\">学习通</a>" );
}
