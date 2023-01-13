#!/usr/bin/env bash

rm -rf myAppName

set -ex

BLITZ_PATH=./node_modules/blitz/bin/blitz

./node_modules/blitz/bin/blitz -v

$BLITZ_PATH new my-blitz-app

$BLITZ_PATH generate all project name:string

cd my-blitz-app
  npm run build
  npm run dev

