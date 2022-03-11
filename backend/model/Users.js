const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// User mmodel
const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    walletAddr: {
        type: String
    },
    privateKey: {
        type: String
    }
    
});

UserSchema.plugin(autoIncrement.plugin, {model: 'Users', field: '_id', startAt: 1})
module.exports = mongoose.model('Users', UserSchema);
