const express = require('express');
const router = express.Router();
const APIRouter = require('./v1/index');

router.use('/products/', APIRouter);

router.get('/*', (req, res)=>{
    res.send({
        status : 404,
        message: "Couldn't find the resource you are looking."
    });
});
module.exports = router;