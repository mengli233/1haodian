window.onload = function(){
	// 广告顶部开始
	var ggtop =document.getElementById('ggtop');
	var gs = document.getElementById('gs');

	gs.onclick =  function(){
		ggtop.style.display = 'none';
	}
	// 广告顶部完毕
	// 获取二级导航a元素
	var shopping = document.getElementById('shopping');
	console.log(shopping);
	var shop2 = document.getElementsByClassName('shop2')[0];
	// console.log(shop2);
	shopping.onmouseover = function(){
		shop2.style.display = 'block';
	}
	shopping.onmouseout = function(){
		shop2.style.display = 'none';
	}
	// 轮播图开始

	var show = document.getElementById('show');
	var left = document.getElementById('left');
	var right =  document.getElementById('right');
	var lis = show.children[0].children;
	var lists =  document.getElementById('circlelist').children[0].children;
	var index = 0;
	var run;

	function change(){
		
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index++;
		if (index==lis.length) {
			index = 0;
		}
		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','listactive');
	}
	function autoRun(){
		if (run) {
			return;
		}
		run = setInterval(change,1000);
	}
	autoRun();//定时轮播函数调用
	show.onmouseover = function(){
		clearInterval(run);
		left.style.display = 'block';
		right.style.display = 'block';
	}
	show.onmouseout = function(){
		autoRun();
		left.style.display = 'none';
		right.style.display = 'none';
	}
	left.onmouseover = function(){
		this.style.background = 'rgba(255,255,255,0.6)';
	}
	left.onmouseout = function(){
		this.style.background = 'rgba(255,255,255,0.1)';
	}
	right.onmouseover = function(){
		this.style.background = 'rgba(255,255,255,0.6)';
	}
	right.onmouseout = function(){
		this.style.background = 'rgba(255,255,255,0.1)';
	}
	left.onclick = function(){
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index--;
		if (index<0) {
			index = lis.length-1;
		}
		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','listactive');
	}
	right.onclick = function(){
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index++;
		if(index==lis.length){
			index=0;
		}
		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','listactive');
	}
	for(var i=0;i<lists.length;i++){
		lists[i].setAttribute('data-index',i);
		lists[i].onmouseover = function(){
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			index = this.getAttribute('data-index');
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','listactive');
		}
	}
	
	// 广告弹框区域开始

	var gKou =  document.getElementById('gKou');
	var show = document.getElementsByClassName('show')[0];
	// console.log(show);
	var gKouImg  = document.getElementById('gKou-img');

	// 设置步经
	var stepX = 1;
	var stepY = 1;
	// var run;

	function autoRun1(){
		if (run) {
			return;
		}

		run = setInterval(function(){
			var cW = document.documentElement.clientWidth;
			var cH = document.documentElement.clientHeight;

			var newLeft =  gKou.offsetLeft + stepX;
			var newTop =  gKou.offsetTop + stepY;
			if (newLeft>=(cW - gKou.offsetWidth)) {
				newLeft = cW - gKou.offsetWidth;
				stepX *= -1;
			}

			if (newLeft <= 0) {
				newLeft = 0;
				stepX *= -1;
			}

			if (newTop >= (cH - gKou.offsetHeight)){ newTop = cH - gKou.offsetHeight;
				stepY *= -1;
			}
			if (newTop <= 0) {
				newTop = 0;
				stepY *= -1;
			}

			gKou.style.left = newLeft + 'px';
			gKou.style.top = newTop +'px';
		},20);
	}
	// autoRun1();
	// gKou.onmouseover =  function(){
	// 	clearInterval(run);
	// 	run = undefined;
	// }
	// gKou.onmouseout =  function(){
	// 	autoRun();
	// }
	// show.onclick =  function(){
	// 	gKou.style.display = 'none';
	// }
	// 广告弹框区域结束






	// 电梯导航定位开始
	// 电梯导航定位结束  afr  是ul li 的样式
// console.log($(".wapper").height());
	// 获取电梯的自身的高度
	var h = $(".wapper").height();
	// 可视窗口的高度
	$('.wapper').css('margin-top',-1*h/2);
	var vpHei = $(window).height();
	var vpHeis = vpHei/2;

	// 获取各个文档相对于文档顶部的距离
	var flo1 = $('.wap1').offset().top;
	var flo2 = $('.wap2').offset().top;
	var flo3 = $('.wap3').offset().top;
	var flo4 = $('.wap4').offset().top;
	var flo5 = $('.wap5').offset().top;
	var flo6 = $('.wap6').offset().top;
	var flo7 = $('.wap7').offset().top;
	


	// 声明电梯函数事件
	function onScroll(){
		var seTop = $(this).scrollTop();
		// console.log($(this).scrollTop);

		// 求出栏目与可视窗口的到顶部的之间的距离

		var sT1 = flo1 - seTop;
		var sT2 = flo2 - seTop;
		var sT3 = flo3 - seTop;
		var sT4 = flo4 - seTop;
		var sT5 = flo5 - seTop;
		var sT6 = flo6 - seTop;
		var sT7 = flo7 - seTop;

		if (sT1<= vpHeis){
			$('.wapper').stop().fadeIn();

			$('.wapper li').eq(0).addClass('.afr').siblings().removeClass('.afr');
			
		}else{
			$('.wapper').stop().fadeOut();
		}
		if (sT2<= vpHeis){
			$('.wapper li').eq(1).addClass('.afr').siblings().removeClass('.afr');
		}
		if (sT3<= vpHeis){
			$('.wapper li').eq(2).addClass('.afr').siblings().removeClass('.afr');
		}
		if (sT4<= vpHeis){
			$('.wapper li').eq(3).addClass('.afr').siblings().removeClass('.afr');
		}
		if (sT5<= vpHeis){
			$('.wapper li').eq(4).addClass('.afr').siblings().removeClass('.afr');
		}
		if (sT6<= vpHeis){
			$('.wapper li').eq(5).addClass('.afr').siblings().removeClass('.afr');
		}
		if (sT7<= vpHeis){
			$('.wapper li').eq(6).addClass('.afr').siblings().removeClass('.afr');
		}
	}
	$(window).scroll(onScroll);
	// 为电梯按钮添加事件交互函数
	$('.wapper li').click(function(){
		$(window).off('scroll');
		$(this).addClass('.afr').siblings().removeClass('.afr');
	
		if ($(this).index()===0) {
			$('html,body').stop().animate({
				'scrollTop':flo1
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===1) {
			$('html,body').stop().animate({
				'scrollTop':flo2
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===2) {
			$('html,body').stop().animate({
				'scrollTop':flo3
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===3) {
			$('html,body').stop().animate({
				'scrollTop':flo4
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===4) {
			$('html,body').stop().animate({
				'scrollTop':flo5
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===5) {
			$('html,body').stop().animate({
				'scrollTop':flo6
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index()===6) {
			$('html,body').stop().animate({
				'scrollTop':flo7
			},600,function(){
				$(window).scroll(onScroll);
			});
		}
		
	});

	// 吸顶事件开始
	// 获取到达该文档到可视窗口的高度的距离开始
	var xTop = document.getElementsByClassName('xTop');
	 window.onscroll = function(){
	 	var sT = document.documentElement.scrollTop || document.body.scrollTop;
	 	if (sT>=668) {
	 		xTop[0].style.height = '60px';
	 		xTop[0].style.transition = 'height 0.4s linear';
	 	}else{ 
	 		xTop[0].style.height = '0px';
	 		xTop[0].style.transition = 'height 0.6s linear';
	 	}
	 }
	 // 获取到达该文档到可视窗口的高度的距离结束
}
 