# chai-date

An extension to the [chai](http://chaijs.com/) assertion library that provides
a date proximity assertion.

## Installation

```bash
$ npm install chai-date
```

## Usage

Use the assertions with chai's `expect` or `should` assertions.

## Assertions

### `closeToDate`
Asserts that a date is close to another date.

```javascript
var date1 = new Date(2014, 3, 1, 13, 30, 10)
var date2 = new Date(2014, 3, 1, 13, 30, 40)
date1.should.be.closeToDate(date2, 30, 'seconds')
date1.should.be.closeToDate(date2, 30) // seconds is the default
date1.should.not.be.closeToDate(date2, 20, 'seconds')
```
## Authors [James Pike][0]

[0]: http://chilon.net

## License
MIT
