import { success, notFound } from '../../services/response/'
import { SimilarMovie } from '.'
import {remoteModel} from '../../services/common/common.service';

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  SimilarMovie.count(query)
    .then(count => SimilarMovie.find(query, select, cursor)
      .then((similarMovies) => ({
        count,
        rows: similarMovies.map((similarMovie) => similarMovie.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const indexRemote = (req, res, next) =>{
  const path = `movie/${req.params.id}/similar`;
  return remoteModel(path,req.query)
    .then(success(res))
    .catch(next);
}