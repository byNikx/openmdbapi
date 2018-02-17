import { ByidMovie } from '.'

let byidMovie

beforeEach(async () => {
  byidMovie = await ByidMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = byidMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidMovie.id)
    expect(view.title).toBe(byidMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = byidMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(byidMovie.id)
    expect(view.title).toBe(byidMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
