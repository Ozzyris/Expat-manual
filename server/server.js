// PACKAGES
const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    config = require('./config'),    
    morgan = require('morgan');


// CONFIGURATION
server.listen(config.port);

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
    if ('OPTIONS' == req.method){
        res.sendStatus(200);
    }else{
        next();
    }
});

// ALLOW STATIC IMAGES
app.use('/uploads', express.static('uploads'))

// MORGAN LOGGING THE CALLS
app.use(morgan('dev'));

// ROUTES
app.use('/public', require('./controllers/public').public);
app.use('/admin', require('./controllers/admin').admin);
app.use('/admin-auth', require('./controllers/admin_auth').admin_auth);
app.use('/admin-upload', require('./controllers/admin_upload').admin_upload);