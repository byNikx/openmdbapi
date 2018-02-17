import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { GenreMovie } from '.'

const app = () => express(apiRoot, routes)

let genreMovie

beforeEach(async () => {
  genreMovie = await GenreMovie.create({})
})

test('POST /genre/movie/list 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('POST /genre/movie/list 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /genre/movie/list 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /genre/movie/list/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${genreMovie.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(genreMovie.id)
})

test('GET /genre/movie/list/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /genre/movie/list/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${genreMovie.id}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(genreMovie.id)
  expect(body.title).toEqual('test')
})

test('PUT /genre/movie/list/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${genreMovie.id}`)
  expect(status).toBe(401)
})

test('PUT /genre/movie/list/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /genre/movie/list/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${genreMovie.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /genre/movie/list/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${genreMovie.id}`)
  expect(status).toBe(401)
})

test('DELETE /genre/movie/list/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
