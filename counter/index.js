let counterr=document.getElementById("counter")
let count=0
let button=document.getElementById("button")

function updateDisplay() {
counterr.innerText="Counter :"+count
    
}
function increase() {
    count++
     updateDisplay();
    console.log(count);
    
}