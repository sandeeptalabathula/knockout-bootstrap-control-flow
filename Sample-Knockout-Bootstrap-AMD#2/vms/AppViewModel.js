/// <reference path="../lib/knockout.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../scripts/utils/namespace.js" />

define(['knockout', 'vms/AddReviewViewModel', 'vms/ReviewViewModel', '../scripts/utils/modal-dialog', '../scripts/utils/popover-menu'], function (ko, AddReviewViewModel, ReviewViewModel, modal, popup) {
    "use strict";

    return function AppViewModel() {
        // Imports
        var showModal = modal;
        var showPopOverMenu = popup;
        //var AddReviewViewModel = AddReviewViewModel;
        //var ReviewViewModel = ReviewViewModel;

        // The root view model for the application
        //var AppViewModel = function () {
        this.notes = ko.observableArray();
        //};

        this.addReview = function () {
            showModal({
                viewModel: new AddReviewViewModel(),
                context: this // Set context so we don't need to bind the callback function
            }).then(this._addReviewToReviews);
        };

        this._addReviewToReviews = function (newReviewData) {
            //todo: check for the object validity
            this.notes.push(new ReviewViewModel(newReviewData));

            showPopOverMenu();
        };
    }
});