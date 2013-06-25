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
});
