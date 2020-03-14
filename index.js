const express    = require('express');
const router     = require('./routers/index');
const db         = require('./config/mongo.config');

const PORT    = process.env.PORT || 3000;

const app     = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router);

app.listen(PORT, (err)=>{
    if (err) console.log('Error in starting app---->', err);
    else console.log('App is running at ------>>>>>', PORT);
})