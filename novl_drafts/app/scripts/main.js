require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        backbone: {
            deps: ['underscore'],
            exports: 'backbone'
        }
    }
});

require(['app', 'jquery', 'underscore', 'backbone'], function (app, $) {
    'use strict';

    $('.accordian-nav li').on('click', function(e) {
        $('.accordian-nav li').addClass('shrunk');
        $(e.currentTarget).removeClass('shrunk');
    });

    $('.menu').on('click', function(e) {
        if ($('body').hasClass('menu-shown')) {
            setTimeout(function() {
                $('.glass').remove();
            }, 400);
        } else {
            $('.container').append('<div class="glass menu-glass"></div>');
        }
        setTimeout(function(){
            $('body').toggleClass('menu-shown');
        }, 1);
    });

    $('body').on('click touchstart', '.menu-glass', function(e) {
        $('.menu').trigger('click');
    });
    $('body').on('click touchstart', '.new-glass', function(e) {
        $('header .add').trigger('click');
    });
    $('.main-nav li').on('click', function(e) {
        $('.main-nav li').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    // $('header .add').on('click', function() {
    //     var $el = $(this);

    //     if ($el.hasClass('active')) {
    //         $el.text('New');
    //         setTimeout(function() {
    //             $('.glass').remove();
    //         }, 400);
    //     } else {
    //         $el.text('Cancel');
    //         $('.container').append('<div class="glass new-glass"></div>');
    //     }
    //     $el.toggleClass('active');
    //     $('.new-story-wrap').removeClass('hidden');
    //     setTimeout(function(){
    //         $('body').toggleClass('new-story-shown');
    //     }, 1);
    // });
});
