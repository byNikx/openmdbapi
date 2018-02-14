import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'
export PopularMovie, { schema } from './model'

const router = new Router()

/**
 * @api {get} /movie/popular Retrieve popular movies
 * @apiName RetrievePopularMovies
 * @apiGroup PopularMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of popular movies.
 * @apiSuccess {Object[]} rows List of popular movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

export default router
