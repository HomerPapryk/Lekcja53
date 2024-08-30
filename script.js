function fillElement(text) {
  const spanElement = document.createElement("span");
  spanElement.textContent = text;
  return spanElement;
}

const mySpan = fillElement("Przykładowy tekst");
document.getElementById("container").appendChild(mySpan);

console.log(mySpan);
