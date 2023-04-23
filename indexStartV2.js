class Stopwatch {
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for the 3 global 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
    constructor(isRunning, timer, elapsedTime, start, stop, reset) {
        this.isRunning = isRunning;
        this.timer = timer;
        this.elapsedTime = elapsedTime;
        this.start = start;
        this.stop = stop;
        this.reset = reset;
        this.start.onclick = this.startTimer.bind(this);
        this.stop.onclick = this.stopTimer.bind(this);
        this.reset.onclick = this.resetTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.incrementTimer = this.incrementTimer.bind(this);
        this.pad = this.pad.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */

    startTimer() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timer = setInterval(this.incrementTimer, 1000);
        }
    }

    incrementTimer() {
        this.elapsedTime++;
        let minutes = Math.trunc(this.elapsedTime / 60);
        let seconds = this.elapsedTime % 60;
        minutes = this.pad(minutes);
        seconds = this.pad(seconds);
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }

    pad(number) {
        if (number < 10) {
            return "0" + number;
        }
    }

    stopTimer() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timer);
        }
    }

    resetTimer() {
        this.stopTimer();
        this.elapsedTime = 0;
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}

// create a variable called stopWatch

// Add an event handler to the load event of the window.
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch
var stopWatch;

addEventListener("load", (event) => {stopWatch = new Stopwatch(false, null, 0, document.getElementById("start"), document.getElementById("stop"), document.getElementById("reset"))})
