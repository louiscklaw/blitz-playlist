#!/usr/bin/env bash

set -ex

rm -rf mui-helloworld || true

# yarn global add blitz
yarn blitz new mui-helloworld
cd mui-helloworld
#   yarn
  yarn blitz prisma migrate dev
  yarn blitz dev


# blitz generate all project name:string



# mui-helloworld
yarn blitz install materia-ui