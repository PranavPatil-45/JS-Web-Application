setInterval(function () {
    let localTime = new Date();
    $("#digital-clock").text(localTime.toLocaleTimeString());
    $("#date").text(localTime.toLocaleDateString());
}, 1000);