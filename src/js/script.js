 $(function() {
 var $menuLink = $("#menuLink");
 var $menuContent = $("#menuContent");
 var $closeMenu = $("#closeMenu");
$($menuLink).on("click", function(){
	$($menuContent).toggle()
})
$($closeMenu).on("click", function(){
	$($menuContent).hide()
})

 })