import { success, notFound } from '../../services/response/'
import { CreditsMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  CreditsMovie.create(body)
    .then((creditsMovie) => creditsMovie.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  CreditsMovie.count(query)
    .then(count => CreditsMovie.find(query, select, cursor)
      .then((creditsMovies) => ({
        count,
        rows: creditsMovies.map((creditsMovie) => creditsMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  CreditsMovie.findById(params.id)
    .then(notFound(res))
    .then((creditsMovie) => creditsMovie ? creditsMovie.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  CreditsMovie.findById(params.id)
    .then(notFound(res))
    .then((creditsMovie) => creditsMovie ? Object.assign(creditsMovie, body).save() : null)
    .then((creditsMovie) => creditsMovie ? creditsMovie.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  CreditsMovie.findById(params.id)
    .then(notFound(res))
    .then((creditsMovie) => creditsMovie ? creditsMovie.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `movie/${req.params.id}/credits`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}