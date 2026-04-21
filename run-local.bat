@echo off
setlocal

cd /d "%~dp0"

if not exist node_modules (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo Failed to install dependencies.
    pause
    exit /b 1
  )
)

if exist .next (
  echo Clearing stale Next.js build cache...
  rmdir /s /q .next
)

echo Starting local development server...
start "Mortgage Overpay Dev Server" cmd /k "cd /d %~dp0 && npm run dev"

timeout /t 5 /nobreak >nul
start "" http://localhost:3000

endlocal
