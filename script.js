// Simple gallery modal handler
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('modalImage').src = this.src;
    });
});