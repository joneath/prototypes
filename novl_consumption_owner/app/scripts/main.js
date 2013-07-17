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

    function toggleComments() {
        // if (!$('body').hasClass('comments-shown')) {
        //     $('.container').append('<div class="glass"></div>');
        // } else {
        //     setTimeout(function() {
        //         $('.glass').remove();
        //     }, 400);
        // }
        $('.comments-trigger').toggleClass('active');
        $('.comments-wrap').removeClass('hidden');
        setTimeout(function() {
            $('body').toggleClass('comments-shown');
        }, 1);
    }

    $('body').on('click touchstart', '.glass', toggleComments);

    $('.comments-trigger').on('click', toggleComments);

    $('.comments-cont .close').on('click', toggleComments);

    $('.comment-actions .favorite').on('click', function() {
        var $el = $(this),
            $a = $el.find('a');

        if ($el.hasClass('active')) {
            $a.text('Recommend');
        } else {
            $a.text('Recommended');
        }
        $el.toggleClass('active');
        $el.closest('.comment').toggleClass('liked');
    }) ;

    $('.comment-actions .report').on('click', function() {
        var $el = $(this),
            $a = $el.find('a');

        if ($el.hasClass('active')) {
            $a.text('Report');
        } else {
            $a.text('Reported');
        }

        $el.toggleClass('active');
        $el.closest('.comment').toggleClass('reported');
    });
});
