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

// Затеняем все передачи и выделяем отмеченные фльтром 
document.querySelector('.filter-tv').addEventListener('change', function(e) {
    var genre = e.target.value,
        genres = document.querySelectorAll('.programm'),
        input = document.querySelectorAll('.tv-genres__check'),
        checked = [];

    // Итерируемся по все программам и при сключении фильтра выделяем.
    for (var i = 0; i < genres.length; i++) {
        if ( genre === genres[i].getAttribute('data-genre') ) {
            if (e.target.checked) {
                genres[i].classList.add('show');
                continue;
            }

            genres[i].classList.remove('show');
        }
    }

    // 
    for (var i = 0; i < input.length; i++) {
        if ( input[i].checked) {
            checked.push(input[i].value);
            break;
        }
    }

    if (checked.length) {
        document.querySelector('.week').classList.add('shadow');
        return;    
    }

    document.querySelector('.week').classList.remove('shadow');
});