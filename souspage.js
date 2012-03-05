
$(document).ready(function() {
	$(".sous_cadre_principal .sous_menu").delegate("a", "click", function() {
		$(".sous_contenu").html('<img src="' + this.href + '" alt="' + this.href + '" />');
		return false;
	});

	$(".sous_cadre_graphisme .sous_menu").delegate("a", "click", function() {
		var classOfContent = $(this).attr("class");
		$(".sous_contenu").removeClass("contenu3A");
		$(".sous_contenu").removeClass("contenu3B");
		$(".sous_contenu").addClass(classOfContent);
		$(".sous_cadre_graphisme .sous_contenu").load(this.href);
		return false;
	});

	$(".sous_cadre_illus .sous_menu").delegate("a", "click", function() {
		var classOfContent = $(this).attr("class");
		$(".sous_contenu").removeClass("contenu4A");
		$(".sous_contenu").removeClass("contenu4B");
		$(".sous_contenu").removeClass("contenu4C");
		$(".sous_contenu").addClass(classOfContent);
		$(".sous_cadre_illus .sous_contenu").load(this.href);
		return false;
	});

	$(".sous_cadre_liens .sous_menu").delegate("a", "click", function() {
		var classOfContent = $(this).attr("class");
		$(".sous_contenu").removeClass("contenu5A");
		$(".sous_contenu").removeClass("contenu5B");
		$(".sous_contenu").addClass(classOfContent);
		$(".sous_cadre_liens .sous_contenu").load(this.href);
		return false;
	});

	$(".sous_menu_list").delegate("a", "click", function() {
		$(".sous_menu_list div.selected").removeClass("selected");
		$(this.parentNode).addClass("selected");
		$(".sous_contenu_list").load(this.href);
		return false;
	});
	$(".sous_contenu_list").load("stylisme/page1.html");
	$(".sous_cadre_graphisme .sous_contenu").load("graphisme/comm.html");
	$(".sous_cadre_illus .sous_contenu").load("illus/silhouettes.html");
	$(".sous_cadre_liens .sous_contenu").load("liens/confiance.html");
});
