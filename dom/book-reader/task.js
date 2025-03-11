document.addEventListener('DOMContentLoaded', function() {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            fontSizeLinks.forEach(link => {
                link.classList.remove('font-size_active');
            });

            this.classList.add('font-size_active');

            book.classList.remove('book_fs-big', 'book_fs-small');

            const size = this.getAttribute('data-size');
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
});