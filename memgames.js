/*const cards = [
  { id: 1, isClicked: false },
  { id: 2, isClicked: false },
  { id: 3, isClicked: false },
  { id: 4, isClicked: false },
  { id: 5, isClicked: false },
  { id: 6, isClicked: false },
  { id: 7, isClicked: false },
  { id: 8, isClicked: false },
  { id: 9, isClicked: false },
  { id: 10, isClicked: false },
  { id: 11, isClicked: false },
  { id: 12, isClicked: false },
];
console.log(cards);

let currentScore = 0;
let highScore = 0;

let clickedCards = [];
//ovaj araray cuva kartice koje su kliknute, id
//ako se klikne na ist karticu, game over, return
clickedCards.push(id)
currentScore++
//ako nije kliknuta, nastavak igre i povecane skora

currentScore > highScore → update highScore
promesa karte //?
update()
*/

const DOMelements = {
  cardElements: document.querySelectorAll(".card"),
  currentScoreSpan: document.querySelector(".paragraph1 span"),
  highScoreSpan: document.querySelector(".paragraph2 span"),
};

const cardManager = {
  cards: [
    { id: 1, isClicked: false },
    { id: 2, isClicked: false },
    { id: 3, isClicked: false },
    { id: 4, isClicked: false },
    { id: 5, isClicked: false },
    { id: 6, isClicked: false },
    { id: 7, isClicked: false },
    { id: 8, isClicked: false },
    { id: 9, isClicked: false },
    { id: 10, isClicked: false },
    { id: 11, isClicked: false },
    { id: 12, isClicked: false },
  ],
  currentScore: 0,
  highScore: 0,

  getCardById(id) {
    return this.cards.find((card) => card.id === id);
  },

  clickCard(id) {
    const card = this.getCardById(id);

    if (card.isClicked) {
      this.gameOver();
      return;
    }

    card.isClicked = true;
    this.currentScore++;

    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }

    this.shuffleCards();
    updateGame();
  },

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  },

  gameOver() {
    this.currentScore = 0;
    this.cards.forEach((card) => (card.isClicked = false));
    showGameOver();
    updateGame();
  },
};

function handleCardClick(e) {
  const id = Number(e.target.dataset.id);
  cardManager.clickCard(id);
}
function updateGame() {
  DOMelements.currentScoreSpan.textContent = cardManager.currentScore;
  DOMelements.highScoreSpan.textContent = cardManager.highScore;

  DOMelements.cardContainer.innerHTML = "";

  cardManager.cards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.id = card.id;
    div.textContent = card.id;
    div.addEventListener("click", handleCardClick);
    DOMelements.cardContainer.appendChild(div);
  });
}
updateGame();
