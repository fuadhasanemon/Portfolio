$(document).ready(function () {
    var windowWidth = $(window).width();
    var window_width = $(window).width();
    var TM = TweenMax;
    var tl = new TimelineMax();
    console.log('Designed & Developed by Saif');
    $('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');


    gsap.registerPlugin(true);
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.querySelector("#js-scroll");
    const locoScroll = new LocomotiveScroll({
        el: scroller,
        lerp:0.1,
        scrollFromAnywhere: true,
        smoothMobile: false,
        reloadOnContextChange:true,
        // touchMultiplier:6,
        getDirection: true,
        scrollingClass: "isScroll",
        smooth: true,
        resetNativeScroll: true,
        // initPosition: { x: 0, y: 0 },


    });
    locoScroll.on("scroll", ScrollTrigger.update);
    locoScroll.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction);
    });
    ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: scroller.style.transform ? "transform" : "fixed"
    });

    locoScroll.on('scroll', (position) => {
        if ((position.scroll.y) > 150) {
            document.querySelector('.mainmenu').classList.add('ShowIt');
        } else {
            document.querySelector('.mainmenu').classList.remove('ShowIt');
        }
        if ((position.scroll.y) > 650) {
            // document.querySelector('.clickMen').classList.add('show');
            // document.querySelector('.whatsappSticky').classList.add('show');
        } else {
            // document.querySelector('.clickMen').classList.remove('show');
            // document.querySelector('.whatsappSticky').classList.remove('show');
        }
    });

    locoScroll.on('scroll', (position) => {
        if ((position.scroll.y) <= -150) {
            document.querySelector('.mainmenu').classList.remove('ShowIt');
            document.querySelector('.mainmenu').classList.remove('animateIn');
            document.querySelector('.mainmenu').classList.remove('animateOut');
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    // gsap.utils.toArray().forEach(box => {
    //     gsap.to(box, {
    //         backgroundColor: '#ffffff',
    //         scrollTrigger: {
    //             scroller: scroller,
    //             trigger: box,
    //             start: 'top center',
    //             toggleActions: 'play none none reverse',
    //             pin: box, // pinning the boxes
    //         }
    //     });
    // });
    // gsap.to(document.querySelector(".isParallax"), {
    //     scrollTrigger: {
    //         trigger: document.querySelector(".isParallax"),
    //         scroller: "#js-scroll",
    //         scrub: true,
    //         start: "top bottom",
    //         end: "bottom 100%",
    //
    //     },
    //     y: "50px"
    // });






    if($('#hambuger_menu').length > 0){
        $('#hambuger_menu').click(function () {
            $('#menuItem').addClass('open');
        });


        $('#closeMenu').click(function () {
            $('#menuItem').removeClass('open');
        });
    }





    // $('#navi ul li a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //
    //
    //     $(this).each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
    //
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top + 90
    //     }, 500, 'swing');
    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    //     ScrollTrigger.refresh();
    // });







    $(".typed").typed({
        strings: ["Web developer."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });


    //------------ Light gallery
    if ($('.Light').length > 0) {
        $(".Light").lightGallery({
            selector: 'a'
        });
    }

    //------------ Light gallery with thumbnail
    if ($('.LightThumb').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }

    //------------ nice select
    if ($('.Select').length > 0) {
        $('.Select select').niceSelect();
    }


    //------------ tab change in mobile using nice select
    $('.TabSelect').on('change', function (e) {
        $('.TabMenus li a').eq($(this).val()).tab('show');
    });


    //------ form validation
    $('form .dynamic_submit_btn').click(function () {
        $('.form-overlay').addClass('doit');
    });

    $(document).on('click', '.form-overlay.doit,.ok-class', function () {
        $('.form-overlay.doit, .form-message-container').hide();
    });

    $('.btn , button').click(function () {
        $('.form-overlay.doit, .form-message-container').removeAttr('style');
    });

    $('.dynamic_submit_btn').on('click', function () {
        setTimeout(function () {
            $('.form-overlay.doit').hide();
        }, 15000);
    });
    //------ form validation


//-------------- animation

    // if (767 < window_width) {
        // blast init
        if ($('.textUp').length > 0) {
            $('.textUp').blast({delimiter: "character"});
        }
        if ($('.fadeRightWord').length > 0) {
            $('.fadeRightWord').blast({delimiter: "word"});
        }

        if ($('.fadeRight').length > 0) {
            $('.fadeRight').blast({
                delimiter: "character"
            });
        }

        var get_first = $('.home-slider'),
            get_half = $(window).height() / 1.1;

        $(window).scroll(function () {
            var w_scroll = $(window).scrollTop();
            if ($('.anim').length > 0) {
                $('.anim').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('anim-active');
                    }
                    // if (get_first.position().top === w_scroll) {
                    //     $('.anim').removeClass('anim-active');
                    // }

                });
            }
        })

    // }
    $('.anim').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('anim-active');
        }
    });


//-------------- animation end





    // sticky menu
    screenPosition = 0;
    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        if (screenPosition - scrolled > 0) {
            $("body").addClass("ShowIt");
        } else {
            $("body").removeClass("ShowIt");
        }
        screenPosition = scrolled;
    });
    var first_section = $('body').position().top + 250;
    $(window).scroll(function () {
        if ($(window).scrollTop() <= first_section) {
            $("body").removeClass("ShowIt");
        }
    });



    // scroll to section
    $('#ScrollTo').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });




//============== message box start


    $(document).delegate('.msg_cont', 'click', function () {
        open_msg();
    });

    $(document).delegate('.msg_icon', 'click', function () {
        open_msg();
    });

    function open_msg() {
        $('.msg_cont_wrap').css({'width': '330px', 'height': '446px'});
        TM.to('.msg_cont', 0.2, {
            height: 580,
            width: 580,
            right: -86,
            bottom: -86,
            borderRadius: 290,
            background: 'rgba(255, 255, 255, 1)',
            onComplete: function () {

            }
        });

        TM.to('.msg_form', 0.5, {
            right: 0,
            delay: 0.2,
            onComplete: function () {
                $('.msg_cont_wrap').addClass('bx_shadow');
            }
        });

        $('.msg_cont_wrap').addClass('msg_opened');
        $('.msg_cont_wrap').removeClass('msg_closed');
    }

    $(document).delegate('.close_btn', 'click', function () {
        close_msg();

    });

    function close_msg() {
        $('.msg_cont_wrap').removeClass('bx_shadow');

        TM.to('.msg_cont', 0.2, {
            width: '50px',
            height: '50px',
            right: 35,
            bottom: 8,
            borderRadius: '100%',
            background: '#008C44',
            onComplete: function () {
                setTimeout(function () {
                    $('.msg_cont_wrap').css({'width': '120px', 'height': '120px'});

                }, 500);

            }
        });

        TM.to('.msg_form', 0.5, {
            right: -500
        });

        setTimeout(function () {
            $('.msg_cont_wrap').removeClass('msg_opened');
            $('.msg_cont_wrap').addClass('msg_closed');
        }, 500);
    }


    $('.msg_cont , .msg_icon').click(function () {
        $('.msg_cont_wrap .title').fadeIn(2000);
        $('.close_btn').fadeIn();
    })

    $('.close_btn').click(function () {
        $('.msg_cont_wrap .title,.close_btn').hide();
    })


    // line draw svg
    if ($('#LineAnim').length > 0) {
        new Vivus('LineAnim', {duration: 80});
    }


//============== message box end



});//document.ready


//------------ Device Image
function deviceImage() {
    // window min width 1401 -- large screen
    var window_width = $(window).width();
    if (1400 < window_width) {
        $('.modify-bg').each(function () {
            var large = $(this).attr('data-image-large');
            $(this).css('background', "url(" + large + ")");
        });
    }
    // window max-width 1400 -- standard screen
    if (1400 >= window_width && 992 <= window_width) {
        $('.modify-bg').each(function () {
            var standard = $(this).attr('data-image-standard');
            $(this).css('background', "url(" + standard + ")");
        });
    }
    // window max-width 991 -- mobile device
    if (991 >= window_width) {
        $('.modify-bg').each(function () {
            var small = $(this).attr('data-image-small');
            $(this).css('background', "url(" + small + ")");
        });
    }
}

deviceImage();


