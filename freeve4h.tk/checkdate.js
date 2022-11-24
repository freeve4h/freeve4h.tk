function checkHalloween() {
    let today = new Date().toISOString().slice(0, 10);
    return (today.substring(5) == "10-31")
}

function checkChristmas() {
    let today = new Date().toISOString().slice(0, 10);
    return (today.substring(5) == "12-26");
}

function checkThanksgiving() {
    let today = new Date().toISOString().slice(0, 10);
    return (today.substring(5) == "11-24");
}

function checkNewyear() {
    let today = new Date().toISOString().slice(0, 10);
    return (today.substring(5) == "1-1");
}

//test everything
function toggleall() {
    $("#halloweenshow").toggle();
    $("#xmasshow").toggle();
    $("#thankshow").toggle();
    $("#newyear").toggle();
}