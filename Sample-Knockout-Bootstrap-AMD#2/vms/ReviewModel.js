/// <reference path="../lib/knockout.js" />
/// <reference path="../scripts/utils/popover-menu.js" />
/// <reference path="../scripts/utils/modal-dialog.js" />
/// <reference path="../scripts/utils/namespace.js" />
/// <reference path="../lib/knockout.mapping-latest.debug.js" />
 
define(function (require) {
    "use strict";

        // Imports
    var ko = require('knockout'), 
        EditReviewViewModel = require('../vms/EditReviewViewModel'),
        showModal = require('../scripts/utils/modal-dialog'),    
        showPopOverMenu = require('../scripts/utils/popover-menu'),
        mapping = require('knockoutmapping');


    var ReviewModel = function (data) {
        this.text = ko.observable(data.text);
        this.important = ko.observable(data.important);
    };

    ReviewModel.prototype.edit = function () {
        // Convert this view model's observable properties into a plain JavaScript object.
        var noteData = mapping.toJS(this);
        // Create an editor view model that will be initialized with the note data.
        var editReviewViewModel = new EditReviewViewModel(noteData);
        showModal({
            viewModel: editReviewViewModel,
            context: this
        }).then(function (updatedReviewData) {
            // Update the note view model (this) with the data
            // returned from the modal dialog.
            mapping.fromJS(updatedReviewData, {}, this);
        });
    };
    

    // Exports
    return ReviewModel;
    
});