#!/bin/bash

# change to the application directory
cd /opt/var/nathan-mcgrath

# install dependencies with NPM
sudo npm prune
sudo npm install

# build the application
sudo npm run build:ssr

# copy env vars into build directory
sudo cp .env build/.env
