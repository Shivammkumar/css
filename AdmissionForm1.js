document.addEventListener('DOMContentLoaded', () => {
    const validateButton = document.getElementById('validateButton');
    const resetButton = document.getElementById('resetButton');
    const showFormButton = document.getElementById('showFormButton');
    const jsonOutput = document.getElementById('jsonOutput');

    validateButton.addEventListener('click', validateForm);
    resetButton.addEventListener('click', resetForm);

    const inputs = document.querySelectorAll('#admissionForm input, #admissionForm textarea, #admissionForm select');
    inputs.forEach(input => {
        input.addEventListener('focus', (event) => {
            event.target.style.backgroundColor = '#e6f7ff';
        });
        input.addEventListener('blur', (event) => {
            event.target.style.backgroundColor = '';
        });
    });

    function resetForm() {
        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
        showFormButton.disabled = true;
        jsonOutput.style.display = 'none';
        alert('Form has been reset.');
    }

    function validateForm() {
        let isValid = true;
        let errorMessage = '';

        const name = document.getElementById('name').value.trim();
        if (name.length < 3) {
            isValid = false;
            errorMessage += 'Name must be at least 3 characters long.\n';
        }

        const phone = document.getElementById('phone').value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            isValid = false;
            errorMessage += 'Phone number must be 10 digits.\n';
        }

        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += 'Invalid email format.\n';
        }

        const pincode = document.getElementById('pincode').value.trim();
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(pincode)) {
            isValid = false;
            errorMessage += 'Pin code must be 6 digits.\n';
        }

        if (!document.getElementById('terms').checked) {
            isValid = false;
            errorMessage += 'You must agree to the terms and conditions.\n';
        }

        if (isValid) {
            showFormButton.disabled = false;
            alert('Form validated successfully!');

            const formData = {
                name,
                phone,
                email,
                address: document.getElementById('address').value.trim(),
                pincode,
                dob: document.getElementById('dob').value,
                course: document.getElementById('course').value,
                gap: document.getElementById('gap').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                terms: document.getElementById('terms').checked
            };

            showFormButton.addEventListener('click', () => {
                jsonOutput.style.display = 'block';
                jsonOutput.value = JSON.stringify(formData, null, 4);
            });

        } else {
            alert(errorMessage);
            showFormButton.disabled = true;
            jsonOutput.style.display = 'none';
        }
    }
});