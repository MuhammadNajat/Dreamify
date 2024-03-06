function showTimer() {
    // Converting string to required date format 
    let deadline = new Date("Mar 25, 2024 15:37:25")
    .getTime();

    // To call defined fuction every second
    let x = setInterval(function () {

    // Getting current time in required format
    let now = new Date().getTime();

    // Calculating the difference
    let t = deadline - now;

    // Getting value of days, hours, minutes, seconds
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
    (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(
    (t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(
    (t % (1000 * 60)) / 1000);

    let message = "Offer ends soon!"

    let timeRemaining = days + "d " + hours + "h " + 
    minutes + "m " + seconds + "s ";

    // Output the remaining time
    document.getElementById("demo").innerHTML = "<p style=\"margin-bottom: 0;\">" + message + "</p>" + "<p style=\"font-size:25px; margin-top: 0;\"><b>" + timeRemaining + "</b></p>";

    // Output for over time
    if (t < 0) {
    clearInterval(x);
    document.getElementById("demo")
        .innerHTML = "EXPIRED";
    }
    }, 1000);
}

showTimer();