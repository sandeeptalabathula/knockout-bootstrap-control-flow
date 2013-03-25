/// <reference path="lib/knockout.mapping-latest.debug.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../lib/knockout.js" />
/// <reference path="namespace.js" />

/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ["jquery"],
            exports: "bootstrap"
        },
        knockout: {
            exports: 'ko'
        },
        knockoutmapping: {
            deps: ["knockout"],
            exports: 'mapping'
        }
    },
    paths: {
        jquery: 'lib/jquery',
        bootstrap: 'lib/bootstrap',
        knockout: 'lib/knockout',
        knockoutmapping: 'lib/knockout.mapping-latest.debug'
    }
    //enforceDefine: true
});

require(['knockout', 'vms/AppViewModel', 'lib/domReady!'], function (ko, AppViewModel, s) {
    "use strict";
      
    ko.applyBindings(new AppViewModel());
});