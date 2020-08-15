// User prompt for robot's name
var playerName = window.prompt("What is your robot's name?");

// Initial values for the player's health and attack stats
var playerHealth = 100;
var playerAttack = 10;


// Write the variables to the console log
console.log(playerName, playerAttack, playerHealth);

// Initial values for the enemy robot's stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Fight Function
var fight = function() {
    // Alert the player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

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

};

fight();
