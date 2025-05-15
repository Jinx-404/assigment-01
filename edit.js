// Greeting logic
window.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();

    // Set greeting based on time
    let greeting = "Hello";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    // Format time in 24-hour format without seconds
    const formattedTime = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    if (greetingEl) {
        greetingEl.textContent = `${greeting} — ${formattedTime}`;
    }
});



// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-row');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+?\d{7,15}$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert("Please enter a valid phone number.");
                return;
            }

            alert("Form submitted successfully!");
        });
    }
});

// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleTheme');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️ ';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDark ? '☀️' : '🌙 ';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
const headline = document.getElementById('headline');
headline.textContent = "Welcome to My Portfolio!";

function remove(){
     let m = document.getElementsByClassName("message-box")[0];
     m.classList.remove("hover")
}
function go(){
    let box = document.getElementsByClassName("message-box")[0];
    box.classList.add("hover");

  }