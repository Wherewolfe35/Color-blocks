$( document ).ready(readyNow);

console.log('js');

let redCount = 0;
let yellowCount = 0;

function readyNow(){
$('#redButton').on('click', addRedCount);
$('#yellowButton').on('click', addYellowCount);
}

//add to count on html when corresponding button is clicked
function addRedCount(){
    console.log('Red');
    redCount++;
    let reds = $('#redCount');
    reds.empty();
    reds.append(redCount);
} //end addRedCount

function addYellowCount() {
    console.log('Yellow');
    yellowCount++;
    let yellows = $('#yellowCount');
    yellows.empty();
    yellows.append(yellowCount);
}