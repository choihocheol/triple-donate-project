const mongoose = require('mongoose');

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

module.exports = mongoose.model('Users', UserSchema);
