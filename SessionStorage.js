document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const retrieveBtn = document.getElementById('retrieveBtn');
    const clearBtn = document.getElementById('clearBtn');
    const output = document.getElementById('output');

    // Function to save data to sessionStorage
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        
        alert('Data saved to sessionStorage!');
        form.reset();
    });

    // Function to retrieve data from sessionStorage
    retrieveBtn.addEventListener('click', () => {
        const name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
        
        if (name && email) {
            output.textContent = Name: ${name}, Email: ${email};
        } else {
            output.textContent = 'No data found in sessionStorage.';
        }
    });

    // Function to clear data from sessionStorage
    clearBtn.addEventListener('click', () => {
        sessionStorage.clear();
        //sessionStorage.removeItem('name');
        //sessionStorage.removeItem('email');
        output.textContent = '';
        alert('Data cleared from sessionStorage!');
    });
});