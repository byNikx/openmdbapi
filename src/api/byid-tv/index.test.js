import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ByidTv } from '.'

const app = () => express(apiRoot, routes)

let byidTv

beforeEach(async () => {
  byidTv = await ByidTv.create({})
})

test('POST /tv 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('POST /tv 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /tv 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /tv/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${byidTv.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(byidTv.id)
})

test('GET /tv/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /tv/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${byidTv.id}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(byidTv.id)
  expect(body.title).toEqual('test')
})

test('PUT /tv/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${byidTv.id}`)
  expect(status).toBe(401)
})

test('PUT /tv/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /tv/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${byidTv.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /tv/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${byidTv.id}`)
  expect(status).toBe(401)
})

test('DELETE /tv/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
