import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export UpcomingMovies, { schema } from './model'

const router = new Router()

/**
 * @api {get} /movie/upcoming Retrieve upcoming movies
 * @apiName RetrieveUpcomingMovies
 * @apiGroup UpcomingMovies
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of upcoming movies.
 * @apiSuccess {Object[]} rows List of upcoming movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
//  query(),
  indexRemote)

export default router
