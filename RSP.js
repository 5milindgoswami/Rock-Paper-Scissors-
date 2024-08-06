let playerMove, computerMove, result;
    
    let score = JSON.parse(localStorage.getItem('score')) || { Win: 0, Lose: 0, Tie: 0};
    
    let total = JSON.parse(localStorage.getItem('total')) || { Win: 0, Lose: 0, Tie: 0};
   

    function playGame(move)
    {
      playerMove = move;
      computerMove = pickRandomMove();
      let result = '';
      
      if (playerMove === 'rock') 
      {
        if (computerMove === 'rock')
        {
          result = "Tie";
        }else if (computerMove === 'paper'){
            result = 'You Lose';
            }else if (computerMove === 'scissors') 
            {
            result = 'You Win';
          }
      }else if (playerMove === 'paper') 
        {
          if (computerMove === 'paper') 
          {
            result = 'Tie';
          }else if (computerMove === 'rock') 
            {
              result = 'You Win';
            }else if (computerMove === 'scissors') 
              {
                result = 'You Lose';
              }
        }else if (playerMove === 'scissors') 
          {
            if (computerMove === 'scissors') 
            {
              result = 'Tie';
            }else if (computerMove === 'rock') 
            {
              result = 'You Lose';
            } else if (computerMove === 'paper')
             {
              result = 'You Win';
             }
          }


            if (result === 'You Win') {
              score.Win += 1;
              total.Win += 1;
            } else if (result === 'You Lose') {
              // if (score.Lose < 1 || logic()) {
              score.Lose += 1;
              total.Lose += 1;
              // }
            }else if (result === 'Tie') {
              score.Tie += 1;
              total.Tie += 1;
            }

            updateScore();
			displayPopup(result);
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = `you picked <img class="imgbtn" src="${playerMove}.png"> Computer picked <img class="imgbtn" src="${computerMove}.png">`;

        

        
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        localStorage.setItem('score', JSON.stringify(score));

        localStorage.setItem('total',JSON.stringify(total));
        document.querySelector('.js-total').innerHTML = `Win = ${total.Win} Lose = ${total.Lose} Tie = ${total.Tie}`;

    }
   

     function updateScore(){
    document.querySelector('.js-score').innerHTML = `Win = ${score.Win} Lose = ${score.Lose} Tie = ${score.Tie}`;
    }; 

    	let favMove;

        // Function to update welcome message with values from query parameters
       
        function updateWelcomeMessage() {
            const urlParams = new URLSearchParams(window.location.search);
            const fullName = urlParams.get('fullName');
            favMove = urlParams.get('favMove');
            console.log("Full Name:", fullName);
    		console.log("Favorite Move:", favMove);
            const welcomeDiv = document.getElementById('welcome');
            if (fullName && favMove) {
                welcomeDiv.querySelector('h2').innerText = `Welcome ${fullName}`;
                welcomeDiv.querySelector('h3').innerText = `Your Fav Move is ${favMove}`;
            }
        }
        
		function displayPopup(message) {
		const popup = document.getElementById('popup');
		popup.textContent = message;
		popup.style.display = 'block';
		setTimeout(() => {
			popup.style.display = 'none';
		}, 1000);
	}

function logout() {
	
    alert("Logout successful!");
    window.location.href = "index.html"; // You can replace this with actual logout logic if needed
}


        // Call the function when the page loads
        window.onload = updateWelcomeMessage;


			function pickRandomMove()
    		{
		    
		     	if (score.Lose < 1)
		     	{
			        const randomMove = Math.random();
			        let computerMove = '';

			        if(randomMove >= 0 && randomMove <= 1/3) {
			           computerMove = 'rock';
			        }else if(randomMove >1/3 && randomMove <= 2/3) {
			           computerMove = 'paper';
			        }else if(randomMove> 2/3 && randomMove <= 1) {
			           computerMove = 'scissors';
			        }
			        return computerMove
				}else if (score.Lose >= 1) 
				{
					if (favMove === 'Rock') 
					{
			
						if (playerMove === 'rock') 
						{
							
							const randomMove = Math.random();
			        		let computerMove = '';
			        		
					        if(randomMove >= 0 && randomMove <= 1/2) {
					           computerMove = 'rock';
					        }else if(randomMove> 1/2 && randomMove <= 1) {
					           computerMove = 'scissors';
					        }
					       return computerMove
						}else if (playerMove === 'paper') 
							{
								const randomMove = Math.random();
						        let computerMove = '';

						        if(randomMove >= 0 && randomMove <= 1/2) {
						           computerMove = 'paper';
						        }else if(randomMove> 1/2 && randomMove <= 1) {
						           computerMove = 'rock';
						        }
						      return computerMove

							}else if (playerMove === 'scissors') 
								{
								 	const randomMove = Math.random();
							        let computerMove = '';

							        if(randomMove >= 0 && randomMove <= 1/3) {
							           computerMove = 'rock';
							        }else if(randomMove >1/3 && randomMove <= 2/3) {
							           computerMove = 'paper';
							        }else if(randomMove> 2/3 && randomMove <= 1) {
							           computerMove = 'scissors';
							        }
							      return computerMove
								}
					}else if (favMove === 'Paper')
						{
							if (playerMove === 'rock') 
							{
								const randomMove = Math.random();
						        let computerMove = '';

						        if(randomMove >= 0 && randomMove <= 1/3) {
						           computerMove = 'rock';
						        }else if(randomMove >1/3 && randomMove <= 2/3) {
						           computerMove = 'paper';
						        }else if(randomMove> 2/3 && randomMove <= 1) {
						           computerMove = 'scissors';
						        }
						      	return computerMove

							}else if (playerMove === 'paper') 
								{
									const randomMove = Math.random();
							        let computerMove = '';

							        if(randomMove >= 0 && randomMove <= 1/2) {
							           computerMove = 'rock';
							        }else if(randomMove >1/2 && randomMove <= 1) {
							           computerMove = 'paper';
							        }
							      return computerMove

								}else if (playerMove === 'scissors') 
									{
										const randomMove = Math.random();
								        let computerMove = '';

								        if(randomMove >= 0 && randomMove <= 1/2) {
								           computerMove = 'paper';
								        }else if(randomMove> 1/2 && randomMove <= 1) {
								           computerMove = 'scissors';
								        }
								      return computerMove

									}
						}else if (favMove === 'Scissors') 
							{
								if (playerMove === 'rock')
								{
									const randomMove = Math.random();
							        let computerMove = '';

							        if(randomMove >= 0 && randomMove <= 1/2) {
							           computerMove = 'rock';
							       
							        }else if(randomMove> 1/2 && randomMove <= 1) {
							           computerMove = 'scissors';
							           }
							       return computerMove
							      
								}else if (playerMove === 'paper')
								{
									const randomMove = Math.random();
							        let computerMove = '';

							        if(randomMove >= 0 && randomMove <= 1/3) {
							           computerMove = 'rock';
							        }else if(randomMove >1/3 && randomMove <= 2/3) {
							           computerMove = 'paper';
							        }else if(randomMove> 2/3 && randomMove <= 1) {
							           computerMove = 'scissors';
							        }
							      return computerMove
								}else if (playerMove === 'scissors') 
								{
									const randomMove = Math.random();
							        let computerMove = '';

							        if(randomMove >= 0 && randomMove <= 1/2) {
							           computerMove = 'paper';
							        }else if(randomMove> 1/2 && randomMove <= 1) {
							           computerMove = 'scissors';
							        }
							      return computerMove
								}
							}
						}	
					}
		        