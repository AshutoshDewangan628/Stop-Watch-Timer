const currentTime=document.querySelector(".para");
const buttonClick=document.querySelector(".button-container")


let second=0;
let minute=0;
let hour=0;
let timerId;

function handleEvent(event){

    const button=event.target.name;
    if(button==="start"){
        timerId=setInterval(()=>{
            second++;
            if(second>58){
                second=0;
                minute++;
            }
            if(minute>58){
                minute=0;
                hour++;
            }
            currentTime.innerText=`${hour<10 ? `0${hour}`:hour}:${minute<10 ? `0${minute}`:minute}:${second<10 ? `0${second}`:second }`;
        },1000)
    }
    if(button=="stop"){
        clearInterval(timerId);
    }
    if(button=="reset"){
        clearInterval(timerId)
        currentTime.innerText=`00 : 00 : 00`
    }
}

buttonClick.addEventListener("click",handleEvent)


