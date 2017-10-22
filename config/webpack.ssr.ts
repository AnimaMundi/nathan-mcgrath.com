import { resolve } from 'path';
import { webpackServerConfig } from '@amd-core/webpack-config';

import {
  rootDirectory, buildDirectory,
  sourceDirectory, tsConfigPath,
  stylesDirectory, nodeModules
} from './paths';

const serverDirectory: string = resolve(sourceDirectory, 'server');

module.exports = webpackServerConfig({
  rootDirectory, sourceDirectory,
  tsConfigPath,
  entry: [
    resolve(serverDirectory, 'app-server.module.ts'),
    resolve(serverDirectory, 'main.ts')
  ],
  clientBuildDirectory: buildDirectory,
  serverBuildDirectory: resolve(rootDirectory, 'build'),
  publicPath: 'public/',
  entryModule: resolve(serverDirectory, 'app-server.module.ts#AppServerModule'),
  sassIncludePaths: [stylesDirectory, nodeModules]
});
