import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { ByidPerson } from '.'

const app = () => express(apiRoot, routes)

let byidPerson

beforeEach(async () => {
  byidPerson = await ByidPerson.create({})
})

test('POST /person 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('POST /person 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /person 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /person/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${byidPerson.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(byidPerson.id)
})

test('GET /person/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /person/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${byidPerson.id}`)
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(byidPerson.id)
  expect(body.title).toEqual('test')
})

test('PUT /person/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${byidPerson.id}`)
  expect(status).toBe(401)
})

test('PUT /person/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /person/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${byidPerson.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /person/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${byidPerson.id}`)
  expect(status).toBe(401)
})

test('DELETE /person/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
