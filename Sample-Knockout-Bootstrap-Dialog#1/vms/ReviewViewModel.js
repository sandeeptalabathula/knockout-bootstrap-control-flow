/// <reference path="namespace.js" />
/// <reference path="EditReviewViewModel.js" />
/// <reference path="../Shared/knockout.js" />
/// <reference path="../Shared/utils/showModal.js" />

(function() {
    "use strict";

    // Imports
    var EditReviewViewModel = app.EditReviewViewModel;
    var showModal = utils.showModal;
    

    var ReviewViewModel = function(data) {
        this.text = ko.observable(data.text);
        this.important = ko.observable(data.important);
    };

    ReviewViewModel.prototype.edit = function () {
        // Convert this view model's observable properties into a plain JavaScript object.
        var noteData = ko.mapping.toJS(this);
        // Create an editor view model that will be initialized with the note data.
        var editReviewViewModel = new EditReviewViewModel(noteData);
        showModal({
            viewModel: editReviewViewModel,
            context: this
        }).then(function (updatedReviewData) {
            // Update the note view model (this) with the data
            // returned from the modal dialog.
            ko.mapping.fromJS(updatedReviewData, {}, this);
        });
    };
    

    // Exports
    app.ReviewViewModel = ReviewViewModel;
    
}());