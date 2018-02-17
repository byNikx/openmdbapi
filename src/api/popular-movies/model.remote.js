import { env, tmdbApi } from '../../config';
import { apiPath, getRequest } from '../../services/common/common.service';
 
export default function(query){
	const queryParams = Object.assign({
			api_key: tmdbApi.key, 
			page: 1, 
			region: undefined, 
			language: 'en-US'
		}, query);

	const options = {
		protocol: `${tmdbApi.protocol}:`,
		hostname: tmdbApi.host,
		path: apiPath(`/${tmdbApi.version}/movie/popular`, queryParams)
	};
	return getRequest(options);

}
