const http = require("http");

function requestHandler(request, response){
    console.log(request.href);
    console.log("Simple Nodejs Http server");
    const requestUrl = request.url;
    if( requestUrl== "/"){
        response.end("Welcome to the page!!: Simple Server Configuration is returned from Nodejs backend server!!!");
    }else if(requestUrl== "/about"){
        response.end("Welcome to about page")
    }else{
        response.end("Error Page (not found)")
    }
}

const server = http.createServer(requestHandler);
server.listen(3000);