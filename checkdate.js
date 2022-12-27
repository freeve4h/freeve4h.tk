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

function checkSysAdminDay() {
    // i am an idiot, but i doubt that the site will last that long
    let dates = ["2023-7-28", "2024-7-26", "2025-7-25", "2026-7-31", "2027-7-30", "2028-7-28"]
    let today = new Date().toISOString().slice(0, 10);
    return dates.includes(today)
}

//test everything
function toggleall() {
    $("#halloweenshow").toggle();
    $("#xmasshow").toggle();
    $("#thankshow").toggle();
    $("#newyear").toggle();
    $("#sysadmin").toggle();
}

if (checkHalloween() == false) {
    $("#halloweenshow").hide();
}
if (checkChristmas() == false) {
    $("#xmasshow").hide();
}
if (checkThanksgiving() == false) {
    $("#thankshow").hide();
}
if (checkNewyear() == false) {
    $("#newyear").hide();
}
if (checkSysAdminDay() == false) {
    $("#sysadmin").hide();
}