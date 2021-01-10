const express = require('express');
const fetch = require('node-fetch');
const Hero = require('./model/Hero')
require('./db');
const heroRoutes = require('./routes/hero.routes')
const server = express();
const PORT = 5000;
const API_URL = 'http://localhost:3000/allHeroes/';

server.use((req, res, next) => {  //middleware que crea un header en cada respusta.
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/hero', heroRoutes);


server.use('*', (req, res, next) => {
    const error = new Error('Route not found'); 
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
  });

  server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
  });
server.listen(PORT, () => 

    console.log(`Server running on http://localhost:${PORT}`)
    
    )
const router = express.Router();



server.use('/', router);