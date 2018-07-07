//Animating plus sign

$(document).ready(function(){

    var plusSign = $(".plus");
    var link = $(".social-media-links");
    var wrapper = $(".wrapper");

    plusSign.click(function(){

        // $(wrapper).slideToggle(500);
        $(link).slideToggle(500);
    });

});