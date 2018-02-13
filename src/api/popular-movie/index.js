import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /movie/popular Retrieve popular movies
 * @apiName RetrievePopularMovies
 * @apiGroup PopularMovie
 * @apiUse listParams
 * @apiSuccess {Object[]} popularMovies List of popular movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

export default router
