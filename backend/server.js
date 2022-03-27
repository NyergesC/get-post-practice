const express = require ('express')
const path = require ('path')
const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(`${__dirname}/../frontend/index.html`))
})

app.use("/kismacska", express.static(`${__dirname}/../frontend/public`))
app.listen(9000, () => {
	console.log("http://127.0.0.1:9000")
})


/* const http = require('http');
const fs = require('fs');
const path = require('path');

const serverFun = (req, res) =>{

	const errorHTML = `semmi nem oke`;
    
	 let filePath = path.resolve(__dirname + '/../frontend' + req.url); 
	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
    
	fs.access(filePath, fs.constants.R_OK, (err) => {
	if(err){
		res.statusCode = 404;
		res.end(errorHTML);
	}else{
		if(fs.statSync(filePath).isDirectory()) {
			filePath += '/index.html';
		}
		fs.readFile(filePath, (err, data) => {
			if(err) {
				res.statusCode = 500;
				res.end(errorHTML);
			} else {
				console.log('az index html oke')
				res.end(data);
			}
		});
	}
	});
}

const server = http.createServer(serverFun)

server.listen(9000, "127.0.0.1", () => {
    const addr = server.address();
		console.log(`http://${addr.address}:${addr.port}`);
		console.log(`Random moti szovi`)
}); */