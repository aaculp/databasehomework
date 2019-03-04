const express = require('express');
const remediRouter = express.Router();

const remediController = require('../controller/controller');

remediRouter.get('/results/', remediController.indexResults);
remediRouter.put('/feelings/:id', remediController.updateFeelings)

remediRouter.put('/:id', remediController.update);

remediRouter.get('/', remediController.index);
remediRouter.post('/', remediController.create);

module.exports = remediRouter;
