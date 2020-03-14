const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products'
                                      , { 
                                          useUnifiedTopology: true,
                                          useNewUrlParser   : true
                                        }
                            );
const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', function() {
    console.log("Successfully connected to mongodb colection Products")
});

module.exports = dbConnection;
