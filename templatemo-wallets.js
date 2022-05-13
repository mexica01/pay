const initBg = (autoplay = true) => {
    const bgImgsNames = ['https://raw.githubusercontent.com/mexica01/pay/main/diagoona-bg-1.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall2.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall3.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall4.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall5.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall6.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall7.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall8.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall9.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall10.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall11.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall12.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall13.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall14.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall15.jpg', 'https://raw.githubusercontent.com/mexica01/pay/main/wall16.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 8000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});