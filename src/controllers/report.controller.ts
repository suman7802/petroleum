import {Request, Response, response} from 'express';
import {avgSales, sales, highLowSales} from '../models/report.model';
import catchAsync from '../utils/catchAsync';

export const controller = {
  sales: catchAsync(async (req: Request, res: Response) => {
    await sales()
      .then((response) => {
        return res.send(response);
      })
      .catch((err) => {
        throw err;
      });
  }),

  avgSales: catchAsync(async (req: Request, res: Response) => {
    await avgSales()
      .then((response) => {
        return res.send(response);
      })
      .catch((err) => {
        throw err;
      });
  }),

  highLowSales: catchAsync(async (req: Request, res: Response) => {
    await highLowSales()
      .then((response) => {
        return res.send(response);
      })
      .catch((err) => {
        throw err;
      });
  }),
};
