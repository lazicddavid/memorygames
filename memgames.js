const DOMelements = {
  cardElements: document.querySelectorAll(".card"),
  currentScoreSpan: document.querySelector(".paragraph1 span"),
  highScoreSpan: document.querySelector(".paragraph2 span"),
  cardContainer: document.querySelector(".card-container"),
};

const cardManager = {
  cards: [
    { id: 1, src: "abraham.png", isClicked: false },
    { id: 2, src: "bird.png", isClicked: false },
    { id: 3, src: "coach feeatu.png", isClicked: false },
    { id: 4, src: "doofus rick.png", isClicked: false },
    { id: 5, src: "gear head.png", isClicked: false },
    { id: 6, src: "michel.png", isClicked: false },
    { id: 7, src: "president.png", isClicked: false },
    { id: 8, src: "prince nebulon.png", isClicked: false },
    { id: 9, src: "rick sanchez.png", isClicked: false },
    { id: 10, src: "scary terry.png", isClicked: false },
    { id: 11, src: "snuffles.png", isClicked: false },
    { id: 12, src: "squanchy.png", isClicked: false },
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
