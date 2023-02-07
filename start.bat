@echo off

set HOMEDRIVE=%CD%
set PM2_HOME=.\src\node_modules\.pm2
setx /M PM2_HOME .\src\node_modules\.pm2

pm2 start .\autorestart.js
