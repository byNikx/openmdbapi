import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ImagesMovie } from '.'

const app = () => express(apiRoot, routes)

let imagesMovie

beforeEach(async () => {
  imagesMovie = await ImagesMovie.create({})
})

test('POST /movie/images 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('POST /movie/images 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /movie/images 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /movie/images/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${imagesMovie.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(imagesMovie.id)
})

test('GET /movie/images/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /movie/images/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${imagesMovie.id}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(imagesMovie.id)
  expect(body.title).toEqual('test')
})

test('PUT /movie/images/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${imagesMovie.id}`)
  expect(status).toBe(401)
})

test('PUT /movie/images/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /movie/images/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${imagesMovie.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /movie/images/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${imagesMovie.id}`)
  expect(status).toBe(401)
})

test('DELETE /movie/images/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
