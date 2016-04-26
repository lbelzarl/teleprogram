document.querySelector('.filter-days').addEventListener('click', function(e) {
    // TODO: использовать classList
    if (e.target.classList.contains('filter-days__link')) {
        var active = document.querySelectorAll('.filter-days__link')

        //Заменяем "активной" выбранную ссылку
        for (var i = 0; i < active.length; i++) {
            active[i].classList.remove('active');
        }

        e.target.classList.add('active');

        var hideShow = document.querySelectorAll('.hide-show'),
            show = '.' + e.target.getAttribute('data-day');

        //Скрываем все блоки и делаем видимой выбранную
        for (var i = 0; i < hideShow.length; i++) {
            hideShow[i].style.display = 'none';
        }

        document.querySelector(show).style.display = 'block';
    }
});

// TODO  переделать
/*document.querySelector('.filter-tv').addEventListener('click', function(e) {
    if (/////////TODO)) {
        document.querySelector('.hide-show').classList.add('shadow');

        var checked = document.querySelectorAll('.tv-genres__check');

        for (var i = 0; i < checked.length; i++) {
            if (checked[i].checked) {
                var genre = checked[i].value;
            }

            var genres = document.querySelectorAll('.programm');

            for (var i = 0; i < genres.length; i++) {
                if ( genre === genres[i].getAttribute('data-genre') ) {
                    genres[i].classList.add('show');
                }
            }
        }
    }
})*/