import { success, notFound } from '../../services/response/'
import { ByidMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  ByidMovie.create(body)
    .then((byidMovie) => byidMovie.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ByidMovie.count(query)
    .then(count => ByidMovie.find(query, select, cursor)
      .then((byidMovies) => ({
        count,
        rows: byidMovies.map((byidMovie) => byidMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ByidMovie.findById(params.id)
    .then(notFound(res))
    .then((byidMovie) => byidMovie ? byidMovie.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ByidMovie.findById(params.id)
    .then(notFound(res))
    .then((byidMovie) => byidMovie ? Object.assign(byidMovie, body).save() : null)
    .then((byidMovie) => byidMovie ? byidMovie.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ByidMovie.findById(params.id)
    .then(notFound(res))
    .then((byidMovie) => byidMovie ? byidMovie.remove() : null)
    .then(success(res, 204))
    .catch(next)


export const indexRemote = (req, res, next) =>{
  const path = `movie/${req.params.id}`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}