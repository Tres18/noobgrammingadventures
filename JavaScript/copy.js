// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', () => {
    const copyEmailLink = document.getElementById('copy-email');
    const copyTooltip = document.getElementById('copy-tooltip');

    copyEmailLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link action

        // Get the email address from the href attribute
        const email = copyEmailLink.getAttribute('href').substring(7); // Remove 'mailto:'

        // Copy the email address to the clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Show confirmation message
            copyTooltip.style.opacity = '1';
            // Hide the message after 2 seconds
            setTimeout(() => {
                copyTooltip.style.opacity = '0';
            }, 2000);
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    });
});
