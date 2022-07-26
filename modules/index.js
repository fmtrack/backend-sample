const express = require('express');
const commonModule = require('./common');
const leaveModule = require('./leaves');
const apiRoutes = express.Router();

apiRoutes.use('/leave', leaveModule.router);

// common modules for backend :- start
apiRoutes.use('/common', commonModule.router);
// end

module.exports = apiRoutes;
