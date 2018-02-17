import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export TvCreditsPerson, { schema } from './model'

const router = new Router()

/**
 * @api {get} /person/tv-credits Retrieve tv credits people
 * @apiName RetrieveTvCreditsPeople
 * @apiGroup TvCreditsPerson
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of tv credits people.
 * @apiSuccess {Object[]} rows List of tv credits people.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id',
  query(),
  indexRemote)

export default router
