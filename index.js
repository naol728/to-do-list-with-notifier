const tasks=document.querySelector(".tasks")
const form=document.getElementById("form");
const curtime=document.getElementById("curtime")


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const task=form.elements.task.value;
  const time=document.getElementById("time").value;
  const inputtime=time.split(":")
  if(inputtime.length !==2){
   console.log("invalid format")
   return;
  }
const inputhour=parseInt(inputtime[0])
const inputmiute=parseInt(inputtime[1])

     const now=new Date()
     const curhour=now.getHours(); 
     const curminute=now.getMinutes(); 
     console.log((inputhour*3600+inputmiute*60))
     console.log((curhour*3600+curminute*60))
   let timedifference=(inputhour*3600+inputmiute*60)-(curhour*3600+curminute*60)
   console.log(timedifference)
   if(timedifference<=0){
     console.log("the specified time is passed")
   }
   else{
     console.log(`the alarm will play in ${timedifference} seconds`)
     setTimeout(()=>{
       const audio=new Audio("prayforme.mp3")
       audio.play()
     },timedifference*1000)
   }
   Displaytask(task,time)
})

function Displaytask(task,time){
 const newtask=document.createElement('li')
   newtask.innerHTML=task+time;
   const tasklists=document.querySelector(".tasklists")
   tasklists.appendChild(newtask)
}

function curenttime(){
     const now=new Date()
     const curhour=now.getHours(); 
     const curminute=now.getMinutes();
     const cursec=now.getSeconds() 
     formatedtime=((curhour).toString().padStart(2,'0'))+":"+curminute.toString().padStart(2,'0')+":"+cursec.toString().padStart(2,'0')
                                 curtime.textContent=formatedtime;
                         return formatedtime    
   }

setInterval(curenttime,1000)