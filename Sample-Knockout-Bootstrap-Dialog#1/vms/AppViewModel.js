/// <reference path="namespace.js" />
/// <reference path="AddReviewViewModel.js" />
/// <reference path="~/Client/Shared/knockout.js" />
/// <reference path="~/Client/Shared/utils/showModal.js" />

(function () {
    "use strict";

    // Imports
    var showModal = utils.showModal;
    var showPopOverMenu = utils.showPopOverMenu;
    var AddReviewViewModel = app.AddReviewViewModel;
    var ReviewViewModel = app.ReviewViewModel;

    // The root view model for the application
    var AppViewModel = function() {
        this.notes = ko.observableArray(); 
    };

    AppViewModel.prototype.addReview = function () {
        showModal({
            viewModel: new AddReviewViewModel(),
            context: this // Set context so we don't need to bind the callback function
        }).then(this._addReviewToReviews);
    };

    AppViewModel.prototype._addReviewToReviews = function(newReviewData) {
        this.notes.push(new ReviewViewModel(newReviewData));

        showPopOverMenu();
    };


    // Exports
    app.AppViewModel = AppViewModel;
    
}());