const container=document.getElementById("container")
const btn=document.querySelectorAll(".btn")
const number=[7,8,9,"%",4,5,6,"*",1,2,3,"-",0,".","+","="]
number.map(function (items,index) {
    console.log(items);
    btn[index].textContent=items
    
   btn[index].addEventListener("click" , function () {
    if (items==="=") {
        try {
            display.value=eval(display.value)
        } catch  {
            display.value="Error"
            
        }
        }else{
            display.value +=items
        
    }
   })
    
})