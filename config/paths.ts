import { resolve } from 'path';
import { env } from '@amd-core/webpack-config';

// Root
export const rootDirectory: string = resolve(__dirname, '..');

// Root folders
export const nodeModules: string = resolve(rootDirectory, 'node_modules');
export const buildDirectory: string = resolve(rootDirectory, 'build', 'public');
export const sourceDirectory: string = resolve(rootDirectory, 'src');

// Root files
export const tsConfigPath: string = resolve(rootDirectory, 'tsconfig.json');

// Source folders
export const appDirectory: string = resolve(sourceDirectory, 'app');
export const stylesDirectory: string = resolve(sourceDirectory, 'styles');
export const environmentDirectory: string = resolve(sourceDirectory, 'environment');

// Source files
export const main: string = resolve(sourceDirectory, 'main.ts');
export const indexHtmlPath: string = resolve(sourceDirectory, 'index.html');

// Dynamic files
export const config: string = resolve(environmentDirectory, `config.${env}.ts`);

export const faviconPath: string = resolve(sourceDirectory, 'assets', 'images', 'favicon.ico');
