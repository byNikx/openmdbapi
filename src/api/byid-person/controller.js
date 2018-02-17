import { success, notFound } from '../../services/response/'
import { ByidPerson } from '.'
import {remoteModel} from '../../services/common/common.service';

export const create = ({ bodymen: { body } }, res, next) =>
  ByidPerson.create(body)
    .then((byidPerson) => byidPerson.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  ByidPerson.count(query)
    .then(count => ByidPerson.find(query, select, cursor)
      .then((byidPeople) => ({
        count,
        rows: byidPeople.map((byidPerson) => byidPerson.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ByidPerson.findById(params.id)
    .then(notFound(res))
    .then((byidPerson) => byidPerson ? byidPerson.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  ByidPerson.findById(params.id)
    .then(notFound(res))
    .then((byidPerson) => byidPerson ? Object.assign(byidPerson, body).save() : null)
    .then((byidPerson) => byidPerson ? byidPerson.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ByidPerson.findById(params.id)
    .then(notFound(res))
    .then((byidPerson) => byidPerson ? byidPerson.remove() : null)
    .then(success(res, 204))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `person/${req.params.id}`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}