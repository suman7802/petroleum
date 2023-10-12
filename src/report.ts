import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import {loadData} from './models/petroleum.model';
import {reportRouter} from './routers/report.router.js';

dotenv.config();
const PORT = process.env.PORT || 8000;
const app: express.Application = express();

app.use(cors());
app.use(morgan('dev'));

loadData();

app.use('/api', reportRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('root');
});
app.get('*', (req: Request, res: Response) => {
  res.status(401).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
