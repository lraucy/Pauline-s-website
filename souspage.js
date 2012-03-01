
$(document).ready(function() {
	$(".sous_menu").delegate("a", "click", function() {
		$(".sous_contenu").html('<img src="' + this.href + '" alt="' + this.href + '" />');
		return false;
	});
});
