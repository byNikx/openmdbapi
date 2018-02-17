import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export GenreTv, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /genre/tv/list Create genre tv
 * @apiName CreateGenreTv
 * @apiGroup GenreTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Genre tv's title.
 * @apiSuccess {Object} genreTv Genre tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre tv not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /genre/tv/list Retrieve genre tvs
 * @apiName RetrieveGenreTvs
 * @apiGroup GenreTv
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of genre tvs.
 * @apiSuccess {Object[]} rows List of genre tvs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
//  query(),
  indexRemote)

/**
 * @api {get} /genre/tv/list/:id Retrieve genre tv
 * @apiName RetrieveGenreTv
 * @apiGroup GenreTv
 * @apiSuccess {Object} genreTv Genre tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre tv not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /genre/tv/list/:id Update genre tv
 * @apiName UpdateGenreTv
 * @apiGroup GenreTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Genre tv's title.
 * @apiSuccess {Object} genreTv Genre tv's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre tv not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /genre/tv/list/:id Delete genre tv
 * @apiName DeleteGenreTv
 * @apiGroup GenreTv
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Genre tv not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
