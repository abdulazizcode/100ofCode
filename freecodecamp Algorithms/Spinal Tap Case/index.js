/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.  */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/) // creates an array and after each space make a singe value
    .join("-")
    .toLowerCase();
}
