function fillElement(text) {
  var spanElement = document.createElement("span");

  spanElement.textContent = text;

  return spanElement;
}

var mySpan = fillElement("Przykładowy tekst");

document.getElementById("container").appendChild(mySpan);

console.log(mySpan);
