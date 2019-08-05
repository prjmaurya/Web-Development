$("ul").on("click","li",function(){
	$(this).toggleClass("checked");
});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		// var todotext = $(input).val();
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span>" + todotext + "</li>"); 
	}
});

$("h1 i").click(function(){
	$("input[type='text']").fadeToggle();
})