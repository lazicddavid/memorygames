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
    updateUI();
  },

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  },

  gameOver() {
    this.currentScore = 0;
    this.cards.forEach((card) => (card.isClicked = false));
    showGameOver();
    updateUI();
  },
};
