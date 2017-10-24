import '../index.scss';

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as path from 'path';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';

import { renderingEngine } from './rendering-engine';

import { AppServerModule } from './app-server.module';

const config: { port: number } = {
  port: 3100
};

enableProdMode();
const server: express.Express = express();

const buildRoot: string = path.resolve(__dirname);
const appBuildRoot: string = path.resolve(buildRoot, 'public');

server.engine('html', renderingEngine({
  bootstrap: AppServerModule
}));

server.set('views', appBuildRoot);

server.use(compression());
server.use(morgan('combined'));
server.use(cors());
server.use(helmet());

server.get('/public/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const fileName: string = req.originalUrl;
  const root: string = fileName.startsWith('/node_modules/') ? '.' : buildRoot;

  res.sendFile(fileName, { root }, (err: Error) => {
    if (err) { return next(err); }
  });
});

server.get('*', (req: express.Request, res: express.Response) => {
  res.render('index.html', { req, res });
});

server.listen(config.port);
