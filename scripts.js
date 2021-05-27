// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init(){
    const buttonTakeOff = document.getElementById("takeoff");
    const buttonLanding = document.getElementById("landing");
    const buttonMissonAbort = document.getElementById("missionAbort");
    const flightStatusMessage = document.getElementById("flightStatus");
    const shuttleScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const bottonUp = document.getElementById("up");
    const bottonDown = document.getElementById("down");
    const bottonLeft= document.getElementById("left");
    const bottonRight = document.getElementById("right");
    const rocketImg = document.getElementById("rocket");

    buttonTakeOff.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        
        if (confirmation === true){
           flightStatusMessage.innerHTML = "Shuttle in flight.";
           shuttleScreen.style.backgroundColor = "blue";
           shuttleHeight.innerHTML = "10,000";
        }
    });
    buttonLanding.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged");
        if (alert){
            flightStatusMessage.innerHTML = "The shuttle has landed.";
            shuttleScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });
    buttonMissonAbort.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation === true){
            flightStatusMessage.innerHTML = "Mission aborted.";
            shuttleScreen.style.backgroundColor = "blue";
            shuttleHeight = "0";
        }
    });
    bottonUp.addEventListener("click", function(){
        // rocketImg.style.position = "absolute";
        // rocketImg.style.top = +10px;
        // figure out how to move img.
    });
}


window.addEventListener("load", init);


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
// 23.8.3. Bonus Mission
// If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.

// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.