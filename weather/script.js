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
  // weather
const temp= document.querySelector('.temp')
const city= document.querySelector('.city')
const humidity= document.querySelector('.humidity')
const wind= document.querySelector('.wind')
const searchbtn= document.querySelector('.searchbtn')
const input= document.querySelector('#inputvalue')
const hero= document.querySelector('.heroImg')

// api
  let apiurl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
  let apikey='6db5babcac13dc89ac371b93b81dc87d'

async  function weather(cityname){ 
let responce = await fetch(apiurl +cityname+ `&appid=${apikey}`)
let data=await responce.json()
console.log(data)
  city.innerText=data.name
  temp.innerText=data.main.temp + '°c'
  humidity.innerText=data.main.humidity + '%'
  wind.innerText=Math.round(data.wind.speed )+ ' km/h'

  // cloud logic
  if(data.weather[0].main==='Clouds'){
     hero.src='images/clouds.png'
  }
  else if(data.weather[0].main==='Clear'){
    hero.src='images/clear.png'
  }
  else if(data.weather[0].main==='Dizzle'){
    hero.src='images/dizzle.png'
  }
  else if(data.weather[0].main==='Rain'){
    hero.src='images/rain.png'
  }
  else if(data.weather[0].main==='Snow'){
    hero.src='images/snow.png'
  }
  else if(data.weather[0].main==='Mist'){
    hero.src='images/mist.png'
  }
}
  
  searchbtn.addEventListener('click',()=>{
      let value = input.value
    if(value.trim()===''){
      return
    }else{
     weather(value)
     input.value=''
    }
  })

