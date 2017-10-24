import * as fs from 'fs';
import { Type } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { Request } from 'express';

const templateCache: { [key: string]: string } = {};
const outputCache: { [key: string]: string } = {};

export type RenderFunction = (filePath: string, options: IRenderOptions, callback: RenderCallback) => void;
export type RenderCallback = (err: Error | undefined, html: string) => void;

export interface IRenderOptions {
  req: Request;
}

export const renderingEngine: (setupOptions: {}) => RenderFunction =
  (setupOptions: { bootstrap: Type<{}> }): RenderFunction =>
    (filePath: string, options: IRenderOptions, callback: RenderCallback): void => {
      const url: string = options.req.url;
      const html: string = outputCache[url];

      if (html) { return callback(undefined, html); }

      if (!templateCache[filePath]) { templateCache[filePath] = fs.readFileSync(filePath).toString(); }

      renderModule(setupOptions.bootstrap, { url, document: templateCache[filePath] })
        .then((str: string) => {
          outputCache[url] = str;

          return callback(undefined, str);
        });
    };
