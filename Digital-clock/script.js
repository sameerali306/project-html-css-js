let showDate=document.getElementById("showDate")
let hour=document.getElementById("hour")
let minutes=document.getElementById("minutes")
let second=document.getElementById("second")

setInterval(() => {
    let getMonth=[
    "january","febuary","march","April","May","June","July","August","september","october","November","December"
]

let date=new Date() //this will create a date object so we get its property

let displayDate=date.getDate()+" "+ getMonth[date.getMonth()]+ " "+date.getFullYear()

showDate.innerHTML=displayDate

let Hrs=date.getHours()
let mins=date.getMinutes()
let sec=date.getSeconds()

Hrs=(Hrs<10 ? "0":"") + Hrs
mins=(mins<10 ? "0":"") + mins
sec=(sec<10 ? "0":"") + sec
hour.innerHTML=Hrs
minutes.innerHTML=mins
second.innerHTML=sec
}, 1000);