$( document ).ready(function() {
    console.log( "ready!" );

    $(".navbar a[href^='#']").on('click', function(e) {
       // store hash
       var $el = (this.hash=='#top') ? $('body') : $(this.hash);
        if ($el.length > 0) { 
               // prevent default anchor click behavior
               e.preventDefault();
               // animate
               $('html, body').animate({
                   scrollTop: $el.offset().top
                 }, 1000, function(){
                   // when done, add hash to url
                   // (default click behaviour)
                   window.location.hash = this.hash;
                 });
        }
    });
});

            
            
            
            
