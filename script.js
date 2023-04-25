$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 1px)");
    if (desktopSize.matches){
        $(".hamburger").mouseenter(function(){
            $(".hamburger").css("opacity", "0.5");
        }).mouseleave(function(){
            $(".hamburger").css("opacity", "1")
        })
        $(".hamburger").click(function(){
            $(".box-3").toggle();
            $(".box-4").toggle();
            })
        $("#p1").mouseenter(function(){
            $("#block-1").css("opacity", "1")
        }).mouseleave(function(){
            $("#block-1").css("opacity", "0.25")
        })
        $("#p2").mouseenter(function(){
            $("#block-2").css("opacity", "1")
        }).mouseleave(function(){
            $("#block-2").css("opacity", "0.25")
        })
    }
    else {

    }
});
