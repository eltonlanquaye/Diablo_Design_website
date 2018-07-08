//Animating plus sign

$(document).ready(function(){

    var plusSign = $(".plus");
    var link = $(".social-media-links");
   

    plusSign.click(function(){

        $(link).slideToggle(700);

    });

});