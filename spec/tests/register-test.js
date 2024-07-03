setup(async function ({ $ }) {
  await $.db('issue').delete()
})

it('should register', async ({ $, t }) => {
  var result = await $.issue.register()
  t.equal(result, undefined)

  var issues = await $.db('issue').find()
  t.equal(issues.length, 0)

  var name = 'issue1'
  var message = 'test1'
  var data = { test: '1' }
  result = await $.issue.register({ name, message, data })
  t.equal(Object.keys(result).length, 6)
  t.equal(typeof result.id, 'string')
  t.equal(result.name, name)
  t.equal(result.message, message)
  t.deepStrictEqual(result.data, data)
  t.equal(typeof result.created_at.getTime, 'function')
  t.equal(typeof result.updated_at.getTime, 'function')

  issues = await $.db('issue').find()
  t.equal(issues.length, 1)
  t.deepStrictEqual(result, issues[0])
})
