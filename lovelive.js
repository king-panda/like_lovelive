window.onload = function() {
 
animation();
    
}


canvas  = null;
ctx     = null;

var x = 0;
var y = 0;
var v = 0;
var timerID = -1;
var x_base  = -1;
var y_base  = -1;

var startFlag = false; 


var xpos = new Array(); //弾の水平位置
var ypos = new Array(); //弾の垂直位置
var xspeed = 
new Array(0,6,7.5,6,0,-6,-7.5,-6); //弾のスピード
var yspeed = 
new Array(6.5,7,0,-6,-7.5,-6,0,7); //弾のスピード
var size = new Array(); 
var time = new Array();

var dtime =0;

//弾に関する配列の初期値の設定
for(i=0;i<100;i++){
xpos[i]=420;
ypos[i]=300;
size[i]=100;
time[i]=Math.random()*20;
}
  



function animation(){
	canvas  = document.getElementById('canvas');  
	ctx = canvas.getContext('2d');  
    
    maru = new Image();
	maru.src = "http://jsrun.it/assets/a/w/8/a/aw8aK.png";

	x_base  = canvas.offsetLeft;  
	y_base  = canvas.offsetTop; 
	x = 160; 
	y = 232;
    
    
	
    canvas.addEventListener("mousedown", startListner, false);   
    canvas.addEventListener("touchstart", startListner, false); 
    canvas.addEventListener("mouseup", endListner, false);
    canvas.addEventListener("touchend", endListner, false);
    
    timerID = setInterval('draw()',60);
    
}


// 描画

function draw() {
	
ctx.beginPath();
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fill();
ctx.closePath();


//爆弾の描画//////////////////////////
for(i=0;i<200;i++){


if(dtime >=time[i]){
xpos[i]=xpos[i]-xspeed[i]; 
ypos[i]=ypos[i]-yspeed[i];
ctx.drawImage(maru,xpos[i],ypos[i],size[i],size[i]);
}

}
///////////////
dtime = dtime+0.06; 

ctx.textAlign="center";
ctx.textBaseline="bottom";
ctx.font="bold 30px sans-serif"
ctx.fillStyle="yellow";
ctx.fillText("dtime "+Math.floor(dtime)+"",200,200);

}
			


// マウスダウンされた時の処理


function startListner(event){
    
       
    
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
    
    if (isiPad || isiPhone) {
        //iPad & iPhone用処理
        var x_now = event.touches[0].pageX - x_base;
	    var y_now = event.touches[0].pageY - y_base;
      } else {
        //PC用処理
        var x_now = event.clientX - x_base;
	    var y_now = event.clientY - y_base;
      }
	
	var x1 = x - x_now;
	var y1 = y - y_now;
	var r  = Math.sqrt(x1 * x1 + y1 * y1);
	if (r < 50) {
        startFlag = true;
        for(i=0;i<200;i++){

       if(500 <= ypos[i]){
        size[i]=0;
        }

}
	}
        
    
}



// マウスアップされた時の処理


function endListner(event) {
     
      if (startFlag) {
 


      }
    
}


document.ontouchmove = function(event){
    event.preventDefault();
}















