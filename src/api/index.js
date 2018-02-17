import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import popularMovie from './popular-movies'
import topRatedMovies from './top-rated-movies'
import upcomingMovies from './upcoming-movies'
import similarMovie from './similar-movie'
import byidMovie from './byid-movie'
import genreMovie from './genre-movie'
import imagesMovie from './images-movie'
import videosMovie from './videos-movie'
import creditsMovie from './credits-movie'
import genreTv from './genre-tv'
import byidTv from './byid-tv'
import popularTv from './popular-tv'
import byidPerson from './byid-person'
import movieCreditsPerson from './movie-credits-person'
import tvCreditsPerson from './tv-credits-person'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */
router.use('/users', user)
router.use('/auth', auth)
router.use('/password-resets', passwordReset)
router.use('/movie/popular', popularMovie)
router.use('/movie/top-rated', topRatedMovies)
router.use('/movie/upcoming', upcomingMovies)
router.use('/movie/similar', similarMovie)
router.use('/movie', byidMovie)
router.use('/genre/movie/list', genreMovie)
router.use('/movie/images', imagesMovie)
router.use('/movie/videos', videosMovie)
router.use('/movie/credits', creditsMovie)
router.use('/genre/tv/list', genreTv)
router.use('/tv', byidTv)
router.use('/tv/popular', popularTv)
router.use('/person', byidPerson)
router.use('/person/movie-credits', movieCreditsPerson)
router.use('/person/tv-credits', tvCreditsPerson)

export default router
 