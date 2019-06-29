const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen('3000',()=>{
    console.log("server started");
});


















// const http = require('http');


// const server  = http.createServer(function(req,res){
//     console.log(req.url,req.method);
//     res.setHeader('Content-Type','text/html');

//     // if(req.url === '/' ){
//     //     res.write('slash route');
//     //     return res.end();
//     // }
//     // if(req.url === '/test'){
//     //     res.write('test route');
//     //     return res.end();
//     // }
//     res.write('<html>');
//     res.write('<head><title>MEAN</title></head>');
//     res.write('<body><h1>Response was fabulous.</h1></body>');
//     res.write('</html>')
//     res.end();
//     // res.wtire ()
// });


// server.listen(3000,()=>{
//     console.log('App Started');
// });
