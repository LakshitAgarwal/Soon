const texts = ["Coming Soon...", "Stay Tuned!!"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeWriter() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  if (index < currentText.length) {
    letter = currentText.charAt(index);
    document.getElementById("typing-text").innerHTML += letter;
    index++;
    setTimeout(typeWriter, 200); // Adjust the typing speed here
  } else {
    setTimeout(eraseText, 1000); // Wait 1 second before erasing
  }
}

function eraseText() {
  if (index > 0) {
    letter = currentText.slice(0, index - 1);
    document.getElementById("typing-text").innerHTML = letter;
    index--;
    setTimeout(eraseText, 100); // Adjust the erasing speed here
  } else {
    index = 0;
    count++;
    setTimeout(typeWriter, 500); // Wait before typing the next text
  }
}

window.onload = typeWriter;
