#!/bin/bash

echo 'Checking PHP prerequisites ...'

check_cmd() {
  $1 --version > /dev/null 2>&1
  OUT=$?
  if [[ $OUT -ne 0 ]]; then
      echo "$1 command not found."
  else
      echo "$1 command found."
  fi
  return $OUT
}

if check_cmd "php"; then
  if check_cmd "composer"; then
    echo "Building Symfony application ..."
  else
    echo "ERROR: Symfony application cannot be built."
    exit 1
  fi
else
  echo "ERROR: Symfony application cannot be built."
  exit 1
fi

cd "$(dirname "$0")"
composer create-project symfony/skeleton app
cd app
composer req api annotations
composer req maker --dev
