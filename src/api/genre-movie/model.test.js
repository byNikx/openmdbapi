import { GenreMovie } from '.'

let genreMovie

beforeEach(async () => {
  genreMovie = await GenreMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = genreMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genreMovie.id)
    expect(view.title).toBe(genreMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = genreMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genreMovie.id)
    expect(view.title).toBe(genreMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
