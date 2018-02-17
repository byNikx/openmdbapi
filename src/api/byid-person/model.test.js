import { ByidPerson } from '.'

let byidPerson

beforeEach(async () => {
  byidPerson = await ByidPerson.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = byidPerson.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidPerson.id)
    expect(view.title).toBe(byidPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = byidPerson.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidPerson.id)
    expect(view.title).toBe(byidPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
