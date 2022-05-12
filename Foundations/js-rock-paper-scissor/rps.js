randomDraw = () => {
    const options = ['rock', 'paper', 'scissor'];
    randomOption = Math.floor(Math.random() * 3);
    let computer = options[randomOption];
    return computer;
}

playRound = (player, computer) => {
    console.log(player, computer);
    switch (true) {
        case (player === computer):
            return (`Both chose ${player}, it's a tie!`);
        case (player === 'scissor' && computer === 'paper'):
        case (player === 'paper' && computer === 'rock'):
        case (player === 'rock' && computer === 'scissor'):
            return (`Player's ${player} beats computer's ${computer}, player wins!`);
        case (player === 'rock' && computer === 'paper'):
        case (player === 'scissor' && computer === 'rock'):
        case (player === 'paper' && computer === 'scissor'):
            return (`Computer's ${computer} beats player's ${player}, computer wins!`);
    }
}

game = (numGames) => {
    for (let i = 0; i < numGames; i++) {
        const player = randomDraw();
        const computer = randomDraw();
        console.log(playRound(player, computer))
    }
}

game(5);