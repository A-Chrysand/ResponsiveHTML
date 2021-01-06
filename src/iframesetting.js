function GBFheight(offset, targetiframeId, absoluteNum) {
	if (offset == undefined) {
		offset = 0;
	}
	if (absoluteNum != undefined) {
		$("#" + targetiframeId, window.parent.document).css('height', absoluteNum);
		return;
	}
	var height = (document.body.clientHeight) + offset + 10 + 'px';
	$("#" + targetiframeId, window.parent.document).css('height', height);
}

