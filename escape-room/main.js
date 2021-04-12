const readline = require("readline-sync");
var userName = readline.question("What is your name? ");

var player = {
    name : userName,
    obtainKey : false,
    isAlive : true
}

function youDied(){
    console.log("You are now very dead.")
    player.isAlive = false
}

function hasKey(){
    var readlineSync = require("readline-sync");
    if (readlineSync.keyInYN("Open the door using the key? ")) {
        console.log("You open the door and escape.")
    }
    else {
        console.log("You really should have used the key, bro.")
        youDied()
    }
    process.exit();
}

console.log("You awaken in a cold, dark cell, "+userName+". There is a single door leading out of the cell, and a hole in the wall nearby.");

    while(player.isAlive) {
        const index = readline.question("What will you do? [O]pen the Door, [R]each into the wall, or [S]earch for the key? ", {limit: ["O", "o", "R", "r", "S", "s" ]});
        if(index === "O" || index === "o"){
            console.log("The door is locked.");
        }   
        else if (index === "R" || index === "r"){
            console.log("Some fanged creature bites you.");
            youDied();
        }   
        else if (index === "S" || index === "s"){
            console.log("You find the key under some rubble.");
            hasKey();
        }
    }

    //Can't get boolean to relate to the keyInSelect
    //how to make the decision run again after initial keyInSelect
