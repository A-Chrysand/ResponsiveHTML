var booklist = creatlist();;
//自然 科学 人文 技术
function creatlist() {
	var ctlist = new Array();
	ctlist[0] = creatobj("bk_cpp", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/cpp.jpg", "");
	ctlist[1] = creatobj("bk_edmshouce", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/edmshouce.jpg", "");
	ctlist[2] = creatobj("bk_geliefu", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/geliefu.jpg", "");
	ctlist[3] = creatobj("bk_guojiadili", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["自然"], "../../image/img/book/guojiadili.jpg", "");
	ctlist[4] = creatobj("bk_jisuanjiwangluo", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/jisuanjiwangluo.jpg", "");
	ctlist[5] = creatobj("bk_makesi", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/makesi.jpg", "");
	ctlist[6] = creatobj("bk_pindeshixianzai", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/pindeshixianzai.jpg", "");
	ctlist[7] = creatobj("bk_primere", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/primere.jpg", "");
	ctlist[8] = creatobj("bk_qingchunbuying", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/qingchunbuying.jpg", "");
	ctlist[9] = creatobj("bk_santi", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/santi.jpg", "");
	ctlist[10] = creatobj("bk_sheyingbiji", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["技术"], "../../image/img/book/sheyingbiji.jpg", "");
	ctlist[11] = creatobj("bk_shijianjianshi", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["科学"], "../../image/img/book/shijianjianshi.jpg", "");
	ctlist[12] = creatobj("bk_tingzhu", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/tingzhu.jpg", "");
	ctlist[13] = creatobj("bk_xinzhoukan", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/xinzhoukan.jpg", "");
	ctlist[14] = creatobj("bk_zhiyaochufa", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["人文"], "../../image/img/book/zhiyaochufa.jpg", "");
	ctlist[15] = creatobj("bk_ziran", "一本十分有用的C++入门介绍书，可以让你轻松地从入门到放弃", ["自然"], "../../image/img/book/ziran.jpg", "");
	return ctlist;
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