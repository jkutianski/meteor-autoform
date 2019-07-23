import { Random } from 'meteor/random'

Template.afRadio_bootstrap3.helpers({
  atts: function selectedAttsAdjust() {
    var atts = _.clone(this.atts);
    if (this.selected) {
      atts.checked = '';
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
