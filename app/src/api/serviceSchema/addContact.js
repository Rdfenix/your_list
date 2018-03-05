const restful = require('node-restful');
const mongoose = restful.mongoose;

const phoneSchema = new mongoose.Schema({
    phone: {type: String, required: false}
});

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    phone: [phoneSchema]
});

module.exports = restful.model('AddContacts', contactSchema);