$(document).ready(function() {
	var wins = 0;
	var losses = 0;
	var crystalTotalNumber = 0; 
	var answerNumber = [];

	//Reset when the game is over
	function startUp (){
		var totalOfGuessedNumber = 0;

		//variable set for random numbers
		answerNumber = (Math.floor(Math.random() * 102) +19);
		console.log(answerNumber);
		//Sets random number to play
		$('#answerNumb').text(answerNumber);
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
		$('#totalScore').text (crystalTotalNumber);	
	});
	$('#Diamond').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + diamondNumber;
		console.log(crystalTotalNumber);
		$('#totalScore').text (crystalTotalNumber);
	});
	$('#Citrine').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + citrineNumber;
		console.log(crystalTotalNumber);
		$('#totalScore').text (crystalTotalNumber);	
	});
	$('#Emerald').on('click', function() {
		crystalTotalNumber = crystalTotalNumber + emeraldNumber;
		console.log(crystalTotalNumber);
		$('#totalScore').text (crystalTotalNumber);	
	})

	if (crystalTotalNumber === answerNumber) {
		wins = wins + 1;
	}
	console.log(wins);
});



//number will keep adding up until it matches the given number or surpasses it
//reset the game once the game is over
