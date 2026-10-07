// 12-dom-write — your work goes in this file.
//
// The lesson is example.js:   npm run open 12
// See your own page with:     npm run open 12 exercise
// Check your work with:       npm test 12
//
// exercise.html is written for you and must not be edited. It gives you an
// empty <ul id="list">, an "Add a notebook" button (#add) and a "Reset"
// button (#reset).
//
// The first four are started for you. The LAST one has no code — you write it.
//
// Two of these need "the card whose h3 says X". There is no CSS selector for
// that, so it is the Array.from + find pattern from module 11's example.
// Writing it twice is fine; pulling it out into a small function of its own is
// also fine. Either way, remember it can come back undefined.

/**
 * Adds one product card to the end of the list.
 *
 * The card must be an <li> with the class `card`, containing:
 *   an <h3> holding the name, and
 *   a <p class="price"> holding the price followed by " EGP".
 *
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * @param {string} name
 * @param {number} price in EGP
 * @returns {void}
 */
export function addProduct(name, price) {
  // Get the list
  const list = document.querySelector("#list");

  // Create the card
  const card = document.createElement("li");
  card.classList.add("card");

  // Create the heading
  const heading = document.createElement("h3");
  heading.textContent = name;

  // Create the price
  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  // Put everything together
  card.append(heading);
  card.append(priceTag);

  // Add the card to the page
  list.append(card);
}

/**
 * Removes the card with that name, if there is one.
 * Does nothing at all if there is not.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  // Get all cards
  const cards = Array.from(document.querySelectorAll(".card"));

  // Find the correct card
  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  // Remove it if it exists
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out, by adding the class `sold-out`.
 * Does nothing if there is no such card.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  // Get all cards
  const cards = Array.from(document.querySelectorAll(".card"));

  // Find the correct card
  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  // Add the sold-out class
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 *
 * @returns {void}
 */
export function clearProducts() {
  // Get every card
  const cards = document.querySelectorAll(".card");

  // Remove every card
  for (const card of cards) {
    card.remove();
  }
}

/**
 * Attaches the click listeners to the buttons.
 *
 * @returns {void}
 */
export function wireButtons() {
  // Add button
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  // Reset button
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}