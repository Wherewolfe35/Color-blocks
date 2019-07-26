$(document).ready(readyNow);

console.log('js');

let redCount = 0;
let yellowCount = 0;
let greenCount = 0;
let blueCount = 0;

function readyNow() {
    $('#redButton').on('click', addRed);
    $('#yellowButton').on('click', addYellow);
    $('#greenButton').on('click', addGreen);
    $('#blueButton').on('click', addBlue);
    $('#blocks').on('click', '.redBlock', removeRed);
    $('#blocks').on('click', '.yellowBlock', removeYellow);
    $('#blocks').on('click', '.greenBlock', removeGreen);
    $('#blocks').on('click', '.blueBlock', removeBlue);
}

//add to count on html when corresponding button is clicked
function addRed() {
    //get value
    redInput = parseInt(+($('#redAmount').val()));
    console.log('Red', redInput);
    redCount += redInput;
    //make sure counter does not get below 0
    if (redCount < 0){
        console.log('whoops!');
        redCount = 0;
    }
    //update counter on the DOM
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
    //allow for multiple block additions
    for(let i = redInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "redBlock" ></li>`);
    }
    //allow for multiple block removals
    if (redInput < 0){
        for ( let i = redInput; i < 0; i++){
            $('.redBlock').last().remove();
        }
    }
} //end addRed

function addYellow() {
    yellowInput = parseInt(+($('#yellowAmount').val()));
    console.log('Yellow');
    yellowCount += yellowInput;
    if (yellowCount < 0) {
        console.log('whoops!');
        yellowCount = 0;
    }
    let yellows = $('#yellowCount');
    yellows.empty();
    yellows.append(yellowCount);
    for (let i = yellowInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "yellowBlock" ></li>`);
    }
    if (yellowInput < 0) {
        for (let i = yellowInput; i < 0; i++) {
            $('.yellowBlock').last().remove();
        }
    }
} //end addYellow

function addGreen() {
    greenInput = parseInt(+($('#greenAmount').val()));
    console.log('Green');
    greenCount += greenInput;
    if (greenCount < 0) {
        console.log('whoops!');
        greenCount = 0;
    }
    let greens = $('#greenCount');
    greens.empty();
    greens.append(greenCount);
    for (let i = greenInput; i > 0.; i--){
    $('.blocksHere').append(`<li class= "greenBlock" ></li>`);
    }
    if (greenInput < 0) {
        for (let i = greenInput; i < 0; i++) {
            $('.greenBlock').last().remove();
        }
    }
} //end addGreen

function addBlue() {
    blueInput = parseInt(+($('#blueAmount').val()));
    console.log('Blue');
    blueCount += blueInput;
    if (blueCount < 0) {
        console.log('whoops!');
        blueCount = 0;
    }
    let blues = $('#blueCount');
    blues.empty();
    blues.append(blueCount);
    for (let i = blueInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "blueBlock" ></li>`);
    }
    if (blueInput < 0) {
        for (let i = blueInput; i < 0; i++) {
            $('.blueBlock').last().remove();
        }
    }
} //end addBlue

//delete blocks
function removeRed() {
    console.log('Red Removed');
    //remove block from DOM
    $(this).remove();
    //update counter on the DOM
    redCount--;
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
}
function removeYellow() {
    console.log('Yellow Removed');
    $(this).remove();
    yellowCount--;
    let yellows = $('#yellowCount');
    yellows.empty();
    yellows.append(yellowCount);
}
function removeGreen() {
    console.log('Green Removed');
    $(this).remove();
    greenCount--;
    let greens = $('#greenCount');
    greens.empty();
    greens.append(greenCount);
}
function removeBlue() {
    console.log('Blue Removed');
    $(this).remove();
    blueCount--;
    let blues = $('#blueCount');
    blues.empty();
    blues.append(blueCount);
}
