import { success, notFound } from '../../services/response/'
import { ByidTv } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  ByidTv.create(body)
    .then((byidTv) => byidTv.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ByidTv.count(query)
    .then(count => ByidTv.find(query, select, cursor)
      .then((byidTvs) => ({
        count,
        rows: byidTvs.map((byidTv) => byidTv.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ByidTv.findById(params.id)
    .then(notFound(res))
    .then((byidTv) => byidTv ? byidTv.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ByidTv.findById(params.id)
    .then(notFound(res))
    .then((byidTv) => byidTv ? Object.assign(byidTv, body).save() : null)
    .then((byidTv) => byidTv ? byidTv.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ByidTv.findById(params.id)
    .then(notFound(res))
    .then((byidTv) => byidTv ? byidTv.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `tv/${req.params.id}`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}