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

//   quote

const quotetext= document.querySelector('.quotetext')
const newquote= document.querySelector('.newquote')
const twitter= document.querySelector('.twitter')
const author= document.querySelector('.author')

// api
let url='https://api.quotable.io/random'
async function quote(api) {
    let responce= await fetch(api);
    let data = await responce.json();
    quotetext.innerHTML = `" ${data.content} "`
    author.innerHTML=`by: " ${data.author} "`
}
function tweet(){
  window.open(`https://twitter.com/intent/tweet?text=${quotetext.innerText}` , 'tweet window', 'width=600,height=300')
}
twitter.addEventListener('click', tweet)
newquote.addEventListener('click',()=>{
    quote(url)
})