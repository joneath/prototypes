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

    $('.upload').on('click', function() {
        var bgs = [
            'http://interfacelift.com/wallpaper/D47cd523/03315_oregonspaintedhills_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03316_banffaurora_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03314_mesa_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03313_monumentvalley_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03312_thetetons_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03308_yellowstonebison_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03307_sfnighttimeskyline_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03302_cinqueterre_1440x900.jpg',
            'http://interfacelift.com/wallpaper/D47cd523/03298_thehomeofthegiants_1440x900.jpg'
        ],
        bg = bgs[Math.floor((Math.random()*(bgs.length - 1))+1)];

        $('.context-wrap').removeClass('checkerboard');
        $('.context-wrap .bg').css('background-image', 'url(' + bg + ')');
    });
    $('.add-options li').on('click', function(e) {
        $('.add-options li').removeClass('active');
        $(e.currentTarget).addClass('active');

        var type = $(e.currentTarget).data('type');
        if (type === 'web') {
            $('.upload-wrap').addClass('hidden');
            $('.upload-wrap.web-content').removeClass('hidden');
        } else {
            $('.upload-wrap').addClass('hidden');
            $('.upload-wrap.upload-content').removeClass('hidden');
        }
    });

    $('.move').on('mousedown touchstart', function(e) {
        var y = $(e.currentTarget).offset().top;
        // $('.clips')
        // .css({
        //     'transform-origin': '50% ' + y + 'px 0'
        // })
        // .addClass('move-on');
        $(e.currentTarget).closest('.clip').addClass('moving');
        return false;
    });
    $('.move').on('mouseup touchend', function(e) {
        $('.clips').removeClass('move-on');
        $(e.currentTarget).closest('.clip').removeClass('moving');
        return false;
    });
    $('.actions .primary').on('click', function(e) {
        $('.empty-text').addClass('hidden');
        $('.clip').removeClass('hidden');
        setTimeout(function() {
            $('.clip').removeClass('fadeout');
        }, 1);
    });
});
