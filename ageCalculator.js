"use strict";

// This script calculates my age so that the information on the page is always accurate

var birthday = new Date("October 19, 2000");
var today = new Date();

var age = today.getFullYear() - birthday.getFullYear();

if (birthday.getMonth() > today.getMonth()) {
    age -= 1;
} else if (birthday.getMonth() == today.getMonth()) {
    if (birthday.getDate() > today.getDate()) {
        age -= 1;
    }
}

document.getElementById("age").innerHTML = "Age: " + age;
