const Contacts = require('./addContact');

Contacts.methods(['get', 'delete', 'post', 'put']);
Contacts.updateOptions({new: true, runValidators: true});

module.exports = Contacts;