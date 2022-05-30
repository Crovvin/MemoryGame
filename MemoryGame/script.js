const gameContainer = document.getElementById("game");
let matchingCards = 0;
let toClick = false; 
let matchCard1 = null;
let matchCard2 = null;
let clicks = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "black",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "yellow",
  "black",
  "pink"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  if (toClick) return;
  if (event.target.classList.contains("flipped")) return;
  let chosenCard = event.target;
  chosenCard.style.backgroundColor = chosenCard.classList[0];

  if (!matchCard1 || !matchCard2) {
    chosenCard.classList.add("flipped");
    matchCard1 = matchCard1 || chosenCard;
    matchCard2 = chosenCard === matchCard1 ? null : chosenCard;
  }

  if (matchCard1 && matchCard2) {
    toClick = true;
    let match1 = matchCard1.className;
    let match2 = matchCard2.className;

    if (match1 === match2) {
        matchingCards = matchingCards + 2;
        matchCard1.removeEventListener("click", handleCardClick);
        matchCard2.removeEventListener("click", handleCardClick);
        toClick = false;
        matchCard1 = null;
        matchCard2 = null;
        clicks = clicks + 1;
        document.getElementById("clicks").innerHTML = clicks;
    } else {
        setTimeout(function() {
            matchCard1.style.backgroundColor = "";
            matchCard2.style.backgroundColor = "";
            matchCard1.classList.remove("flipped");
            matchCard2.classList.remove("flipped");
            toClick = false;
            matchCard1 = null;
            matchCard2 = null;
            clicks = clicks + 1;
            document.getElementById("clicks").innerHTML = clicks;
        }, 1000)
    }
  }

  if (COLORS.length === matchingCards) {
      alert("You won!");
  }

}

createDivsForColors(shuffledColors);