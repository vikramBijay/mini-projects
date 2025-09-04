// nav 
  let menu = document.querySelector('.menu')
  function show(){
    menu.style.right='0'
    menu.style.display="block"
  }
  function hide(){
    menu.style.right='-200px'
   
  }
  const toggleSwitch = document.querySelector('.toggle-state');
  toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('darktheme');
  });
  
  // stopwatch
  let [hour,min,sec]=[0,0,0];
  const time = document.querySelector('.time')
  const startbtn = document.querySelector('.start')
  const pausebtn = document.querySelector('.pause')
  const resetbtn = document.querySelector('.reset')
  const timerstart = document.querySelector('.timerstart')
  const timerpause = document.querySelector('.timerpause')
  const retime = document.querySelector('.retime')
  let timer=null;
  const timedisplay = document.querySelector('.timedisplay')
  const stopwatchbtn = document.querySelector('.stopwatchbtn')
  const timerbtn = document.querySelector('.timerbtn')
  const stopwatch = document.querySelector('.stopwatch')
  const timerwatch = document.querySelector('.timerwatch')
  const stoph4 = document.querySelector('.stoph4')

  stopwatchbtn.addEventListener('click',()=>{
    stopwatch.style.display = 'block'
    timerwatch.style.display = 'none'
     timerbtn.style.backgroundColor= 'white';
    stopwatchbtn.style.backgroundColor= 'orange';

  timerbtn.style.color= 'black';
  stopwatchbtn.style.color= 'white';
  })
  timerbtn.addEventListener('click',()=>{

       let h= hour<10? "0"+hour :hour;
  let m= min<10? "0"+min : min ;
  let s= sec<10? "0"+sec : sec ;
  time.innerText= `${h}:${m}:${s}`
    stopwatch.style.display = 'none'
    timerwatch.style.display= 'block'
    timerbtn.style.backgroundColor= 'greenyellow';
    stopwatchbtn.style.backgroundColor= 'white';

  timerbtn.style.color= 'white';
  stopwatchbtn.style.color= 'black';

     
  })

function display(){
  let h= hour<10? "0"+hour :hour;
  let m= min<10? "0"+min : min ;
  let s= sec<10? "0"+sec : sec ;
  time.innerText= `${h}:${m}:${s}`
}
function stopwatchfn(){
  sec++
  if(sec===60){
    min++
    sec=0
    if(min===60){
      hour++
      min=0
    }
  }
  display()
}

function start(){
  [hour,min,sec]=[0,0,0];
  if(timer !== null){
    clearInterval(timer)
  }
  timer=setInterval(stopwatchfn,1000)
}
function pause(){
  clearInterval(timer)
}
function reset(){
  clearInterval(timer);
  [hour,min,sec]=[0,0,0];
   time.innerText= `0${hour}:0${min}:0${sec}`;
}

// add events
startbtn.addEventListener('click',start)
pausebtn.addEventListener('click',pause)
resetbtn.addEventListener('click',reset)
startbtn.addEventListener('click',()=>{
 startbtn.style.display=' none'
 pausebtn.style.display=' block'
})
pausebtn.addEventListener('click',()=>{
 pausebtn.style.display=' none'
 startbtn.style.display=' block'
})


function timerfn(){
  if(hour===0 && min===0 && sec===0){
    return
}
  if(sec===0){
    if(min===0){
      hour--;
        min = 59;
        sec = 59;
    }else{
      min--;
      sec= 59
    }
  }else{
    sec--;
  }

 
  
   let h= hour<10? "0"+hour :hour;
  let m= min<10? "0"+min : min ;
  let s= sec<10? "0"+sec : sec ;
    timedisplay.innerText= `${h}:${m}:${s}`
}
function starttimer(){
  [hour,min,sec]=[0,1,30]
  let h= hour<10? "0"+hour :hour;
  let m= min<10? "0"+min : min ;
  let s= sec<10? "0"+sec : sec ;
    timedisplay.innerText= `${h}:${m}:${s}`
  if(timer !== null){
    clearInterval(timer)
  }
  timer=setInterval(timerfn,1000)
}
function pausefn(){
  clearInterval(timer)
}
function resetfn(){
  clearInterval(timer);
 [hour,min,sec]=[0,1,30]
  let h= hour<10? "0"+hour :hour;
  let m= min<10? "0"+min : min ;
  let s= sec<10? "0"+sec : sec ;
    timedisplay.innerText= `${h}:${m}:${s}`
}
timerstart.addEventListener('click',starttimer)

timerstart.addEventListener('click',()=>{
 timerstart.style.display=' none'
 timerpause.style.display=' block'
})
timerpause.addEventListener('click',pausefn)

timerpause.addEventListener('click',()=>{
 timerpause.style.display=' none'
 timerstart.style.display=' block'
})
retime.addEventListener('click',resetfn)