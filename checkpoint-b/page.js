// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
// Import the data
import { items } from "./items.js";

/**
 * Draws an array of items into #list.
 *
 * @param {Array} list
 */
export function renderItems(list) {
  const ul = document.querySelector("#list");

  // Empty the list first
  ul.textContent = "";

  // Add one <li> per item
  for (const item of list) {
    const li = document.createElement("li");

    li.classList.add("article-card");
    li.textContent = item.name;

    ul.append(li);
  }
}

/**
 * Returns only the kitchen items.
 *
 * @returns {Array}
 */
export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

/**
 * Sets up the page.
 *
 * @returns {void}
 */
export function start() {
  // Show all items first
  renderItems(items);

  // Filter button
  const button = document.querySelector("#apply");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

// Start the page when it loads
// start();