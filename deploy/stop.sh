#!/bin/bash

# stop the application
sudo pm2 delete nathan-mcgrath || echo "nathan-mcgrath is not running"

# delete the application
sudo rm -rf /opt/var/nathan-mcgrath/*
