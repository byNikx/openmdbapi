import { CreditsMovie } from '.'

let creditsMovie

beforeEach(async () => {
  creditsMovie = await CreditsMovie.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = creditsMovie.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(creditsMovie.id)
    expect(view.title).toBe(creditsMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = creditsMovie.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(creditsMovie.id)
    expect(view.title).toBe(creditsMovie.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
