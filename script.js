document.addEventListener('DOMContentLoaded', function() {
    var envelope = document.getElementById('envelope');
    var btnOpen = document.getElementById('open');
    // var btnReset = document.getElementById('reset');
    const img = document.querySelector('.envelope-wrapper img');
    const overlay = document.querySelector('.overlay');
    
    envelope.addEventListener('click', function() {
        event.stopPropagation();
        openEnvelope();
    });
    btnOpen.addEventListener('click', function() {
        event.stopPropagation();
        openEnvelope();
        // openImage();
    });
    // btnReset.addEventListener('click', function() {
    //     event.stopPropagation();
    //     closeEnvelope();
    //     closeImage();
    // });
    
    function openEnvelope() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
        setTimeout(openImage, 1000);
    }
    
    function closeEnvelope() {
        envelope.classList.add('close');
        envelope.classList.remove('open');
    }

    function openImage() {
        overlay.classList.add('show');
        img.style.display = 'block'; // Show the image
        // Trigger a reflow to restart the CSS animation
        void img.offsetWidth; 
        img.classList.add('show');
    }

    function closeImage() {
        img.classList.remove('show');
        img.style.display = 'none';
        overlay.classList.remove('show');
    }

    document.addEventListener('click', (event) => {
        if (img.classList.contains('show')) {
            const isClickInsideImage = img.contains(event.target);
            const isClickInsideOverlay = overlay.contains(event.target);
            const isClickInsideEnvelope = envelope.contains(event.target);
            if (!isClickInsideImage && isClickInsideOverlay && !isClickInsideEnvelope) {
                closeImage();
                closeEnvelope();
            }
        }
    });
});
