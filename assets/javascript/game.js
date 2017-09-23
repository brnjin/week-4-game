var crystalTotalNumber;
var answerNumber;
var rubyNumber;
var diamondNumber;
var citrineNumber;
var emeraldNumber;

// Initial Set up at the beginning and end of game
function startUp (){
	var totalOfGuessedNumber = 0;
	crystalTotalNumber = 0;

	//variable set for random numbers
	answerNumber = (Math.floor(Math.random() * 102) +19);
	console.log(answerNumber);
	//Random number set for crystals
	rubyNumber = (Math.floor(Math.random() * 12) + 1);
	diamondNumber = (Math.floor(Math.random() * 12) + 1);
	citrineNumber = (Math.floor(Math.random() * 12) + 1);
	emeraldNumber = (Math.floor(Math.random() * 12) + 1);

	//Sets random number to play
	$('#answerNumb').text(answerNumber);
	$('#totalScore').text("0")
};


$(document).ready(function() {
	var wins = 0;
	var losses = 0;
	crystalTotalNumber = 0; 
	answerNumber = 0;

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

	//Win loss counter 
	function winLoss() {
		$('#totalScore').text (crystalTotalNumber);

		//If won
		if (answerNumber === crystalTotalNumber) {
			wins = wins + 1;
			console.log(wins + "here");
			$('#wins').text("Wins: " + wins);
			alert("You WON!");
			$(":reset").crystalTotalNumber = 0;
			startUp();
			
		};
		//If lost
		if (crystalTotalNumber > answerNumber) {
			losses = losses + 1;
			console.log(losses + "there");
			$('#losses').text("Losses: " + losses);
			alert("You lost!");
			$(":reset").crystalTotalNumber = 0;
			startUp();
		};
	};	
});