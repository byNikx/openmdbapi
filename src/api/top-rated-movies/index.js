import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export TopRatedMovies, { schema } from './model'

const router = new Router()

/**
 * @api {get} /movie/top-rated Retrieve top rated movies
 * @apiName RetrieveTopRatedMovies
 * @apiGroup TopRatedMovies
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of top rated movies.
 * @apiSuccess {Object[]} rows List of top rated movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
//  query(),
  indexRemote)

export default router
