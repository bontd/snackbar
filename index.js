
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./snackbar.cjs.production.min.js')
} else {
  module.exports = require('./snackbar.cjs.development.js')
}
