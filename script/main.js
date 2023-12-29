$(function(){
    //메뉴 영역
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })

    //메인슬라이드 영역
    // var n = 0; //현재보이는 그림파일 인덱스넘버 0 1 -300  2 -600
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //         // n=n+1;
    //         // n+=1;
    //     }
    //     console.log("n:" ,n );

    //     pos = -n * 300 + "px";
    //     console.log("POS :",pos);

    //     $(".move").animate({top:pos},500)
    // }, 2500);
    setInterval(move,2000);
    function move(){
        $(".move").animate({top:"-300px"},500,function(){
            $(".move").css({top:0});
            $(".move").append($(".move li").eq(0));
            // $(".move").append($(".move li").first());
            // $(".move").append($(".move li:nth-child(1)"));
        })
    }

    //탭메뉴
    $(".noti_gall h2").click(function(){
        $(".noti_gall h2").addClass("off");
        $(this).removeClass("off");

        $(".noti_gall ul").hide();
        $(this).next().css({display:"flex"});
    })//click

    //팝업
    $(".p_click").click(function(){
        $(".pop").show();
    })//
    $(".close").click(function(){
        $(".pop").hide();
    })//

})//jquery