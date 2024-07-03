module.exports = function (config = {}) {
  var { db } = config

  return {
    register: async function (error) {
      if (!error) return
      var { name, message, data } = error
      return db('issue').create({ name, message, data })
    },
    clear: async function () {
      return db('issue').delete()
    }
  }
}
