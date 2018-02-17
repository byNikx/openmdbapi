import { success, notFound } from '../../services/response/'
import { ImagesMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  ImagesMovie.create(body)
    .then((imagesMovie) => imagesMovie.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ImagesMovie.count(query)
    .then(count => ImagesMovie.find(query, select, cursor)
      .then((imagesMovies) => ({
        count,
        rows: imagesMovies.map((imagesMovie) => imagesMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ImagesMovie.findById(params.id)
    .then(notFound(res))
    .then((imagesMovie) => imagesMovie ? imagesMovie.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ImagesMovie.findById(params.id)
    .then(notFound(res))
    .then((imagesMovie) => imagesMovie ? Object.assign(imagesMovie, body).save() : null)
    .then((imagesMovie) => imagesMovie ? imagesMovie.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ImagesMovie.findById(params.id)
    .then(notFound(res))
    .then((imagesMovie) => imagesMovie ? imagesMovie.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `movie/${req.params.id}/images`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}