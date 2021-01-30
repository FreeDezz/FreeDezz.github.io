document.addEventListener('DOMContentLoaded', function () {


    var click = document.querySelectorAll('.nav-item'),
        nav = document.querySelectorAll('.click-item '),
        namber = 0;

    nav = Array.from(nav);

    nav.forEach(function (item) {
        item.onclick = (e) => {
            var art = nav.indexOf(e.target);
            click[namber].classList.remove('activ');
            click[art].classList.add('activ');
            namber = art;
        }
    });

});
