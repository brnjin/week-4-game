var crystalTotalNumber;
var answerNumber;
var wins;
var losses; 

$(document).ready(function() {
	wins = 0;
	losses = 0;
	crystalTotalNumber = 0; 
	answerNumber = "";

	//Reset when the game is over
	function startUp (){
		var totalOfGuessedNumber = 0;

		//variable set for random numbers
		answerNumber = (Math.floor(Math.random() * 102) +19);
		console.log(answerNumber);
		//Sets random number to play
		$('#answerNumb').text(answerNumber);
	};
	function winLoss() {
		$('#totalScore').text (crystalTotalNumber);
		if (answerNumber === crystalTotalNumber) {
		wins++;
		$('#wins').html("'You have' + wins");
		alert("You WON!");
		console.log(answerNumber);
		console.log(crystalTotalNumber);
	};
		if (crystalTotalNumber > answerNumber) {
		losses ++;
		alert("You lost!");
	};
};
		//Random number set for crystals
	var rubyNumber = (Math.floor(Math.random() * 12) + 1);
	var diamondNumber = (Math.floor(Math.random() * 12) + 1);
	var citrineNumber = (Math.floor(Math.random() * 12) + 1);
	var emeraldNumber = (Math.floor(Math.random() * 12) + 1);

	startUp();

	//Sets random number for each crystals 
	$('#Ruby').on('click', function() {
		//adds together random ruby number to total
		crystalTotalNumber = crystalTotalNumber + rubyNumber;
		console.log(crystalTotalNumber);
	winLoss();	
	});
	$('#Diamond').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + diamondNumber;
		console.log(crystalTotalNumber);
	winLoss();
	});
	$('#Citrine').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + citrineNumber;
		console.log(crystalTotalNumber);
	winLoss();
	});
	$('#Emerald').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + emeraldNumber;
		console.log(crystalTotalNumber);
	winLoss();
	});
});





//number will keep adding up until it matches the given number or surpasses it
//reset the game once the game is over
