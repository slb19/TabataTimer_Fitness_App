var secondsW=20;
var initialW=20
var secondsR=10;
var initialR=10;
var secondsPr=5;
var initialPr=5;
var rest=10;
var roundsNum=2;
var initialRN=2
var tabatas=2;
var initialT=2;
var startWorkout;
var startrest;
var workoutWindow;
var startprepare;
var pauseevent=0;
var whistlecontrol=2;
var restControl=2;

const getready=document.getElementById("c1");
const setworkout=document.getElementById("c2");
const setrest=document.getElementById("c3");
const setrounds=document.getElementById("c4");
const settabatas=document.getElementById("c5");

const controls1=document.querySelectorAll(".controls1 span");
//console.log(controls1);

var getreadycolor=getready.style.backgroundColor;
var setworkoutcolor=setworkout.style.backgroundColor;
var setrestcolor=setrest.style.backgroundColor;
var setroundscolor=setrounds.style.backgroundColor;
var settabatascolor=settabatas.style.backgroundColor;

const whistle= new Audio("Whistle.wav");
const restTime=new Audio("/Rest.mp3");

//GET READY CONTROLS..................................................................................................
function removelistenerGetr(){
  controls1[0].removeEventListener("click",plus);
  controls1[1].removeEventListener("click",minus);
}


getready.addEventListener("click",Getr);

function Getr(e){
  if (setworkoutcolor==="" && setrestcolor==="" && setroundscolor==="" && settabatascolor===""){
if(getreadycolor===""){
  console.log(e.target);
  getready.style.backgroundColor="#3C8747";
  getreadycolor=getready.style.backgroundColor;
  
 controls1[0].addEventListener("click",window.plus=function plus() {
  document.getElementById("c1.1").innerHTML=++secondsPr;
  initialPr=secondsPr;
  });

 controls1[1].addEventListener("click",window.minus=function minus() {
  if(secondsPr<=1) return secondsPr=1;
  document.getElementById("c1.1").innerHTML=--secondsPr;    
  initialPr=secondsPr;
  });
}

else if(getreadycolor="#3C8747"){
  getready.style.backgroundColor="";
  getreadycolor=getready.style.backgroundColor;
console.log(plus);
removelistenerGetr();
 }
}
else{
  getready.removeEventListener("click",Getr);
  getready.addEventListener("click",Getr);
}
}

//WORKOUT CONTROLS.........................................................................................
function removelistenerSetw(){
  controls1[0].removeEventListener("click",plusw);
  controls1[1].removeEventListener("click",minusw);
}


setworkout.addEventListener("click",Setw);
function Setw(e){
  if(getreadycolor==="" && setrestcolor==="" && setroundscolor==="" && settabatascolor===""){
if(setworkoutcolor===""){
  
  setworkout.style.backgroundColor="#3C8747";
  setworkoutcolor=setworkout.style.backgroundColor;

 controls1[0].addEventListener("click",window.plusw=function plusw() {
  document.getElementById("c1.2").innerHTML=++secondsW;
  document.getElementById("workout-seconds").innerHTML=secondsW;
  initialW=secondsW;
  });
 
  

 controls1[1].addEventListener("click",window.minusw=function minusw() {
  if(secondsW<=1) return secondsW=1;
  document.getElementById("c1.2").innerHTML=--secondsW;
  document.getElementById("workout-seconds").innerHTML=secondsW;
  initialW=secondsW;
  });

 
}
else if(setworkoutcolor="#3C8747"){
  setworkout.style.backgroundColor="";
  setworkoutcolor=setworkout.style.backgroundColor;
console.log(plusw);
removelistenerSetw();
 }
}
 else{
  setworkout.removeEventListener("click",Setw);
  setworkout.addEventListener("click",Setw);
 }
}

//REST CONTROLS................................................................................................
function removelistenerSetr(){
  controls1[0].removeEventListener("click",plusr);
  controls1[1].removeEventListener("click",minusr);
}


setrest.addEventListener("click",Setr);
function Setr(e){
  if(getreadycolor==="" && setworkoutcolor==="" && setroundscolor==="" && settabatascolor===""){
if(setrestcolor===""){
  
  setrest.style.backgroundColor="#3C8747";
  setrestcolor=setrest.style.backgroundColor;

 controls1[0].addEventListener("click",window.plusr=function plusr() {
  document.getElementById("c1.3").innerHTML=++secondsR;
  initialR=secondsR;
  });

 controls1[1].addEventListener("click",window.minusr=function minusr() {
  if(secondsR<=1) return secondsR=1;
  document.getElementById("c1.3").innerHTML=--secondsR;
  initialR=secondsR;
  });
}
else if(setrestcolor="#3C8747"){
  setrest.style.backgroundColor="";
  setrestcolor=setworkout.style.backgroundColor;
console.log(plusr);
removelistenerSetr();
 }
}
 else{
  setrest.removeEventListener("click",Setr);
  setrest.addEventListener("click",Setr);
 }
}

//ROUNDS CONTROLS.........................................................................................
function removelistenerSetrou(){
  controls1[0].removeEventListener("click",plusrou);
  controls1[1].removeEventListener("click",minusrou);
}


setrounds.addEventListener("click",Setrou);
function Setrou(e){
  if(getreadycolor==="" && setworkoutcolor==="" && setrestcolor==="" && settabatascolor===""){
if(setroundscolor===""){
  
  setrounds.style.backgroundColor="#3C8747";
  setroundscolor=setrounds.style.backgroundColor;

 controls1[0].addEventListener("click",window.plusrou=function plusrou() {
  document.getElementById("c1.4").innerHTML=++roundsNum;
  document.getElementById("rounds-window").innerHTML=roundsNum;
  initialRN=roundsNum;
  });

 controls1[1].addEventListener("click",window.minusrou=function minusrou() {
  if(roundsNum<=1) return roundsNum=1;
  document.getElementById("c1.4").innerHTML=--roundsNum;
  document.getElementById("rounds-window").innerHTML=roundsNum;
  initialRN=roundsNum;
  });
}
else if(setroundscolor="#3C8747"){
  setrounds.style.backgroundColor="";
  setroundscolor=setrounds.style.backgroundColor;
console.log(plusrou);
removelistenerSetrou();
 }
}
 else{
  setrest.removeEventListener("click",Setr);
  setrest.addEventListener("click",Setr);
 }
}

//No oF Tabatas CONTROLS.............................................................................................
function removelistenerSettab(){
  controls1[0].removeEventListener("click",plust);
  controls1[1].removeEventListener("click",minust);
}


settabatas.addEventListener("click",Settab);
function Settab(e){
  if(getreadycolor==="" && setworkoutcolor==="" && setrestcolor==="" && setroundscolor===""){
if(settabatascolor===""){
  
  settabatas.style.backgroundColor="#3C8747";
  settabatascolor=settabatas.style.backgroundColor;

 controls1[0].addEventListener("click",window.plust=function plust() {
  document.getElementById("c1.5").innerHTML=++tabatas;
  document.getElementById("noOfTabatas-window").innerHTML=tabatas;
  initialT=tabatas
  });

 controls1[1].addEventListener("click",window.minust=function minust() {
  if(tabatas<=1) return tabatas=1;
  document.getElementById("c1.5").innerHTML=--tabatas;
  document.getElementById("noOfTabatas-window").innerHTML=tabatas;
  
  initialT=tabatas;
  });
}
else if(settabatascolor="#3C8747"){
  settabatas.style.backgroundColor="";
  settabatascolor=settabatas.style.backgroundColor;
console.log(plust);
removelistenerSettab();
 }
}
 else{
  settabatas.removeEventListener("click",Setab);
  settabatas.addEventListener("click",Setab);
 }
}

//APP..............................................................................................


const buttonGo= document.getElementById("go-btn");
const buttonsStopPause=document.querySelectorAll(".hide-btn");
const rounds=document.getElementById("rounds-window");
const stopButton=document.querySelector(".buttons span:nth-child(1)");
const pauseButton=document.querySelector(".buttons span:nth-child(3)");
console.log(pauseButton);
const noOfTabatas=document.getElementById("noOfTabatas-window");


function reset(){
  workoutWindow=document.querySelector("#workout-window div");
  workoutWindow.innerHTML="WORKOUT";
        secondsW=initialW;
        document.getElementById("workout-seconds").innerHTML=secondsW;
        secondsR=initialR;
        roundsNum=initialRN;
        tabatas=initialT;
        secondsPr=initialPr
        rounds.innerHTML=roundsNum;
        noOfTabatas.innerHTML=tabatas;
        pauseevent=0;
}

function removeListenerGoButton(){
buttonGo.removeEventListener("click",Go);

}

function prepare(){
  workoutWindow=document.querySelector("#workout-window div");
  workoutWindow.innerHTML="GET READY";
  document.getElementById("workout-seconds").innerHTML=--secondsPr;
  if (secondsPr===0){    
clearInterval(startprepare);
startWorkout=setInterval(workout,1000);
pauseevent=1;
}
}

function resttime(){
workoutWindow=document.querySelector("#workout-window div");
workoutWindow.innerHTML="REST";
document.getElementById("workout-seconds").innerHTML=--secondsR;

if(restControl>1){
  restTime.currentTime=0;
  restTime.play();
  restTime.volume=0.2;
  }
  restControl--;

if (secondsR===0){
workoutWindow.innerHTML="WORKOUT";
roundsNum--;
//console.log(roundsNum);
rounds.innerHTML=roundsNum;

clearInterval(startrest) ;  
startWorkout=setInterval(workout,1000);
secondsR=initialR;
pauseevent=1;
restControl=2;

}if (roundsNum===0){
    tabatas--;
    console.log(tabatas);
    roundsNum=initialRN;
    noOfTabatas.innerHTML=tabatas;
    rounds.innerHTML=roundsNum;
}if(tabatas===0){
document.getElementById("rounds-window").innerHTML=0;   
document.querySelector("#workout-window div").innerHTML="FINISH"
clearInterval(startWorkout);
clearInterval(startrest) ; 

}
}

function workout(){

workoutWindow=document.querySelector("#workout-window div");
workoutWindow.innerHTML="WORKOUT";
document.getElementById("workout-seconds").innerHTML=--secondsW;
--whistlecontrol;
console.log(whistlecontrol);
if(whistlecontrol>=1){
whistle.currentTime=0;
       whistle.play();
       whistle.volume=0.2;
}
if (secondsW===0){    
clearInterval(startWorkout);
startrest=setInterval(resttime,1000);
secondsW=initialW;
pauseevent=2;
whistlecontrol=2;
}
}

pauseButton.addEventListener("click",function(e){

  if(pauseButton.textContent==="PAUSE" && pauseevent===0){
console.log(e.target);
console.log(pauseevent);
pauseButton.innerHTML="RESUME";
clearInterval(startprepare);
    
}else if(pauseButton.textContent==="RESUME" && pauseevent===0){
 pauseButton.innerHTML="PAUSE";
 startprepare=setInterval(prepare,1000);
 }

    if(pauseButton.textContent==="PAUSE" && pauseevent===1){
    console.log(e.target);
    console.log(pauseevent);
    pauseButton.innerHTML="RESUME";
    clearInterval(startWorkout);
        
    }else if(pauseButton.textContent==="RESUME" && pauseevent===1){
    pauseButton.innerHTML="PAUSE";
    startWorkout=setInterval(workout,1000)
    }

        if(pauseButton.textContent==="PAUSE" && pauseevent===2){
        //console.log(e.target);
        console.log(pauseevent);
        pauseButton.innerHTML="RESUME";
        clearInterval(startrest);
    
        }else if(pauseButton.textContent==="RESUME" && pauseevent===2){
        pauseButton.innerHTML="PAUSE";
        startrest=setInterval(resttime,1000);
        }
});


stopButton.addEventListener("click",function(e){
console.log(e.target);
pauseevent=0;
clearInterval(startWorkout);
clearInterval(startrest);
clearInterval(startprepare);
workoutWindow.innerHTML="WORKOUT";
document.getElementById("workout-seconds").innerHTML=20;
buttonsStopPause.forEach(function(hiddenbuttons){
    hiddenbuttons.style.visibility="hidden";
      buttonGo.style.visibility="visible";
        //secondsW=20;
        secondsW=initialW;
        document.getElementById("workout-seconds").innerHTML=secondsW;
        //secondsR=10;
        secondsR=initialR;
        //roundsNum=2;
        roundsNum=initialRN;
        //tabatas=2;
        tabatas=initialT;
        //secondsPr=5
        secondsPr=initialPr;
        rounds.innerHTML=roundsNum;
        noOfTabatas.innerHTML=tabatas;
  });
});

buttonGo.addEventListener("click",Go);
  function Go(e){
   buttonGo.style.visibility="hidden";

  buttonsStopPause.forEach(function(hiddenbuttons){
    hiddenbuttons.style.visibility="visible";
  });
  
  startprepare=setInterval(prepare,1000);
  
}