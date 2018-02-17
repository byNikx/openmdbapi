import { GenreTv } from '.'

let genreTv

beforeEach(async () => {
  genreTv = await GenreTv.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = genreTv.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genreTv.id)
    expect(view.title).toBe(genreTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = genreTv.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(genreTv.id)
    expect(view.title).toBe(genreTv.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
