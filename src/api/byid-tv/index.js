import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export ByidTv, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /tv Create byid tv
 * @apiName CreateByidTv
 * @apiGroup ByidTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid tv's title.
 * @apiSuccess {Object} byidTv Byid tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid tv not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /tv Retrieve byid tvs
 * @apiName RetrieveByidTvs
 * @apiGroup ByidTv
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of byid tvs.
 * @apiSuccess {Object[]} rows List of byid tvs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /tv/:id Retrieve byid tv
 * @apiName RetrieveByidTv
 * @apiGroup ByidTv
 * @apiSuccess {Object} byidTv Byid tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid tv not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /tv/:id Update byid tv
 * @apiName UpdateByidTv
 * @apiGroup ByidTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid tv's title.
 * @apiSuccess {Object} byidTv Byid tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid tv not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /tv/:id Delete byid tv
 * @apiName DeleteByidTv
 * @apiGroup ByidTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Byid tv not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
