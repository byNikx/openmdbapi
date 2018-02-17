import { TvCreditsPerson } from '.'

let tvCreditsPerson

beforeEach(async () => {
  tvCreditsPerson = await TvCreditsPerson.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tvCreditsPerson.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tvCreditsPerson.id)
    expect(view.title).toBe(tvCreditsPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tvCreditsPerson.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tvCreditsPerson.id)
    expect(view.title).toBe(tvCreditsPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
