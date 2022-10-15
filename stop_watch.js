//  let mili = 0
 let mili = 0
 let sec = 0
 let min = 0

 var Interval;

let h = document.getElementById("hour")
let m = document.getElementById("min")
let s = document.getElementById("sec")

let start_button = document.getElementById("start")
let stop_button = document.getElementById("stop")
let reset_button = document.getElementById("reset")
 

let timer = ()=>{

    mili++
    s.innerHTML=mili
  
  if(mili ===100){
      sec++
      m.innerHTML=sec
      mili=0
  
  }

  if(sec === 60){
min++
h.innerHTML=min
sec =0
  }
  
      }

 const start =()=>{
 
    interval = setInterval(timer , 10)

    start_button.disabled=true
     
}


 const stop =()=>{
// console.log("han bhai chl raha he]");
 clearInterval(interval)

start_button.disabled=false

 }

 const reset =()=>{
    
    stop()

mili=0
sec=0
min=0

s.innerHTML="00"
m.innerHTML="00"
h.innerHTML="00"




 }
