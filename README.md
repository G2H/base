# Instructions

## Clone repository
```
git clone https://github.com/G2H/base.git
```
## Install requirements on the vm: docker, node, npm, bower
```
cd base
sudo sh intialize.sh
```

## Install the node modules based on packages.json
```
npm install
```
## Install the bower dependencies based on bower.json
```
bower install
```
## A) Development: Launch grunt
```
grunt
```

## B) Compile everything for production
```
using grunt
todo
```

## C) Production: run in docker

## Create a new VM on cloud engine
```
gcloud compute instances create server-instance \
  --zone europe-west1-c \
  --machine-type f1-micro
```
## Runs a docker image using /src as source directory and exposes nginx on $DOCKER_HOST:80
```
sudo docker run -p 80:80 --name base-nginx \
  -v $(pwd)/src/:/usr/share/nginx:ro \
  -v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
  -d nginx
```
## Re-enter the instance if needed
```
docker exec -it base-nginx /bin/bash
```