//checks if holiday
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

function checkNewyeareve() {
    let today = new Date().toISOString().slice(0, 10);
    return (today.substring(5) == "12-31");
}

function checkSysAdminDay() {
    let ifday = false;
    for (let i = 31; i > 24; i--) {
        let today = new Date().toISOString().slice(8, 10);
        if (today == i) {
            today = new Date().toISOString().slice(5, 7);
            if (today == "07") {
                today = new Date();
                if (today.getDay() == 5) {
                    ifday = true;
                }
            }
        }
    }
    return ifday;
}

//test everything
function toggleall() {
    $("#halloweenshow").toggle();
    $("#xmasshow").toggle();
    $("#thankshow").toggle();
    $("#newyear").toggle();
    $("#sysadmin").toggle();
    $("#newyeareve").toggle();
}

//hides everything
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
if (checkNewyeareve() == false) {
    $("#newyeareve").hide();
}