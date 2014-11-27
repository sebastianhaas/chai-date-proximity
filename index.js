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

    var date = this._obj;
    if (date.toDate)
      date = date.toDate();

    var start = moment(otherDate).subtract(nUnits, units).toDate();
    var end = moment(otherDate).add(nUnits, units).toDate();

    this.assert(
      start <= date && date <= end,
      'expected ' + pp(date) + ' to be between ' + pp(start) + ' and ' + pp(end),
      'expected ' + pp(date) + ' to not be between ' + pp(start) + ' and ' + pp(end)
    );
  });
};
