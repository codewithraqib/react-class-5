#!/bin/bash
npm run build
gzipper compress ./build
git add -A
git commit -m "$1"
git push origin new-apis