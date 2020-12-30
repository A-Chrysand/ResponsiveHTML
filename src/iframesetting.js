function GBFheight(offset, targetiframeId) {
	if (offset == undefined) {
		offset = 0;
	}
	var height = (document.body.clientHeight) + offset + 10 + 'px';
	$("#" + targetiframeId, window.parent.document).css('height', height);
}

