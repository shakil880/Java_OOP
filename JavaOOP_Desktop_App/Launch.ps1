# Java OOP Desktop App Launcher
# This script launches the Java OOP Learning Hub in your default browser

$appPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$indexFile = Join-Path $appPath "index.html"

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Java OOP Learning Hub" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting the application..." -ForegroundColor Yellow
Write-Host "Location: $indexFile" -ForegroundColor Gray
Write-Host ""

if (Test-Path $indexFile) {
    # Open in default browser
    Start-Process $indexFile
    
    Write-Host "✓ Application launched successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Features:" -ForegroundColor Cyan
    Write-Host "  • 20 comprehensive Java OOP topics" -ForegroundColor White
    Write-Host "  • Interactive navigation" -ForegroundColor White
    Write-Host "  • Progress tracking" -ForegroundColor White
    Write-Host "  • Dark/Light theme toggle" -ForegroundColor White
    Write-Host "  • Search functionality" -ForegroundColor White
    Write-Host "  • Direct folder access" -ForegroundColor White
    Write-Host ""
    Write-Host "Keyboard Shortcuts:" -ForegroundColor Cyan
    Write-Host "  • Ctrl + Left Arrow  : Previous topic" -ForegroundColor White
    Write-Host "  • Ctrl + Right Arrow : Next topic" -ForegroundColor White
    Write-Host "  • Ctrl + K           : Focus search" -ForegroundColor White
    Write-Host ""
    Write-Host "Press any key to close this window..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
else {
    Write-Host "✗ Error: index.html not found!" -ForegroundColor Red
    Write-Host "Please make sure you're running this script from the JavaOOP_Desktop_App folder." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
