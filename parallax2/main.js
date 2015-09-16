(function($){
	var $container = $(".paralax");
	var $divs = $container.find("div.paralax.background");

	var render = function(){

	};

	(function loop(){
		requestAnimationFrame(loop);
		render();
	} ();

})(jquery();