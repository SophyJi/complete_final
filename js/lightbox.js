
    // Correct the selector to target elements with class 'lb'
    var images = document.querySelectorAll('.lb');
    var currentIndex = 0; 

    // Function to open the lightbox
    function openLightbox(imgElement) {
        var src = imgElement.getAttribute('src'); // Get the source of the image
        var alt = imgElement.getAttribute('alt'); // Get the alt text of the image
        document.getElementById('lightboxModal').style.display = 'block';
        document.getElementById('lightboxImage').setAttribute('src', src);
        document.getElementById('caption').innerText = alt;

        // Add the animation class if the window width is greater than or equal to 710px
        if (window.innerWidth >= 710) {
            document.getElementById('lightboxImage').classList.add('lightbox-zoom-animation');
        }

        // Update currentIndex to the index of the clicked image
        currentIndex = Array.from(images).indexOf(imgElement);
    }

    // Function to close the lightbox
    function closeLightbox() {
        document.getElementById('lightboxModal').style.display = 'none';
        document.getElementById('lightboxImage').classList.remove('lightbox-zoom-animation');
    }

    function nextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        openLightbox(images[currentIndex]);
    }

    function previousImage() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        openLightbox(images[currentIndex]);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        }
    });