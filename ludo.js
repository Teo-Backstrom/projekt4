let Red1 = 0;
let Red2 = 0;
let Red3 = 0;
let Red4 = 0;
let Green1 = 0;
let Green2 = 0;
let Green3 = 0;
let Green4 = 0;
let Blue1 = 0;
let Blue2 = 0;
let Blue3 = 0;
let Blue4 = 0;
let Yellow1 = 0;
let Yellow2 = 0;
let Yellow3 = 0;
let Yellow4 = 0;
  

//För bestämda vägar för x och Y led i arrayer
let green1XPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green1YPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green2XPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green2YPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green3XPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green3YPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let green4XPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let green4YPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red1XPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red1YPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red2XPosMoment = [3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red2YPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red3XPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red3YPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let red4XPosMoment = [4,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,4,5,6,7];
let red4YPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue1XPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue1YPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue2XPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue2YPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue3XPosMoment = [3,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue3YPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let blue4XPosMoment = [4,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,8,8,8,8];
let blue4YPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow1XPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow1YPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow2XPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow2YPosMoment = [12,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow3XPosMoment = [12,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow3YPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];
let yellow4XPosMoment = [13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,9,9,9,9,9,10,11,12,13,13,12,11,10,9];
let yellow4YPosMoment = [13,9,9,9,9,9,10,11,12,13,13,13,12,11,10,9,9,9,9,9,8,7,7,7,7,7,6,5,4,3,3,3,4,5,6,7,7,7,7,7,8,8,8,8,8];


function generalPos(className, player){
    document.querySelector(className).style.gridColumn = red1XPosMoment[player];
    document.querySelector(className).style.gridRow = red1YPosMoment[player];   
}

//För att kunna koppla samman arrayen och flytta spelarna i gridden
function r1Pos(R1) {
    document.querySelector(".R-player1").style.gridColumn = red1XPosMoment[R1];   
    document.querySelector(".R-player1").style.gridRow = red1YPosMoment[R1];   
}
function r2Pos(R2) {
    document.querySelector(".R-player2").style.gridColumn = red2XPosMoment[R2];   
    document.querySelector(".R-player2").style.gridRow = red2YPosMoment[R2];   
}
function r3Pos(R3) {
document.querySelector(".R-player3").style.gridColumn = red3XPosMoment[R3];   
document.querySelector(".R-player3").style.gridRow = red3YPosMoment[R3];   
}
function r4Pos(R4) {
document.querySelector(".R-player4").style.gridColumn = red4XPosMoment[R4];   
document.querySelector(".R-player4").style.gridRow = red4YPosMoment[R4];   
}


function g1Pos(G1) {
document.querySelector(".G-player1").style.gridColumn = green1XPosMoment[G1];   
document.querySelector(".G-player1").style.gridRow = green1YPosMoment[G1];   
}
function g2Pos(G2) {
document.querySelector(".G-player2").style.gridColumn = green2XPosMoment[G2];   
document.querySelector(".G-player2").style.gridRow = green2YPosMoment[G2];   
}
function g3Pos(G3) {
document.querySelector(".G-player3").style.gridColumn = green3XPosMoment[G3];   
document.querySelector(".G-player3").style.gridRow = green3YPosMoment[G3];   
}
function g4Pos(G4) {
document.querySelector(".G-player4").style.gridColumn = green4XPosMoment[G4];   
document.querySelector(".G-player4").style.gridRow = green4YPosMoment[G4];   
}

function b1Pos(B1) {
document.querySelector(".B-player1").style.gridColumn = blue1XPosMoment[B1];   
document.querySelector(".B-player1").style.gridRow = blue1YPosMoment[B1];   
}
function b2Pos(B2) {
document.querySelector(".B-player2").style.gridColumn = blue2XPosMoment[B2];   
document.querySelector(".B-player2").style.gridRow = blue2YPosMoment[B2];   
}
function b3Pos(B3) {
document.querySelector(".B-player3").style.gridColumn = blue3XPosMoment[B3];   
document.querySelector(".B-player3").style.gridRow = blue3YPosMoment[B3];   
}
function b4Pos(B4) {
document.querySelector(".B-player4").style.gridColumn = blue4XPosMoment[B4];   
document.querySelector(".B-player4").style.gridRow = blue4YPosMoment[B4];   
}

function y1Pos(Y1) {
document.querySelector(".Y-player1").style.gridColumn = yellow1XPosMoment[Y1];   
document.querySelector(".Y-player1").style.gridRow = yellow1YPosMoment[Y1];   
}
function y2Pos(Y2) {
document.querySelector(".Y-player2").style.gridColumn = yellow2XPosMoment[Y2];   
document.querySelector(".Y-player2").style.gridRow = yellow2YPosMoment[Y2];   
}
function y3Pos(Y3) {
    document.querySelector(".Y-player3").style.gridColumn = yellow3XPosMoment[Y3];   
    document.querySelector(".Y-player3").style.gridRow = yellow3YPosMoment[Y3];   
}
function y4Pos(Y4) {
    document.querySelector(".Y-player4").style.gridColumn = yellow4XPosMoment[Y4];   
    document.querySelector(".Y-player4").style.gridRow = yellow4YPosMoment[Y4];   
}



//För att lägga till värdet på tärningen till hur många fler steg spelaren ska ta
function movePice(steg) {

    switch (val) {
        case 1:
            Red1 += steg;
            break;

        case 2:
            Red2 += steg;
            break;

        case 3:
            Red3 += steg;
            break;

        case 4:
            Red4 += steg;
            break;
        
        case 5:
            Green1 += steg;
            break;

        case 6:
            Green2 += steg;
            break;

        case 7:
            Green3 += steg;
            break;

        case 8:
            Green4 += steg;
            break;

        case 9:
            Blue1 += steg;
            break;

        case 10:
            Blue2 += steg;
            break;

        case 11:
            Blue3 += steg;
            break;
        
        case 12:
            Blue4 += steg;
            break;

        case 13:
            Yellow1 += steg; 
            break;

        case 14:
            Yellow2 += steg;
            break;

        case 15:
            Yellow3 += steg;
            break;
        
        case 16:
            Yellow4 += steg;
            break;
        
        default:
            break;
    } 
    
}

//uppdatera grafiskt spelarens position
function upDatePos() {
    r1Pos(Red1);
    r2Pos(Red2);
    r3Pos(Red3);
    r4Pos(Red4);
    g1Pos(Green1);
    g2Pos(Green2);
    g3Pos(Green3);
    g4Pos(Green4);
    b1Pos(Blue1);
    b2Pos(Blue2);
    b3Pos(Blue3);
    b4Pos(Blue4);
    y1Pos(Yellow1);
    y2Pos(Yellow2);
    y3Pos(Yellow3);
    y4Pos(Yellow4);
}


/*function checkWinForPlayer(player){
    if (player.pos >= 45 && player.pos >= 45 && player.pos >= 45 && player.pos >= 45) {
        console.log("player " + player.name);
        document.querySelector('.winner').innerHTML = player.name + " laget vann";
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
    }
}*/

//ha koll ifall alla i laget gått i mål
function checkWinRed() {
    if (Red1 >= 45 && Red2 >= 45 && Red3 >= 45 && Red4 >= 45) {
        console.log("redPlayerWin");
        document.querySelector('.winner').innerHTML = "Röda laget vann";
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
    }
}

function checkWinGreen() {
    if (Green1 >= 45 && Green2 >= 45 && Green3 >= 45 && Green4 >= 45) {
        console.log("greenPlayerWin");
        document.querySelector('.winner').innerHTML = "Gröna laget vann";
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
    }
}

function checkWinBlue() {
    if (Blue1 >= 45 && Blue2 >= 45 && Blue3 >= 45 && Blue4 >= 45) {
        console.log("BluePlayerWin");
        document.querySelector('.winner').innerHTML = "Blåa laget vann";
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
    }
}

function checkWinYellow() {
    if (Yellow1 >= 45 && Yellow2 >= 45 && Yellow3 >= 45 && Yellow4 >= 45) {
        console.log("YellowPlayerWin");
        document.querySelector('.winner').innerHTML = "Gula laget vann";
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
    }
}

//för att göra spelarna synliga igen när man restartar
function makePlayerVisable() {

        for (let i = 1; i<5; i++){
            document.querySelector(".R-player"+i).style.display = "flex";
        }
        for (let i = 1; i<5; i++){
            document.querySelector(".B-player"+i).style.display = "flex";
        }
        for (let i = 1; i<5; i++){
            document.querySelector(".G-player"+i).style.display = "flex";
        }
        for (let i = 1; i<5; i++){
            document.querySelector(".Y-player"+i).style.display = "flex";
        }
}

//restarta gamet till startvärderna 
function resetGame() {
    document.querySelector('.resetButton').addEventListener("click", function() {
        Red1 = 0;
        Red2 = 0;
        Red3 = 0;
        Red4 = 0;
        Green1 = 0;
        Green2 = 0;
        Green3 = 0;
        Green4 = 0;
        Blue1 = 0;
        Blue2 = 0;
        Blue3 = 0;
        Blue4 = 0;
        Yellow1 = 0;
        Yellow2 = 0;
        Yellow3 = 0;
        Yellow4 = 0;
        result = null;
        printNumber(result);
        document.querySelector(".spel-plan").classList.toggle("invisible");
        document.querySelector(".result").classList.toggle("invisible");
        makePlayerVisable();
        upDatePos();
    });
}

//Väljer vilken spelare som ska röra sig genom ett tryck på en knapp och updatera positon och kolla om alla i laget gått i mål eller om bara den gått i mål
function playerChoise() {
            
            document.querySelector('.red1Button').addEventListener("click", function() {
                val = 1;
                movePice(result);
                upDatePos();
                checkWinRed();
                if (Red1 > 44) {
                    document.querySelector(".R-player1").style.display = "none";
                }
               } );
               document.querySelector('.red2Button').addEventListener("click", function() {
                val = 2;
                movePice(result);
                upDatePos();
                checkWinRed();
                if (Red2 > 44) {
                    document.querySelector(".R-player2").style.display = "none";   
                }
               } );
               document.querySelector('.red3Button').addEventListener("click", function() {
                val = 3;
                movePice(result);
                upDatePos();
                checkWinRed();
                if (Red3 > 44) {
                    document.querySelector(".R-player3").style.display = "none";   
                }
               } );
               document.querySelector('.red4Button').addEventListener("click", function() {
                val = 4;
                movePice(result);
                upDatePos();
                checkWinRed();
                if (Red4 > 44) {
                    document.querySelector(".R-player4").style.display = "none";   
                }
               } );
                document.querySelector('.green1Button').addEventListener("click", function() {
                    val = 5;
                    movePice(result);
                    upDatePos();
                    checkWinGreen();
                    if (Green1 > 44) {
                        document.querySelector(".G-player1").style.display = "none";   
                    }
                   } );
                   document.querySelector('.green2Button').addEventListener("click", function() {
                    val = 6;
                    movePice(result);
                    upDatePos();
                    checkWinGreen();
                    if (Green2 > 44) {
                        document.querySelector(".G-player2").style.display = "none";   
                    }
                   } );
                   document.querySelector('.green3Button').addEventListener("click", function() {
                    val = 7;
                    movePice(result);
                    upDatePos();
                    checkWinGreen();
                    if (Green3 > 44) {
                        document.querySelector(".G-player3").style.display = "none";   
                    }
                   } );
                   document.querySelector('.green4Button').addEventListener("click", function() {
                    val = 8;
                    movePice(result);
                    upDatePos();
                    checkWinGreen();
                    if (Green4 > 44) {
                        document.querySelector(".G-player4").style.display = "none";   
                    }
                   } );

                document.querySelector('.blue1Button').addEventListener("click", function() {
                    val = 9;
                    movePice(result);
                    upDatePos();
                    checkWinBlue();
                    if (Blue1 > 44) {
                        document.querySelector(".B-player1").style.display = "none";   
                    }
                   } );
                   document.querySelector('.blue2Button').addEventListener("click", function() {
                    val = 10;
                    movePice(result);
                    upDatePos();
                    checkWinBlue();
                    if (Blue2 > 44) {
                        document.querySelector(".B-player2").style.display = "none";   
                    }
                   } );
                   document.querySelector('.blue3Button').addEventListener("click", function() {
                    val = 11;
                    movePice(result);
                    upDatePos();
                    checkWinBlue();
                    if (Blue3 > 44) {
                        document.querySelector(".B-player3").style.display = "none";   
                    }
                   } );
                   document.querySelector('.blue4Button').addEventListener("click", function() {
                    val = 12;
                    movePice(result);
                    upDatePos();
                    checkWinBlue();
                    if (Blue4 > 44) {
                        document.querySelector(".B-player4").style.display = "none";  
                    }
                   } );

                document.querySelector('.yellow1Button').addEventListener("click", function() {
                    val = 13;
                    movePice(result);
                    upDatePos();
                    checkWinYellow();
                    if (Yellow1 > 44) {
                        document.querySelector(".Y-player1").style.display = "none";   
                    }
                   } );
                   document.querySelector('.yellow2Button').addEventListener("click", function() {
                    val = 14;
                    movePice(result);
                    upDatePos();
                    checkWinYellow();
                    if (Yellow2 > 44) {
                        document.querySelector(".Y-player2").style.display = "none";   
                    }
                   } );
                   document.querySelector('.yellow3Button').addEventListener("click", function() {
                    val = 15;
                    movePice(result);
                    upDatePos();
                    checkWinYellow();
                    if (Yellow3 > 44) {
                        document.querySelector(".Y-player3").style.display = "none";   
                    }
                   } );
                   document.querySelector('.yellow4Button').addEventListener("click", function() {
                    val = 16;
                    movePice(result);
                    upDatePos();
                    checkWinYellow();
                    if (Yellow4 > 44) {
                        document.querySelector(".Y-player4").style.display = "none";   
                    }
                   } );

}

//tärning som sen visar vad den fick för värde
function roll() {
    return Math.floor(Math.random() * 6) + 1;
}
  function printNumber(number) {
    let placeholder = document.querySelector('.placeholder');
    placeholder.innerHTML = number;
  }
  
  let result = 0;
  document.querySelector('.dice').onclick = function() {
    result = roll();
    printNumber(result);
    console.log(currentPlayer);
    
  }
  //kör funktionerna för att spelet ska funka
playerChoise();
resetGame();
