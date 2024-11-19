const Rawfood=document.querySelector(".Rawfood");
const Leftoverfood=document.querySelector(".Leftoverfood");
const moveBtn=document.querySelector(".moveBtn");
const rf=document.querySelector(".rf");
const lof=document.querySelector(".lof");


Leftoverfood.addEventListener("click",()=>{
    moveBtn.classList.add("rightBtn");
    lof.classList.add("lofform");
    rf.classList.remove("rfform");
    moveBtn.innerHTML="Left over food";
    
})

Rawfood.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    lof.classList.remove("lofform");
    rf.classList.add("rfform");
   moveBtn.innerHTML="Raw food";
})