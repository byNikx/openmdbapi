import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export SimilarMovie, { schema } from './model'

const router = new Router()

/**
 * @api {get} /movie/similar Retrieve similar movies
 * @apiName RetrieveSimilarMovies
 * @apiGroup SimilarMovie
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of similar movies.
 * @apiSuccess {Object[]} rows List of similar movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id',
//  query(),
  indexRemote)

export default router
