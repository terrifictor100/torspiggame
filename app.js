
var scores, currentScore, activePlayer, dice, gamePlaying;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;
gamePlaying = true;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	//1. generate random number
	
	if (gamePlaying){
		dice = Math.floor((Math.random() * 6)+ 1);


		//2.update current score IF not 1
		if (dice !== 1){
			currentScore += dice;
			document.querySelector('.current-' + activePlayer + '-score').textContent = currentScore;
		} else {
			nextPlayer();
		}

		//3.display current score
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-'+dice+'.png';
	}

	
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gamePlaying){
			//1. add current score to scores
		scores[activePlayer] += currentScore;
		//2. Update the UI 
		document.querySelector('.score-'+activePlayer).textContent = scores[activePlayer];

		//3. if sccore 100 or bigger announce the winnner - else move to next player
		if(scores[activePlayer] >= 100){
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-name').textContent = 'Winner!';
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}



});

document.querySelector('.btn-new').addEventListener('click', function(){
	init();
})



function nextPlayer(){
	currentScore = 0;
	document.querySelector('.current-0-score').textContent = currentScore;
	document.querySelector('.current-1-score').textContent = currentScore;

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

}

function init(){
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	gamePlayine = true;

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.current-0-score').textContent = '0';
	document.querySelector('.current-1-score').textContent = '0';
	document.querySelector('.score-0').textContent = '0';
	document.querySelector('.score-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-0-name').textContent = 'Player 1';
	document.querySelector('.player-1-name').textContent = 'Player 2';

};
