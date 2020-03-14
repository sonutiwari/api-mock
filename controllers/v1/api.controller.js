let APIControler = {};
APIControler.first = (req, res)=>{
    return res.send({
        status: 200,
        message: "API is working"
    });
}

APIControler.createProduct = (req, res)=>{
    console.log(req.body);
    return res.send({
        status: 200,
        message: "API is working"
    });
}
module.exports = APIControler;