const btnGame = document.querySelectorAll(".btnGame");
  let pScore = 0;
  let cScore = 0;

  btnGame.forEach((btnGame) => {
    btnGame.addEventListener("click", function () {
      const playerSelection = this.value;

      const play = ["Rock", "Paper", "Scissors"];
      const computerSelection = play[Math.floor(Math.random() * 3)];
      
      playRound(playerSelection, computerSelection);
      updateScore();
      if (checkWinner()) {
        pScore = cScore = 0;
        updateScore();
      }
  });
});

function playRound(playerSelection, computerSelection ) {
  const currentMatch = `${playerSelection} vs ${computerSelection}`;
  // Tie check
  if (playerSelection === computerSelection) {
    alert(`${currentMatch} is a Tie`);
     return;
  }
  
  // Rock
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }   

  // Paper
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  // Scissors
  else {
    if (computerSelection === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
 }
}

function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}



   