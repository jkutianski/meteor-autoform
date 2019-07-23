/* jshint esversion: 6 , camelcase: false */
import { Random } from 'meteor/random';

AutoForm.addInputType("select-radio", {
  template: "afRadioGroup",
  valueOut: function () {
    return this.find('input[type=radio]:checked').val();
  },
  contextAdjust: function (context) {
    var itemAtts = _.omit(context.atts);

    // build items list
    context.items = [];

    // Add all defined options
    _.each(context.selectOptions, function(opt) {
      context.items.push({
        name: context.name,
        label: opt.label,
        value: opt.value,
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        _id: opt.value,
        selected: (opt.value === context.value),
        atts: itemAtts
      });
    });

    return context;
  }
});

Template.afRadioGroup.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = "";
    }
    // remove data-schema-key attribute because we put it
    // on the entire group
    delete atts["data-schema-key"];

    // remove required for accesibility issues
    delete atts.required;

    return atts;
  },
  dsk: function dsk() {
    return {
      "data-schema-key": this.atts["data-schema-key"]
    };
  },
  lf: function lf() {
    // change id for <label> & <input>
    this.atts.id = Random.id();
    return { for: this.atts.id };
  }
});
