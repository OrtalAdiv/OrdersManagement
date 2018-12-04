var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdersSchema = new Schema({
    title: String,
    content: String,
    region: String
});

module.exports = mongoose.model('Orders', OrdersSchema);
