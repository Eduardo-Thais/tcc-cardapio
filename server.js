

const express = require('express')
const path    = require('path')
const cors = require("cors")



const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, 'dist'))



app.use(staticFileMiddleware)
app.use(cors())


app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/src/main.js'))
})


var port = process.env.PORT || 9090
app.listen(port, function () {
    console.log( 'Express serving on 9090!' )
})

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})