import { VideosMovie } from '.'

let videosMovie

beforeEach(async () => {
  videosMovie = await VideosMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = videosMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(videosMovie.id)
    expect(view.title).toBe(videosMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = videosMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(videosMovie.id)
    expect(view.title).toBe(videosMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
