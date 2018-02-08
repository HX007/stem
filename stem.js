// active侧边栏加小图片
for(var a=0;a<$(".activeText").find("i").length;a++){
	$(".activeText").find("i")[a].style.backgroundPosition = -16*a+"px"+" 0px"
}



//初始化span点击小方块
// 该函数期望传入两个参数：(jQuery对象)
// age1: 要被插入的对象box
// age2: 需要插入方块的对象集合（长度）
function blockage(age1,age2){
	for(var a=0;a<age2.length;a++){
		var createSpan = $("<span></span>")//创建
		createSpan.attr("index",a)	//设置非法属性
		createSpan.appendTo(age1)//插入JQ对象
	}
}
// x = 0   公用的x
//小方块点击事件
//该函数期望传入两个参数：(jQuery对象)
// age1: 需要点击的span对象集合
// age2: 需要显示的盒子对象集合
function dotCilck(age1,age2){
	age1.click(function(){
		hidden(age1,age2)  //调用全部隐藏函数
		x = Number($(this).attr("index")) // 获取非法属性值，当成图片的位置用
		age2.eq(x).fadeIn(500)	// 盒子渐显
		age1.eq(x).addClass("focus") // span加样式
	})
}
//隐藏全部盒子，隐藏span获焦样式
// 该函数期望传入两个参数：(jQuery对象)
// age1: 需要隐藏的span的对象集合
// age2: 需要隐藏的盒子对象集合
function hidden(age1,age2){
	age2.hide()
	age1.removeClass("focus")
}

//该函数期望传入两个参数：(jQuery对象)
// age1: 需要点击的span对象集合
// age2: 需要显示的盒子对象集合
// ranking: 传入当前是第几个轮播图
//向右点击的代码段
function right(age1,age2,ranking){
	if(ranking=="first"){
		hidden(age1,age2)  //调用全部隐藏函数
		x++
		if(x == age2.length){
			x = 0
		}
		age2.eq(x).fadeIn(500) //盒子
		age1.eq(x).addClass("focus")  //span
	}
	if(ranking=="second"){
		hidden(age1,age2)  //调用全部隐藏函数
		z++
		if(z == age2.length){
			z = 0
		}
		age2.eq(z).fadeIn(500) //盒子
		age1.eq(z).addClass("focus")  //span
	}
}
//向左点击的代码段
function left(age1,age2,ranking){
	if(ranking=="first"){
		hidden(age1,age2)  //调用全部隐藏函数
		x--
		if(x==-1){
			x = age2.length-1
		}
		age2.eq(x).fadeIn(500)
		age1.eq(x).addClass("focus")
	}
	if(ranking=="second"){
		hidden(age1,age2)  //调用全部隐藏函数
		z--
		if(z==-1){
			z = age2.length-1
		}
		age2.eq(z).fadeIn(500)
		age1.eq(z).addClass("focus")
	}
}

//鼠标移上出现弹框  代码段
// age3: 鼠标要经过的对象集合
// age4: 要显示的区块名(String)
// age5: 现实的区块里面的要自动播放的图片集合(string)
function  revealPopover(age3,age4,age5){
	age3.mouseenter(function(){
		//让右边section小区块显示
		$(this).find(age4).fadeIn()
		//获取四张图片
		var $fourList = $(this).find(age4).find(age5)
		//小图片计时器，永不停息
		somalImg = setInterval(function(){
			$fourList.hide()
			if(y==$fourList.length-1){
				y = 0
			}else{
				y++
			}
			$fourList.eq(y).fadeIn(200)
		},2000)
		$(this).find(age4).css({
		})
	})
}
//鼠标离开隐藏弹框  代码段
// age3: 鼠标要经过的对象集合
// age4: 要显示的区块名(String)
function  concealPopover(age3,age4){
	age3.mouseleave(function(){
		$(this).find(age4).fadeOut(300)
		$(this).mouseleave(function(){
			$(this).find(age4).hide()
			$(this).find(age4).css({
				// opcity:0,
			})
		})
		clearInterval(somalImg)
	})
}















// *************第一个*************
var $firstBoxList = $(".lunbo.first .box")  //当前轮播图的box盒子
var $firstDot = $(".lunbo.first .dot")  //放span小方块的父级元素
var $firstArrowsLeft = $(".lunbo.first .arrowsLeft")	//找到向左箭头
var $firstArrowsRight = $(".lunbo.first .arrowsRight")	//找到向右箭头
var x = 0 //记录第一个轮播图的图片位置
var y = 0 //获取小图片位置
//调用函数初始化第一个轮播图的小方块
blockage($firstDot,$firstBoxList)
var $firstDotList = $firstDot.find("span")	//找到span集合
$firstBoxList.eq(0).show()	//默认显示box	
$firstDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$firstArrowsRight.click(function(){
	right($firstDotList,$firstBoxList,"first")//调用向右点击代码
})
//向左点击
$firstArrowsLeft.click(function(){
	left($firstDotList,$firstBoxList,"first")//调用左右点击代码
})
// 调用函数
dotCilck($firstDotList,$firstBoxList)// 小方块span点击事件
revealPopover($firstBoxList,".section",".four img")//鼠标移上出现弹框,加上计时器
concealPopover($firstBoxList,".section")//鼠标离开隐藏弹框，停止计时器


// 鼠标移上主要核心
$firstBoxList.mouseenter(function(){
	var $pickureImgList = $(this).find(".picture a")	//找到右侧的小图片
	var $imgImgList = $(this).find(".img img")	//找到中间的大图片
	for(a=0;a<$pickureImgList.length;a++){
		$pickureImgList.eq(a).attr("index",a)	//设置非法属性
	}
	//获取左边的非法属性值，显示中间所对应的图片
	$pickureImgList.mouseenter(function(){
		$firstBoxList.find(".img").css({
			background:"none", 	//鼠标移上时隐藏图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).fadeIn()  //渐显
	})
	//获取左边的非法属性值，隐藏中间所对应的图片
	$pickureImgList.mouseleave(function(){
		$firstBoxList.find(".img").css({
			background:"",		//鼠标离开时显示图片的父级元素(.img)的背景图片
		})
		var index = $(this).attr("index")
		$imgImgList.eq(index).hide()	//隐藏
	})
})
// 计时器
function firstAuto(){
	firstAutoplay = setInterval(function(){
		right($firstDotList,$firstBoxList,"first")
	},3000)
}
firstAuto()
//鼠标移上$firstBoxList，关闭计时器
$(".lunbo.first").mouseenter(function(){
	clearInterval(firstAutoplay )
})
//鼠标离开$firstBoxList，开启计时器
$(".lunbo.first").mouseleave(function(){
	firstAuto()
})


























// *************第二个*************
var $secondBoxList = $(".lunbo.second .box")  //当前轮播图的box盒子
var $secondDot = $(".lunbo.second .dot")  //放span小方块的父级元素
var $secondArrowsLeft = $(".lunbo.second .arrowsLeft")	//找到向左箭头
var $secondArrowsRight = $(".lunbo.second .arrowsRight")	//找到向右箭头
var z = 0  //记录第一个轮播图的图片位置
//调用函数初始化第一个轮播图的小方块
blockage($secondDot,$secondBoxList)

var $secondDotList = $secondDot.find("span")	//找到span集合
$secondBoxList.eq(0).show()	//默认显示box	
$secondDotList.eq(0).addClass("focus")	//默认给span添加类名
//向右点击
$secondArrowsRight.click(function(){
	right($secondDotList,$secondBoxList,"second")//调用向右点击代码
})
//向左点击
$secondArrowsLeft.click(function(){
	left($secondDotList,$secondBoxList,"second")//调用左右点击代码
})
// 调用函数
dotCilck($secondDotList,$secondBoxList)// 小方块span点击事件



function secondAuto(){
	secondAutoplay = setInterval(function(){
		right($secondDotList,$secondBoxList,"second")
	},3000)
}
secondAuto()
//鼠标移上$firstBoxList，关闭计时器
$(".lunbo.second").mouseenter(function(){
	clearInterval(secondAutoplay )
})
//鼠标离开$firstBoxList，开启计时器
$(".lunbo.second").mouseleave(function(){
	secondAuto()
})

var $tankuang = $secondBoxList.find(".tankuang")

revealPopover($tankuang,".section",".four img")//鼠标移上出现弹框,加上计时器
concealPopover($tankuang,".section")//鼠标离开隐藏弹框，停止计时器