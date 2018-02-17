import { TopRatedMovies } from '.'

let topRatedMovies

beforeEach(async () => {
  topRatedMovies = await TopRatedMovies.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = topRatedMovies.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(topRatedMovies.id)
    expect(view.title).toBe(topRatedMovies.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = topRatedMovies.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(topRatedMovies.id)
    expect(view.title).toBe(topRatedMovies.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
