import { success, notFound } from '../../services/response/';
import { PopularMovie } from '.';
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  PopularMovie.count(query)
    .then(count => PopularMovie.find(query, select, cursor)
      .then((popularMovies) => ({
        count,
        rows: popularMovies.map((popularMovie) => popularMovie.view())
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