var colorDisplay = document.querySelector('span');
var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('#message');
var new_game = document.querySelector('button');
var easyGame = document.querySelector('#easyButton');
var hardGame = document.querySelector('#hardButton');
var headingBackground = document.querySelector('h1');


// function to generate a single random rgb value
function randomColors()
{
    var r = Math.floor(Math.random()*255 + 1);
    var g = Math.floor(Math.random()*255 + 1);
    var b = Math.floor(Math.random()*255 + 1);
    var rgb = 'rgb(' + r + ", " + g + ", " + b + ")";
    return rgb
}

// function to generate an array of num random colors
function randomColorGenerator(num)
{
    var arr=[];
    for(i=0; i< num; i++)
    {
        arr.push(randomColors());
    }
    return arr;
}

// this function controls the functionality of buttons and add color to the squares
function squareColorGenerator()
{
    colors = randomColorGenerator(num);
    pickedColor = colors[Math.floor(Math.random()*num)]
    colorDisplay.textContent = pickedColor;
    for(i=0; i<num; i++)
    {   
        squares[i].style.backgroundColor=colors[i];
    }
    if(bool_newGame===true){
        new_game.textContent = 'NEW COLORS';
        bool_newGame = false;
    }
    messageDisplay.textContent = '';   
    headingBackground.style.backgroundColor = 'rgb(34, 133, 167)'; 
}



var num = 6;
var colors= randomColorGenerator(num);   // an array of random colors
var pickedColor = colors[Math.floor(Math.random()*num)] // this variable stores the correct color to be guessed
colorDisplay.textContent = pickedColor; // displaying the color in the heading to be guessed 
var bool_newGame = false;

for(i=0; i< squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i]; // assigning colors to the squares

    // adding click event to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            for(j=0; j< num; j++)
            {
                squares[j].style.backgroundColor=clickedColor;
            }
            messageDisplay.textContent = 'Correct!!!';
            headingBackground.style.backgroundColor = clickedColor;
            new_game.textContent = 'PLAY AGAIN?';
            bool_newGame = true;
        }
        else
        {
            this.style.backgroundColor= '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    })

}

// adding click functionality to new color button
new_game.addEventListener('click', squareColorGenerator)
        
// adding click functionality to easy button
easyGame.addEventListener('click', function(){
    num = 3;
    for(i=num; i<squares.length; i++)
    {
        squares[i].style.display='none';

    }
    easyGame.classList.add("selected");
    hardGame.classList.remove("selected");
    squareColorGenerator();
})
// adding click functionality to hard button
hardGame.addEventListener('click', function(){
    for(i=num; i<squares.length; i++)
    {
        squares[i].style.display='block';
    }
    num = 6;
    hardGame.classList.add('selected');
    easyGame.classList.remove('selected');
    squareColorGenerator();
})



