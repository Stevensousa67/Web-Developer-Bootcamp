let player1Score = document.querySelector('#p1Display');
let player2Score = document.querySelector('#p2Display');
let playto = document.querySelector('#playto');
let player1Button = document.querySelector('#p1Button');
let player2Button = document.querySelector('#p2Button');
let resetButton = document.querySelector('#reset');

document.addEventListener('click', function (event) {
    if (event.target.id === 'p1Button') {
        updateScoreAndCheckWinner(player1Score, player2Score);
    } else if (event.target.id === 'p2Button') {
        updateScoreAndCheckWinner(player2Score, player1Score);
    } else if (event.target.id === 'reset') {
        resetGame();
    }
})

function updateScoreAndCheckWinner(playerScore, opponentScore) {
    playerScore.innerText = parseInt(playerScore.innerText) + 1;
    determineWinner(parseInt(playerScore.innerText), parseInt(opponentScore.innerText));
}

function resetGame() {
    playto.value = '3';
    player1Score.innerText = '0';
    player2Score.innerText = '0';
    player1Button.disabled = false;
    player2Button.disabled = false;
    player1Score.style.color = 'black';
    player2Score.style.color = 'black';
}

function determineWinner(p1Score, p2Score) {
    if (p1Score === parseInt(playto.value)) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        player1Score.style.color = 'green';
        player2Score.style.color = 'red';
    } else if (p2Score === parseInt(playto.value)) {
        player1Button.disabled = true;
        player2Button.disabled = true;
        player1Score.style.color = 'red';
        player2Score.style.color = 'green';
    }
}