
var scr1 = document.createElement('script')
scr1.setAttribute("src","http://192.168.1.100:81?callback=callbackfn")
document.getElementsByTagName("head")[0].appendChild(scr1)

var bigBoxOne= document.querySelectorAll('.bigBox.one')[0]//第一个轮播图
var originalBox = bigBoxOne.querySelectorAll(".box")[0]//原版

//轮播图数据插入
function callbackfn(data){
	for(var i=0;i<data.length;i++){
		fourImg = data[i].imgUrl // 数据里面对象的长度
		var newBox = originalBox.cloneNode(true)//克隆新的
		var somalImg = newBox.querySelectorAll(".picture a img")//右侧小图片
		newBox.setAttribute("src",data[i].url) //游戏详情页路径
		newBox.setAttribute("gameId",data[i].gameId)  //设置游戏ID

		newBox.querySelectorAll(".url")[0].setAttribute("href","javascript:void(0)")
		newBox.querySelectorAll(".url")[0].setAttribute("gemeName",data[i].name)  //设置游戏名字
		newBox.querySelectorAll(".url img")[0].style.display = "block"  //让第一个默认显示
		//插入图片路径
		for(j=0;j<fourImg.length;j++){
			newBox.querySelectorAll(".picture a")[j].setAttribute("href","javascript:void(0)")
			newBox.querySelectorAll(".url img")[j].setAttribute("src",fourImg[j]) //中间的4张图片
			somalImg[j].setAttribute("src",fourImg[j])  //右侧的4张小图片
			newBox.querySelectorAll(".section .four img")[j].setAttribute("src",fourImg[j]) //弹出框4张图片
		}
		// 右边的图文混合区
		newBox.querySelectorAll(".gameName")[0].innerHTML = data[i].name   //游戏名字
		newBox.querySelectorAll(".original")[0].innerHTML = "￥" + data[i].originPrice //原价
		newBox.querySelectorAll(".current")[0].innerHTML = "￥" + data[i].price //促销价
		//小图标 mac win等
		for(var j=0;j<data[i].platform.length;j++){
			if(data[i].platform[j]=="Windows"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className ="win"
			}
			if(data[i].platform[j]=="Mac OS"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "mac"
			}
			if(data[i].platform[j]=="Steam"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "linux"
			}
		}

		// 弹出框部分
		newBox.querySelectorAll(".section .first")[0].innerHTML = data[i].name //游戏名字
		// 字符串处理
		var YTD = ["年","月","日"]
		var figure = data[i].date.split("-")  //字符串从"-"分割截取,成为数组
		var strdata = ""  //字符串日期
		for(var j=0;j<figure.length;j++){
			strdata = strdata + figure[j] + YTD[j]
		}
		newBox.querySelectorAll(".section .date")[0].innerHTML = strdata //日期

		var appraise = ["好评如潮","特别好评","多半好评","褒贬不一","多半差评","差评如潮","无评论"]
		newBox.querySelectorAll(".section .estimate")[0].innerHTML = appraise[data[i].evaluate-1]  //评价
		// console.log(data[i].evaluate)

		//判断颜色
		if(data[i].evaluate<4){
			// console.log("hahaha")
			newBox.querySelectorAll(".section .estimate")[0].style.color = "#67C0ED" 
		}
		if(data[i].evaluate==4){
			newBox.querySelectorAll(".section .estimate")[0].style.color = "#A79E74" 
		}	
		if(data[i].evaluate>4){		
			newBox.querySelectorAll(".section .estimate")[0].style.color = "#8C8C8C"
		}
		//评价数量天加“,” 3个数字一格
		var amount = String(data[i].evaluatingCount) //数字转字符串
		function appendComma(str){
			if(str.length<=3){
				return str
			}
			else{
				return appendComma(str.substr(0,str.length-3)) + "," + str.substr(str.length-3)
			}
		}
		newBox.querySelectorAll(".section .amount")[0].innerHTML = appendComma(amount)//评价数量

		//弹出框小标签
		var label = newBox.querySelectorAll(".section .biaoqian span")[0]//标签模板
		for(var j=0;j<data[i].label.length;j++){
			var newlabel = label.cloneNode() //克隆新的标签
			newlabel.innerHTML = data[i].label[j]  //给标签赋值
			label.parentNode.appendChild(newlabel) // 插入到(biaoqian)标签里面
		}
		label.parentNode.removeChild(label) //删除模板标签
		bigBoxOne.appendChild(newBox) //将克隆出来的box插入进去
	}
	originalBox.parentNode.removeChild(originalBox) //删除原版
	luoji()//执行逻辑




	// 清理好 要发送请求的数据
	var ArrayGame = []  //初始化数组 要请求的数据 ID
	//如果页面中存在cookie(属性名为ID),将cookie 做为字符串拿出来转换成数组 并赋值给 数组ArrayGame
	if(document.cookie){
		ArrayGame = acquireCookie("ID").split(",")
	} 
	//  因为cookie(属性名为ID)的缓存是基于数组Array来进行写入的,而且数组是用来查除排重的, 
	//  但是页面刷新后数组会重置, cookie(属性名为ID)的缓存也将会被重新赋值,
	//	为了不让cookie(属性名为ID)的缓存被重新赋值从零开始, 因此在cookie(属性名为ID)没有被重写时,
	//	将他的值赋给数组
	var scr2 = ""  // 接收script
	$(".bigBox.one .box").click(function(){
		//删除与之前重复的ID,将新的ID插入到数组后面里面去
 		for(var j=0;j<ArrayGame.length;j++){
 			if($(this).attr("gameId") == ArrayGame[j]){
 				ArrayGame.splice(j,1)
 			}
 		}

 		ArrayGame.push($(this).attr("gameId")) //插入

		location.href=$(this).attr("src")
		// removeCookie("ID")
		var sendGame = {}  // 此对象写入的cookie数据

		sendGame.ID = ArrayGame.toString() //将数组转换为字符串 再将字符串转换为对象，以便于写入cookie 

		setCookie(sendGame,1) //设置cookie
	})

}

//浏览记录   发送数据请求	
scr2 = document.createElement('script')
scr2.setAttribute("src","http://192.168.1.100:81?callback=receptionId&gameId=" + acquireCookie("ID"))
document.getElementsByTagName("head")[0].appendChild(scr2)


function receptionId(data){
	console.log(data.length)
	for(var i=0;i<data.length;i++){

		var newA = $("<a></a>")  //创建新的a标签

		newA.html(data[i].name) //插入游戏名字

		newA.attr("href",data[i].url)  //设置跳转属性

		newA.appendTo($(".examine"))  //插入到里面
	}
}
















//********************封装的Cookie函数**********************
//删除cookie数据
function removeCookie(target){
	var date = new Date()
	date.setDate(-1)
	document.cookie = target+"=0;expires="+ date
}
// 

/*	该函数期望传入两个参数：设置Cookie
参数一：data (obj / String)
参数二：day  (生命周期。。天数)*/
function setCookie(data,day){
	var date = new Date()
	date.setDate(date.getDate()+day)
	for(var i in data){
		document.cookie = i+"="+data[i]+";expires="+date;
	}
}

//该函数期望传入一个参数：属性名(String),返回所对应的属性值
function acquireCookie(receive){
	var str = document.cookie
	var sarteIndex = str.indexOf(receive)
	var endIndex = str.indexOf(";",sarteIndex)
	if(endIndex==-1){
		endIndex = str.length
	}
	var incision = str.slice(sarteIndex,endIndex)
	var array = incision.split("=")[1]
	return array
}



















