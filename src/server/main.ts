import '../index.scss';

import { config } from 'dotenv';
config();

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as path from 'path';
import * as request from 'request-promise-native';
import * as nodemailer from 'nodemailer';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';

import { renderingEngine } from './rendering-engine';

import { AppServerModule } from './app-server.module';

enableProdMode();
const server: express.Express = express();

const transportOptions: nodemailer.TransportOptions = {

  component: 'smtp'
};

const smtp: any = nodemailer.createTransport(
  {
    host: process.env['SMTP_HOST'],
    port: process.env['SMTP_PORT'],
    secure: true,
    auth: {
      user: process.env['SMTP_USERNAME'],
      pass: process.env['SMTP_PASSWORD'],
    }
  } as any
);

const defaultMailOptions: any = {
  from: process.env['MAIL_FROM'],
  to: process.env['MAIL_TO']
};

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
server.use(bodyParser.json());

server.get('/public/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const fileName: string = req.originalUrl;
  const root: string = fileName.startsWith('/node_modules/') ? '.' : buildRoot;

  res.sendFile(fileName, { root }, (err: Error) => {
    if (err) { return next(err); }
  });
});

server.post('/api/contact/', (req: express.Request, res: express.Response) => {

  console.log('Contact', req.body);

  const recaptchaBody: any = {
    secret: process.env['RECAPTCHA_SECRET'],
    response: req.body['recaptcha']
  };

  console.log('Recaptcha body', recaptchaBody);

  request({
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    qs: recaptchaBody
  }).then((res: any) => {
    console.log('Recaptcha success', res);

    if (res['success'] === false) {
      return Promise.reject(new Error('Recaptcha failed'));
    } else {
      smtp.sendMail(
        {
          ...defaultMailOptions,
          subject: `New mail from ${req.body['name']}, ${req.body['email']}`,
          text: req.body['message']
        }, (err: Error) => {
          if (err) {
            return Promise.reject(err);
          }

          return Promise.resolve();
        });
    }
  }).then(() => {
    res.status(200).send();
  }).catch((err: any) => {
    console.error('Error', err);
    res.status(500).send();
  });
});

server.get('*', (req: express.Request, res: express.Response) => {
  res.render('index.html', { req, res });
});

server.listen(process.env['PORT'], () => {
  console.log(`Server listening on ${process.env['PORT']}...`);
});
