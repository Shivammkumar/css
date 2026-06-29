/**
 * EV Charging Station Management System
 * JavaScript Implementation
 * 
 * This file handles:
 * - User authentication (login/register)
 * - Slot booking and management
 * - sessionStorage data persistence
 * - UI interactions
 */

// ============================================
// CONSTANTS AND CONFIGURATION
// ============================================

const TOTAL_SLOTS = 12;  // Total number of charging slots
const STORAGE_KEYS = {
    USERS: 'evcs_users',
    BOOKINGS: 'evcs_bookings',
    CURRENT_USER: 'evcs_current_user'
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Show message to user
 * @param {string} text - Message text
 * @param {string} type - Message type (success, error, info)
 */
function showMessage(text, type = 'info') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = `message ${type} show`;
    
    // Hide after 3 seconds
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 3000);
}

/**
 * Get data from sessionStorage
 * @param {string} key - Storage key
 * @returns {any} Parsed data or null
 */
function getFromStorage(key) {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

/**
 * Save data to sessionStorage
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 */
function saveToStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * Handle user login
 * @param {Event} event - Form submit event
 */
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    // Get users from storage
    const users = getFromStorage(STORAGE_KEYS.USERS) || [];
    
    // Find user with matching credentials
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Save current user
        saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
        showMessage('Login successful!', 'success');
        showDashboard();
    } else {
        showMessage('Invalid email or password', 'error');
    }
}

/**
 * Handle user registration
 * @param {Event} event - Form submit event
 */
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Validation
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Get existing users
    const users = getFromStorage(STORAGE_KEYS.USERS) || [];
    
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        showMessage('Email already registered', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    // Save user
    users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, users);
    
    // Auto login after registration
    saveToStorage(STORAGE_KEYS.CURRENT_USER, newUser);
    showMessage('Registration successful!', 'success');
    showDashboard();
}

/**
 * Switch to register form
 */
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

/**
 * Switch to login form
 */
function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

/**
 * Logout user
 */
function logout() {
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    showMessage('Logged out successfully', 'info');
    showAuthSection();
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

/**
 * Show authentication section
 */
function showAuthSection() {
    document.getElementById('authSection').style.display = 'block';
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('userInfo').style.display = 'none';
    
    // Clear forms
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

/**
 * Show dashboard section
 */
function showDashboard() {
    const currentUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
    
    if (!currentUser) {
        showAuthSection();
        return;
    }
    
    // Update UI
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('userName').textContent = currentUser.name;
    
    // Render slots and bookings
    renderSlots();
    renderMyBookings();
}

/**
 * Render charging slots
 */
function renderSlots() {
    const grid = document.getElementById('slotsGrid');
    const currentUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
    const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS) || [];
    
    grid.innerHTML = '';
    
    for (let i = 1; i <= TOTAL_SLOTS; i++) {
        // Check if slot is booked
        const booking = bookings.find(b => b.slotNumber === i);
        const isBooked = booking !== null;
        const isMyBooking = booking && booking.userId === currentUser.id;
        
        // Create slot element
        const slot = document.createElement('div');
        slot.className = 'slot-card';
        
        if (isMyBooking) {
            slot.classList.add('your-booking');
            slot.innerHTML = `
                <div class="slot-number">⚡ Slot ${i}</div>
                <div class="slot-status">Your Booking</div>
            `;
        } else if (isBooked) {
            slot.classList.add('booked');
            slot.innerHTML = `
                <div class="slot-number">🔋 Slot ${i}</div>
                <div class="slot-status">Booked</div>
            `;
        } else {
            slot.classList.add('available');
            slot.innerHTML = `
                <div class="slot-number">⚡ Slot ${i}</div>
                <div class="slot-status">Available</div>
            `;
            // Add click handler for available slots
            slot.onclick = () => bookSlot(i);
        }
        
        grid.appendChild(slot);
    }
}

/**
 * Book a charging slot
 * @param {number} slotNumber - Slot number to book
 */
function bookSlot(slotNumber) {
    const currentUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
    
    if (!currentUser) {
        showMessage('Please login to book a slot', 'error');
        return;
    }
    
    // Get existing bookings
    const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS) || [];
    
    // Check if user already has a booking
    const existingBooking = bookings.find(b => b.userId === currentUser.id);
    
    if (existingBooking) {
        showMessage('You already have a booking. Cancel it first to book another slot.', 'error');
        return;
    }
    
    // Create new booking
    const newBooking = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        userEmail: currentUser.email,
        slotNumber,
        bookedAt: new Date().toISOString()
    };
    
    // Save booking
    bookings.push(newBooking);
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
    
    showMessage(`Slot ${slotNumber} booked successfully!`, 'success');
    renderSlots();
    renderMyBookings();
}

/**
 * Render user's bookings
 */
function renderMyBookings() {
    const bookingsList = document.getElementById('myBookingsList');
    const currentUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
    const bookings = getFromStorage(STORAGE_KEYS.BOOKINGS) || [];
    
    // Filter bookings for current user
    const userBookings = bookings.filter(b => b.userId === currentUser.id);
    
    if (userBookings.length === 0) {
        bookingsList.innerHTML = '<p class="no-bookings">No bookings yet. Click on an available slot to book.</p>';
        return;
    }
    
    // Render bookings
    bookingsList.innerHTML = userBookings.map(booking => {
        const date = new Date(booking.bookedAt);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();
        
        return `
            <div class="booking-item">
                <div class="booking-info">
                    <strong>⚡ Slot ${booking.slotNumber}</strong>
                    <p>Booked on: ${formattedDate} at ${formattedTime}</p>
                </div>
                <button class="btn-cancel" onclick="cancelBooking(${booking.id})">Cancel</button>
            </div>
        `;
    }).join('');
}

/**
 * Cancel a booking
 * @param {number} bookingId - Booking ID to cancel
 */
function cancelBooking(bookingId) {
    let bookings = getFromStorage(STORAGE_KEYS.BOOKINGS) || [];
    
    // Remove booking
    bookings = bookings.filter(b => b.id !== bookingId);
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
    
    showMessage('Booking cancelled successfully', 'success');
    renderSlots();
    renderMyBookings();
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application
 */
function init() {
    // Check if user is already logged in
    const currentUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);
    
    if (currentUser) {
        showDashboard();
    } else {
        showAuthSection();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);