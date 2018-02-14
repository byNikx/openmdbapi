export let getRequest = ()=>{
	let req = http.request(options, function (res) {
			  let chunks = [];

			  res.on("data", function (chunk) {
			    chunks.push(chunk);
			  });

			  res.on("end", function () {

			    let body = Buffer.concat(chunks);
			    if(tmdb.isJSON(body)){
			    	if(!!body.status_code){
			    	//if(body.status_code && body.status_code == 34){
			    		console.log('Not found', body);
			    	}else{
				    	tmdb.buffer.forUpdate.push(JSON.parse(body.toString()));
			            tmdb.buffer.fetched.push(item._id);
			    	}
			    }
			    resolve();

			  });

			});

			req.on('error', function (error){
				console.log('failed');
			  	reject();
		    });

			req.write("{}");
			req.end();
}