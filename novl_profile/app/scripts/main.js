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

    $('.actions .edit').on('click', function(e) {
        var $target = $(e.currentTarget);

        if ($target.hasClass('edit-mode')) {
            $('.profile-cont h1, .profile-cont h2, .profile-cont p').removeAttr('contenteditable');
            $target.text('Edit Profile');
            $('.actions .cancel').addClass('hidden');
        } else {
            $('.profile-cont h1, .profile-cont h2, .profile-cont p').attr('contenteditable', true);
            $target.text('Save');
            $('.actions .cancel').removeClass('hidden');
        }
        $target.toggleClass('edit-mode');
    });
});
