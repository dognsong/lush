$(window).load(function(){
    bestEffect()
    brandEffect()
    //reviewEffect()
    //eventEffect()
    snsEffect()
})

function bestEffect(){
    var $bestImg=$(".best_img")
    var bestImgNum

    $bestImg.on("mouseenter",onBestOver)
    $bestImg.on("mouseleave",onBestOut)

    function onBestOver(){
        bestImgNum=$bestImg.index($(this))
        $(this).find("img").attr("src","/images/best_over_0"+(bestImgNum+1)+".gif")
    }

    function onBestOut(){
        $(this).find("img").attr("src","/images/best_0"+(bestImgNum+1)+".gif")
    }
}



function brandEffect(){
    $(".brand_btn").on("mouseenter",onBrandBtnOver)
    $(".brand_btn").on("mouseleave",onBrandBtnOut)

    function onBrandBtnOver(){
        $(this).parent().prev().addClass("selected")
    }

    function onBrandBtnOut(){
        $(this).parent().prev().removeClass("selected")
    }
}




















function eventEffect(){
    var $eventLi=$("#event_list").children()
    var $eventImg=$(".event_img")
    
}

function snsEffect(){
    var $snsLi=$("#sns_list").children()
    var snsOverLayer=$("<p id='sns_over_layer'><a href='#;'><span>1,308</span></a></p>")

    $snsLi.on("mouseenter",onSnsOver)
    $snsLi.on("mouseleave",onSnsOut)

    function onSnsOver(){
        snsOverLayer.show()
        snsOverLayer.appendTo($(this))
    }

    function onSnsOut(){
        snsOverLayer.hide()
    }
}