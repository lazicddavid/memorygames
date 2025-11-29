const DOMelements = {
  cardElements: document.querySelectorAll(".card"),
  currentScoreSpan: document.querySelector(".paragraph1 span"),
  highScoreSpan: document.querySelector(".paragraph2 span"),
  cardContainer: document.querySelector(".card-container"),
};

function createCard(id, src) {
  return {
    id,
    src,
    isClicked: false,

    changeIsClicked() {
      this.isClicked = !this.isClicked;
    },

    getId() {
      return this.id;
    },

    getSrc() {
      return this.src;
    },
  };
}

const cardManager = {
  cards: [
    createCard(1, "abraham.png"),
    createCard(2, "bird.png"),
    createCard(3, "coach feeatu.png"),
    createCard(4, "doofus rick.png"),
    createCard(5, "gear head.png"),
    createCard(6, "michel.png"),
    createCard(7, "president.png"),
    createCard(8, "prince nebulon.png"),
    createCard(9, "rick sanchez.png"),
    createCard(10, "scary terry.png"),
    createCard(11, "snuffles.png"),
    createCard(12, "squanchy.png"),
  ],
  currentScoreValue: 0,
  highScoreValue: 0,

  get currentScore() {
    return this.currentScoreValue;
  },

  get highScore() {
    return this.highScoreValue;
  },

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
    this.currentScoreValue++;

    if (this.currentScoreValue > this.highScoreValue) {
      this.highScoreValue = this.currentScoreValue;
    }

    this.shuffleCards();
    updateGame();
  },

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  },

  gameOver() {
    this.currentScoreValue = 0;
    this.cards.forEach((card) => (card.isClicked = false));
    this.shuffleCards();
    updateGame();
  },
};

function onCardClick(e) {
  const cardDiv = e.target.closest(".card");
  if (!cardDiv) return;

  const id = Number(cardDiv.dataset.id);
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

    const img = document.createElement("img");
    img.src = card.src;

    div.appendChild(img);
    div.addEventListener("click", onCardClick);

    DOMelements.cardContainer.appendChild(div);
  });
}

updateGame();

//napraviti get elemente za current score i total score
//staviti u areju UUUID i pozvati ga 12 puta
