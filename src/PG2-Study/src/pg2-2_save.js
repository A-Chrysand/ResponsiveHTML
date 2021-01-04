window.onload = function () {
	drawcollectiontable("collectiontable");
}


function drawcollectiontable(targetdivid) {
	var table_classname = "homeworktable";			//定义<table>的classname
	var unit_caption_classname = "th_money";		//定义首行表头的classname
	var unit_xuhao = "td_xuhao";					//定义第一列序号的classname
	var unit_xiangmu = "td_xiangmu"					//定义第二列项目的classname
	var unit_link = "td_money";

	var unit_zhushi_h_classname = "beiwangluunit"//定义首行备忘录单元格
	var unit_zhushi_classname = "beiwanglutextunit";	//定义首行备忘录单元格

	var moneyitem_num = sessionStorage.getItem("ls_moneyjsonL");	//定义有多少行+1
	//更改名称也要改变CSS中的
	var div_ = $("#" + targetdivid);
	div_.append("<table class=\"" + table_classname + "\"></table>");//添加表格
	var table_ = $("." + table_classname);
	var tr_;


	for (var i = 0; i <= moneyitem_num; i++) {
		if (i == 0) {
			//添加周信息
			table_.append('<tr class="' + unit_caption_classname + '"><th class="' + unit_caption_classname + " " + unit_xuhao + '">序号</th><th class="' + unit_caption_classname + " " + unit_xiangmu + '">项目</th><th class="' + unit_caption_classname + " " + unit_link + '">价格</th><th class="' + unit_caption_classname + " " + unit_situation + '">状态</th><th class="' + unit_caption_classname + " " + unit_doit + '">Do it</th><th class="' + unit_beiwanglu_classname + '">备忘录</th></tr >');
		}
		else {
			table_.append('<tr class="num' + i + '"></tr>');	//添加行元素
			tr_ = $(".num" + i);
			tr_.append("<td class=\"" + unit_xuhao + "\"> " + i + " </td>");
			tr_.append("<td class=\"" + unit_xiangmu + "\"> </td>");
			tr_.append("<td class=\"" + unit_link + "\"> </td>");
			tr_.append("<td class=\"" + unit_situation + "\">  </td>");
			tr_.append("<td class=\"" + unit_doit + "\"> </td>");
			if (i == 1) {
				tr_.append("<td class=\"" + unit_beiwanglutext_classname + "\" rowspan=\"" + moneyitem_num + "\" contentEditable=\"true\"></td>");
			}
		}
	}
}

var moneyjsonsrc = "../../database/money.json";
function readclassjsonfile() {
	var moneyrequest = new XMLHttpRequest();
	moneyrequest.open("get", moneyjsonsrc);
	moneyrequest.send(null);
	moneyrequest.onload = function () {
		if (moneyrequest.status == 200) {
			var moneyjson = JSON.parse(moneyrequest.responseText);
			var moneyjsonL = moneyjson.moneylist.length;
			sessionStorage.setItem("ls_moneyjsonL", moneyjsonL);
			fillmoneytable(moneyjson["moneylist"]);
		}
	}

}

function fillmoneytable(moneyjson1) {

	$("#tablecaption").html("你工人爷爷来了");
	var summoney = 0;
	var checkifcomplete = 0;
	var tempsituation;
	for (var i = 0, j = 1; i < moneyjson1.length; i++, j++) {
		$("#moneyouttable .td_xiangmu").eq(j).html(moneyjson1[i].item);
		tempsituation = moneyjson1[i].situation;
		$("#moneyouttable .td_situation").eq(j).html(tempsituation);
		if (tempsituation == "未完成");
		{
			checkifcomplete++;
		}
		$("#moneyouttable .td_money").eq(j).html(moneyjson1[i].price);
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

