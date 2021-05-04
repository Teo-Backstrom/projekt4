let playerHp = 100;
let pcHp = 100;
let damage = 0;
let result = 0;

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

    function attackChoise() {
        return Math.floor(Math.random() * 2) ;
    }

    function roll() {
        let sum = Math.floor(Math.random() * 6) + 1;
        return sum * 10;
    }

    function playerAttackHealthDisplay(number) {
        let placeholder = document.querySelector('.enemy-health');
        pcHp = pcHp - number;
        placeholder.innerHTML = pcHp;
      }

      function enemyHealHealthDisplay(number) {
      let placeholder = document.querySelector('.enemy-health');
      pcHp = pcHp + number;
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
           console.log(result); 
        if (result === 0) {
            damage = roll();
            enemyAttackHealthDisplay(damage);
        } else{
            damage = roll();
            enemyHealHealthDisplay(damage);
        }
        
      }

      document.querySelector('.heal').onclick = function() {
          console.log("1");
        damage = roll();
        console.log("2");
        playerHealHealthDisplay(damage);
        console.log("3");

        result = attackChoise();
        if (result === 0) {
            damage = roll();
            enemyAttackHealthDisplay(damage);
        } else{
            damage = roll();
            enemyHealHealthDisplay(damage);
        }
        
      }


    choosePlayer();

    function playerAttackHealthDisplay(number) {
        pcHp = document.querySelector('.enemy-health');
        pcHp.innerHTML = pcHp - number;
      }