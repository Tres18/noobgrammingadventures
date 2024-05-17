document.addEventListener('DOMContentLoaded', (event) => {
    const openPopup = document.getElementById('open-popup');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Show the popup when the anchor tag is clicked
    openPopup.addEventListener('click', (event) => {
        event.preventDefault();
        popup.style.display = 'block';
    });

    // Close the popup when the close button (x) is clicked
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
