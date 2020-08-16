// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is less than or equal to zero



// User prompt for robot's name
var playerName = window.prompt("What is your robot's name?");

// Initial values for the player's health and attack stats and their money
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Initial values for the enemy robot's stats
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
}

// Fight Function
var fight = function(enemyName) {
    // Repeat the fight() function as long as the enemy and player robot health values are greater than zero
        while(enemyHealth > 0 && playerHealth > 0) {

        // Ask the player if they would like to fight or skip the battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // Log the resulting input to the console.
        console.log(promptFight);

        // If the player choses to skip, alert the player and subtract a fee
        if (promptFight === "skip" || promptFight === "SKIP") {

            // The player confirms that they want to skip the battle
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), then subtract a fee and leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from 'playerMoney' for skipping and break from the fight
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // If the user does not choose to skip, the function proceeds
            // Subtract the value of a randomly generated damage value based on 'playerAttack' from the value of 'enemyHealth' 
            //and use that result to update the value in the 'enemyHealth' variable.
            var damage = randomNumber(playerAttack - 3, playerAttack);
            console.log(damage);
            enemyHealth = Math.max(0, enemyHealth - damage);

            // Log a resulting message to the console to verify that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // Check the enemy's health value.  If enemy health is less than or equal to zero, award player money for winning, print defeat 
            // message and break, otherwise print current heath value.
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                console.log("playerMoney", playerMoney);
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // Subtract the value of a randomly generated damage value based on 'enemyAttack' from the value of 'playerHealth' 
            //and use that result to update the value in the 'playerHealth' variable.
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            console.log(damage);
            playerHealth = Math.max(0, playerHealth - damage);

            // Log a resulting message to the console to verify that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // Check the player's health value, and if it is less than or equal to zero, break, otherwise print current health value.
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " now has " + playerHealth + " health left.");
            }
    }
};

// A function to start a new game
var startGame = function() {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // A for loop to iterate through each of the robot combatants with the fight() function
    for(var i = 0; i < enemyNames.length; i++) {

        // If the player robot is alive...
        if (playerHealth > 0) {

            // Alert the player that they are starting a round
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));

            // Semantic name given to enemy name variable instead of the array index
            var pickedEnemyName = enemyNames[i];

            // Reset the enemy health for each new enemy, using Math to generate a random starting health between 40 and 60
            enemyHealth = randomNumber(40, 60);

            console.log(enemyHealth);

            // Run the fight function
            fight(pickedEnemyName);

            // If the player is still alive and has not reached the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
    // print goodbye message if play does not select OK
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

// A function for a shop where the player can refill health or increase attack stat for a fee in-between rounds
var shop = function() {
    // Ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // A switch will carry out the action.  Fall-through is used to account for variation in player input.
    switch (shopOptionPrompt) {
        // REFILL health
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling a player's health by 20 for 7 dollars.");
                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;             
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        // UPGRADE attack
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // Increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!")
            }
            break;
        // LEAVE
        case "LEAVE":
        case "leave":
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