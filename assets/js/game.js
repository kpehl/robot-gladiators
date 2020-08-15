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

// Fight Function
var fight = function(enemyName) {
    // Repeat the fight() function as long as the enemy and player robot health values are greater than zero
        while(enemyHealth > 0 && playerHealth > 0) {

        // Ask the player if they would like to fight or skip the battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // Log the resulting input to the console.
        console.log(promptFight);

        // If the player choses to skip, alert the user and subtract a fee
        if (promptFight === "skip" || promptFight === "SKIP") {

            // The player confirms that they want to skip the battle
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), subtract a fee and leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from 'playerMoney' for skipping and break from the fight
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // If the user does not choose to skip, the function proceeds
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
            enemyHealth = enemyHealth - playerAttack;

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

            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;

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

// A for loop is set up to iterate through each of the robot combatants with the fight() function
for(var i = 0; i < enemyNames.length; i++) {

    // If the player robot is alive...
    if (playerHealth > 0) {

        // Alert the player that they are starting a round
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));

        // Semantic name given to enemy name variable instead of the array index
        var pickedEnemyName = enemyNames[i];

        // Reset the enemy health for each new enemy
        enemyHealth = 50;

        // Run the fight function
        fight(pickedEnemyName);
    }

    // If, however, the player's robot has been defeated

    else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }
}
