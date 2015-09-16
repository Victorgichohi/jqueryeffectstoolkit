(function(){

	var documentEl = $ (document)//new variable
	    paralaxBg = $('div.big-image,div.big-image2');

	    documentEl.on('scroll',function(){
	    	var currScrollPos = documentEl.scrollTop();//gets how much scrolled from top in pixels
	    	parallaxBg.css('background-position','0' + -currScrollPos/4 + 'px');//the minus makes the background move one step up when we scroll.the zero means we dont change the margin.
	    });

	   })();
}