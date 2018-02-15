import { env, tmdbApi } from '../../config';
import http from 'http';

export const getRequest = (options)=>{
//    console.log("getRequest", getRequest);
	return new Promise((resolve, reject) => {

		let req = http.request(options, function (res) {
//			console.log("options", options);

		  let chunks = [];
//console.log("chunks1", chunks);
		  res.on("data", function (chunk) {
		    chunks.push(chunk);

//console.log("chunks", chunks);
		  });

	  	  res.on("end", function () {
		    let body = Buffer.concat(chunks);
		    resolve(body.toString());
//		    console.log("body.toString()", body.toString());
//		    req.end();
		  });

		});

		req.on('error', function (error){
			console.log('failed');
		  	reject(error);
//		  	req.end();
	    });
//	    req.write("{}");
		req.end();
	});
}

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