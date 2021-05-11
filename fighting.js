let playerHp = 100;
let pcHp = 100;
let damage = 0;
let result = 0;

function choosePlayer() {
    document.querySelector('.espeon').addEventListener("click", function() {
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src", "196.png");
    });

    document.querySelector('.flareon').addEventListener("click", function() {
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src", "flareon.jpg");
    });

    document.querySelector('.vaporeon').addEventListener("click", function() {
        document.querySelector(".choose-player").style.display = "none";
        document.querySelector(".battle-arena").style.display = "flex";
        document.querySelector(".friendly-animal").setAttribute("src", "134.png");
    });

}

function attackChoise() {
    return Math.floor(Math.random() * 2);
}

function roll() {
    let sum = Math.floor(Math.random() * 6) + 1;
    return sum * 10;
}



function enemyHealHealthDisplay(number) {
    let placeholder = document.querySelector('.enemy-health');
    pcHp = pcHp + number;
    placeholder.innerHTML = pcHp;
}

function playerAttackHealthDisplay(number) {
    let placeholder = document.querySelector('.enemy-health');
    pcHp = pcHp - number;
    placeholder.innerHTML = pcHp;
}

function enemyAttackHealthDisplay(number) {
    let placeholder = document.querySelector('.player-health');
    playerHp = playerHp - number;
    placeholder.innerHTML = playerHp;
}

function playerHealHealthDisplay(number) {
    let placeholder = document.querySelector('.player-health');
    playerHp = playerHp + number;
    placeholder.innerHTML = playerHp;
}

document.querySelector('.attack').onclick = function() {
    damage = roll();
    playerAttackHealthDisplay(damage);
    result = attackChoise();
    if (result === 0) {
        damage = roll();
        enemyAttackHealthDisplay(damage);
    } else {
        damage = roll();
        enemyHealHealthDisplay(damage);
    }
    checkWinEnemy();
    checkWinPlayer();
}

document.querySelector('.heal').onclick = function() {
    damage = roll();
    playerHealHealthDisplay(damage);
    result = attackChoise();
    if (result === 0) {
        damage = roll();
        enemyAttackHealthDisplay(damage);
    } else {
        damage = roll();
        enemyHealHealthDisplay(damage);
    }
    checkWinEnemy();
    checkWinPlayer();
}

function checkWinEnemy() {
    if (playerHp < 1) {
        document.querySelector('.winner').innerHTML = "Enemy Won";
        document.querySelector(".battle-arena").style.display = "none";
        document.querySelector(".result").style.display = "flex";
    }
}

function checkWinPlayer() {
    if (pcHp < 1) {
        document.querySelector('.winner').innerHTML = "Player Won";
        document.querySelector(".battle-arena").style.display = "none";
        document.querySelector(".result").style.display = "flex";
    }
}

function resetGame() {
    document.querySelector('.resetButton').addEventListener("click", function() {
        playerHp = 100;
        pcHp = 100;
        let placeholder = document.querySelector('.player-health');
        placeholder.innerHTML = playerHp;
        placeholder = document.querySelector('.enemy-health');
        placeholder.innerHTML = pcHp;
        document.querySelector(".battle-arena").style.display = "none";
        document.querySelector(".result").style.display = "none";
        document.querySelector(".choose-player").style.display = "flex";


    });
}


choosePlayer();
resetGame();
