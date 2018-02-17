import { UpcomingMovies } from '.'

let upcomingMovies

beforeEach(async () => {
  upcomingMovies = await UpcomingMovies.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = upcomingMovies.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(upcomingMovies.id)
    expect(view.title).toBe(upcomingMovies.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = upcomingMovies.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(upcomingMovies.id)
    expect(view.title).toBe(upcomingMovies.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
