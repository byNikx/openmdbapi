import { PopularMovie } from '.'

let popularMovie

beforeEach(async () => {
  popularMovie = await PopularMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = popularMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(popularMovie.id)
    expect(view.title).toBe(popularMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = popularMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(popularMovie.id)
    expect(view.title).toBe(popularMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
