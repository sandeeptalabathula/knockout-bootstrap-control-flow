/// <reference path="../lib/knockout.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../scripts/utils/namespace.js" />

define(['knockout', 'scripts/utils/modal-dialog'], function (ko, utils) {
    "use strict";

    return function AddReviewViewModel() {
        var showPopOverMenu = showPopOverMenu;

        // Allows the user to enter the text and importance of a new review.
        this.text = ko.observable();
        this.important = ko.observable();

        this.template = "AddReview";

        this.add = function () {
            this._requireModal();

            var newReview = {
                text: this.text(),
                important: this.important()
            };
            // Close the modal, passing the new note object as the result data.
            this.modal.close(newReview);
        };

        this.cancel = function () {
            this._requireModal();

            // Close the modal without passing any result data.
            this.modal.close();
        };

        this._requireModal = function () {
            if (!this.modal) {
                throw new Error("AddReviewViewModel must be used with the `showModal` helper function.");
            }
        };
    }
});