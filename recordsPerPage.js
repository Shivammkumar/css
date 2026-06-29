let users = [];
let currentPage = 1;
const recordsPerPage = 5;

document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    document.getElementById('firstPage').addEventListener('click', () => navigatePage('first'));
    document.getElementById('prevPage').addEventListener('click', () => navigatePage('prev'));
    document.getElementById('nextPage').addEventListener('click', () => navigatePage('next'));
    document.getElementById('lastPage').addEventListener('click', () => navigatePage('last'));
    document.getElementById('addUser').addEventListener('click', addUser);
});

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        users = await response.json();
        displayRecords(currentPage);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayRecords(page) {
    const start = (page - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const paginatedRecords = users.slice(start, end);

    const userGrid = document.getElementById('userGrid');
    userGrid.innerHTML = '';

    paginatedRecords.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'grid-item';
        userDiv.innerHTML = `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            <button onclick="updateUser(${user.id})">Update</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userGrid.appendChild(userDiv);
    });

    updatePagination();
}

function updatePagination() {
    document.getElementById('firstPage').disabled = currentPage === 1;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === Math.ceil(users.length / recordsPerPage);
    document.getElementById('lastPage').disabled = currentPage === Math.ceil(users.length / recordsPerPage);
}

function navigatePage(direction) {
    switch (direction) {
        case 'first':
            currentPage = 1;
            break;
        case 'prev':
            if (currentPage > 1) currentPage--;
            break;
        case 'next':
            if (currentPage < Math.ceil(users.length / recordsPerPage)) currentPage++;
            break;
        case 'last':
            currentPage = Math.ceil(users.length / recordsPerPage);
            break;
    }
    displayRecords(currentPage);
}

async function addUser() {
    const newUser = {
        name: 'Amit Kumar',
        email: 'amit.kumar@chipitechnologies.com',
        phone: '123-456-7890',
        address: {
            street: 'ABC Society',
            city: 'Delhi'
        }
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        if (!response.ok) {
            throw new Error('Failed to add user');
        }

        const user = await response.json();
        users.push(user);
        displayRecords(currentPage);
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

async function updateUser(userId) {
    const updatedUser = {
        name: 'Suresh Kumar',
        email: 'Suresh.kumar@chipitechnologies.com',
        phone: '098-765-4321',
        address: {
            street: 'XYZ Society',
            city: 'Patna'
        }
    };

    try {
        const response = await fetch(https://jsonplaceholder.typicode.com/users/${userId}, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        const userIndex = users.findIndex(user => user.id === userId);
        users[userIndex] = await response.json();
        displayRecords(currentPage);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

async function deleteUser(userId) {
    try {
        const response = await fetch(https://jsonplaceholder.typicode.com/users/${userId}, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }

        users = users.filter(user => user.id !== userId);
        displayRecords(currentPage);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}