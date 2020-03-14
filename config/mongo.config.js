const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb://localhost:27017/products'
                                      , { 
                                          useUnifiedTopology: true,
                                          useNewUrlParser   : true
                                        }
                            );
dbConnection.then((success, reject)=>{
    if (reject) console.log(reject);
    else console.log("Successfully connected to mongodb colection Products");
});

module.exports = dbConnection;
