import { success, notFound } from '../../services/response/'
import { PopularTv } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  PopularTv.count(query)
    .then(count => PopularTv.find(query, select, cursor)
      .then((popularTvs) => ({
        count,
        rows: popularTvs.map((popularTv) => popularTv.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const indexRemote = (req, res, next) => {
  const path = `movie/popular`; 
	return remoteModel(path,req.query)
	  .then(success(res))
	  .catch(next);
}