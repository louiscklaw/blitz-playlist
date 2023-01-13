#!/usr/bin/env bash

set -ex

docker compose up -d --build

docker compose exec -it test_host bash
