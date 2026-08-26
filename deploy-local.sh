#!/usr/bin/env bash
set -e

echo "Building MightyLink homepage (startup2)..."
npm run build

TARGET_DIR="/var/www/html"
SUBDIR="${TARGET_DIR}/mightylink2"

echo "Deploying to local Apache2 (${SUBDIR})..."

if [ -w "$TARGET_DIR" ]; then
    mkdir -p "$SUBDIR"
    rm -rf "${SUBDIR:?}"/*
    cp -r dist/* "$SUBDIR/"
else
    sudo mkdir -p "$SUBDIR"
    sudo rm -rf "${SUBDIR:?}"/*
    sudo cp -r dist/* "$SUBDIR/"
fi

echo "Deployed. Open http://localhost/mightylink2/ in your browser."
