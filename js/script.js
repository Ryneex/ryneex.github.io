let spani = document.querySelectorAll('spani')

bars.onclick = () => {
    if (side_nav.style.width == '200px' || side_nav.style.width == '') {

        side_nav.style = 'width:45px;min-width:45px;'

        spani.forEach(span => {
            setTimeout(() => {
                span.style.display = 'none'
                }, 50);
        });

    } else {

        side_nav.style = 'width:200px;min-width:200px;'

        spani.forEach(span => {
            setTimeout(() => {
            span.style.display = 'block'
            }, 100);
        });
    }
};
