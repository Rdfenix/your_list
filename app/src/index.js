const server = require('./config/server');
require('./config/database/database');
require('./config/routes/route')(server);