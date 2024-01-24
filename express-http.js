const exp = require("constants");
const express = require("express");
const http = require("http");

// Start a new express application using calling express function of exported module express i.e. is minimal and sugarcoats nodejs allow to work in it.
const app = express();

// Create logging middleware 
// using use function of app we can add middleware to application
function loggingMiddleware(request, response, next){
    console.log(`Logger:-> IN comes a ${request.method}  to ${request.url}`);
    next();
}

app.use(loggingMiddleware);





// Request handle function 
function requestHandler(request, response){
    response.end("Hello World");
}

http.createServer(requestHandler).listen(3000);


