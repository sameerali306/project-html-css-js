let bar=document.getElementById("bar")
let close=document.getElementById("close")
let nav=document.getElementById("navbar")
let mainimg=document.getElementById("main-img")
let smallimg=document.getElementsByClassName("small-img")
if (bar) {
    bar.addEventListener("click",()=>{
        nav.classList.add("active")
    })
    
}

if (close) {
    close.addEventListener("click",()=>{
        nav.classList.remove("active")
    })
    
}


smallimg[0].onclick=function () {
    mainimg.src=smallimg[0].src
    
}
smallimg[1].onclick=function () {
    mainimg.src=smallimg[1].src
    
}
smallimg[2].onclick=function () {
    mainimg.src=smallimg[2].src
    
}
smallimg[3].onclick=function () {
    mainimg.src=smallimg[3].src
    
}