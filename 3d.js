window.addEventListener('DOMContentLoaded', function(){
	var container = document.getElementById('container');
	var images = container.getElementsByTagName('img'); 
	var images_num = images.length;        
	var deg = 360 / images_num; // 计算每张图片按Y轴旋转的角度
	for(var i = 0; i < images_num;i++){ // 初始化位置
		images[i].style.transform = ' rotateY(' + (deg * i - 11.25) % 360 + 'deg) translateZ(500px)'; //deg前面不要加空格
	}
	var x = 0;
	var count = 0;
	setInterval(function(){
		// 原来的方法：容器不动，改变每个图片的Y旋转角度
		// for(var i = 0; i < images_num;i++){ 
		// 	images[i].style.transform = 'rotateY(' + (deg * i - 11.25 + deg * x / 25) % 360 + 'deg) translateZ(500px)'; //deg前面不要加空格
		// }
		// 现在的方法：改变容器的Y旋转角度
		container.style.transform = 'rotateX(-5deg) rotateY(' + (deg * x / 25) % 360 + 'deg)';
		count++;
		if(count > 550) 
			x++;
		if(count == 600) 
			count = 0;
	}, 25);
});
