// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}

var $imgList = $(".box .picture a")
$imgList.mouseenter(function(){
	//添加非法属性
	for(a=0;a<$imgList.length;a++){
		$imgList.eq(a).attr("index",a)
	}
	var index = $(this).attr("index")
	$(".box .img img").eq(index).animate({
		opacity:1
	})
	$imgList.mouseleave(function(){
		$(".box .img img").eq(index).animate({
			opacity:0
		})
	})
})

