/// <reference path="namespace.js" />
/// <reference path="~/Client/Shared/knockout.js" />

(function () {
    "use strict";
    var showPopOverMenu = utils.showPopOverMenu;

    // Allows the user to enter the text and importance of a new review.
    var AddReviewViewModel = function() {
        this.text = ko.observable();
        this.important = ko.observable();
    };

    AddReviewViewModel.prototype.template = "AddReview";
    
    AddReviewViewModel.prototype.add = function () {
        this._requireModal();
        
        var newReview = {
            text: this.text(),
            important: this.important()
        };
        // Close the modal, passing the new note object as the result data.
        this.modal.close(newReview);
    };
    
    AddReviewViewModel.prototype.cancel = function () {
        this._requireModal();
        
        // Close the modal without passing any result data.
        this.modal.close();
    };

    AddReviewViewModel.prototype._requireModal = function() {
        if (!this.modal) {
            throw new Error("AddReviewViewModel must be used with the `showModal` helper function.");
        }
    };


    app.AddReviewViewModel = AddReviewViewModel;
    
}());