// JavaScript Document
window.onload=function ()
{
	var  oBanner=document.getElementById("banner");
	var  oPrev=document.getElementById("prev");
	var  oNext=document.getElementById("next");
	var  oImg=document.getElementById("pic");

	//初始化
	var arrImg=['images/bnner.png','images/banner2.png','images/banner3.png']
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
		if(num==3){num=0;};
		oImg.src=arrImg[num];
		
	};timer=setInterval(function (){
		num++;
		if(num==3){num=0};
		oImg.src=arrImg[num];
		},3000);
	
}


