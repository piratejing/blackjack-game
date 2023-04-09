const player = {
  name: "Alan",
  chips: 1000,
};

const allCards = [];
const sum = 0;
const hasBlackJack = false;
const isAlive = false;
const message = "";
const startButton = document.querySelector(".start-button");
const newCardButton = document.querySelector(".new-card");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardEl = document.getElementById("card-el");

const playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  allCards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  dealHand();
}

function getRandomCard() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function dealHand() {
  allCards.forEach(() => {
    cardEl.textContent = "Cards: " + allCards;
  });

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const newCard = getRandomCard();
    sum += newCard;
    allCards.push(newCard);
    dealHand();
  }
}

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
