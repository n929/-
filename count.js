<!--
var timer1; //�^�C�}�[���i�[����ϐ��i�^�C�}�[ID�j
var r1=Math.floor(Math.random())+10+1;	
var r2=Math.floor(Math.random())+10+1;	
function hyouji(){
	var r1=Math.floor(Math.random())+10+1;	
	var r2=Math.floor(Math.random())+10+1;
	document.getElementById("rnd1").innerHTML=r1;
	document.getElementById("rnd2").innerHTML=r2;
}
//�J�E���g�_�E���֐���1000�~���b���ɌĂяo���֐�
function cntStart(){
hyouji();
  document.timer.elements[2].disabled=true;
  timer1=setInterval("countDown()",1000);
}

//�^�C�}�[��~�֐�
function cntStop(){
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}

//�J�E���g�_�E���֐�
function countDown(){
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;
  
  if( (min=="") && (sec=="") ){
    alert("������ݒ肵�Ă��������I");
    reSet();
  }
  else{
    if (min=="") min=0;
    min=parseInt(min);
    
    if (sec=="") sec=0;
    sec=parseInt(sec);
    
    tmWrite(min*60+sec-1);
  }
}

//�c�莞�Ԃ������o���֐�
function tmWrite(int){
  int=parseInt(int);
  
  if (int<=0){
    reSet();
    alert("���Ԃł��I");
  }
  else{
    //�c�蕪����int��60�Ŋ����Đ؂�̂Ă�
    document.timer.elements[0].value=Math.floor(int/60);
    //�c��b����int��60�Ŋ������]��
    document.timer.elements[1].value=int % 60;
  }
}

//�t�H�[����������Ԃɖ߂��i���Z�b�g�j�֐�
function reSet(){
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  document.timer.elements[2].disabled=false;
  clearInterval(timer1);
}  

correct = 0;
function next(){
	if (event.keyCode == 13){
		if(document.timer.answer.value==r1*r2){correct++;}
		hyouji();	
	}
}
window.document.onkeydown = nextForm;
//-->	