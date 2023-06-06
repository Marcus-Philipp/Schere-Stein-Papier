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
        return 'Unentschieden!!!';
    }

    if((player === 'Schere' && computer === 'Papier') ||
      (player === 'Stein' && computer === 'Schere') || 
      (player === 'Papier' && computer === 'Stein')) {
        return 'Du gewinnst!!!';
    } else {
        return 'Computer gewinnt!!!'
    }
}

document.getElementById('schere').addEventListener('click', () => {
    startGame('Schere');
})
document.getElementById('stein').addEventListener('click', () => {
    startGame('Stein');
})
document.getElementById('papier').addEventListener('click', () => {
    startGame('Papier');
})

const resetGame = () => {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('computer-container').innerHTML = '';
    document.getElementById('result').textContent = '';

    document.getElementById('player-container').style.visibility = 'hidden';
    document.getElementById('computer-container').style.visibility = 'hidden';
    document.querySelector('.text-field').style.visibility = 'hidden';
}


const startGame = (choice) => {
    const computer = computerChoice();
    const endResult = game(choice, computer)

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
        resetGame();
     },3000)
}
