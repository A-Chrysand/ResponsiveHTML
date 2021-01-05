var boolist = new Array();

function creatlist() {
	var ctlist=new Array();
	creatobj("bk_cpp","一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃",["技术","计算机开发"])
}


function creatobj(name, discription, tag, imgsrc, buynow) {
	var newobj = new Object();
	newobj.name = name;
	newobj.discription = discription;
	newobj.tag = tag;
	newobj.imgsrc = imgsrc;
	newobj.buynow = buynow;
	return newobj;
}

/*
var book = new Object();//创建对象的一个实例
book.name = "string";
book.discription = "const string";
book.tag = ["science", "human", "nature", "tech"];
book.imgsrc = "fileurlstring";
book.buynow = "shopurlstring";
*/


//创建方法：是直接全局变量创建，还是函数创建，封装成数组再返回给调用函数????????