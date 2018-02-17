import { success, notFound } from '../../services/response/'
import { UpcomingMovies } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  UpcomingMovies.count(query)
    .then(count => UpcomingMovies.find(query, select, cursor)
      .then((upcomingMovies) => ({
        count,
        rows: upcomingMovies.map((upcomingMovies) => upcomingMovies.view())
      }))
    )
    .then(success(res))
    .catch(next)
 
export const indexRemote = (req, res, next) => {
  const path = `movie/upcoming`;
  return remoteModel(path ,req.query)
    .then(success(res))
    .catch(next);  
}