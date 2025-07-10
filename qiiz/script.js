let data=[
  {
    Q: "Q:JS is used for?",
    a:"FrontEnd",
    b:"Animations",
    c:"Dynamic Update content",
    d:"BackEnd",
    ans:"ans3",
  },
    {
    Q: "Q:FullForm of JS?",
    a:"JavaScript",
    b:"Java",
    c:"JavaScience",
    d:"JavaSecure",
    ans:"ans1",
  },
    {
    Q: "Q:Who Develop JS?",
    a:"santa",
    b:"Brenden Eich",
    c:"George",
    d:"Neck",
    ans:"ans2",
  },
  {
    Q: "Q:When JS Develop?",
    a:"1995",
    b:"1990",
    c:"1999",
    d:"1892",
    ans:"ans1",
  }
]

let qestion=document.getElementById("qns")
let option1=document.getElementById("opt1")
let option2=document.getElementById("opt2")
let option3=document.getElementById("opt3")
let option4=document.getElementById("opt4")
let myscore=document.querySelector(".score")

function checkAns() {
  let ans=null
  
  answere.forEach((curElement)=>{
    if (curElement.checked) {
      ans=curElement.id
      console.log(ans);
      
      
    }
  })
  return ans
  
}

function disSelect() {
  answere.forEach((curElement)=>{
    curElement.checked=false
  })
  
}

let answere = document.querySelectorAll("input[name='option']")
let btnnext=document.querySelector(".next")


let num=0
let score=0

qestion.innerHTML=data[num].Q
option1.innerHTML=data[num].a
option2.innerHTML=data[num].b
option3.innerHTML=data[num].c
option4.innerHTML=data[num].d

function next() {
  let userAns=checkAns()

  if (userAns===data[num].ans) {
    score++
  }
  num++
  disSelect()

  if (num <data.length) {
  qestion.innerHTML=data[num].Q
option1.innerHTML=data[num].a
option2.innerHTML=data[num].b
option3.innerHTML=data[num].c
option4.innerHTML=data[num].d
}else{
  myscore.innerHTML=`You score ${score}/${data.length} <br/><br/>
  <button onclick="location.reload()">Play Again</button>`
  btnnext.style.display="none"
}}