var photosDom = document.getElementById('photos');
//获取图片数组
var images = photosDom.getElementsByTagName('img'); 
//获取图片数量
var len = images.length;        
//计算每张图片按Y轴旋转的角度 
var deg = 360 / len//Math.floor();                    


photosDom.style.transform = "rotateX(-5deg)";
var x = 0;
var count = 0;
setInterval(function(){
	for(var i = 0; i < len;i++){
		images[i].style = 'transform : rotateY(' + (deg * i + deg * x / 25 - 11.25)%360 +'deg) translateZ(500px)'; //deg前面不要加空格
		
	}
	count++;
	if(count > 550) x++;
	if(count == 600) count = 0;
    //photosDom.style.transform = "rotateX(-10deg) rotateY("+ (x++) * 1.2 +"deg)";
},25);