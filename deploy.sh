#!/bin/bash

echo "========================================"
echo "TOZ YAPI - GitHub ve Vercel Deploy"
echo "========================================"
echo ""

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git not installed!"
    echo "Install Git from https://git-scm.com/"
    exit 1
fi

echo "[1/5] Initializing Git repository..."
cd "$(dirname "$0")"
if [ ! -d ".git" ]; then
    git init
    echo "Git repository created."
else
    echo "Git repository already exists."
fi

echo ""
echo "[2/5] Adding all files to Git..."
git add .

echo ""
echo "[3/5] Creating commit..."
git commit -m "Toz Yapı web sitesi - Initial commit"

echo ""
echo "[4/5] Checking GitHub remote..."
if ! git remote get-url origin &> /dev/null; then
    echo ""
    echo "Enter GitHub remote URL:"
    echo "Example: https://github.com/tozsolutions/netl-tozyapi.git"
    read -p "GitHub URL: " GITHUB_URL
    git remote add origin "$GITHUB_URL"
    echo "Remote added: $GITHUB_URL"
else
    echo "Remote already configured."
fi

echo ""
echo "[5/5] Pushing to GitHub..."
echo ""
echo "NOTE: GitHub credentials will be requested."
echo "Using Personal Access Token is recommended."
echo ""
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "SUCCESS! Pushed to GitHub."
    echo "========================================"
    echo ""
    echo "Now deploy to Vercel:"
    echo "1. Go to https://vercel.com"
    echo "2. Login with GitHub"
    echo "3. Click 'Add New Project'"
    echo "4. Select 'netl-tozyapi' repository"
    echo "5. Click 'Deploy'"
    echo ""
else
    echo ""
    echo "========================================"
    echo "ERROR: Push to GitHub failed!"
    echo "========================================"
    echo ""
    echo "Possible reasons:"
    echo "- Wrong GitHub username/password"
    echo "- Incorrect remote URL"
    echo "- No internet connection"
    echo ""
fi
