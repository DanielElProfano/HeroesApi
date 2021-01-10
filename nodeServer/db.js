const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/heroes';

//conexión a la db

mongoose.connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then ( ()=>{
    console.log("conectado")
})
.catch (()=>{
    console.log("Error conecying ti DB");
})

module.export = DB_URL;

