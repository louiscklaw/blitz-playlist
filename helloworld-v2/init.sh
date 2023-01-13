#!/usr/bin/env bash

rm -rf myAppName

set -ex

npm install -g blitz

blitz new myAppName

cd myAppName
  blitz generate all project name:string

  chown 1000:1000 -R .
  blitz dev
