// Fix size of screen
setInterval(() => {
    if (window.innerWidth <= 350 || window.innerHeight <= 450) {
        document.body.style.display = "none";
    }
    if (window.innerWidth >= 767 || window.innerHeight >= 860) {
        document.body.style.display = "none";
    }
}, 100);

//Loading
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "inline-block";
}, 2000)

//box color change thime
let time = 1000;
setInterval(() => {
    time = time - 20;
}, 5000)
let b = document.querySelectorAll("#Mout div");
setInterval(() => {
    b.forEach((div) => {
        div.style.backgroundColor = "red";
    })
    let r = Math.floor(Math.random() * 9 + 1);
    let box = document.getElementById(`b${r}`);
    box.style.backgroundColor = "orange";
}, time)

//add scr in game over
let n = document.getElementById("n");
let scr = 0
let gameover = document.getElementById("gameoverbox");
b.forEach((div) => {
    div.addEventListener("click", () => {
        if (div.style.backgroundColor == "red") {
            gameover.style.display = "inline-block";
            document.getElementById("main").style.display = "none";
        } else if (div.style.backgroundColor == "orange") {
            scr = scr + 1;
            n.innerText = scr;
        }
    })
})
//reset button
document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("main").style.display = "inline-block";
    scr = 0;
    n.innerText = scr;
    gameover.style.display = "none";
})