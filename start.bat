@echo off

set HOMEDRIVE=D:
set PM2_HOME=D:\Coding\Chrome-RPC-master\src\node_modules\.pm2
setx /M PM2_HOME D:\Coding\Chrome-RPC-master\src\node_modules\.pm2

cd D:\Coding\Chrome-RPC-master\src & pm2 start autorestart.js
