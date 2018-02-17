import { PopularTv } from '.'

let popularTv

beforeEach(async () => {
  popularTv = await PopularTv.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = popularTv.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(popularTv.id)
    expect(view.title).toBe(popularTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = popularTv.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(popularTv.id)
    expect(view.title).toBe(popularTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
