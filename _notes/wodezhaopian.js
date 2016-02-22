// JavaScript Document
window.onload=function(){
	
	var  oBanner=document.getElementById("banner");
	var  oPrev=document.getElementById("prev");
	var  oNext=document.getElementById("next");
	var  oImg=document.getElementById("pic");
	//初始化
  var arrImg=['images/w4.jpg','images/w8.jpg','images/w3.jpg','images/w10.jpg'];
	var num=0;
	oImg.src=arrImg[num];//HTML-DOM
	oPrev.onclick=function ()
	{
		num--;
		if(num==-1){num=3;};
		oImg.src=arrImg[num];
				
	};
		oNext.onclick=function ()
	{
		num++;
		if(num==4){num=0;};
		oImg.src=arrImg[num];
		
	};timer=setInterval(function (){
		num++;
		if(num==4){num=0};
		oImg.src=arrImg[num];
		},3000);
	
	}














