import {Router} from 'express';
const reportRouter = Router();

import {controller} from '../controllers/report.controller';

reportRouter.get('/sales', controller.sales);
reportRouter.get('/avgSales', controller.avgSales);
reportRouter.get('/highLowSales', controller.highLowSales);

export {reportRouter};
