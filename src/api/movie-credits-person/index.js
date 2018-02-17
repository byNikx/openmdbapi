import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export MovieCreditsPerson, { schema } from './model'

const router = new Router()

/**
 * @api {get} /person/movie-credits Retrieve movie credits people
 * @apiName RetrieveMovieCreditsPeople
 * @apiGroup MovieCreditsPerson
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of movie credits people.
 * @apiSuccess {Object[]} rows List of movie credits people.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id',
//  query(),
  indexRemote)

export default router
