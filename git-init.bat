@echo off
echo ========================================
echo TOZ YAPI - Git Repository Baslatma
echo ========================================
echo.

cd /d "%~dp0"

echo [1/3] Git repository baslatiliyor...
if not exist ".git" (
    git init
    echo Git repository olusturuldu.
) else (
    echo Git repository zaten mevcut.
)

echo.
echo [2/3] Tum dosyalar Git'e ekleniyor...
git add .

echo.
echo [3/3] Commit yapiliyor...
git commit -m "Toz Yapı web sitesi - Initial commit"

echo.
echo ========================================
echo Git hazir!
echo ========================================
echo.
echo Simdi GitHub remote ekleyin:
echo git remote add origin https://github.com/tozsolutions/netl-tozyapi.git
echo git push -u origin main
echo.
pause
