(function($){
	var $container = $(".parallax");
	 //THIS collect our divs.
	var $divs = $container.find("div.parallax-background");
   
    /*this checks the height of body
    passes it to thingstobescrolled function*/
    var thingBeingScrolled = document.body;

    //get height of each li which we know is 600px
    var liHeight= $divs.eq(0).closest("li").height();
     
    //getting difference in height

    var diffHeight=$divs.eq(0).height() - liHeight;

         var len=$divs.length;
    //defining the various divs well use
    var i,len,div,li,offset,scroll,top,transform;
      
       var offsets = $divs.get().map(function(div,d){
                       return $(div).offset();
                 });

	var render = function() {

		//what we are scrolling
       top = thingBeingScrolled.scrollTop;

           //this function loops through divs
		for(i=0,len=$divs.length;i<len;i++){
			//get one div
			div = $divs[i];

			//get the parent LI
			li =div.parentNode;

			/*calculate the offsetTop of div
			which is the position of the top 
			of the element with reference to the top 
			of the page*/
			offset = $(div).offset().top;

			//calculate the amount of scroll
             scroll = Math.round(((top - offset)/ liHeight) * diffHeight);

             //apply the scroll amount
             div.style.webkitTransform ="translate3d(0px, " + scroll +"px,0px)";



		}

	};

	(function loop(){
		requestAnimationFrame(loop);/*this loop allows us to
		loop through at 100 frameworks per sec*/
		render();
	})();

})(jquery);