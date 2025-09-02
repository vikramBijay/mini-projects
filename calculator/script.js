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

//   calculator
let display =document.querySelector('.display')
let btn =document.querySelector('.btn')

btn.addEventListener('click',(e)=>{
  let operator =['/','*','-','+','%']
let value = e.target.innerText
if(!e.target.matches('button')) return;
if(display.innerHTML==='0'||display.innerHTML==='error'||display.innerHTML==='undefined'){
  display.innerHTML=''
}
if(value==='clear'){
  display.innerHTML='0'
  return
}else if(value==='del'){
  display.innerHTML= display.innerHTML.slice(0,-1)
  if(display.innerHTML.trim()===''){
    display.innerHTML='0'
  }
  return
} else if(value==='='){
  try{
    let result =eval(display.innerText)
 
    result= parseFloat(result.toFixed(4))
  display.innerHTML=result

  } catch{
    display.innerHTML='error'
  }
  return
}

if(operator.includes(value)){
  let lastchar = display.innerText.slice(-1);
  if(operator.includes(lastchar)){
    return
  }
}

  display.innerHTML += value;
})