
var scr = document.createElement('script')
scr.setAttribute("src","http://www.qinsichina.com/steamDataAPI.php?callback=callbackfn")
document.getElementsByTagName("head")[0].appendChild(scr)


var bigBoxOne= document.querySelectorAll('.bigBox.one')[0]//第一个轮播图
var originalBox = bigBoxOne.querySelectorAll(".box")[0]//原版


function callbackfn(data){
	for(var i=0;i<data.length;i++){
		var fourImg = data[i].imgUrl // 数据里面对象的长度
		var newBox = originalBox.cloneNode(true)//克隆新的
		var somalImg = newBox.querySelectorAll(".picture a img")//右侧小图片
		newBox.querySelectorAll(".url")[0].setAttribute("href",data[i].url) //游戏详情页路径
		//插入图片路径
		for(j=0;j<fourImg.length;j++){   
			newBox.querySelectorAll(".picture a")[j].setAttribute("href",data[i].url)
			newBox.querySelectorAll(".url img")[j].setAttribute("src",fourImg[j]) //中间的4张图片
			somalImg[j].setAttribute("src",fourImg[j])  //右侧的4张小图片
			newBox.querySelectorAll(".section .four img")[j].setAttribute("src",fourImg[j]) //弹出框4张图片
		}
		// 右边的图文混合区
		newBox.querySelectorAll(".gameName")[0].innerHTML = data[i].name   //游戏名字
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
			if(data[i].platform[j]=="Steam"){
				newBox.querySelectorAll(".xiaotubiao span")[j].className = "linux"
			}
		}
		// 弹出框部分
		newBox.querySelectorAll(".section .first")[0].innerHTML = data[i].name //游戏名字
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
	


	luoji()//执行逻辑
}























