$(".accordion_btn").click(function() {
    $(this).toggleClass("active");
});

$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $('.header').addClass("header_fixed");
    } else {
        $('.header').removeClass("header_fixed");
    }
});

$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        setTimeout(function(){
            $(".header__burgir").removeClass("active");
        },300);

        $(".header__navbar").removeClass("active");
        setTimeout(function(){
            $(".header").removeClass("menu-open");
        },400);
    } else {
        $(".header__burgir").addClass("active");
        setTimeout(function(){
            $(".header__burgir").addClass("rotate");
        },300);

        $(".header").addClass("menu-open");
        setTimeout(function(){
            $(".header__navbar").addClass("active");
        },1)
    }
});