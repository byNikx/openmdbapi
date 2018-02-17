import { env, tmdbApi } from '../../config';
import http from 'http';

export const getRequest = (options)=>{
	return new Promise((resolve, reject) => {

		let req = http.request(options, function (res) {
			const {statusCode} = res;

		  let chunks = [];
		  res.on("data", function (chunk) {
		    chunks.push(chunk);
		  });

	  	  res.on("end", function () {
		    let body = Buffer.concat(chunks);
		    resolve({data:body.toString(), statusCode});
		  });

		});

		req.on('error', function (error){
			console.log('failed');
		  	reject(error);
	    });
		req.end();
	});
}

export const remoteModel = (pathFragment, query) => {
	const queryParams = Object.assign({
			api_key: tmdbApi.key, 
			page: 1, 
			region: undefined, 
			language: 'en'
		}, query);

	const options = {
		protocol: `${tmdbApi.protocol}:`,
		hostname: tmdbApi.host,
		path: apiPath(`/${tmdbApi.version}/${pathFragment}`, queryParams)
	};
	return getRequest(options);

};


export const apiPath = (path, parameters = {})=>{
	const apiPath = Object.keys(parameters).reduce((querystring, key, index)=>{
		if(index==0) querystring+='?';

		if(!!parameters[key]) 
			querystring+=`${key}=${parameters[key]}&`;

		return querystring;
	}, path);

	return apiPath.substr(0, apiPath.length-1);
}

export const isJSON = (str) =>{
		try{
			JSON.parse(str);
		}catch(e){
			return false;
		}
		return true;
	}