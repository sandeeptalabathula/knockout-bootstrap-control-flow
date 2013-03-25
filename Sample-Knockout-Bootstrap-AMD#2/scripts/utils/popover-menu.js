/// <reference path="../../lib/knockout.js" />
/// <reference path="../../lib/require.js" />
/// <reference path="../../lib/bootstrap.js" />
 
define(['knockout', 'jquery', 'bootstrap'], function (ko) {
    "use strict";

    ko.bindingHandlers.hoverToggle = {
        update: function (element, valueAccessor) {
            var css = valueAccessor();

            ko.utils.registerEventHandler(element, "mouseover", function () {
                ko.utils.toggleDomNodeCssClass(element, ko.utils.unwrapObservable(css), true);
            });

            ko.utils.registerEventHandler(element, "mouseout", function () {
                ko.utils.toggleDomNodeCssClass(element, ko.utils.unwrapObservable(css), false);
            });
        }
    };

    return function showPopOverMenu(options) {
        $('.some_element').popover(
            {
                placement: 'right',
                offset: 15,
                trigger: 'manual',
                delay: { show: 350, hide: 100 },
                html: true,
            }
          );
        var timer,
            popover_parent;
        function hidePopover(elem) {
            $(elem).popover('hide');
        }
        $('.some_element').hover(
            function () {
                var self = this;
                clearTimeout(timer);
                $('.popover').hide(); //Hide any open popovers on other elements.
                popover_parent = self
                $(self).popover('show');
            },
            function () {
                var self = this;
                timer = setTimeout(function () { hidePopover(self) }, 300);
            });
        $(document).on({
            mouseenter: function () {
                clearTimeout(timer);
            },
            mouseleave: function () {
                var self = this;
                timer = setTimeout(function () { hidePopover(popover_parent) }, 300);
            }
        }, '.popover');
    };
});