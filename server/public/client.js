console.log(`Look, ma, I'm a client!`);

$(document).ready(onReady);

function onReady() {
    console.log("Let's do this!");
    
    $(document).on('click', randomBackgroundColor);
}

function randomNumber(min, max){
    let theRandomNumber = Math.floor(Math.random() * (1 + max - min) + min);
    return theRandomNumber;
}

function randomBackgroundColor() {
    console.log('clicked!');

    let rgb = [];

    $(rgb).empty();

    let colorNumberOne = randomNumber(220, 255);
    rgb.push(colorNumberOne);
    let colorNumberTwo = randomNumber(220, 255);
    rgb.push(colorNumberTwo);
    let colorNumberThree = randomNumber(220, 255);
    rgb.push(colorNumberThree);

    $('body').css('background-color', 'rgb(${rgb})');
    console.log(rgb);
}