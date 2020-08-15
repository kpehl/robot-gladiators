// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



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
    // Alert the player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Ask the player if they would like to fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Log the resulting input to the console.
    console.log(promptFight);

    // If the player chooses to fight, then go through the fight round commands
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console to verify that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
         );

        // Check the enemy's health value
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console to verify that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        // Check the player's health value
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " now has " + playerHealth + " health left.");
        }
    
    // If the player choses to skip, alert the user and subtract a fee
    } else if (promptFight === "skip" || promptFight === "SKIP") {

        // The player confirms that they want to skip the battle
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // If yes (true), subtract a fee and leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from 'playerMoney' for skipping
            playerMoney = playerMoney - 2;
        }
        // If no (false), ask question again by running fight() again
        else {
            fight();
        }
    // If the player enters invalid text, they are notified to try again.
    } else {
        window.alert("You need to pick a valid option. Try again!")
    }

};

// A for loop is set up to iterate through each of the robot combatants with the fight() function
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
