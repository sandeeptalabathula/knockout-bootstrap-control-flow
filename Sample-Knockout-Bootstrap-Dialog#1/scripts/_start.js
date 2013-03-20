/// <reference path="../lib/require.js" />
/// <reference path="../lib/knockout.js" />
/// <reference path="namespace.js" />


require(function () {
    "use strict";
      
    ko.applyBindings(new app.AppViewModel());
}());