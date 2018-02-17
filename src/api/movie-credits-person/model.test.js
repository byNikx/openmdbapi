import { MovieCreditsPerson } from '.'

let movieCreditsPerson

beforeEach(async () => {
  movieCreditsPerson = await MovieCreditsPerson.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = movieCreditsPerson.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(movieCreditsPerson.id)
    expect(view.title).toBe(movieCreditsPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = movieCreditsPerson.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(movieCreditsPerson.id)
    expect(view.title).toBe(movieCreditsPerson.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
