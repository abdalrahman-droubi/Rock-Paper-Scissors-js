const computerChoices = ["Rock", "Paper", "Scissors"];
const ChooseSection = document.getElementById("ChooseSection");
const resultSectionTitle = document.getElementById("resultSectionTitle");
const resultSectionImg1 = document.getElementById("resultSectionImg1");
const resultSectionImg2 = document.getElementById("resultSectionImg2");
const resultSection = document.getElementById("resultSection");
const againBtn = document.getElementById("againBtn");

function handleResult(userChoice) {
  ChooseSection.style.display = "none";
  resultSection.style.display = "block";
  againBtn.style.display = "block";
  let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  if (
    (computerChoice == "Rock" && userChoice == "Paper") ||
    (computerChoice == "Scissors" && userChoice == "Rock") ||
    (computerChoice == "Paper" && userChoice == "Scissors")
  ) {
    resultSectionTitle.textContent = "YOU WIN!";
    resultSectionImg1.src = `./${userChoice}.svg`;
    resultSectionImg2.src = `./${computerChoice}.svg`;
  } else if (
    (computerChoice == "Paper" && userChoice == "Rock") ||
    (computerChoice == "Rock" && userChoice == "Scissors") ||
    (computerChoice == "Scissors" && userChoice == "Paper")
  ) {
    resultSectionTitle.textContent = `YOU LOST!`;
    resultSectionImg1.src = `./${userChoice}.svg`;
    resultSectionImg2.src = `./${computerChoice}.svg`;
  } else {
    resultSectionTitle.textContent = `YOU TIED!`;
    resultSectionImg1.src = `./${userChoice}.svg`;
    resultSectionImg2.src = `./${computerChoice}.svg`;
  }
}

againBtn.addEventListener("click", () => {
  ChooseSection.style.display = "block";
  resultSection.style.display = "none";
  againBtn.style.display = "none";
  resultSectionTitle.textContent = "";
    resultSectionImg1.src = ``;
    resultSectionImg2.src = ``;
});
