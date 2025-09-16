@echo off
cd /d %~dp0
echo Starting Vite Dev Server...
start "" http://localhost:5173
npm run dev
pause
