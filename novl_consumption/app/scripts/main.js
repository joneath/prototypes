require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        bootstrap: 'vendor/bootstrap',
        sticky: 'vendor/sticky'
    },
    shim: {
        backbone: {
            deps: ['underscore'],
            exports: 'backbone'
        },
        sticky: {
            deps: ['jquery'],
            exports: 'sticky'
        }
    }
});

require(['app', 'jquery', 'underscore', 'backbone', 'sticky'], function (app, $) {
    'use strict';

    $('.accordian-nav li').on('click', function(e) {
        $('.accordian-nav li').addClass('shrunk');
        $(e.currentTarget).removeClass('shrunk');
    });

    function toggleComments() {
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

    // $(".comments-wrap").sticky({topSpacing:42});

    $('.btn').on('click', function() {
        if ($('body').hasClass('join-shown')) {
            $('body').removeClass('join-shown');
            setTimeout(function() {
                $('.glass').remove();
                $('.join-modal').addClass('hidden');
            }, 450);
        } else {
            $('.join-modal').removeClass('hidden');
            $('.container').append('<div class="glass modal-glass"></div>');
            setTimeout(function() {
                $('body').addClass('join-shown');
            }, 1);
        }
    });
});
