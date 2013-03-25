/// <reference path="../lib/knockout.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../scripts/utils/namespace.js" />
 
define(['knockout', 'knockoutmapping', '../scripts/utils/modal-dialog'], function (ko, mapping) {
    "use strict";

    var EditReviewViewModel = function (note) {
        // Copy note properties into this object.
        // An observable property is created for each.
        // e.g. this.text = ko.observable(note.text);
        mapping.fromJS(note, {}, this);
    };

    EditReviewViewModel.prototype.template = "EditReview";

    EditReviewViewModel.prototype.save = function () {
        this._requireModal();

        // Convert this view model's observable properties into a plain JavaScript object. 
        // Then pass that back to the calling code.
        var updatedReview = mapping.toJS(this);
        this.modal.close(updatedReview);
    };

    EditReviewViewModel.prototype.cancel = function () {
        this._requireModal();

        // Close the modal without passing any result data.
        this.modal.close();
    };

    EditReviewViewModel.prototype._requireModal = function () {
        if (!this.modal) {
            throw new Error("EditReviewViewModel must be used with the `showModal` helper function.");
        }
    };
    

    // Exports
    return EditReviewViewModel;
    
});