var timer=60;
var score=0;
var hitrn=0;
function makeBubble(){
var clutter="";

for(var i=1;i<=60; i++ ){
  hitrn=  Math.floor(Math.random()*10);
   clutter+= `<div class="bubble">${hitrn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
 var timerint=setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;}
    else{

        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!! Your Score is ${score}</h1>`;
    }
},1000);

}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
 var clickednum=Number(details.target.textContent);

 if(clickednum==hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
 }
});

runTimer();
makeBubble();
getNewHit()

// increaseScore();


// jispr click karoge uss particular element prr event raise hoga, aur
//event listener na milne prr event parent element prr listenener dhudega and so on and so forth
