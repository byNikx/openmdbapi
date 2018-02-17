import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export ByidPerson, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /person Create byid person
 * @apiName CreateByidPerson
 * @apiGroup ByidPerson
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid person's title.
 * @apiSuccess {Object} byidPerson Byid person's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid person not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /person Retrieve byid people
 * @apiName RetrieveByidPeople
 * @apiGroup ByidPerson
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of byid people.
 * @apiSuccess {Object[]} rows List of byid people.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /person/:id Retrieve byid person
 * @apiName RetrieveByidPerson
 * @apiGroup ByidPerson
 * @apiSuccess {Object} byidPerson Byid person's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid person not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /person/:id Update byid person
 * @apiName UpdateByidPerson
 * @apiGroup ByidPerson
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid person's title.
 * @apiSuccess {Object} byidPerson Byid person's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid person not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /person/:id Delete byid person
 * @apiName DeleteByidPerson
 * @apiGroup ByidPerson
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Byid person not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
