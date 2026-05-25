Set-Location $PSScriptRoot
Write-Host "CSS3D: http://127.0.0.1:5500/index.html" -ForegroundColor Green
Write-Host "NO abras INICIO.html de la raiz para ver el 3D." -ForegroundColor Yellow
Write-Host "Pulsa Ctrl+C para parar" -ForegroundColor Gray
Start-Sleep -Seconds 1
Start-Process "http://127.0.0.1:5500/index.html"
python -m http.server 5500 --bind 127.0.0.1
