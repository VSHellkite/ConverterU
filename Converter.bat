@echo off
setlocal
for %%A in ("%~dp0.") do set "SCRIPT_DIR=%%~fA"
cd /d "%SCRIPT_DIR%"
npm start
exit