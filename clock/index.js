let number = document.querySelector(".numbers-hours");
let secondbar=document.querySelector(".second-bar")
let handhour=document.querySelector(".hand.hour")
let handmins=document.querySelector(".hand.mins")
let handsec=document.querySelector(".hand.sec")

var numberElement = [];
var secondElement=[]

for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}


number.insertAdjacentHTML("afterbegin", numberElement.join(''));


for (let i = 1; i <= 60; i++) {
    secondElement.push(
        `<span style="--index:${i}"><p>${i}</p></span>`
    );
}

console.log(secondElement);
secondbar.insertAdjacentHTML("afterbegin", secondElement.join(''))

function currentTime() {
    let date=new Date()
    let gethour=date.getHours()
    let getminutes=date.getMinutes()
    let getsecond=date.getSeconds()

     //60minutes=360deg so 360/60=6
    handsec.style.transform=`rotate(${getsecond * 6}deg)`
    handmins.style.transform=`rotate(${getminutes * 6}deg)`
     handhour.style.transform=`rotate(${gethour * 30 + getminutes/2}deg)`
let sound=new Audio("./clock/clock.mp3")
sound.play()
}
currentTime()

setInterval(currentTime, 1000);