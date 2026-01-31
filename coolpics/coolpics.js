
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    const image = e.target;

    // guard: only react to images
    if (image.tagName !== 'IMG') return;

    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    const largesrc = src.replace('-sml', '-full');

    modalImage.setAttribute('src', largesrc);
    modalImage.setAttribute('alt', alt);

    modal.showModal();
    document.body.classList.add('no-scroll'); //  lock page scroll
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
    document.body.classList.remove('no-scroll'); //  unlock scroll
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
        document.body.classList.remove('no-scroll'); //  unlock scroll
    }
});

// Optional: handle ESC key close (browser fires "close" event)
modal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
});


// ===== MENU TOGGLE =====

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});