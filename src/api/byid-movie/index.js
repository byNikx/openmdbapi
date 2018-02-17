import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export ByidMovie, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /movie Create byid movie
 * @apiName CreateByidMovie
 * @apiGroup ByidMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid movie's title.
 * @apiSuccess {Object} byidMovie Byid movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid movie not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /movie Retrieve byid movies
 * @apiName RetrieveByidMovies
 * @apiGroup ByidMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of byid movies.
 * @apiSuccess {Object[]} rows List of byid movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /movie/:id Retrieve byid movie
 * @apiName RetrieveByidMovie
 * @apiGroup ByidMovie
 * @apiSuccess {Object} byidMovie Byid movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid movie not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /movie/:id Update byid movie
 * @apiName UpdateByidMovie
 * @apiGroup ByidMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Byid movie's title.
 * @apiSuccess {Object} byidMovie Byid movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Byid movie not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /movie/:id Delete byid movie
 * @apiName DeleteByidMovie
 * @apiGroup ByidMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Byid movie not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
