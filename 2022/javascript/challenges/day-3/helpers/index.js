function getCharacterValue (char) {
  return char === char.toUpperCase() ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;
}

module.exports = {
  getCharacterValue,
}