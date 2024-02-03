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

function submitForm() {
  // Get form data
  const email = document.getElementById("email").value;

  // Validate data if needed

  // Construct the payload
  const payload = {
    email: email,
    // Add other form fields as needed
  };

  // Make an asynchronous POST request using Fetch API
  fetch("https://formspree.io/f/xdoqeggq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally, reset the form
        document.getElementById("myForm").reset();
      } else {
        alert("Error submitting form. Please try again.");
      }
    })
    .catch((error) => {
      // Handle network error
      console.error("Network error:", error);
      alert("Network error. Please try again.");
    });
}
