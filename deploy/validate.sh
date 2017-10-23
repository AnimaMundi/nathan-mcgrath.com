#!/bin/bash

# check the current status of the application
status="$(sudo pm2 status nathan-mcgrath)"
case "$status" in
	*online*)
		exit 0
		;;
	*)
		exit 1
		;;
esac
