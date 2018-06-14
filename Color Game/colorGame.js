var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setUpModeButtons();
	setUpSquares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
});

function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for( var i = 0; i < squares.length; i++)
	{
		//add initial colors to squares
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

function setUpModeButtons()
{
	for( var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy")
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}
			reset();
		});
	}
}

function setUpSquares()
{
	for( var i = 0; i < squares.length; i++)
	{
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];


		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				resetButton.textContent = "Play Again?";
			}	
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color)
{
	//changes colors of each square to the winning color
	for( var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
	//changes color of header to the winning color
	h1.style.backgroundColor = color;
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i < num; i++)
	{
		arr[i] = randomColor();
	}

	return arr
}

function randomColor()
{
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}