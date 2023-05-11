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

async function generateSuggestions(participantQuantity, activityType, price) {
  let request = new URL("http://www.boredapi.com/api/activity");

  if (participantQuantity !== "random") {
    request.searchParams.append("participants", participantQuantity);
  }

  if (activityType !== "random") {
    request.searchParams.append("type", activityType);
  }

  if (price !== "random") {
    if (price === "$") {
      request.searchParams.append("minprice", "0");
      request.searchParams.append("maxprice", "0.33");
    } else if (price === "$$") {
      request.searchParams.append("minprice", "0.33");
      request.searchParams.append("maxprice", "0.66");
    } else if (price === "$$$") {
      request.searchParams.append("minprice", "0.66");
      request.searchParams.append("maxprice", "1");
    }
  }

  await fillCards(request);
}

document.addEventListener("DOMContentLoaded", manipulateDOM);

function manipulateDOM() {
  addFormElements();
  addEmptyCards();
}

async function addFormElements() {
  const form = document.getElementById("activity-requester");
  const participantQuantity = document.getElementById(
    "participant-quantity-selection"
  );
  const activityType = document.getElementById("activity-type-selection");
  const price = document.getElementById("price-range-seclection");

  numberSelection.forEach((number) => {
    const option = document.createElement("option");
    option.textContent = number;
    participantQuantity.appendChild(option);
  });

  activities.forEach((activity) => {
    const option = document.createElement("option");
    option.textContent = activity;
    activityType.appendChild(option);
  });

  priceRange.forEach((dollarAmount) => {
    const option = document.createElement("option");
    option.textContent = dollarAmount;
    price.appendChild(option);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    generateSuggestions(
      participantQuantity.value,
      activityType.value,
      price.value
    );
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

async function fillCards(request) {
  const cardNodes = document.querySelectorAll("#activity-collection .card");

  for (let i = 0; i < cardNodes.length; i++) {
    const card = cardNodes[i];
    await getRequest(request);
  }
}

async function getRequest(request) {
  await fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
