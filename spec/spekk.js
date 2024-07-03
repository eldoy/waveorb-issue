var mongowave = require('mongowave')

module.exports = async function () {
  var db = await mongowave('waveorb-issue-test')
  var issue = require('../index.js')({ db })

  var $ = { db, issue }

  return { $ }
}
