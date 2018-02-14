import http from 'http';
import { env, tmdbApi } from '../../config'

const getApiPath = (path, parameters = {})=>{
	const apiPath = Object.keys(parameters).reduce((querystring,parameter, index)=>{
		if(index==0) querystring+='?';

		return querystring+=`${parameter}=${parameters[parameter]}&`;
	}, path);

	return apiPath.substr(0, apiPath.length-1);
} 

export default function(page=1, region, language='en-US'){

	const options = {
		protocol: `${tmdbApi.protocol}:`,
		hostname: tmdbApi.host,
		path: getApiPath('/movie/popular', {
			api_key: tmdbApi.key, 
			page: page, 
			region: region, 
			language: language
		}),

	};

	return new Promise((resolve, reject) => {
		http.get(options, res => {
			resolve(res);
		}).on('error', error => {
			reject(error);
		}) 
	});

}
