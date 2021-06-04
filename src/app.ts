import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from '../swagger.json';
import { RoutesConfig } from './shared/RoutesConfig';
import { BookRoutes } from './BookRoutes';

const app: express.Application = express();
const routes: Array<RoutesConfig> = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
const env = process.env.ENVIRONMENT || 'dev';
if (env?.toLowerCase() === 'dev') {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: any) => {
    fn(req, res, next).catch(next);
  };
};

routes.push(new BookRoutes(app));

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
