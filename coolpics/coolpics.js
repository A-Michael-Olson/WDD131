//coolpics.js

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    const image = e.target;
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    const largesrc = src.replace('-sml', '-full');
    modalImage.setAttribute('src', largesrc);
    modalImage.setAttribute('alt', alt);
    modal.showModal();

}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});