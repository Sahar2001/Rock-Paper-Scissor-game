let userScore=0;
let compScore=0;
const user_score=document.getElementById('user_score');
const comp_score=document.getElementById('comp_score');
const results=document.querySelector('.results');
const choices=document.getElementById('choices');
const div_rock=document.getElementById('r');
const div_paper=document.getElementById('p');
const div_scissor=document.getElementById('s');

function getComputerChoice() {
	// body...
	const choices=['r','p','s'];//define an object
	const randomNumber=Math.floor(Math.random()*3);//choose randomly
	return choices[randomNumber];//choose choices object randomly
}
console.log(getComputerChoice());

function convertToWords(letter) {
	// body...
	if(letter==='r') return "Rock";
	if(letter==='p') return "Paper";
	if(letter==='s') return "Scissor";
}

function win(userChoice,computerChoice) {
	// body...
	userScore++;//if user win increment the score
	user_score.innerHTML=userScore;// the span that have the id of user_score must get the increment
	comp_score.innerHTML=compScore;//the span that have the id of comp_score musr get the compScore value
	results.innerHTML=`${convertToWords(userChoice)} beats ${convertToWords(computerChoice)}.  You win!`;
	document.getElementById(userChoice).classList.add("green_glue");
	//The following line set a time for our glue and after 1 second remove it.
	setTimeout(function(){document.getElementById(userChoice).classList.remove("green_glue")},500);
}
function lose(userChoice,computerChoice) {
	// body...
	compScore++;
	user_score.innerHTML=userScore;
	comp_score.innerHTML=compScore;
	results.innerHTML=`${convertToWords(computerChoice)} beats ${ convertToWords(userChoice)}.You lost!`;
	document.getElementById(userChoice).classList.add("red_glue");
	setTimeout(function(){document.getElementById(userChoice).classList.remove("red_glue")},500);
}
function draw(userChoice,computerChoice) {
	// body...
	results.innerHTML=`${convertToWords(userChoice)} is equal to ${convertToWords(computerChoice)}.Try again`;
	document.getElementById(userChoice).classList.add("blue_glue");
	setTimeout(function(){document.getElementById(userChoice).classList.remove("blue_glue")},500);

}

function game(userChoice) {
	// body...
	const computerChoice = getComputerChoice();//this var get computer choices inside the game fun when user choose something
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice);
		break;
		case "sr":
		case "rp":
		case "ps":
		lose(userChoice,computerChoice);
		break;
		case "rr":
		case "pp":
		case "ss":
		draw(userChoice,computerChoice);
		break;
	}
}

function main() {
	// body...
div_rock.addEventListener('click', function () {
	// body...
	game("r");	
})
div_paper.addEventListener('click', function(){
	game("p");
})
div_scissor.addEventListener('click', function(){
	game("s");
})

}
main();