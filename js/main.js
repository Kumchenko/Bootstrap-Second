$(function () {

    // Smooth moving to desired section (must use .goto on tag a)
    $("a.goto").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

    // Parallax
    if ($(window).width() > 960)
    { 
		// Кешируем объект окна
		    $window = $(window);
		    $('[data-type="background"]').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {    
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				// Смещаем фон
				$bgobj.css('background-position-y', yPos);
			}); 
		 });	
    }

    // Slider
    if ($(".slider").length == 1) {
        $(".slider").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        });
    }

    // Hamburger
    $(".header__burger").click(function(event){
        $(".header .menu, .header__burger, .header .nav, .header .nav__col").toggleClass('active');
        $("body").toggleClass('lock');
    });


    // Modal Window "Заказать звонок"
    $(".call-btn").click(function (e) {
        $('#call-modal').arcticmodal();
    });
    
});