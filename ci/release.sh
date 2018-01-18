#!/bin/bash -e

echo "deploying to production"
scp ./target/nevergreen-standalone.jar nevergreen@nevergreen.io:/home/nevergreen/deploy/production
ssh nevergreen@nevergreen.io "sudo service nevergreen restart"

./ci/smoke-test.sh https://nevergreen.io/api/ping
