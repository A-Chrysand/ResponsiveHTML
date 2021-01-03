window.onload = function () {
	drawmoneyouttable("moneyouttable");
	readcollectionjsonfile();
	pg3_life_moneytable_StyleSetting();
	$("#moneyouttable .td_doti").eq(1).html("<a href=\"http://www.baidu.com/\" target=\"_blank\">百度</a>");
	$("#moneyouttable .beiwanglutextunit").html("1、你又没有女朋友<br>2、下个月这张卡去注销\n");
	//$('#centerpagearea', parent.document).css("height",$("body").css("height")); 


}

var unit_beiwanglu_classname = "beiwangluunit"//定义首行备忘录单元格
var unit_beiwanglutext_classname = "beiwanglutextunit";	//定义首行备忘录单元格
var moneytable_classname = "moneyouttable";			//定义<table>的classname
var moneytable_unit_caption_classname = "th_money";		//定义首行表头的classname
var moneytable_unit_xuhao = "td_xuhao";					//定义第一列序号的classname
var moneytable_unit_xiangmu = "td_xiangmu"					//定义第二列项目的classname
var moneytable_unit_money = "td_money";
var moneytable_unit_situation = "td_situation"					//定义第4列状态的classname
var moneytable_unit_doit = "td_doti"						//定义第5列doit的classname
function drawmoneyouttable(targetstr3) {
	var moneyitem_num = sessionStorage.getItem("ls_moneyjsonL");	//定义有多少行+1
	moneyitem_num++;

	var div_ = $("#" + targetstr3);
	div_.append("<table class=\"" + moneytable_classname + "\"></table>");//添加表格
	var table_ = $("." + moneytable_classname);
	var tr_;

	for (var i = 0; i <= moneyitem_num; i++) {
		if (i == 0) {
			//添加周信息
			table_.append('<tr class="' + moneytable_unit_caption_classname + '"><th class="' + moneytable_unit_caption_classname + '">序号</th><th class="' + moneytable_unit_caption_classname + '">项目</th><th class="' + moneytable_unit_caption_classname + '">价格</th><th class="' + moneytable_unit_caption_classname + '">状态</th><th class="' + moneytable_unit_caption_classname + '">Do it</th><th class="' + unit_beiwanglu_classname + '">备忘录</th></tr >');
		}
		else {
			table_.append('<tr class="num' + i + '"></tr>');	//添加行元素
			tr_ = $(".num" + i);
			tr_.append("<td class=\"" + moneytable_unit_xuhao + "\"> " + i + " </td>");
			tr_.append("<td class=\"" + moneytable_unit_xiangmu + "\"> </td>");
			tr_.append("<td class=\"" + moneytable_unit_money + "\"> </td>");
			tr_.append("<td class=\"" + moneytable_unit_situation + "\">  </td>");
			tr_.append("<td class=\"" + moneytable_unit_doit + "\"> </td>");
			if (i == 1) {
				tr_.append("<td class=\"" + unit_beiwanglutext_classname + "\" rowspan=\"" + moneyitem_num + "\" contentEditable=\"true\"></td>");
			}
		}
	}
}

var collectionjsonsrc = "../../database/money.json";
function readcollectionjsonfile() {
	var moneyrequest = new XMLHttpRequest();
	moneyrequest.open("get", collectionjsonsrc);
	moneyrequest.send(null);
	moneyrequest.onload = function () {
		if (moneyrequest.status == 200) {
			var moneyjson = JSON.parse(moneyrequest.responseText);
			var moneyjsonL = moneyjson.moneylist.length;
			sessionStorage.setItem("ls_moneyjsonL", moneyjsonL);
			fillcollectiontable(moneyjson["moneylist"]);
		}
	}

}

function fillcollectiontable(moneyjson1) {

	$("#tablecaption").html("你工人爷爷来了");
	var summoney = 0;
	var checkifcomplete = 0;
	var tempsituation;
	for (var i = 0; i < moneyjson1.length; i++) {
		$("#moneyouttable .td_xiangmu").eq(i).html(moneyjson1[i].item);
		tempsituation = moneyjson1[i].situation;
		$("#moneyouttable .td_situation").eq(i).html(tempsituation);
		if (tempsituation == "未完成");
		{
			checkifcomplete++;
		}
		$("#moneyouttable .td_money").eq(i).html(moneyjson1[i].price);
		summoney += moneyjson1[i].price;
	}
	///////////////////////////////////////
	$("#moneyouttable .td_xuhao:last").html("总结");
	$("#moneyouttable .td_money:last").html(summoney);
	if (checkifcomplete >= 0) {
		$("#moneyouttable .td_situation:last").html("未完成").css("color", "red");
	}
	else {
		$("#moneyouttable .td_situation:last").html("已完成").css("color", "gold");
	}
}


function pg3_life_moneytable_StyleSetting() {

	$(addcls(moneytable_classname)).css({
		"table-layout": "fixed",
		"width": "100%",
		"max-width": "800px",
	})//定义表格属性
	$(addcls(moneytable_unit_caption_classname) + " th").css({
		"border-collapse": "collapse",
		"border": "rgb(156, 202, 213) 2px solid",
		"padding": "10px 8px",
		"background-color": "rgb(193, 235, 248)",
		"text-align": "center",
		"line-height": "2em"
	});//定义表头属性
	$(addcls(moneytable_unit_caption_classname)).eq(1).css({ "width": "4em" });//选择序号列的宽度
	$(addcls(moneytable_unit_caption_classname)).eq(3).css({ "width": "6em" });//选择截止时间列的宽度
	$(addcls(moneytable_unit_caption_classname)).eq(4).css({ "width": "6em" });//选择状态列的宽度
	$(addcls(moneytable_unit_caption_classname)).eq(5).css({ "width": "4em" });//选择Do it列的宽度

	$(addcls(moneytable_unit_xuhao) + "," + addcls(moneytable_unit_xiangmu) + "," + addcls(moneytable_unit_money) + "," + addcls(moneytable_unit_situation) + "," + addcls(moneytable_unit_doit)).css({
		"border-collapse": "collapse",
		"border": "rgb(156, 202, 213) 2px solid",
		"padding": "10px 8px",
		"text-align": "center",
		"line-height": "2em"
	});//定义单元格属性

	$(addcls(moneytable_unit_xuhao)).css({ "background-color": "rgb(193, 235, 248)" });
	$(addcls(moneytable_unit_xiangmu)).css({ "text-align": "left" });//选择项目单元格
	
	$(addcls(unit_beiwanglu_classname)).css({
		"text-align": "center",
		"color": "darkblue",
		"width": "20%"
	})//定义备忘录表头单元格样式
	$(addcls(unit_beiwanglutext_classname)).css({
		"border-collapse": "collapse",
		"border": "rgb(156, 202, 213) 2px solid",
		"text-align": " left",
		"vertical-align": "top",
		"margin": "0px",
		"padding": "0px"
	})//定义备忘录内容单元格样式
}



function addid(targetid) {
	return "#" + targetid.toString();
}
function addcls(targetclass) {
	return "." + targetclass.toString();
}