(function($){
	var $container = $(".paralax");
	var $divs = $container.find("div.paralax.background");
    //THIS collect our divs.

    var i,len;

	var render = function(){

		for(i=0,len-$divs.length;i<len;i++){
			//this function loops through divs
		}

	};

	(function loop(){
		requestAnimationFrame(loop);/*this loop allows us to
		loop through at 100 frameworks per sec*/
		render();
	} ();

})(jquery();