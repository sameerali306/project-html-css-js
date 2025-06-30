const toastbox=document.getElementById("toastbox")
let successmsg='<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errormsg='<i class="fa-solid fa-circle-xmark"></i>Please Fixed The Error!'
let Invalidmsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid Input Please check again'

function showToast(msg) {
   let toast =document.createElement('div')
    toast.classList.add("toast")
    toast.innerHTML=msg
    toastbox.appendChild(toast)
    if (msg.includes("Error")) {
        toast.classList.add("error")
    }
     if (msg.includes("Invalid")) {
        toast.classList.add("invalid")
    }

    setTimeout(() => {
        toast.remove()
    }, 6000);
    
}