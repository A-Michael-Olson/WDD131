// 1. Select the form and feedback elements
const paymentForm = document.querySelector('#paymentForm');
const feedbackElement = document.querySelector('#formFeedback');

// 2. Validation functions
function isCardNumberValid(number) {
    // Only accept the specific number from the assignment
    return number === '1234123412341234';
}

function isDateValid(month, year) {
    const today = new Date();
    // Convert 2-digit year (YY) to 4-digit year (YYYY)
    // For example: 26 becomes 2026
    const expiryYear = 2000 + parseInt(year);
    const expiryMonth = parseInt(month);

    // Create a date object for the first day of the NEXT month
    // Then subtract one day to get the last day of the expiry month
    const expiryDate = new Date(expiryYear, expiryMonth, 0);

    // If the expiry date is before today, it's expired
    return expiryDate >= today;
}

// 3. Submit Handler
function submitHandler(event) {
    event.preventDefault();

    // Clear previous feedback
    feedbackElement.textContent = '';
    feedbackElement.style.color = 'red';

    // Get input values
    const cardNum = document.querySelector('#cardNumber').value.replace(/\s/g, ''); // Remove spaces
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;

    let errors = [];

    // Check Credit Card Number
    if (!isCardNumberValid(cardNum)) {
        errors.push('Invalid Card Number. ');
    }

    // Check Expiration Date
    if (!month || !year || !isDateValid(month, year)) {
        errors.push('The card is expired or date is invalid.');
    }

    // Check other required fields (Holder name and CVC)
    const holder = document.querySelector('#cardHolder').value;
    const cvc = document.querySelector('#cvc').value;
    if (!holder || !cvc) {
        errors.push('Please fill out all card details.');
    }

    // 4. Final Result
    if (errors.length > 0) {
        // Display errors joined by a line break
        feedbackElement.innerHTML = errors.join('<br>');
    } else {
        // Success! Clear the form and show success message
        paymentForm.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: green;">✔ Payment Successful!</h2>
                <p>Thank you for your $199 purchase.</p>
            </div>
        `;
    }
}

// 5. Attach listener
paymentForm.addEventListener('submit', submitHandler);