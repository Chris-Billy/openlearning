const deadline = new Date("June 19, 2021 12:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let timer = deadline - now;
    let days = Math.floor(timer / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timer % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + " jours, " + hours + " heures, "
    + minutes + " minutes, " + seconds + " secondes. ";
    if (timer < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Sortie du site";
}}, 1000);

function subscribeToMail(){
    let payload = {
        "apikey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "id": "xxxxxx",
        "email": {
            "email": "me@example.com"
        },
        "send_welcome": false
    };
}
