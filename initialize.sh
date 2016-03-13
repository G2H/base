#!/bin/bash

## prepare the vm
# install nginx
# install docker
sudo apt-get update
sudo apt-get install docker-engine
sudo service docker start
sudo docker run hello-world # tests if docker was correctly installed

# install nginx
sudo apt-get install nginx

# Install node and update npm
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm -g

# Install bower
npm install -g bower