import { success, notFound } from '../../services/response/'
import { TvCreditsPerson } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  TvCreditsPerson.count(query)
    .then(count => TvCreditsPerson.find(query, select, cursor)
      .then((tvCreditsPeople) => ({
        count,
        rows: tvCreditsPeople.map((tvCreditsPerson) => tvCreditsPerson.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `person/${req.params.id}/tv_credits`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}