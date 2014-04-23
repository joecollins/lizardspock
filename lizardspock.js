(function(){
 
	var lizardspock = function(choice){

		this.choice = choice;
		//this.computerMove = "";
		var allowed = ['rock','paper','scissors','lizard','spock'];

			if (allowed.indexOf(this.choice) !== -1) {
				console.log("User picked: " + this.choice)
			} else {
				this.choice = 'rock';
				console.log("User picked: " + this.choice)
			}

			this.beats = {
				'scissors': ['paper','lizard'],
				'paper': ['rock','spock'],
				'rock': ['lizard','scissors'],
				'lizard': ['spock','paper'],
				'spock': ['scissors','rock'],
			}

		//Assign the computer a move
		this.computerChoice = function(){
			
			 this.computer = Math.floor(Math.random()*5);

			switch( this.computer){
				case 0:
					 this.computerMove = "scissors";
					break;			
				case 1:
					 this.computerMove = "paper";
					break;	
				case 2:
					 this.computerMove = "rock";
					break;
				case 3:
					 this.computerMove = "lizard";
					break;
				case 4:
					 this.computerMove = "spock";
					break;
			}

			console.log("Computer picked: " +  this.computerMove);
		};

		this.decision = function(){
			//check if it's a tie:
			if (this.computerMove == this.choice){
				console.log("Tie");
			} else {
				// Get the winning moves for our selected key from the beats array
				var winner = this.beats[this.computerMove];
				if(winner.indexOf(this.choice) !== -1){
					console.log('Computer Wins');
				} else {
					console.log('User wins');
				}

			}
		};

		this.computerChoice();
		this.decision();
	}
	
	window.Lizardspock = lizardspock;
})();