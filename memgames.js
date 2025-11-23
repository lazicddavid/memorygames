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
function createCard(id) {
  return {
    id: id,
    isClicked: false,

    getId() {
      return this.id;
    },

    setId(newId) {
      this.id = newId;
    },

    getIsClicked() {
      return this.isClicked;
    },

    changeIsClicked() {
      this.isClicked = !this.isClicked;
    },
  };
}

const cardManager = {
  cards: [],

  addCard(card) {
    this.cards.push(card);
  },

  getCards() {
    return this.cards;
  },
};

const cards = [
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
