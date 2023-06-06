let isGameRunning = false;
let scorePlayer = 0;
let scoreComputer = 0;

const updateScore = () => {
    document.querySelector('.player-counter').innerHTML = `Player Score: ${scorePlayer}`;
    document.querySelector('.computer-counter').innerHTML = `Computer Score: ${scoreComputer}`;
};

const Results = {
    Win: 'Du gewinnst!!!',
    Lose: 'Computer gewinnt!!!',
    Draw: 'Unentschieden!!!'
};

const computerChoice = () => {
    const randomValue = Math.floor(Math.random() * 3);
    
    switch(randomValue) {
        case 0: 
        return 'Schere';

        case 1: 
        return 'Stein';

        case 2: 
        return 'Papier';
    }
}

const game = (player, computer) => {
    if(player === computer) {
        return Results.Draw;
    }

    if((player === 'Schere' && computer === 'Papier') ||
      (player === 'Stein' && computer === 'Schere') || 
      (player === 'Papier' && computer === 'Stein')) {
        return Results.Win;
    } else {
        return Results.Lose;
    }
}


document.getElementById('schere').addEventListener('click', () => {
    if(!isGameRunning) {
    startGame('Schere');
    }
})
document.getElementById('stein').addEventListener('click', () => {
    if(!isGameRunning) {
    startGame('Stein');
    }
})
document.getElementById('papier').addEventListener('click', () => {
    if(!isGameRunning) {
    startGame('Papier');
    }
})

const resetGame = () => {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('computer-container').innerHTML = '';
    document.getElementById('result').textContent = '';

    document.getElementById('player-container').style.visibility = 'hidden';
    document.getElementById('computer-container').style.visibility = 'hidden';
    document.querySelector('.text-field').style.visibility = 'hidden';
};

const winGame = () => {
    if(scorePlayer === 3) {
      alert('Du hast gewonnen!!!');
      resetScore();
    } else if(scoreComputer === 3) {
      alert('Computer hat gewonnen!!!');
      resetScore();
    }
};

const resetScore = () => {
    scorePlayer = 0;
    scoreComputer = 0;
    updateScore();
};


const startGame = (choice) => {
    isGameRunning = true;
    const computer = computerChoice();
    const endResult = game(choice, computer)

    if(endResult === Results.Win) {
        scorePlayer++;
    } else if(endResult === Results.Lose) {
        scoreComputer++;
    }

    document.getElementById('player-container').style.visibility = 'visible';

    setTimeout(() => {
        document.getElementById('computer-container').style.visibility = 'visible';
    }, 600)
    
    setTimeout(() => {
        document.getElementById('player-container').innerHTML = `<img src="./${choice} Icon.png" class="icon">`;
     }, 300)
     
    setTimeout(() => {
        document.getElementById('computer-container').innerHTML = `<img src="./${computer} Icon.png" class="icon">`;
     }, 1200)

    setTimeout(() => {
        document.querySelector('.text-field').style.visibility = 'visible';
    }, 1800)  

    setTimeout(() => {
        document.getElementById('result').textContent = endResult;
     }, 1800);

    setTimeout(() => {
        updateScore();
    }, 2000);

    setTimeout(() => {
       winGame();
    }, 2100);

    setTimeout(() => {
        resetGame();
        isGameRunning = false;
     },3000)
}
