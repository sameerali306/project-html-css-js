let next=document.querySelector(".next")
let prev=document.querySelector(".prev")

next.addEventListener("click",function () {
    console.log("hhhhh");
    
    let item=document.querySelectorAll(".items")
   let slider= document.querySelector(".slide")
   slider.appendChild(item[0])
    
})

prev.addEventListener("click",function () {
    console.log("hhhhh");
    
    let item=document.querySelectorAll(".items")
   let slider= document.querySelector(".slide")
   slider.prepend(item[item.length - 1])
    
})