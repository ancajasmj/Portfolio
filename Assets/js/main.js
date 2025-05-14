window.addEventListener('DOMContentLoaded', function() {
    var imgs = document.querySelectorAll(".certificate");
    var cls = document.querySelectorAll(".close");

    imgs.forEach(function(img) {
        img.addEventListener('click', function() {
            this.classList.add("show");
        });
    });

    cls.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            imgs.forEach(function(img) {
                img.classList.remove('show');
            });
        });
    });
});