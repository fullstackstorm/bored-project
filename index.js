// Available participants is 1-5.
/* Cost breakdown:
$ = 0-0.33
$$ = 0.33-0.66
$$$ = 0.66-1
*/
const activities = [
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

document.addEventListener("DOMContentLoaded", manipulateDOM);

function manipulateDOM() {
  // Grab the div.
  // Create six divs.
  // Load them to the DOM.
  const activityCollection = document.getElementById("activity-collection");

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const suggestedActivity = document.createElement("h3");
    suggestedActivity.innerText = "To be determined.";

    const price = document.createElement("h3");

    const accessibility = document.createElement("h3");

    card.append(suggestedActivity, price, accessibility);
    activityCollection.appendChild(card);
  }
}
