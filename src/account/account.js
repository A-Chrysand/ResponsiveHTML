var rjson_length;
var rjson;
var currentuser = new Object();

var jsonsrc = "../../database/userconfig.json";
var switchpagesrc = "../host.html";

window.onload = function () {
	readjsonfile();
	$("#lg_input_text").val("123");
	$("#lg_input_psw").val("123");
}

function saveNopennewpage() {
	sessionStorage.setItem("file_currentuser", JSON.stringify(currentuser));
	location.href = switchpagesrc;
	//parent.location.href = switchpagesrc;
}

function readjsonfile() {
	var request = new XMLHttpRequest();
	request.open("get", jsonsrc);
	request.send(null);
	request.onload = function () {
		if (request.status == 200) {
			rjson = JSON.parse(request.responseText);
			rjson_length = rjson.visualuser.length;
			console.log(rjson);
		}
	}
}


function logincheck() {
	var lgfb = false;
	var lgpgstr = document.getElementById("lg_input_text").value;
	var lgpgpsw = document.getElementById("lg_input_psw").value;
	if (lgpgstr == "") {
		alert("请输入账号");
	}
	else if (lgpgpsw == "") {
		alert("请输入密码");
	}
	else {
		for (var i = 0; i < rjson_length; i++) {

			if (lgpgstr == rjson.visualuser[i].xuehao || lgpgstr == rjson.visualuser[i].name) {
				if (lgpgpsw == rjson.visualuser[i].password) {
					alert("登陆成功\n将跳转到主页");
					currentuser = rjson.visualuser[i];
					lgfb = true;
					break;
				}
				else {
					alert("密码错误");
					return;
				}
			}
			else if (i == rjson_length - 1) {
				alert("用户不存在\n");
				return;
			}
		}
		if (lgfb == true) {
			saveNopennewpage();
		}
	}
	console.log(currentuser);
}

function register() {
	var regpgNumber = $("#rg_input_number").val();
	var regpgName = $("#rg_input_name").val();
	var regpgPsw = $("#rg_input_psw").val();
	var regpgCkpsw = $("#rg_input_ckpsw").val();
	var regpgClass = $("#ClassSelectBox").find(":selected").val();
	var regpgAge = $("#rg_input_age").val();
	var regpgsex = $("input:radio:checked").val();

	if (regpgNumber == "") {
		alert("请输入学号");
		return;
	}
	else if (regpgName == "") {
		alert("请输入姓名");
		return;
	}
	else if (regpgPsw == "") {
		alert("请输入密码");
		return;
	}
	else if (regpgCkpsw == "") {
		alert("请输入确认密码");
		return;
	}
	else if (regpgAge == "") {
		alert("请输入年龄");
		return;
	}
	else if (regpgsex == undefined) {
		alert("请选择性别");
		return;
	}
	else if (regpgPsw != regpgCkpsw) {
		alert("输入的密码与确认密码不一致！");
		return;
	}
	else if (regpgPsw.length <= 1) {
		alert("输入的密码过短");
		return;
	}
	else {
		for (var i = 1; i < rjson_length; i++) {
			if (regpgNumber == rjson.visualuser[i].xuehao/* || regpgName == rjson.visualuser[i].name*/) {
				alert("该用户已存在，请登录");
				return;
			}
			else {
				break;
			}
		}
		currentuser.xuehao = regpgNumber;
		currentuser.name = regpgName;
		currentuser.password = regpgPsw;
		currentuser.banji = regpgClass;
		currentuser.age = regpgAge;
		currentuser.banjistr = $("#ClassSelectBox").find(":selected").html();
		rjson.visualuser[rjson_length] = currentuser;
		alert("注册成功！\n将跳转到主页");
		saveNopennewpage();
	}
}


