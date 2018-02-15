import { success, notFound } from '../../services/response/';
import { PopularMovie } from '.';
import PopularMovieRemote  from './model.remote';
//console.log("PopularMovieRemote", PopularMovieRemote().resolve().then(r=>console.log(r)));

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

export const index = (req, res, next) => {
//	console.log('inside inedx');
	return PopularMovieRemote(req.query)
	  .then(success(res))
	  .catch(next);
}
  // PopularMovie.count(query)
  //   .then(count => PopularMovie.find(query, select, cursor)
      // .then((popularMovies) => ({
  //       count,
  //       rows: popularMovies.map((popularMovie) => popularMovie.view())
  //     }))
  //   )
  //   .then(success(res))
  //   .catch(next)