/* jshint esversion: 6 , camelcase: false */
import { Random } from 'meteor/random';

AutoForm.addInputType("boolean-radios", {
  template: "afBooleanRadioGroup",
  valueOut: function () {
    if (this.find('input[value=false]').is(":checked")) {
      return false;
    } else if (this.find('input[value=true]').is(":checked")) {
      return true;
    } else if (this.find('input[value=null]').is(":checked")) {
      return null;
    }
  },
  valueConverters: {
    "string": AutoForm.valueConverters.booleanToString,
    "stringArray": AutoForm.valueConverters.booleanToStringArray,
    "number": AutoForm.valueConverters.booleanToNumber,
    "numberArray": AutoForm.valueConverters.booleanToNumberArray
  }
});

Template.afBooleanRadioGroup.helpers({
  falseAtts: function falseAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = "";
    }
    return atts;
  },
  trueAtts: function trueAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = "";
    }
    return atts;
  },
  nullAtts: function nullAtts() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value !== true && this.value !== false) {
      atts.checked = "";
    }
    return atts;
  },
  dsk: function () {
    return {'data-schema-key': this.atts['data-schema-key']};
  },
  lf: function lf() {
    // change id for <label> & <input>
    this.atts.id = Random.id();
    return { for: this.atts.id };
  }
});
