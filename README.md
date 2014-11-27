# chai-date

An extension to the [chai](http://chaijs.com/) assertion library
that provides a set of date assertions.

## Installation

```bash
$ npm install chai-date
```

## Usage

Use the assertions with chai's `expect` or `should` assertions.

## Assertions

### `today`
Asserts that the given date is today

```javascript
var date1 = new Date(2014, 3, 1, 13, 30, 6, 7)
var date2 = new Date(2014, 3, 1, 13, 30, 40)
date1.should.be.closeToDate(date2, 44, 'seconds')
```
## Authors [James Pike][0]

[0]: http://chilon.net

## License
MIT
