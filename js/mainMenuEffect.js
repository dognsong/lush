$(window).load(function(){
    mainMenuEffect()
})


function mainMenuEffect(){
    var $mainMenu=$("#mainmenu_list>li>a")
    var $menuWrap=$("header")
    var $menuBar=$("#menu_bar")
    var menuBarPosition

    $mainMenu.on("mouseenter focus",mainMenuOver)
    $menuWrap.on("mouseleave",mainMenuOut)
    $("#quickmenu_list").children().on("focusout",mainMenuOut)

    function mainMenuOver(){
        mainMenuOut()
        $(this).next().stop()
        $(this).next().animate({"height":350},500,"easeOutCubic")

        menuBarPosition=$(this).parent().position().left+($menuBar.innerWidth()/2)
        $menuBar.css({"opacity":1})
        $menuBar.stop()
        $menuBar.animate({"left":menuBarPosition},300,"easeOutCubic")
    }

    function mainMenuOut(){
        $mainMenu.next().stop()
        $mainMenu.next().animate({"height":0},300,"easeOutCubic")
        $menuBar.stop()
        $menuBar.animate({"opacity":0},600,"easeOutCubic")
    }

}