<!--
var hit = 0;
var que=0;//問題数のカウント
var s=0;
function Question(){
	var x=Math.floor(Math.random()*100)+1;	
	var y=Math.floor(Math.random()*100)+1;
	s=x*y;

	document.getElementById("rnd1").innerHTML=x;
	document.getElementById("rnd2").innerHTML=y;
	
	que++;
	if(que>=11){
		alert("残り時間："+document.timer.elements[0].value+"分"+document.timer.elements[1].value+"秒"+"　　10問中"+hit+"問正解！");
		Reset();
	}

}
function Next(){
	var S=document.timer.answer.value;
	document.timer.answer.value="";
	if(s==S)hit++;
	Question();
}
var time; //タイムをカウントする

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function Start(){
	Question();
	document.timer.elements[2].disabled=true;
	time=setInterval("countDown()",1000);
}

//タイマー停止関数
function Stop(){
	document.timer.elements[2].disabled=false;
	clearInterval(time);
}

//カウントダウン関数
function countDown(){
	var min=document.timer.elements[0].value;
	var sec=document.timer.elements[1].value;
	if( (min=="") && (sec=="") ){
		alert("時刻を設定してください！");
		ReSet();
	}
	else{
		if (min=="") min=0;
		min=parseInt(min);
		if (sec=="") sec=0;
		sec=parseInt(sec);
		tmWrite(min*60+sec-1);
	}
}

//残り時間の関数
function tmWrite(int){
	int=parseInt(int);
	if (int<=0){
    		Reset();
    		alert("時間です！");
		que=0;
	}
 	else{
   		document.timer.elements[0].value=Math.floor(int/60);
		document.timer.elements[1].value=int % 60;
	}
}

//フォームを初期状態に戻す（リセット）関数
function Reset(){
	que=0;
	document.timer.elements[0].value="0";
	document.timer.elements[1].value="0";
	document.timer.elements[2].disabled=false;
	clearInterval(time);
}  
//-->	