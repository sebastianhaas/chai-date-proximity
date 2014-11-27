var moment = require('moment');

module.exports = function(chai, _) {
  var Assertion = chai.Assertion
  var pp = _.inspect;

  /**
   * # .today
   *
   * Assert that a date is close to another date.
   *
   * @api public
   */
  Assertion.addMethod('closeToDate', function(otherDate, nUnits, units) {
    if (! units)
      units = 'seconds';

    var start = moment(otherDate).subtract(nUnits, units).toDate();
    var end = moment(otherDate).add(nUnits, units).toDate();
    var time = this._obj;

    this.assert(
      start <= time && time <= end,
      'expected ' + pp(this._obj) + ' to be between ' + pp(start) + ' and ' + pp(end),
      'expected ' + pp(this._obj) + ' to not be between ' + pp(start) + ' and ' + pp(end)
    );
  });
};
