import { ByidTv } from '.'

let byidTv

beforeEach(async () => {
  byidTv = await ByidTv.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = byidTv.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidTv.id)
    expect(view.title).toBe(byidTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = byidTv.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidTv.id)
    expect(view.title).toBe(byidTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
