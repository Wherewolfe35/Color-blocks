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
    $('#blocks').on('click', '.redBlock', removeRed);
    $('#blocks').on('click', '.yellowBlock', removeYellow);
    $('#blocks').on('click', '.greenBlock', removeGreen);
    $('#blocks').on('click', '.blueBlock', removeBlue);
}

//add to count on html when corresponding button is clicked
function addRed() {
    redInput = +($('#redAmount').val());
    console.log('Red', redInput);
    redCount += redInput;
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
    for(let i = redInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "redBlock" ></li>`);
    }
} //end addRed

function addYellow() {
    yellowInput = +($('#yellowAmount').val());
    console.log('Yellow');
    yellowCount += yellowInput;
    let yellows = $('#yellowCount');
    yellows.empty();
    yellows.append(yellowCount);
    for (let i = yellowInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "yellowBlock" ></li>`);
    }
} //end addYellow

function addGreen() {
    greenInput = +($('#greenAmount').val());
    console.log('Green');
    greenCount += greenInput;
    let greens = $('#greenCount');
    greens.empty();
    greens.append(greenCount);
    for (let i = greenInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "greenBlock" ></li>`);
    }
} //end addGreen

function addBlue() {
    blueInput = +($('#blueAmount').val());
    console.log('Blue');
    blueCount += blueInput;
    let blues = $('#blueCount');
    blues.empty();
    blues.append(blueCount);
    for (let i = blueInput; i > 0; i--){
    $('.blocksHere').append(`<li class= "blueBlock" ></li>`);
    }
} //end addBlue

//delete blocks
function removeRed() {
    console.log('Red Removed');
    $(this).remove();
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
