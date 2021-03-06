var moment = require('moment');
var chai = require('chai');
var dateTime = require('..');
chai.use(dateTime);
chai.should();

describe('chai-date-promixity', function() {
  it('should assert the proximity of two dates', function() {
    var d1 = new Date(2014, 3, 1, 13, 30, 0);
    var d2 = new Date(2014, 3, 1, 13, 30, 30);
    d1.should.be.closeToDate(d2, 40);
  });

  it('should work with moments', function() {
    var d1 = moment(new Date(2014, 3, 1, 13, 30, 0));
    var d2 = moment(new Date(2014, 3, 1, 13, 30, 30));

    d1.should.be.closeToDate(d2, 40);
    d1.should.not.be.closeToDate(d2, 20);
  });

  it('should assert the lack of proximity of two dates', function() {
    var d1 = new Date(2014, 3, 1, 13, 30, 0);
    var d2 = new Date(2014, 3, 1, 13, 30, 30);
    d1.should.not.be.closeToDate(d2, 20, 'seconds');
  });
});
