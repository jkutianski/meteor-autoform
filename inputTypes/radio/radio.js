/* jshint esversion: 6 , camelcase: false */
import { Random } from 'meteor/random';

AutoForm.addInputType("radio", {
  template: "afRadio",
  valueOut: function () {
    if (this.is(":checked")) {
      return this.val();
    }
  },
  valueConverters: {
    "stringArray": AutoForm.valueConverters.stringToStringArray
  }
});

Template.afRadio.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = "";
    }

    // remove required for accesibility issues
    delete atts.required;

    return atts;
  },
  lf: function lf() {
    // change id for <label> & <input>
    this.atts.id = Random.id();
    return { for: this.atts.id };
  }
});
