@echo off
echo ========================================
echo TOZ YAPI - GitHub ve Vercel Deploy Script
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo HATA: Git yuklu degil!
    echo Git'i https://git-scm.com/download/win adresinden yukleyin.
    pause
    exit /b 1
)

echo [1/5] Git repository baslatiliyor...
cd /d "%~dp0"
if not exist ".git" (
    git init
    echo Git repository olusturuldu.
) else (
    echo Git repository zaten mevcut.
)

echo.
echo [2/5] Tum dosyalar Git'e ekleniyor...
git add .

echo.
echo [3/5] Commit yapiliyor...
git commit -m "Toz Yapı web sitesi - Initial commit"

echo.
echo [4/5] GitHub remote baglantisi kontrol ediliyor...
git remote -v | find "origin" >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo GitHub remote URL'sini girin:
    echo Ornek: https://github.com/tozsolutions/netl-tozyapi.git
    set /p GITHUB_URL="GitHub URL: "
    git remote add origin %GITHUB_URL%
    echo Remote eklendi: %GITHUB_URL%
) else (
    echo Remote zaten ayarli.
)

echo.
echo [5/5] GitHub'a push yapiliyor...
echo.
echo NOT: GitHub username ve password/token istenecektir.
echo Personal Access Token kullanmaniz onerilir.
echo.
git branch -M main
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo BASARILI! GitHub'a yuklendi.
    echo ========================================
    echo.
    echo Simdi Vercel'e deploy etmek icin:
    echo 1. https://vercel.com adresine git
    echo 2. GitHub ile giris yap
    echo 3. "Add New Project" tikla
    echo 4. "netl-tozyapi" reposunu sec
    echo 5. "Deploy" tikla
    echo.
) else (
    echo.
    echo ========================================
    echo HATA: GitHub'a yukleme basarisiz!
    echo ========================================
    echo.
    echo Olasi nedenler:
    echo - GitHub username/password yanlis
    echo - Remote URL yanlis
    echo - Internet baglantisi yok
    echo.
)

echo.
pause
