setup(async function ({ $ }) {
  await $.db('issue').delete()

  await $.db('issue').create([
    { name: 'issue1', message: 'test1', data: { test: '1' } },
    { name: 'issue2', message: 'test2', data: { test: '2' } }
  ])
})

it('should clear', async ({ $, t }) => {
  var issues = await $.db('issue').find()
  t.equal(issues.length, 2)

  var result = await $.issue.clear()
  t.deepStrictEqual(result, { n: 2 })

  issues = await $.db('issue').find()
  t.equal(issues.length, 0)
})
