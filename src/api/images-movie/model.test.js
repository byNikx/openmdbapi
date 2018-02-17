import { ImagesMovie } from '.'

let imagesMovie

beforeEach(async () => {
  imagesMovie = await ImagesMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = imagesMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imagesMovie.id)
    expect(view.title).toBe(imagesMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = imagesMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(imagesMovie.id)
    expect(view.title).toBe(imagesMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
