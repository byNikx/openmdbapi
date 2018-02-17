import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { CreditsMovie } from '.'

const app = () => express(apiRoot, routes)

let creditsMovie

beforeEach(async () => {
  creditsMovie = await CreditsMovie.create({})
})

test('POST /movie/credits 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('POST /movie/credits 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /movie/credits 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /movie/credits/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${creditsMovie.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(creditsMovie.id)
})

test('GET /movie/credits/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /movie/credits/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${creditsMovie.id}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(creditsMovie.id)
  expect(body.title).toEqual('test')
})

test('PUT /movie/credits/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${creditsMovie.id}`)
  expect(status).toBe(401)
})

test('PUT /movie/credits/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /movie/credits/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${creditsMovie.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /movie/credits/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${creditsMovie.id}`)
  expect(status).toBe(401)
})

test('DELETE /movie/credits/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
