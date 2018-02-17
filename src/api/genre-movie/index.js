import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export GenreMovie, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /genre/movie/list Create genre movie
 * @apiName CreateGenreMovie
 * @apiGroup GenreMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Genre movie's title.
 * @apiSuccess {Object} genreMovie Genre movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre movie not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /genre/movie/list Retrieve genre movies
 * @apiName RetrieveGenreMovies
 * @apiGroup GenreMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of genre movies.
 * @apiSuccess {Object[]} rows List of genre movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  //query(),
  indexRemote)

/**
 * @api {get} /genre/movie/list/:id Retrieve genre movie
 * @apiName RetrieveGenreMovie
 * @apiGroup GenreMovie
 * @apiSuccess {Object} genreMovie Genre movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre movie not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /genre/movie/list/:id Update genre movie
 * @apiName UpdateGenreMovie
 * @apiGroup GenreMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Genre movie's title.
 * @apiSuccess {Object} genreMovie Genre movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Genre movie not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /genre/movie/list/:id Delete genre movie
 * @apiName DeleteGenreMovie
 * @apiGroup GenreMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Genre movie not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
