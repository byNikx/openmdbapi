import { success, notFound } from '../../services/response/'
import { PopularMovie } from '.'
import PopularMovieRemote  from './model.remote';
//console.log("PopularMovieRemote", PopularMovieRemote);
PopularMovieRemote().then(res => console.log(res));
// export const index = ({ querymen: { query, select, cursor } }, res, next) =>
//   PopularMovie.count(query)
//     .then(count => PopularMovie.find(query, select, cursor)
//       .then((popularMovies) => ({
//         count,
//         rows: popularMovies.map((popularMovie) => popularMovie.view())
//       }))
//     )
//     .then(success(res))
//     .catch(next)

//const requestOptions = 

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