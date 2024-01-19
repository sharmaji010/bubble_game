var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble() {
    var clutter = ""

    for (var i = 1; i <= 178; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panbottom").innerHTML = clutter;
}
function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timely").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#panbottom").innerHTML = `<h1>GAME OVER</h1>`;
        } 
    }, 1000);
}

function hitter(){ 
   hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

document.querySelector("#panbottom").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        hitter();
    }
})

runTimer();
makeBubble();
hitter();

