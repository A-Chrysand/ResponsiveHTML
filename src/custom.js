function readjsonfile(targetsrc) {
	var request = new XMLHttpRequest();
	request.open("get", targetsrc);
	request.send(null);
	request.onload = function () {
		if (request.status == 200) {
			rjson = JSON.parse(request.responseText);
			return rjson;
		}
	}
}