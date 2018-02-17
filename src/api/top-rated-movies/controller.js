import { success, notFound } from '../../services/response/'
import { TopRatedMovies } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  TopRatedMovies.count(query)
    .then(count => TopRatedMovies.find(query, select, cursor)
      .then((topRatedMovies) => ({
        count,
        rows: topRatedMovies.map((topRatedMovies) => topRatedMovies.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const indexRemote = (req, res, next) => {
  const path = `movie/top_rated`;	
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}