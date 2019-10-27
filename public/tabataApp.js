
var secondsW=document.getElementById("workout-seconds").innerHTML;
var initialW=document.getElementById("workout-seconds").innerHTML;
var secondsR=document.getElementById("rst").innerHTML;
var initialR=document.getElementById("rst").innerHTML;
var secondsPr=document.getElementById("prep").innerHTML;
var initialPr=document.getElementById("prep").innerHTML;
var roundsNum=document.getElementById("rounds-window").innerHTML;
var initialRN=document.getElementById("rounds-window").innerHTML;
var tabatas=document.getElementById("noOfTabatas-window").innerHTML;
var initialT=document.getElementById("noOfTabatas-window").innerHTML;
var startWorkout;
var startrest;
var workoutWindow;
var startprepare;
var pauseevent=0;
var whistlecontrol=2;
var restControl=2;
const whistle= new Audio("/Whistle.wav");
const restTime=new Audio("/Rest.mp3");
//APP..............................................................................................

const popapp=document.getElementById("main");

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