import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index, indexRemote } from './controller'
export PopularTv, { schema } from './model'

const router = new Router()

/**
 * @api {get} /tv/popular Retrieve popular tvs
 * @apiName RetrievePopularTvs
 * @apiGroup PopularTv
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of popular tvs.
 * @apiSuccess {Object[]} rows List of popular tvs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
//  query(),
  indexRemote)

export default router
