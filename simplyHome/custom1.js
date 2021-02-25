// $(document).ready(function () {


// $("ul li").css({"color":"blue"});
// $(".red").css({"color":"red"});
// $(".yellow").css({"color":"yellow"});
// $(".purple").css({"color":"purple"});
// $(".green").css({"color":"green"});

// $(".box1").css({ "width": "250px","height": "300px", "background":"red"});

// $(".box2").css({ "border-radius":"50%", "background":"pink"});


// $(".btn1").on("click",function() {
//     $("p img") .attr({"src":"선수랭킹.png","width": "100px","height": "100px"});
// });

// $(".btn2").on("click",function() {
//     $("p img") .attr({"src":"매직테니스.png","width": "200px","height": "200px"});
// });


// });




$(document).ready(function () {

    $(".button").on("click",function() {
            $(".popUp") .show();
        });
        $(".popUp>button").on("click",function() {
            $(".popUp") .hide();
        });
        $(".button").on("click",function() {
            $(".popUp") .css('display','block');
        });
        $(".popUp>button").on("click",function() {
            $(".popUp") .css('display','none');
        });

    });
    
    

    