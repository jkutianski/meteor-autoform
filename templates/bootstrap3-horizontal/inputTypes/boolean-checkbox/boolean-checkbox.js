Template["afCheckbox_bootstrap3-horizontal"].helpers({
  attsPlusSpecialClass: function () {
    var atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, "autoform-checkbox-margin-fix");

    // remove required for accesibility issues
    delete atts.required;

    return atts;
  },
  useLeftLabel: function () {
    return this.atts.leftLabel;
  },
  lf: function lf() {
    // change id for <label> & <input>
    this.atts.id = Random.id();
    return { for: this.atts.id };
  }
});
