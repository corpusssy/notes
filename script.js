
function search() {
    let user_input = document.getElementById("user_input").value;
    user_input = user_input.toLowerCase();

    if (user_input == "cybersecurity") {
        cybersecurityByNYUx()();
    } else if (user_input == "cs50") {
        cs50ByHarvardX();
    } else {
        document.getElementById("error_message").innerText = "Nothing found, please try again or press on one of the links below.";
    }
}

function cybersecurityByNYUx() {
    window.open("CYB-ISP-NYUx.html", "_blank");
}

function cs50ByHarvardX() {
    window.open("CS50-HarvardX.html", "_blank");
}