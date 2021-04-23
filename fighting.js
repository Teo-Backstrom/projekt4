let player = 0;
let playerHp = 100;
let pcHp = 100;

function choosePlayer() {
    document.querySelector('.espeon').addEventListener("click", function() {
        player = 1;
        console.log(player);
        document.querySelector(".choose-player").style.display = "none";
       } );

    document.querySelector('.flareon').addEventListener("click", function() {
        player = 2;
        console.log(player);
        document.querySelector(".choose-player").style.display = "none";
       } );

    document.querySelector('.vaporeon').addEventListener("click", function() {
        player = 3;
        console.log(player);
        document.querySelector(".choose-player").style.display = "none";
       } );
    
    }


    choosePlayer();