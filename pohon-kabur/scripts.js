// backsound using mousdown html
// var jumping = new Audio();
// jumping.src = "assets/jump.wav";

// var run = new Audio();
// run.src = "assets/run.wav";

// variabel untuk DOM selector

let game = document.querySelector("#game");
let cloud = document.querySelector("#cloud");
let road = document.querySelector("#road");

let tree = document.querySelector("#tree");
let enemy = document.querySelector("#enemy");

let score = document.querySelector("#score");

let instruction = document.querySelector("#instruction");
let gameOver = document.querySelector("#gameOver");

let starting = document.querySelector("#starting");
let upup = document.querySelector("#upup");
let crashing = document.querySelector("#crashing");


//deklarasi variabel score
let interval = null;
let playerScore = 0;


//DOM nilai score
let scoreCounter = () => {
    score.innerHTML = `My Score : <b>${playerScore}</b>`;
    if (enemy.classList == "enemyActive") {
        playerScore = playerScore+1;
    } else if(enemy.classList != "enemyActive"){
        playerScore = 0;
    } 
    else{
        playerScore = 0;
    }
};

instruction.style.display = "block";


//Game start 
window.addEventListener("keydown", (start) => {

    if (start.code == "Space") {

        starting.play();

        gameOver.style.display = "none";

        instruction.style.display = "none";

        enemy.classList.add("enemyActive");
        
        cloud.firstElementChild.style.animation = "cloudAnimate 80s linear infinite";
        
        road.firstElementChild.style.animation = "roadAnimate 2s linear infinite";
        
        interval = setInterval(scoreCounter, 200);
        
    }
});

// click event
document.getElementById('start').onclick = function() {

    starting.play();

    gameOver.style.display = "none";

    instruction.style.display = "none";

    enemy.classList.add("enemyActive");
    
    cloud.firstElementChild.style.animation = "cloudAnimate 80s linear infinite";
    
    road.firstElementChild.style.animation = "roadAnimate 2s linear infinite";
    
    interval = setInterval(scoreCounter, 200);
}


//Melompat
window.addEventListener("keydown", (x) => {

    if (x.key == "ArrowUp"){

        upup.play();
           
            if (tree.classList != "treeActive") {
    
                tree.classList.add("treeActive");
    
                //menghapus class setelah 500 mili second
                setTimeout(() => {
                    tree.classList.remove("treeActive");
                }, 500);
            }
    }

});

// click event
document.getElementById('up').onclick = function() {

    upup.play();

    if (tree.classList != "treeActive") {
        tree.classList.add("treeActive");

        //menghapus class setelah 500 mili second
        setTimeout(() => {
            tree.classList.remove("treeActive");
        }, 500);
    }
}


//Tabrakan
let result = setInterval(() => {

    let treeBottom = parseInt(getComputedStyle(tree).getPropertyValue("bottom"));

    let enemyLeft = parseInt(getComputedStyle(enemy).getPropertyValue("left"));

    if (treeBottom <= 90 && enemyLeft >= 20 && enemyLeft <= 145) {

        gameOver.style.display = "block";
        crashing.play();
        
        cloud.firstElementChild.style.animation = "none";
        road.firstElementChild.style.animation = "none";

        enemy.classList.remove("enemyActive");
                
        clearInterval(interval);
        
        score.innerHTML = `My Score :  <b>${playerScore}</b>`
        playerScore = 0;
    }

}, 100);


