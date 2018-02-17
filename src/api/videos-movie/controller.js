import { success, notFound } from '../../services/response/'
import { VideosMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  VideosMovie.create(body)
    .then((videosMovie) => videosMovie.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  VideosMovie.count(query)
    .then(count => VideosMovie.find(query, select, cursor)
      .then((videosMovies) => ({
        count,
        rows: videosMovies.map((videosMovie) => videosMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  VideosMovie.findById(params.id)
    .then(notFound(res))
    .then((videosMovie) => videosMovie ? videosMovie.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  VideosMovie.findById(params.id)
    .then(notFound(res))
    .then((videosMovie) => videosMovie ? Object.assign(videosMovie, body).save() : null)
    .then((videosMovie) => videosMovie ? videosMovie.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  VideosMovie.findById(params.id)
    .then(notFound(res))
    .then((videosMovie) => videosMovie ? videosMovie.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `movie/${req.params.id}/videos`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}