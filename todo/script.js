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

  // todo list
  datalist=[

]
  const input=(document.querySelector('#input'))
  const addbtn=(document.querySelector('.addbtn'))
  const tasksec=(document.querySelector('.tasksec'))

function renderuser(arr){
 
  tasksec.innerHTML=''
     if(arr.length=== 0){
    tasksec.innerHTML=`<h4 class="wel">hello there!<br>lets make today productive<br><span class="rocket">🚀</span></h4>`} else{
      
      arr.map(obj=>{
        
      let newdiv = document.createElement('div')
      newdiv.className='task'
      newdiv.innerHTML=`
       <p class="origlist">${obj.list}</p>
       <textarea class="editlist" id="area"></textarea>
      
                <div class="btn">
                    <button class="edit">edit</button>
                    <button class="save">save</button>
                    <button class="del">delete</button>
                </div>
      `
     let del=newdiv.querySelector('.del')
     let edit=newdiv.querySelector('.edit')
     let save=newdiv.querySelector('.save')
     let origlist=newdiv.querySelector('.origlist')
     let editlist=newdiv.querySelector('.editlist')
    
     
    
    //  events
     del.addEventListener('click',()=>{
      console.log(obj.id)
      delfun(obj.id)
     })
    edit.addEventListener('click',()=>{
      edit.style.display='none';
      save.style.display='block'
      origlist.style.display='none'
      editlist.style.display='block'
       editlist.value = origlist.innerText
    })
    save.addEventListener('click',()=>{
      save.style.display='none'
      edit.style.display='block'
      origlist.style.display='block'
      editlist.style.display='none'
      origlist.innerText= editlist.value
    })
    
    
    
    //  append
      tasksec.append(newdiv)
    })
    }
}


renderuser(datalist)

function addtask(){
  let value= input.value;
  if(value.trim()==='') return;
  let newdata={
    'id':Date.now(), 'list': value
  }
   datalist.push(newdata)  
renderuser(datalist)
input.value=''
}
function delfun(id){
 datalist =datalist.filter(obj=> obj.id !== id)
 renderuser(datalist)
}

addbtn.addEventListener('click',addtask)
