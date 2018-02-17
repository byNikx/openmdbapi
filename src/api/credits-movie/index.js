import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export CreditsMovie, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /movie/credits Create credits movie
 * @apiName CreateCreditsMovie
 * @apiGroup CreditsMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Credits movie's title.
 * @apiSuccess {Object} creditsMovie Credits movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Credits movie not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /movie/credits Retrieve credits movies
 * @apiName RetrieveCreditsMovies
 * @apiGroup CreditsMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of credits movies.
 * @apiSuccess {Object[]} rows List of credits movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /movie/credits/:id Retrieve credits movie
 * @apiName RetrieveCreditsMovie
 * @apiGroup CreditsMovie
 * @apiSuccess {Object} creditsMovie Credits movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Credits movie not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /movie/credits/:id Update credits movie
 * @apiName UpdateCreditsMovie
 * @apiGroup CreditsMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Credits movie's title.
 * @apiSuccess {Object} creditsMovie Credits movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Credits movie not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /movie/credits/:id Delete credits movie
 * @apiName DeleteCreditsMovie
 * @apiGroup CreditsMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Credits movie not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
