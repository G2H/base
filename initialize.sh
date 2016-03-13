#!/bin/bash

## Install requirements

# install docker
## add keys
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
## add docker.list file in /etc/apt/sources.list.d/ #
echo 'deb https://apt.dockerproject.org/repo ubuntu-precise main' > docker.list
sudo mv docker.list /etc/apt/sources.list.d/
sudo apt-get update
sudo apt-get install docker-engine
sudo service docker start
# tests if docker is correctly installed
sudo docker run hello-world
# Install node and update npm
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm -g
# Install bower
npm install -g bower