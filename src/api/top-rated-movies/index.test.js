import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { TopRatedMovies } from '.'

const app = () => express(apiRoot, routes)

let topRatedMovies

beforeEach(async () => {
  topRatedMovies = await TopRatedMovies.create({})
})

test('GET /movie/top-rated 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})
