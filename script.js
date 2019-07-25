$(document).ready(readyNow);

console.log('js');

let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;
let redInput = 0;

function readyNow() {
    $('#redButton').on('click', addRed);
    $('#yellowButton').on('click', addYellow);
    $('#greenButton').on('click', addGreen);
    $('#blueButton').on('click', addBlue);
    $('.redBlock').on('click', removeRed);
}

//add to count on html when corresponding button is clicked
function addRed() {
    console.log('Red');
    redAmount();
    redCount = redCount + redInput;
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
    $('#blocks').append(`<div class= "redBlock" >` + `</div>`);
} //end addRed

function addYellow() {
    console.log('Yellow');
    yellowCount++;
    let yellows = $('#yellowCount');
    yellows.empty();
    yellows.append(yellowCount);
    $('#blocks').append(`<div class= "yellowBlock" >` + `</div>`);
} //end addYellow

function addGreen() {
    console.log('Green');
    greenCount++;
    let greens = $('#greenCount');
    greens.empty();
    greens.append(greenCount);
    $('#blocks').append(`<div class= "greenBlock" >` + `</div>`);
} //end addGreen

function addBlue() {
    console.log('Blue');
    blueCount++;
    let blues = $('#blueCount');
    blues.empty();
    blues.append(blueCount);
    $('#blocks').append(`<div class= "blueBlock" >` + `</div>`);
} //end addBlue

//delete blocks
function removeRed() {
    console.log('Red Removed');
}

function redAmount() {
    redInput = Number($('#redAmount').val());
}