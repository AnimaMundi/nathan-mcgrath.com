#!/bin/bash

# change to the application directory
cd /opt/var/nathan-mcgrath

# start the application
sudo pm2 start ./build/server.js --name=nathan-mcgrath
