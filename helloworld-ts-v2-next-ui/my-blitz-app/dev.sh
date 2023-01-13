#!/usr/bin/env bash

set -ex

npm run rm_db
npm run migrate_dev
npm run seed

npm run dev
