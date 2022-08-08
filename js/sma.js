$(document).ready(function(){

    /*메뉴(햄버거클릭)*/
    $("#head button").click(function(){
        $("#menu").stop().animate({right: 0}, 1200,function(){
            if($("#menu").css("right")== "0"){
                $("#menu button span").html("menu");
            }else{
                $("#menu button span").html("close");
            }
	});
	
	//네비게이션 내 'X' 클릭
	$("#menu button").click(function(){
		$("#menu").stop().animate({right:-400},1200,function(){
            if($("#menu").css("right")== "-200"){
                $("#menu button span").html("close");
            }else{
                $("#menu button span").html("menu");
			}
		});         
		});
	});
	
	/*메뉴안의 목록클릭*/
	$("#navTop li a").click(function(){
		$("#insideNav").stop().slideToggle();
	});
	
});//끝


