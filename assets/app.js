// Theme Script
$(document).ready(function(){
    // const userRole = 'admin'
    // if (userRole === 'admin') {
    //     $('body').addClass('admin-theme');
    // } else if (userRole === 'reseller') {
    //     $('body').addClass('reseller-theme');
    // } else if(userRole === 'user'){
    //     $('body').addClass('user-theme')
    // }

    var storedTheme = localStorage.getItem('Theme')
    if (storedTheme) {
        $('body').addClass(storedTheme)
    }

    $('.set-theme').on('click', function () {
        var cur = $(this)
        var setTheme = cur.attr('set-theme');
        
        $('body').removeClass()
        localStorage.setItem('Theme', setTheme)
        newTheme = localStorage.getItem('Theme')
        $('body').addClass(newTheme)
    })

})


// Sidebar Script
$(document).ready(function () {
    if ($(window).width() < 960) {
        $('.sidebar').addClass('hide-sidebar');
        $('.main-container').addClass('full-container');
    }

    $('.sidebar-toggle').on('click', function(){
        $('.sidebar').toggleClass('hide-sidebar')
        $('.main-container').toggleClass('full-container')
        var icon = $(this).find('i');
        icon.toggleClass('fa-bars fa-times me-1');
    })
    $(window).resize(function () {
        if ($(window).width() < 960) {
            $('.sidebar').addClass('hide-sidebar');
            $('.main-container').addClass('full-container');
        } else {
            $('.sidebar').removeClass('hide-sidebar');
            $('.main-container').removeClass('full-container');
        }
    });

    $(document).ready(function () {
        $('.side-menu2').on('click', function () {
            var $this = $(this);
            var $sideNav2 = $this.next('.side-nav-2');
            var $sideArrow = $this.find('.fa-angle-right');

            $('.side-nav-2').not($sideNav2).slideUp(200).removeClass('show');
            $('.side-menu2 .fa-angle-right').not($sideArrow).removeClass('rotate-icon');

            $sideNav2.stop(true, true).slideToggle(200).toggleClass('show');
            $sideArrow.toggleClass('rotate-icon');
        });

        $(document).on('click', '.side-menu3', function () {
            var $this = $(this);
            var $sideNav3 = $this.next('.side-nav-3');
            var $sideArrow = $this.find('.fa-angle-right');

            $('.side-nav-3').not($sideNav3).slideUp(200).removeClass('show');
            $('.side-menu3 .fa-angle-right').not($sideArrow).removeClass('rotate-icon');

            $sideNav3.stop(true, true).slideToggle(200).toggleClass('show');
            $sideArrow.toggleClass('rotate-icon');
        });
    });

    var currentUrl = window.location.href;

    $('.side-link, .side-link2, .side-link3').each(function () {
        var linkHref = $(this).attr('href');

        if (currentUrl.indexOf(linkHref) !== -1) {
            $(this).closest('.side-item').addClass('active');

            var sideNav2 = $(this).closest('.side-nav-2');
            var sideNav3 = $(this).closest('.side-nav-3');

            if (sideNav2.length > 0) {
                sideNav2.addClass('show');
                sideNav2.closest('.side-item').find('> .side-link').addClass('active');
            }

            if (sideNav3.length > 0) {
                sideNav3.addClass('show');
                sideNav3.closest('.side-nav-2').addClass('show');
                sideNav3.closest('.side-item').find('> .side-link').addClass('active');
                sideNav3.closest('.side-item').find('> .side-link').addClass('active');
            }

            $(this).closest('li').addClass('active');
        }
    });
})

$(document).ready(function () {
    function toggleTheme() {
        var theme = $('body').attr('data-bs-theme');
        if (theme === 'light') {
            $('body').attr('data-bs-theme', 'dark');
            $('.theme-mode i').removeClass('fa-moon').addClass('fa-lightbulb');
        } else {
            $('body').attr('data-bs-theme', 'light');
            $('.theme-mode i').removeClass('fa-lightbulb').addClass('fa-moon');
        }
        localStorage.setItem('theme', $('body').attr('data-bs-theme'));
    }

    $('.theme-mode').on('click', function (event) {
        event.preventDefault();
        toggleTheme();
    });

    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $('body').attr('data-bs-theme', savedTheme);
        if (savedTheme === 'dark') {
            $('.theme-mode i').removeClass('fa-moon').addClass('fa-lightbulb');
        }
    }
});