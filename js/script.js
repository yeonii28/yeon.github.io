$(function(){
    $(window).scroll(function(){
        let wt = $(window).scrollTop();
        let cw = $(".m_con2_wrwapper").offset().top;
        if(wt>cw-700){
            $(".m_con2_top_pb").css("visibility","visible");
            setTimeout(function(){
                $(".m_con2_top_pb").css("bottom","0px");
            },300);
        } 
        if(wt>cw+200){
            $(".m_con2_bottom_pb").css("visibility","visible");
            setTimeout(function(){
                $(".m_con2_bottom_pb").css("bottom","0px");
            },300);
        }
        console.log(wt);
        console.log(cw);
    });
    
});