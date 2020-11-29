

const btns = document.querySelectorAll('.ripple');
console.log(btns)
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let thiss = e.target;
        let x = e.clientX - thiss.offsetLeft;
        let y = e.clientY - thiss.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = 50 + '%';
        ripples.style.top = 50 + '%';

        console.log(thiss)
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 500);

    });

});

$(window).on('scroll', function () {

    var $cards = $('.card');

    $cards.each(function (i) {
        if ($(this).visible()) {
            console.log('Visible')
            $(this).addClass('active');
        }
    });

})


