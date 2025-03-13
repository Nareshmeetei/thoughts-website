// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Thank you for subscribing with ${email}!`);
            
            // Clear the form
            this.reset();
        });
    }
}); 