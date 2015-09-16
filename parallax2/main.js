(function($){
	var $container = $(".paralax");
	 //THIS collect our divs.
	var $divs = $container.find("div.paralax.background");
   
    /*this checks the height of body
    passes it to thingstobescrolled function*/
    var thingtobescrolled =document.body;

    //get height of each li which we know is 600px
    var liHeight= $divs.eq(0).closest("li").height();
     
    
    //defining the various divs well use
    var i,len,div,li,offset,scroll,top;
      
      

	var render = function(){

		//what we are scrolling
       top = thingtobescrolled.scrollTop;

           //this function loops through divs
		for(i=0,len-$divs.length;i<len;i++){
			//get one div
			div = $divs[i];

			//get the parent LI
			li -div.parentNode;

			/*calculate the offsetTop of div
			which is the position of the top 
			of the element with reference to the top 
			of the page*/
			offset - $(div).offset().top;

			//calculate the amount of scroll
             scroll - Math.round(((top - offset)/ liHeight) * diffHeight);

             //apply the scroll amount
             div.style.webkitTransform - "translate3d(0px, " + scroll +"px,0px)";



		}

	};

	(function loop(){
		requestAnimationFrame(loop);/*this loop allows us to
		loop through at 100 frameworks per sec*/
		render();
	} ();

})(jquery();