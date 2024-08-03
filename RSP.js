    let playerMove, computerMove, result;
    
    let score = JSON.parse(localStorage.getItem('score')) || { Win: 0, Lose: 0, Tie: 0};
    
    let total = JSON.parse(localStorage.getItem('total')) || { Win: 0, Lose: 0, Tie: 0};
    
    
    function playGame(Move){
    
      let move = Move;
    
    if (score.Lose < 1) {
    
      playGameNormal(move);

    }else if (score.Lose >= 1) {
      
      if (favMove === 'rock') {
        
        playGameRock(move);
      
      }else if (favMove === 'paper') {
        
        playGamePaper(move);
      
      }else if (favMove === 'scissors') {
        
        playGameScissors(move);
      
      }
    }
  }
    function playGameNormal(move)
    {
      playerMove = move;
      const computerMove = pickRandomMove();
      
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


          
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = `you picked ${playerMove} Computer picked ${computerMove}`;

        updateScore();

        
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        localStorage.setItem('score', JSON.stringify(score));

        localStorage.setItem('total',JSON.stringify(total));
        document.querySelector('.js-total').innerHTML = `Win = ${total.Win} Lose = ${total.Lose} Tie = ${total.Tie}`;

    }
   

    function playGameRock(move)
    {
      playerMove = move;
      const computerMove = pickRandomMove();
      
      let result = '';
      
      if (playerMove === 'rock') 
      {
        if (computerMove === 'rock')
        {
          result = "Tie";

        }else if (computerMove === 'scissors'){

            result = 'You Win';

            }else if (computerMove === 'paper') 
            {
            playGameRock('rock');
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
                playGameRock('paper');
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


          
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = `you picked ${playerMove} Computer picked ${computerMove}`;

        updateScore();

        
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        localStorage.setItem('score', JSON.stringify(score));

        localStorage.setItem('total',JSON.stringify(total));
        document.querySelector('.js-total').innerHTML = `Win = ${total.Win} Lose = ${total.Lose} Tie = ${total.Tie}`;

      }


      function playGamePaper(move)
    {
      playerMove = move;
      const computerMove = pickRandomMove();
      
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
                playGamePaper('paper');
              }
        }else if (playerMove === 'scissors') 
          {
            if (computerMove === 'scissors') 
            {
              result = 'Tie';
            }else if (computerMove === 'paper') 
            {
              result = 'You Win';
            } else if (computerMove === 'rock')
             {
              playGamePaper('scissors');
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


          
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = `you picked ${playerMove} Computer picked ${computerMove}`;

        updateScore();

        
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        localStorage.setItem('score', JSON.stringify(score));

        localStorage.setItem('total',JSON.stringify(total));
        document.querySelector('.js-total').innerHTML = `Win = ${total.Win} Lose = ${total.Lose} Tie = ${total.Tie}`;

    }
  
      function playGameScissors(move)
    {
      playerMove = move;
      const computerMove = pickRandomMove();
      
      let result = '';
      
      if (playerMove === 'rock') 
      {
        if (computerMove === 'rock')
        {
          result = "Tie";

        }else if (computerMove === 'scissors'){
            
            result = 'You Win';

            }else if (computerMove === 'paper') 
            {
            playGameScissors('rock');
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

            }else if (computerMove === 'paper') 
            {
              result = 'You Win';
            } else if (computerMove === 'rock')
             {
              playGameScissors('scissors');
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


          
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = `you picked ${playerMove} Computer picked ${computerMove}`;

        updateScore();

        
        console.log(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
        localStorage.setItem('score', JSON.stringify(score));

        localStorage.setItem('total',JSON.stringify(total));
        document.querySelector('.js-total').innerHTML = `Win = ${total.Win} Lose = ${total.Lose} Tie = ${total.Tie}`;

    };

    function updateScore(){
    document.querySelector('.js-score').innerHTML = `Win = ${score.Win} Lose = ${score.Lose} Tie = ${score.Tie}`;
    };
     
     function pickRandomMove(){
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

        // Function to update welcome message with values from query parameters
        let favMove;
        function updateWelcomeMessage() {
            const urlParams = new URLSearchParams(window.location.search);
            const fullName = urlParams.get('fullName');
             favMove = urlParams.get('favMove');
            const welcomeDiv = document.getElementById('welcome');
            if (fullName && favMove) {
                welcomeDiv.querySelector('h2').innerText = `Welcome ${fullName}`;
                welcomeDiv.querySelector('h3').innerText = `Your Fav Move is ${favMove}`;
            }
        }

        // Call the function when the page loads
        window.onload = updateWelcomeMessage;