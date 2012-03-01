$(document).ready(function() {
	$("#menu").delegate("a", "click", function() {
		$("#content").load(this.href);
		return false;
	});
});

