{
    function openTab(){
        var tabs = $(".sexytabs>ul>li");
        for(i=0;i<tabs.length;i++){
            $(tabs[i]).removeClass("active");
        }
        $(event.target).closest("li").addClass("active");
    }
}