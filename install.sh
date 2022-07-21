#!/usr/bin/env bash

set -ex

# yarn global add blitz
yarn blitz new helloworld
cd hellowold
#   yarn
  blitz prisma migrate dev
  blitz dev


# blitz generate all project name:string