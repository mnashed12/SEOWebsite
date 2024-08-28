const header = document.querySelector('.header');

function handleScroll() {
    if (window.scrollY === 0) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('mousemove', function(event) {
    if (event.clientY < 50) {
        header.classList.add('visible');
    } else if (window.scrollY > 0) {
        header.classList.remove('visible');
    }
});

function enlargeImage(element) {
    const img = element.querySelector('img');
    const enlargedImage = document.getElementById('enlargedImage');
    const enlargedImg = enlargedImage.querySelector('img');

    enlargedImg.src = img.src;
    enlargedImage.style.display = 'flex';
}

function closeImage() {
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.style.display = 'none';
}

document.getElementById('enlargedImage').addEventListener('click', function(event) {
    if (event.target === this) {
        closeImage();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.getElementById('contactModal');
    const contactButton = document.querySelector('.contact-button');
    let scrollPosition = 0;

    contactButton.addEventListener('click', function() {
        scrollPosition = window.scrollY;
        contactModal.style.display = 'block';
    });

    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
            window.scrollTo(0, scrollPosition);
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    });

    window.addEventListener('hashchange', function() {
        if (!location.hash || location.hash === '#') {
            contactModal.style.display = 'none';
            window.scrollTo(0, scrollPosition);
        }
    });

    if (location.hash === '#contactModal') {
        history.replaceState(null, null, ' ');
    }
});

document.getElementById('ctaButton').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block';
});
