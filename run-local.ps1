$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies..." -ForegroundColor Cyan
  npm install
}

if (Test-Path ".next") {
  Write-Host "Clearing stale Next.js build cache..." -ForegroundColor Yellow
  Remove-Item -LiteralPath ".next" -Recurse -Force
}

Write-Host "Starting local development server..." -ForegroundColor Green
npm run dev
