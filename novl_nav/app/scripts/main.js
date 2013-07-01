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
            $('.container').append('<div class="glass"></div>');
        }
        setTimeout(function(){
            $('body').toggleClass('menu-shown');
        }, 1);
    });

    $('body').on('click touchstart', '.glass', function(e) {
        $('.menu').trigger('click');
    });
    // $('.menu').trigger('click');
});
