const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id         : { type: String, required: true, unique: true },
    name       : { type: String, required: true },
    quantity   : { type: String, required: true },
    }, 
    { timestamps: true }
);

const productModel  = mongoose.model('products', productSchema);

module.exports = productModel;
