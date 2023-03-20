// javascript file for form validation module 9

function validateAddress() {
    var addy1 = document.getElementById("Address1").value;
    var addy2 = document.getElementById("Address2").value;
    if (addy1 === "" || addy2 === "") {
        document.body.style.backgroundColor = "pink";
    }
}

function validateQuestions() {
    var question1 = document.getElementById("Q1").value;
    var question2 = document.getElementById("Q2").value;
    var question3 = document.getElementById("Q3").value;
    if (question1 === "") {
        document.getElementById("Q1").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Q1").style.backgroundColor = "white";
    }
    if (question2 === "") {
        document.getElementById("Q2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Q2").style.backgroundColor = "white";
    }
    if (question3 === "") {
        document.getElementById("Q3").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Q3").style.backgroundColor = "white";
    }
}
