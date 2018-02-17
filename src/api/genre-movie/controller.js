import { success, notFound } from '../../services/response/'
import { GenreMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  GenreMovie.create(body)
    .then((genreMovie) => genreMovie.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  GenreMovie.count(query)
    .then(count => GenreMovie.find(query, select, cursor)
      .then((genreMovies) => ({
        count,
        rows: genreMovies.map((genreMovie) => genreMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GenreMovie.findById(params.id)
    .then(notFound(res))
    .then((genreMovie) => genreMovie ? genreMovie.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GenreMovie.findById(params.id)
    .then(notFound(res))
    .then((genreMovie) => genreMovie ? Object.assign(genreMovie, body).save() : null)
    .then((genreMovie) => genreMovie ? genreMovie.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GenreMovie.findById(params.id)
    .then(notFound(res))
    .then((genreMovie) => genreMovie ? genreMovie.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `genre/movie/list`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}