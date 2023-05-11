// Available participants is 1-5.
/* Cost breakdown:
$ = 0-0.33
$$ = 0.33-0.66
$$$ = 0.66-1
*/
const numberSelection = ["random", 1, 2, 3, 4, 5];
const activities = [
  "random",
  "relaxation",
  "charity",
  "recreational",
  "busywork",
  "education",
  "social",
  "cooking",
  "diy",
  "music",
];
const priceRange = ["random", "$", "$$", "$$$"];

document.addEventListener("DOMContentLoaded", manipulateDOM);

function manipulateDOM() {
  addFormElements();
  addEmptyCards();
}

function addFormElements() {
  const participantQuantity = document.getElementById(
    "participant-quantity-selection"
  );

  numberSelection.forEach((number) => {
    const option = document.createElement("option");
    option.textContent = number;
    participantQuantity.appendChild(option);
  });
}

function addEmptyCards() {
  const activityCollection = document.getElementById("activity-collection");

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const suggestedActivity = document.createElement("h3");
    suggestedActivity.textContent = "To be determined.";

    const price = document.createElement("h3");

    const accessibility = document.createElement("h3");

    card.append(suggestedActivity, price, accessibility);
    activityCollection.appendChild(card);
  }
}
