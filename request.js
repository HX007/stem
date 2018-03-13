
var scr = document.createElement('script')
<<<<<<< HEAD
scr.setAttribute("src","http://192.168.1.100:81?callback=callbackfn")
document.getElementsByTagName("head")[0].appendChild(scr)

=======
scr.setAttribute("src","http://www.qinsichina.com/steamDataAPI.php?callback=callbackfn")
document.getElementsByTagName("head")[0].appendChild(scr)


>>>>>>> 73fef84d2afbd50f04cc442e21eca1b229f44e0c
var bigBoxOne= document.querySelectorAll('.bigBox.one')[0]//第一个轮播图
var originalBox = bigBoxOne.querySelectorAll(".box")[0]//原版


function callbackfn(data){
	for(var i=0;i<data.length;i++){
<<<<<<< HEAD
		fourImg = data[i].imgUrl // 数据里面对象的长度
		var newBox = originalBox.cloneNode(true)//克隆新的
		var somalImg = newBox.querySelectorAll(".picture a img")//右侧小图片
		newBox.querySelectorAll(".url")[0].setAttribute("href",data[i].url) //游戏详情页路径
		newBox.querySelectorAll(".url img")[0].style.display = "block"  //让第一个默认显示
		//插入图片路径
		for(j=0;j<fourImg.length;j++){
=======
		var fourImg = data[i].imgUrl // 数据里面对象的长度
		var newBox = originalBox.cloneNode(true)//克隆新的
		var somalImg = newBox.querySelectorAll(".picture a img")//右侧小图片
		newBox.querySelectorAll(".url")[0].setAttribute("href",data[i].url) //游戏详情页路径
		//插入图片路径
		for(j=0;j<fourImg.length;j++){   
>>>>>>> 73fef84d2afbd50f04cc442e21eca1b229f44e0c
			newBox.querySelectorAll(".picture a")[j].setAttribute("href",data[i].url)
			newBox.querySelectorAll(".url img")[j].setAttribute("src",fourImg[j]) //中间的4张图片
			somalImg[j].setAttribute("src",fourImg[j])  //右侧的4张小图片
			newBox.querySelectorAll(".section .four img")[j].setAttribute("src",fourImg[j]) //弹出框4张图片
		}
		// 右边的图文混合区
		newBox.querySelectorAll(".gameName")[0].innerHTML = data[i].name   //游戏名字
<<<<<<< HEAD
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

=======
		newBox.querySelectorAll(".original")[0].innerHTML = data[i].originPrice //原价
		newBox.querySelectorAll(".current")[0].innerHTML = data[i].price //促销价
		//小图标 mac win等
		for(var j=0;j<data[i].platform.length;j++){
			// console.log(newBox.querySelectorAll(".xiaotubiao span")[j])
			if(data[i].platform[j]=="Windowns"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "win"
			}
			if(data[i].platform[j]=="Mac Os"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "mac"
			}
>>>>>>> 73fef84d2afbd50f04cc442e21eca1b229f44e0c
			if(data[i].platform[j]=="Steam"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "linux"
			}
		}
		// 弹出框部分
		newBox.querySelectorAll(".section .first")[0].innerHTML = data[i].name //游戏名字
<<<<<<< HEAD
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
		console.log(data[i].evaluate)

		//判断颜色
		if(data[i].evaluate<4){
			// console.log("hahaha")
			newBox.querySelectorAll(".section .estimate")[0].style.color = "#00FFFF" 
		}
		if(data[i].evaluate==4){
			newBox.querySelectorAll(".section .estimate")[0].style.color = "#7CFC00" 
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

	originalBox.parentNode.removeChild(originalBox)
=======
		newBox.querySelectorAll(".section .date")[0].innerHTML = data[i].date //日期
		var appraise = ["好评如潮","特别好评","多半好评","褒贬不一","多半差评","差评如潮","无评论"]
		for(var j=0;j<appraise.length;j++){
			if(data[i].evaluate==j){
				newBox.querySelectorAll(".section .estimate")[0].innerHTML = appraise[j]  //评价
			}
		}
		newBox.querySelectorAll(".section .amount")[0].innerHTML = data[i].evaluatingCount//评价数量
		//弹出框小标签
		console.log(data[i].label.length)
		var label = newBox.querySelectorAll(".section .biaoqian span")[0]//标签模板
		for(var j=0;j<data[i].label.length;j++){
			var newlabel = label.cloneNode() //克隆新的标签
			newlabel.innerHTML = data[i].label[j]
			label.parentNode.appendChild(newlabel) // 插入到(biaoqian)标签里面
		}
		label.parentNode.removeChild(label)


		bigBoxOne.appendChild(newBox)
	}
	originalBox.parentNode.removeChild(originalBox)
	


>>>>>>> 73fef84d2afbd50f04cc442e21eca1b229f44e0c
	luoji()//执行逻辑
}























