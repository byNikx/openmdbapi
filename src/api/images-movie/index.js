import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy, indexRemote } from './controller'
import { schema } from './model'
export ImagesMovie, { schema } from './model'

const router = new Router()
const { title } = schema.tree

/**
 * @api {post} /movie/images Create images movie
 * @apiName CreateImagesMovie
 * @apiGroup ImagesMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Images movie's title.
 * @apiSuccess {Object} imagesMovie Images movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Images movie not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ title }),
  create)

/**
 * @api {get} /movie/images Retrieve images movies
 * @apiName RetrieveImagesMovies
 * @apiGroup ImagesMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of images movies.
 * @apiSuccess {Object[]} rows List of images movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
// router.get('/',
//   query(),
//   index)

/**
 * @api {get} /movie/images/:id Retrieve images movie
 * @apiName RetrieveImagesMovie
 * @apiGroup ImagesMovie
 * @apiSuccess {Object} imagesMovie Images movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Images movie not found.
 */
router.get('/:id',
  indexRemote)

/**
 * @api {put} /movie/images/:id Update images movie
 * @apiName UpdateImagesMovie
 * @apiGroup ImagesMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam title Images movie's title.
 * @apiSuccess {Object} imagesMovie Images movie's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Images movie not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ title }),
  update)

/**
 * @api {delete} /movie/images/:id Delete images movie
 * @apiName DeleteImagesMovie
 * @apiGroup ImagesMovie
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Images movie not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
