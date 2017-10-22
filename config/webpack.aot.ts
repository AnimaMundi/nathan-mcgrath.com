import { webpackAotConfig } from '@amd-core/webpack-config';

import {
  main, stylesDirectory, nodeModules,
  indexHtmlPath, rootDirectory,
  buildDirectory, sourceDirectory,
  appDirectory, tsConfigPath,
  config
} from './paths';

module.exports = webpackAotConfig({
  indexHtmlPath, rootDirectory, buildDirectory,
  sourceDirectory, appDirectory, tsConfigPath,
  entry: { main }, alias: { config },
  sassIncludePaths: [stylesDirectory, nodeModules]
});
