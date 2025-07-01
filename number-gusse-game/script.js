const container=document.querySelector(".container")
const btngain=document.querySelector(".btn-gain")
const btncheckel=document.querySelector(".btn-check")
const hideNam=document.querySelector(".hide-num")
const massage=document.querySelector(".massage")
const input=document.querySelector(".input")
const scoreel=document.querySelector(".score")
const highestscoreel=document.querySelector(".highest-score")


let scretnum=Math.floor(Math.random() * 20 + 1)
console.log(scretnum);

let score=20
let highestscore=0

btncheckel.addEventListener("click" ,()=>{
    const gusses=Number(input.value)
    console.log(gusses);

 //check empty input
 if (gusses) {
    if (gusses !=scretnum) {
        if (score>1) {
            score--
            scoreel.textContent=score
            
            massage.textContent=gusses>scretnum?"Your Enter Number Is Too High":"Your Enter Number Is Too Low"
        } else {
           massage.textContent="You Loss The Game"
          container.style.backgroundColor = "#ddd"
           scoreel.textContent=0
            
        }
    } else {
        hideNam.textContent=scretnum
        hideNam.style.width="50%"
        hideNam.style.transition="all 0.5s ease-in"
        container.style.backgroundColor="#e0d8d3"
        massage.textContent="Congratulate You Win The Game"
    }
    
 } else {
    massage.textContent="Please Enter a Number"
 }
    
})


btngain.addEventListener("click",()=>{
    score=20
    let scretnum=Math.floor(Math.random() * 20 + 1)
    scoreel.textContent=score
    hideNam.textContent="?"
    hideNam.style.width="25%"
    hideNam.style.transition="all 0.5s ease-in"
    input.value=""
    container.style.backgroundColor = "#ddd"
    massage.textContent="Start Gussing........."


})


