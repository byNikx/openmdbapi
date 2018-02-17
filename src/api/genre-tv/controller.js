import { success, notFound } from '../../services/response/'
import { GenreTv } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  GenreTv.create(body)
    .then((genreTv) => genreTv.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  GenreTv.count(query)
    .then(count => GenreTv.find(query, select, cursor)
      .then((genreTvs) => ({
        count,
        rows: genreTvs.map((genreTv) => genreTv.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  GenreTv.findById(params.id)
    .then(notFound(res))
    .then((genreTv) => genreTv ? genreTv.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  GenreTv.findById(params.id)
    .then(notFound(res))
    .then((genreTv) => genreTv ? Object.assign(genreTv, body).save() : null)
    .then((genreTv) => genreTv ? genreTv.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  GenreTv.findById(params.id)
    .then(notFound(res))
    .then((genreTv) => genreTv ? genreTv.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `genre/tv/list`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}