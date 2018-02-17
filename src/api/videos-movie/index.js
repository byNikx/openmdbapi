import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export VideosMovie, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /movie/videos Create videos movie
 * @apiName CreateVideosMovie
 * @apiGroup VideosMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Videos movie's title.
 * @apiSuccess {Object} videosMovie Videos movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Videos movie not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /movie/videos Retrieve videos movies
 * @apiName RetrieveVideosMovies
 * @apiGroup VideosMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of videos movies.
 * @apiSuccess {Object[]} rows List of videos movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /movie/videos/:id Retrieve videos movie
 * @apiName RetrieveVideosMovie
 * @apiGroup VideosMovie
 * @apiSuccess {Object} videosMovie Videos movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Videos movie not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /movie/videos/:id Update videos movie
 * @apiName UpdateVideosMovie
 * @apiGroup VideosMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Videos movie's title.
 * @apiSuccess {Object} videosMovie Videos movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Videos movie not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /movie/videos/:id Delete videos movie
 * @apiName DeleteVideosMovie
 * @apiGroup VideosMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Videos movie not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
