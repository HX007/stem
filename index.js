// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}




//初始化轮播图
$(".lunbo").find(".bigBox .box").hide()//隐藏所有的,boxList

for(var a=0;a<$(".lunbo").length;a++){
	var $cont = $(".lunbo").eq(a).find(".bigBox .box").length
	//初始化span点击小方块
	for(var b=0;b<$cont;b++){
		var $createSpan = $("<span></span>")//创建
		$createSpan.attr("index",b)	//设置非法属性
		$createSpan.appendTo($(".lunbo").eq(a).find(".dot"))
	}
	$(".lunbo").eq(a).find(".dot span").eq(0).addClass("focus")
	$(".lunbo").eq(a).find(".bigBox .box").eq(0).show()//默认显示box
}



//寻找当前的元素
function seekElement(point){
	$lunbo = $(point).closest(".lunbo")//找到当前的父级lunbo
	$boxList = $lunbo.find(".bigBox .box")//找到当前的boxList集合
	$dotList = $lunbo.find(".dot span")//找到当前的$squareList集合
}

$(".arrowsRight").click(function(){
	seekElement(this)
	for(var a=0;a<$boxList.length;a++){
		if($boxList[a].style.display == "block"){
			$boxList.eq(a).hide()
			$dotList.eq(a).removeClass("focus")
			$boxList.eq(a+1).fadeIn()
			$dotList.eq(a+1).addClass("focus")
			if(a == $boxList.length-1){
				$boxList.eq(0).fadeIn()
				$dotList.eq(0).addClass("focus")
			}
			return;
		}
	}
})

$(".arrowsLeft").click(function(){
	seekElement(this)
	for(var a=0;a<$boxList.length;a++){
		if($boxList[a].style.display == "block"){
			$boxList.eq(a).hide()
			$dotList.eq(a).removeClass("focus")
			$boxList.eq(a-1).fadeIn()
			$dotList.eq(a-1).addClass("focus")
			if(a == 0){
				$boxList.eq($boxList.length-1).fadeIn()
				$dotList.eq($boxList.length-1).addClass("focus")
			}
			return;
		}
	}
})

// squareList点击事件
$(".lunbo").find(".dot span").click(function(){
	seekElement(this)
	var n = $(this).index()
	$boxList.hide()
	$dotList.removeClass("focus")
	$boxList.eq(n).fadeIn()
	$dotList.eq(n).addClass("focus")
})







