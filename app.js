const express = require("express");
const path = require('path');
const morgan = require("morgan");

const app = express();
const PORT = 3000;

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// Logger middleware 
app.use(morgan('common')); // Third-party module
app.use(morgan("short"))
app.use((req, res, next) => {
    console.log(`App Logger ${req.method} --> to ${req.url}`);
    next();
});

// Routes by Express
app.get('/', (request, response) =>{
    response.send("Get / from app");

});
app.get('/about', (request, response) =>{
    response.send("Get /about from app");

});
// Grabbing Data from routes 
app.get("/hello/:who", (req, res) =>{
    res.send(`Hello ${req.params.who}`);
    
})

app.use((req, res)=>{
    res.statusCode = 404;
    res.send("404 page not found")
})


app.listen(PORT, ()=> {
    console.log("Express http server app");
});
