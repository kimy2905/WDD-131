// formValidation.js

export function validateForm(form) {
    const inputs = form.querySelectorAll(".input");
    let isValid = true;
  
    // Looped through all inputs to check if they are valid
    inputs.forEach(input => {
      const parent = input.parentNode;
      if (input.value.trim() === "") {
        parent.classList.add("error");
        isValid = false;
      } else {
        parent.classList.remove("error");
      }
    });
  
    return isValid;
  }

export function handleFormSubmission(form, feedbackSection){


  document.addEventListener('DOMContentLoaded', () => {
    console.log("hey")
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form's default submission behavior

        // Retrieve values from the form inputs
        const userName = document.getElementById('name').value.trim();
        const userEmail = document.getElementById('mail').value.trim();
        const userMessage = document.getElementById('msg').value.trim();

        // Validate form fields
        if (!userName || !userEmail || !userMessage) {
            feedbackSection.innerHTML = `
                <p style="color: red;">All fields are required. Please fill out the form completely.</p>
            `;
            return;
        }

        // Hide the form and display a summary
        form.style.display = 'none';
        feedbackSection.innerHTML = `
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Message:</strong> ${userMessage}</p>
        `;
        feedbackSection.style.display = 'block';
    });
});
}