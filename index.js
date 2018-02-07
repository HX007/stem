// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}
//轮播图
var $Left = $(".lunbo .arrowsLeft")
var $Right = $(".lunbo .arrowsRight")
var $box = $(".bigBox").find(".box")
var dot = $(".lunbo .dot")
var x=0// 记录盒子位置
//初始化span点击小方块
for(var a=0;a<$box.length;a++){
	var $dot = $("<span></span>")//创建
	$dot.attr("index",a)	//设置非法属性
	$dot.appendTo(dot)//插入JQ对象
}
var $dotList = dot.find("span")
//默认显示
$dotList.eq(0).addClass("focus")//第一个span
$box.eq(0).show()//第一个盒子
//隐藏全部盒子，隐藏span获焦样式
function hidden(){
	for(var a=0;a<$box.length;a++){
		$box.eq(a).hide()   //隐藏全部盒子
		$dotList.eq(a).removeClass("focus")  //隐藏全部span获焦样式
	}
}
//小方块点击事件
$dotList.click(function(){
	hidden()  //全部隐藏
	x = Number($(this).attr("index")) //获取非法属性值，当成图片的位置用
	$box.eq(x).fadeIn(800)	//渐显
	$dotList.eq(x).addClass("focus") //span加样式
})


//向右代码段
function right(){
	hidden()
	x++
	if(x==$box.length){
		x = 0
	}
	$box.eq(x).fadeIn(800)
	$dotList.eq(x).addClass("focus")
}
// 向右点击
$Right.click(function(){
	setTimeout(function(){
		right()
	},300)
})
// 向左点击
$Left.click(function(){
	hidden()
	x--
	if(x==-1){
		x = $box.length-1
	}
	$box.eq(x).fadeIn()
	dotList.eq(x).addClass("focus")
})
// 鼠标移上的核心
$box.mouseenter(function(){
	var $pickureImgList = $(this).find(".picture a")	//找到右侧的小图片
	var $imgImgList = $(this).find(".img img")	//找到中间的大图片
	for(a=0;a<$pickureImgList.length;a++){
		$pickureImgList.eq(a).attr("index",a)	//设置非法属性
	}
	//获取左边的非法属性值，显示中间所对应的图片
	$pickureImgList.mouseenter(function(){
		$box.find(".img").css({
			background:"none", 	//鼠标移上时隐藏图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).fadeIn()  //渐显
	})
	//获取左边的非法属性值，隐藏中间所对应的图片
	$pickureImgList.mouseleave(function(){
		$box.find(".img").css({
			background:"",		//鼠标离开时显示图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).hide()	//隐藏
	})
})
//计时器
function auto(){
	autoplay = setInterval(function(){
		right()
	},3000)	
}
auto();//开启计时器
//鼠标离开，开启计时器
$(".bigBox").mouseleave(function(){
	auto();
})
//鼠标移上，关闭计时器
$(".bigBox").mouseenter(function(){
	clearInterval(autoplay)
})

