// javascript file for form validation module 9

function validateAddress() {
    var addy1 = document.getElementById("Address1").value;
    var addy2 = document.getElementById("Address2").value;
    if (addy1 === "" || addy2 === "") {
        document.body.style.backgroundColor = "pink";
        alert("Fill in address fields")
    }
}

function validateQuestions() {
    var question1 = document.getElementById("Q1").value;
    var question2 = document.getElementById("Q2").value;
    var question3 = document.getElementById("Q3").value;
    if (question1 === "") {
        document.getElementById("Q1").style.backgroundColor = "yellow";
    }
    if (question2 === "") {
        document.getElementById("Q2").style.backgroundColor = "yellow";
    }
    if (question3 === "") {
        document.getElementById("Q3").style.backgroundColor = "yellow";
    }
}

function selectState() {
    if (document.getElementById("states").value === "na") {
        alert("please select a valid state value")
        return false;
    }
}