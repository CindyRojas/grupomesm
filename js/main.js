$(function() {

    console.log('ohmama')
    $('.js-mainMenuCTA').on('click', function () {
        console.log(this)
            const $this = $(this);
        const href = $this.data('href');
        console.log($this)

        $('html, body').animate({
            scrollTop: ($(href).offset().top -60)
        },500);

    })
});

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const buttons = document.querySelectorAll('.js-mainMenuCTA');
    console.log(buttons);

    buttons.forEach(function (btn) {
        console.log(btn);
    })
});