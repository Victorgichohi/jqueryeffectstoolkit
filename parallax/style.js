(function(){

	var documentEl = $ (document)
	    paralaxBg = $('div.big-image');

	    documentEl.on('scroll',function(){
	    	var currScrollPos = documentEl.scrollTop();
	    	parallaxBg.css('background-position','0' + -currScrollPos/4 + 'px');
	    });
	    
	   })();
}