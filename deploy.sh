#!/bin/bash
cd /home/ubuntu/ntt-data-pay-brand-website
git pull origin developer-codeDeploy
yarn install &&
yarn build &&
pm2 restart all
