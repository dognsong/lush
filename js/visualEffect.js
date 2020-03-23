$(window).load(function(){
    visualEffect()
})

function visualEffect(){
    var $visualList=$("#visual_list")
    var $visualLi=$visualList.children()
    var visualLiNum=$visualLi.size()
    var visualWidth
    var currentPosition
    var timer

    visualReset()
    onPlay()

    $visualList.children().last().prependTo($visualList)  

    $(window).on("resize",visualReset)
    $("#next_btn").on("click",visualNext)
    $("#prev_btn").on("click",visualPrev)
    $("#prev_btn").on("mouseenter",onStop)
    $("#prev_btn").on("mouseleave",onPlay)
    $("#next_btn").on("mouseenter",onStop)
    $("#next_btn").on("mouseleave",onPlay)

    function visualReset(){
      visualWidth=$(window).innerWidth() 
    
      $visualLi.css({"width":visualWidth})
      $visualList.css({"width":visualWidth*visualLiNum})
      $visualList.css({"left":-visualWidth})
    }

    function visualNext(){
        currentPosition=$visualList.position().left
        $("#visual_list:not(:animated)").animate({"left":currentPosition-visualWidth},600,"easeOutCubic",function(){
            $visualList.children().first().appendTo($visualList)
            $visualList.css({"left":-visualWidth})
        })
    }

    function visualPrev(){
        currentPosition=$visualList.position().left
        $("#visual_list:not(:animated)").animate({"left":currentPosition+visualWidth},600,"easeOutCubic",function(){
            $visualList.children().last().prependTo($visualList)
            $visualList.css({"left":-visualWidth})
        })
    }

    function onPlay(){
        timer=setInterval(visualNext,1800)
    }

    function onStop(){
        clearInterval(timer)
    }
}