const model = require('../../models/product.model');
let APIControler = {};
APIControler.getAllData = (req, res)=>{
    if (req.query != undefined){
        updateProduct(res, req.params.id, req.query);
        return;
    }
    if (req.params.id != undefined){
        deleteProduct(res, req.params.id);
        return;
    }
    model.find({}, (err, ans)=>{
        if (err) {
            return res.send({
                status: 404,
                message: "No data found"
            });
        } else {
            return res.send({
                data: {
                    products: ans
                }
            })
        }
    })
}

APIControler.createProduct = (req, res)=>{
    let product = req.body.product;
    model.findOne({}).sort([['id', -1]]).exec((err, data)=>{
        if (data == null){
            product["id"] = 1;
        } else {
            product["id"] = data.id + 1;
        }
        let newProduct = new model(product);
        newProduct.save((err, data)=>{
            if (err){
                console.log(err);
                return res.send({
                    status : 500,
                    message: "Not able to save data into database"
                })
            }
            return res.send({
                
                data: {
                    product: {
                        id       : data.id,
                        name     : data.name,
                        quantity : data.quantity
                    }
                }
            })
        });
    });
}

const deleteProduct = (res, id) =>{
    model.deleteOne({id: Number(id)}, (err, data)=>{
        if (err) return res.send({
            status: 500,
            message: "Could not delete item"
        });
        return res.send({
            data: {
                message: "product deleted"
            }
        })
    })
}


const updateProduct = (res, id, query)=>{
    console.log(id,  query);
    model.findOne({id: Number(id)}, (err, product)=>{
        if (err) {
            return res.send({
                status: 500,
                message: "Could not update item"
            });
        }
        product.quantity = Number(product.quantity) + Number(query.number);

        model.updateOne(product, (err, data) =>{
            if (err) {
                return res.send({
                    status: 500,
                    message: "Could not update item"
                });
            }
            return res.send({
                data : {
                    product: product,
                    message: "Updated successfully"
                }
            })
        });
    })
    
}
module.exports = APIControler;