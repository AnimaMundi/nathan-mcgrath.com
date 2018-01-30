# Nathan Mc Grath Personal Website #

## Setup ##

* [Install NodeJS](https://nodejs.org)
* Clone the repository locally
* Install the project's dependencies
``` bash
$ npm install
```
* Setup a .env file
``` bash
RECAPTCHA_SECRET={{recaptcha_secret}}
PORT=3100
SMTP_HOST={{smtp_host}}
SMTP_PORT=465
SMTP_USERNAME={{smtp_username}}
SMTP_PASSWORD={{smtp_password}}
MAIL_TO={{your_email}}
MAIL_FROM={{your_daemon_email}}
```
* Run the project
``` bash
$ npm start
```
