$(function(){

    //cache the window object
    var $window = $(window);

    //Parallax background effect - NEED TO LOOK MORE INTO HOW THIS WORKS (https://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641)
    $('section[data-type="background"]').each(function() {

        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            //scroll the background at var speed
            //the yPos is a negative value because we are scorlling it up

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            //Put together final background position
            var coords = '50% ' + yPos + 'px';

            //move the background
            $bgobj.css({backgroundPosition: coords });


        }); //end window scroll
    });

});