import { webpackConfig } from '@amd-core/webpack-config';

import {
  main, stylesDirectory, nodeModules,
  indexHtmlPath, rootDirectory,
  buildDirectory, sourceDirectory,
  appDirectory, tsConfigPath,
  config
} from './config/paths';

module.exports = webpackConfig({
  indexHtmlPath, rootDirectory, buildDirectory,
  sourceDirectory, appDirectory, tsConfigPath,
  entry: { main }, alias: { config },
  sassIncludePaths: [stylesDirectory, nodeModules]
});
