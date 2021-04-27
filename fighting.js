let playerHp = 100;
let pcHp = 100;

function choosePlayer() {
    document.querySelector('.espeon').addEventListener("click", function() {
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src", "196.png"); 
       } );

    document.querySelector('.flareon').addEventListener("click", function() {
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src","flareon.jpg");   
       } );

    document.querySelector('.vaporeon').addEventListener("click", function() {
        console.log("Changed!");
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src", "134.png");
       } );
    
    }

    choosePlayer();