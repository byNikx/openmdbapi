import { success, notFound } from '../../services/response/'
import { MovieCreditsPerson } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  MovieCreditsPerson.count(query)
    .then(count => MovieCreditsPerson.find(query, select, cursor)
      .then((movieCreditsPeople) => ({
        count,
        rows: movieCreditsPeople.map((movieCreditsPerson) => movieCreditsPerson.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `person/${req.params.id}/movie_credits`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}