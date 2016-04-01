var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Hero = new Schema({
    alias: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    city: {type: String},
    power_name: {type: String}
}, {
    collection: 'Heroes'
});

module.exports = mongoose.model('Hero', Hero);
