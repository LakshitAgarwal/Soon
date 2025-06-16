
# Infuturum - Coming Soon Page

## Overview

Infuturum is a simple "Coming Soon" page designed to capture user interest and collect email addresses for future notifications. The page features a visually appealing looping background video and a form for users to submit their email. It also includes a dynamic typewriter-style text animation to engage visitors.

## Core Features

*   **Visually Engaging Design:** Features a looping background video to capture user attention.
*   **Email Collection:**  Allows users to submit their email address to receive notifications.
*   **Dynamic Text Animation:** Displays a sequence of messages with a typewriter effect using JavaScript.
*   **Form Submission Handling:** Asynchronously submits email addresses to a Formspree endpoint.

## Project Structure

*   `index.html`:  The main HTML file, serving as the entry point for the application. Contains the page layout, background video, email submission form, and the target `h1` element for the dynamic text.
*   `script.js`:  Contains the JavaScript code responsible for the typewriter animation and handling form submissions.
*   `style.css`: (Not provided, but assumed) Contains CSS styles for the page layout and appearance.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone [repository_url]
    cd [repository_name]
    ```

2.  **Open `index.html` in your browser:**

    Simply double-click the `index.html` file, or serve the directory using a local web server.

## Form Submission Endpoint

The project uses Formspree for handling form submissions. Ensure that the Formspree endpoint URL in `script.js` ( `https://formspree.io/f/xdoqeggq` ) is correctly configured for your Formspree account. You may need to update this URL to your specific Formspree form endpoint to receive submissions.

## Technologies Used

*   HTML
*   CSS
*   JavaScript
*   Formspree API

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
