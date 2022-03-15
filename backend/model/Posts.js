const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

// Post mmodel
const PostSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    description: {
        type: String,
    },
    writer: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    Data: {
        type: Array
        
    },
    seq: {
        type: Number
    }
});

PostSchema.plugin(autoIncrement.plugin, { model: 'Posts', field: 'seq', startAt: 1, increment: 1})
module.exports = mongoose.model('Posts', PostSchema);
