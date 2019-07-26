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
    $('#blocks').on('click', '.aBlock', removeBlock);
}

//add to count on html when corresponding button is clicked
function addRed() {
    //get value
    redInput = parseInt(+($('#redAmount').val()));
    console.log('Red', redInput);
    redCount += redInput;
    //make sure counter does not get below 0
    if (redCount < 0) {
        console.log('whoops!');
        redCount = 0;
    }
    //update counter on the DOM
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
    //allow for multiple block additions
    for (let i = redInput; i > 0; i--) {
        $('.blocksHere').append(`<li class= "redBlock aBlock" ></li>`);
    }
    //allow for multiple block removals
    if (redInput < 0) {
        for (let i = redInput; i < 0; i++) {
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
    for (let i = yellowInput; i > 0; i--) {
        $('.blocksHere').append(`<li class= "yellowBlock aBlock" ></li>`);
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
    for (let i = greenInput; i > 0.; i--) {
        $('.blocksHere').append(`<li class= "greenBlock aBlock" ></li>`);
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
    for (let i = blueInput; i > 0; i--) {
        $('.blocksHere').append(`<li class= "blueBlock aBlock" ></li>`);
    }
    if (blueInput < 0) {
        for (let i = blueInput; i < 0; i++) {
            $('.blueBlock').last().remove();
        }
    }
} //end addBlue

//delete blocks
function removeBlock() {
    //remove block from DOM
    $(this).remove();
    //update counter on the DOM
    if ($(this).hasClass('redBlock')) {
        console.log('Red Removed');
        redCount--;
        let reds = $('#redCount');
        reds.empty();
        reds.append(redCount);
    } else if ($(this).hasClass('yellowBlock')){
        console.log('Yellow Removed');
        yellowCount--;
        let yellows = $('#yellowCount');
        yellows.empty();
        yellows.append(yellowCount);
    } else if ($(this).hasClass('greenBlock')) {
        console.log('Green Removed');
        greenCount--;
        let greens = $('#greenCount');
        greens.empty();
        greens.append(greenCount);
    } else if ($(this).hasClass('blueBlock')) {
        console.log('Blue Removed');
        blueCount--;
        let blues = $('#blueCount');
        blues.empty();
        blues.append(blueCount);
    }
}
