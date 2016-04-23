
document.querySelector('.filter-days').addEventListener('click', function(e) {
    if (e.target.className == 'nkjh') {
        var hideShow = document.querySelectorAll('.hide-show'),
            show = '.' + e.target.getAttribute('data-day');

        for (var i = 0; i < hideShow.length; i++) {
            hideShow[i].style.display = 'none';
        }

        document.querySelector(show).style.display = 'block';
    }
});