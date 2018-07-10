//Animating plus sign

$(document).ready(function(){

    var plusSign = $(".plus");
    var link = $(".social-media-links");
    var body = $("body");
    var video = $("video");
   

    plusSign.click(function(){

        $(link).slideToggle(700);

    });

});


// var videoDiv = getElementsByTagName("video");
// var body = getElementsByTagName("body");

// const pauseIt = function(){
//     body.click(function(){
//         video.pause();
//     });
// }