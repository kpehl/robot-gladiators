// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is less than or equal to zero

// Function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

// Fight or Skip Function
var fightOrSkip = function() {
    // Ask the player if they'd like to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Recursive conditional function call to enforce a valid entry (non empty, non null)
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // Valid player input is converted to lowercase
    promptFight = promptFight.toLowerCase();

    // If the player choses to skip, alert the player and subtract a fee
    if (promptFight === "skip") {

        // The player confirms that they want to skip the battle
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), then subtract a fee and leave the fight
        if (confirmSkip) {
            if (playerInfo.money >= 10) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from 'playerInfo.money' for skipping and open the shop
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                
                // return true from the function to confirm the decision to skip
                return true;
            }
            // If the player does not have enough money, alert and return false
            else {
                window.alert("You don't have enough money!")
                return false;
            }
        }
    }
    // default return of false, i.e. fight
    return false;
}

// Fight Function
var fight = function(enemy) {
        // Keep track of who will attack first.  Initialize with the player going first.
        var isPlayerTurn = true;
        // Randomize whether the player or the enemy robot will go first in the battle and set isPlayerTurn accordingly
        if (Math.random() > 0.5) {
            isPlayerTurn = false;
        }
        // console.log(enemy);

    // Repeat the fight() function as long as the enemy and player robot health values are greater than zero
    while(enemy.health > 0 && playerInfo.health > 0) {

        // console.log(isPlayerTurn);


        // Ask the player if they would like to skip the battle or fight
        if (fightOrSkip()) {
            // If true is returned, i.e. confirming skip, leave the fight by breaking the loop
            break;
        }

        // If the player goes first, this part of the if statement will execute
        if (isPlayerTurn) {
            // If the user does not choose to skip, the function proceeds
                // Subtract the value of a randomly generated damage value based on 'playerInfo.attack' from the value of 'enemy.health' 
                //and use that result to update the value in the 'enemy.health' object.
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);
                // console.log(
                //     playerInfo.name +
                //       " attacked " +
                //       enemy.name +
                //       ". " +
                //       enemy.name +
                //       " now has " +
                //       enemy.health +
                //       " health remaining."
                //   );

                // Check the enemy's health value.  If enemy health is less than or equal to zero, award player money for winning, print defeat 
                // message and break, otherwise print current heath value.
                if (enemy.health <=0) {
                    window.alert(enemy.name + " has died!");
                    playerInfo.money = playerInfo.money + 20;
                    break;
                }
                else {
                    window.alert(playerInfo.name + " attacks! " + enemy.name + " still has " + enemy.health + " health left.");
                }

                // Subtract the value of a randomly generated damage value based on 'enemy.attack' from the value of 'playerInfo.health' 
                //and use that result to update the value in the 'playerInfo.health' object.
                var damage = randomNumber(enemy.attack - 3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                // console.log(
                //     enemy.name +
                //     " attacked " +
                //     playerInfo.name +
                //     ". " +
                //     playerInfo.name +
                //     " now has " +
                //     playerInfo.health +
                //     " health remaining."
                // );

                // Check the player's health value, and if it is less than or equal to zero, break, otherwise print current health value.
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    break;
                }
                else {
                    window.alert(enemy.name + " attacks! " + playerInfo.name + " now has " + playerInfo.health + " health left.");
                }                
            }
        // If the enemy robot gets to go first, this will execute
        else {
            // Subtract the value of a randomly generated damage value based on 'enemy.attack' from the value of 'playerInfo.health' 
            //and use that result to update the value in the 'playerInfo.health' object.
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(
                enemy.name +
                  " attacked " +
                  playerInfo.name +
                  ". " +
                  playerInfo.name +
                  " now has " +
                  playerInfo.health +
                  " health remaining."
              );

            // Check the player's health value, and if it is less than or equal to zero, break, otherwise print current health value.
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(enemy.name + " attacks! " + playerInfo.name + " now has " + playerInfo.health + " health left.");
            }

            // Subtract the value of a randomly generated damage value based on 'playerInfo.attack' from the value of 'enemy.health' 
            //and use that result to update the value in the 'enemy.health' object.
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name +
                    " attacked " +
                    enemy.name +
                    ". " +
                    enemy.name +
                    " now has " +
                    enemy.health +
                    " health remaining."
                );

            // Check the enemy's health value.  If enemy health is less than or equal to zero, award player money for winning, print defeat 
            // message and break, otherwise print current heath value.
            if (enemy.health <=0) {
                window.alert(enemy.name + " has died!");
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert(playerInfo.name + " attacks! " + enemy.name + " still has " + enemy.health + " health left.");
            }
        }
        // Switch turn order for the next round
        isPlayerTurn = !isPlayerTurn;
    }
};

// Function to set player name
var getPlayerName = function() {
    // Initialize name as an empty string
    var name = "";

    // Loop with prompt to get a valid player name
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    return name;
};


// Player is prompted for their robot's name. Initial values set for the player's health and attack stats and their money.
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    }
};

// Initial values set for the enemy robot's stats
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// A function to start a new game
var startGame = function() {
    // Reset player stats
    playerInfo.reset();

    // A for loop to iterate through each of the robot combatants with the fight() function
    for(var i = 0; i < enemyInfo.length; i++) {

        // If the player robot is alive...
        if (playerInfo.health > 0) {

            // Alert the player that they are starting a round
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));

            // Semantic name given to enemy name variable instead of the array index
            var pickedEnemyObj = enemyInfo[i];

            // Reset the enemy health for each new enemy, using Math to generate a random starting health between 40 and 60
            pickedEnemyObj.health = randomNumber(40, 60);

            // Reset the enemy attack to be a random number between 10 and 14
            // pickedEnemyObj.attack = randomNumber(10, 14);

            // Run the fight function
            fight(pickedEnemyObj);

            // If the player is still alive and has not reached the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if the player wants to use the shop before the next round
                var storeConfirm = window.confirm("The fight is over.  Visit the store before the next round?");
                // if yes, take them to the shop
                if (storeConfirm) {
                    shop();
                }
            }
        }

        // If, however, the player's robot has been defeated

        else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }
    }

    // After the loop ends, the player is either out of health or has defeated all the enemies, so endGame() is called
    endGame();
};

// A function to end the game
var endGame = function() {
    // If the player's robot is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    // If the player's robot has died, game is over
    else {
        window.alert("You've lost your robot in battle.");
    }

    // Ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game if player selects OK
        startGame();
    }
    // print goodbye message if player does not select OK
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

// A function for a shop where the player can refill health or increase attack stat for a fee in-between rounds
var shop = function() {
    // Ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );

    // Convert the input from a string to an integer
    shopOptionPrompt = parseInt(shopOptionPrompt);

    // A switch will carry out the action.  Integer values are used to select the desired option.
    switch (shopOptionPrompt) {
        // REFILL health
        case 1:
            playerInfo.refillHealth();
            break;
        // UPGRADE attack
        case 2:
            playerInfo.upgradeAttack();
            break;
        // LEAVE
        case 3:
            window.alert("Leaving the store");
            // Exit the function
            break;
        // Invalid entry
        default:
            window.alert("You did not pick a valid option. Try again.");
            // Call shop() again to give the player another chance to pick a valid option
            shop();
            break;
    }
};

// Start the game when the page loads
startGame();