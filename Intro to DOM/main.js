window.onload = function () {
    // add all of your code here!

    //Task 1
    //Accessing elements
    var whole = document.querySelectorAll(".task");
    var sep = document.querySelectorAll(".separator");
    var nextSection = document.querySelectorAll(".session");

    //Task 2
    //Change title
    var tabTitle = document.getElementById("title").innerHTML = "JoNeil is getting it slowly but surely";

    //Task 3
    //Change class color
    var greenClass = document.querySelectorAll(".green");
    var i;
    for (i = 0; i < greenClass.length; i++) {
        greenClass[i].style.color = "blue";
    }

    //Task 4
    //Remove bold class
    let greenBold = document.querySelector(".green.bold");
    greenBold.classList.remove('bold');

    //Task 5
    //Make alert display input text
    //    var subButton = document.querySelector(".button");
    //    subButton.addEventListener('click', function() {
    //        alert("Hi " + document.getElementById("name").value);
    //    });

    //Task 6
    //Validation to make sure both boxes are filled in 
    var subButton = document.querySelector(".button");

    subButton.addEventListener('click', function () {

        var inputs = getInputs();
        const name = inputs[0];
        const desc = inputs[1];

        if (validation(name, desc)) {
            alert("Hello " + name + " and thank you for your interesting fact: " + desc);
        };
    });
    
    function getInputs() {
        var name = document.getElementById("name").value;
        var desc = document.getElementById("description").value;
        return [name, desc];
    }

    function validation(name2, desc2) {
        
        if (name2 == "" || desc2 == "") {
            alert("Please make sure you have filled out both boxes");
            return false;
        };
        return true;
    }

    console.log('loaded');
};
