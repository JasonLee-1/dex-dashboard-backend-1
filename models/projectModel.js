const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    isNew: {type: Boolean},
    image: {type: String},
    user: {type: String,},
    avatar: {type: String, required: false},
    featured: {type: Boolean, required: false},
    ruged: {type: Boolean, required: false},
    dead: {type: Boolean, required: false},
    approved: {type: Boolean, required: false},
    hosts: {type: Number, required: false},
    forkName: {type: String, required: false},
    network: {type: String, required: false},
    description: {type: String, required: false},
    launchDate: {type: Number, required: false},
    checkValue: {type: String},
    socialData: {type: Object, required: false},
    fork: {type:String, require: false},
    watchlist:{type:Boolean},
    created_at:{type:Number}
});

module.exports = mongoose.model('project', ProjectSchema);