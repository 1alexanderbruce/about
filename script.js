document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Replace this with actual form handling, e.g., sending data to a server
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    this.reset();
});
