const red = document.getElementById("red")
const blue = document.getElementById("blue")
const brown = document.getElementById("brown")
const yellow = document.getElementById("yellow")

document.body.style.background = "orange"
 red.style.backgroundColor="red"
function Red() {
    const currentBg = getComputedStyle(document.body).backgroundColor;

    document.body.style.background = "red";

    if (currentBg === "rgb(255, 0, 0)") {
        red.style.backgroundColor = "white";
    } else {
        red.style.backgroundColor = "red";
    }
}

function Blue() {
    document.body.style.background = "blue"
}
function Yellow() {
    document.body.style.background = "yellow"
}
function Brown() {
    document.body.style.background = "brown"
}