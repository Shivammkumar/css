document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupClose = document.getElementById('popupClose');
    const popupOk = document.getElementById('popupOk');
    const popupYes = document.getElementById('popupYes');
    const popupNo = document.getElementById('popupNo');
    
    let confirmClearStep = 0;

    // Function to show the popup with a message
    function showPopup(message, buttons) {
        popupMessage.innerText = message;
        popup.style.display = 'block';
        popupOk.style.display = buttons.includes('ok') ? 'inline-block' : 'none';
        popupYes.style.display = buttons.includes('yes') ? 'inline-block' : 'none';
        popupNo.style.display = buttons.includes('no') ? 'inline-block' : 'none';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
        confirmClearStep = 0;
    }

    // Save data to sessionStorage and show confirmation popup
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        
        showPopup('Data saved to sessionStorage!', ['ok']);
        form.reset();
    });

    // Retrieve data from sessionStorage and show in popup
    retrieveBtn.addEventListener('click', () => {
        const name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
        
        if (name && email) {
            showPopup(Name: ${name}, Email: ${email}, ['ok']);
        } else {
            showPopup('No data found in sessionStorage.', ['ok']);
        }
    });

    // Clear data from sessionStorage with confirmation popups
    clearBtn.addEventListener('click', () => {
        showPopup('Are you sure that you want to delete the values stored in the sessionStorage? It will delete all the data.', ['yes', 'no']);
    });

    popupYes.addEventListener('click', () => {
        if (confirmClearStep === 0) {
            showPopup('Are you absolutely sure you want to delete the sessionStorage data?', ['yes', 'no']);
            confirmClearStep++;
        } else if (confirmClearStep === 1) {
            sessionStorage.clear();
            closePopup();
            showPopup('Data cleared from sessionStorage!', ['ok']);
        }
    });

    popupNo.addEventListener('click', () => {
        if (confirmClearStep === 0) {
            closePopup();
        } else if (confirmClearStep === 1) {
            closePopup();
            showPopup('No data of sessionStorage has been deleted.', ['ok']);
        }
    });

    popupClose.addEventListener('click', closePopup);
    popupOk.addEventListener('click', closePopup);
});