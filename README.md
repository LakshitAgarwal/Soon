
# Coming Soon Landing Page

This repository contains the code for a "coming soon" landing page designed to collect user email addresses for future notifications. It features a looping background video, a prominent email subscription form, and a dynamic typewriter effect.

## Features

*   **Looping Background Video:** Provides an engaging visual element.
*   **Email Subscription Form:** Collects user email addresses for notifications.
*   **Dynamic Typewriter Effect:** Adds a visually appealing introduction.
*   **Form Submission via Formspree:** Seamlessly handles email submissions using the Formspree service.
*   **Responsive Design:** Ensures optimal viewing experience across various devices.

## Project Structure

The project is structured as follows:

*   `index.html`: The main HTML file for the landing page.
*   `script.js`:  Contains the JavaScript logic for the typewriter effect and form submission.
*   `hello.html`: An alternative HTML file that includes a form and associated JavaScript for submitting user-provided email and message data.

## Setup Instructions

To run this project locally, simply open `index.html` in your web browser. No server-side setup is required.

*Note: The email submission functionality relies on Formspree. You may need to configure your own Formspree account and update the endpoint URL in `script.js` or `hello.html` to ensure proper form submission.*

## Core Functionality

### index.html

The `index.html` file sets up the basic structure of the landing page, including:

*   HTML boilerplate and meta tags for responsiveness.
*   Links to external stylesheets (`style.css`, not included in summaries).
*   Integration of the background video.
*   The "Get Notified" email subscription form.
*   Links to the JavaScript file (`script.js`).

### script.js

The `script.js` file implements the following core features:

*   **Typewriter Effect:** The `typeWriter` and `eraseText` functions create the dynamic typewriter effect on the specified element.
*   **Form Submission:** The `submitForm` function handles the form submission process:
    *   Collects the email address from the form.
    *   Constructs a JSON payload.
    *   Sends a POST request to the Formspree endpoint (`https://formspree.io/f/xdoqeggq`).
    *   Displays a success message upon successful submission.
    *   Handles errors and network issues.

### hello.html

The `hello.html` file provides an alternative form submission mechanism:

*   Defines a form with fields for email and message.
*   Includes a `submitForm()` JavaScript function to handle form submission.
*   Sends a POST request to the Formspree endpoint "https://formspree.io/f/xpzvpddj".
*   Displays alerts indicating success or failure.
*   Resets the form on successful submission.

## Dependencies

*   This project relies on the Formspree service for handling form submissions. No other external dependencies are required for basic functionality.
