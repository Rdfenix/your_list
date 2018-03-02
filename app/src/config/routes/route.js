const express = require('express');

module.exports = (server) => {
    //definindo a API Base
    const router = express.Router();
    server.use('/api', router);

    //Rotas
    const contactService = require('../../api/serviceSchema/addContactService');
    contactService.register(router, '/contacts');
}