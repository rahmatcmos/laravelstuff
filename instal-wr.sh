#!/bin/bash

#
# Development environment - PRJ0156
#
# Github token: 85d4488064d9118228d2d99bd12a3666011c3081
#
# This script takes the following arguments
# $1: name of backup
# $2: name of github repo of project

# Source functions files
source functions.sh

log=~/errors/err.log

echo
echo '****************************************'
echo '* Development environment installation *'
echo '****************************************'
echo

if [ $# -eq 0 ]
  then
    echo "No arguments supplied exiting..."
    exit 1
fi

echo "Creating error log in ~/errors/err.log"
mkdir ~/errors 2> /dev/null
touch errors/err.log 2> /dev/null
echo
echo "Error log created at ~/errors/err.log"
echo
echo "Changing directory to ~/"
cd ~/
echo


# Creating the necessary users & groups

# creating groups
echo 'Creating service groups...'
sleep 2s
sudo groupadd nginx-service 2>>$log # Create new group
echo "Group nginx-service created..."
sleep 2s
sudo groupadd pgsql-service 2>>$log  # Create new group
echo "Group pgsql-service created"
sleep 2s
echo

# creating users
echo 'Creating nginx user'
sleep 2s
sudo useradd ngix-user --password secret --groups nginx-service 2>>$log
echo "Group nginx-user created..."
sleep 2s
echo 'Creating pgsql-user'
sleep 2s
sudo useradd pgsql-user --password secret --groups pgsql-service 2>>$log
echo "Group pgsql-user created"
sleep 2s
echo

# Updadate package lists

# read -e -p 'Update package list? [y/n] ' updatepl
# if [ "$updatepl" = "y" ]; then
#     sudo apt-get update
#     echo 'Package list updates'
# fi
echo 'Updating package list'
sudo apt-get update
echo 'Package list updates'
echo

# Install zip for compression

sudo apt-get --assume-yes install zip

# Install Postgresql

echo 'Installing Postgresql...'
sleep 2s
echo
sudo apt-get --assume-yes install postgresql
echo
echo 'Postgressql installed'
sleep 2s
echo


# Install PHP

echo 'Installing Apache & PHP 5...'
sleep 2s
echo
sudo apt-get --assume-yes install apache2
sudo apt-get --assume-yes install php5
sudo apt-get --assume-yes install libapache2-mod-php5
sudo /etc/init.d/apache2 restart
echo
echo 'Apache & PHP 5 installation complete...'
sleep 2s
echo


# Install nginx

echo 'Installing Apache & PHP 5...'
sleep 2s
echo
sudo apt-get --assume-yes install nginx
echo
echo 'nginx installation complete...'
sleep 2s
echo

# Install Lynx

echo 'Installing Lynx'
sleep 2s
echo
sudo apt-get --assume-yes install lynx
sleep 2s
echo
echo 'Lynx installed...'
echo

# Install Git

echo 'Installing Git...'
sleep 2s
echo
sudo apt-get --assume-yes install git
sleep 2s
echo
echo 'Git installed...'
echo


# Install At

echo 'Installing At...'
sleep 2s
echo
sudo apt-get --assume-yes install at
sleep 2s
echo
echo 'At installed...'
echo

# Install Composer

echo 'Installing Composer...'
sleep 2s
echo
cd ~/
sudo apt-get --assume-yes install php5-curl
curl -sS https://getcomposer.org/installer | sudo php
sudo mv composer.phar /usr/local/bin/composer
php -dmemory_limit=1G /usr/local/bin/composer.phar update
sleep 2s
echo
echo 'Composer installed globally...'
echo

# Enable swat

sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024 >>$log
sudo /sbin/mkswap /var/swap.1 >>$log
sudo /sbin/swapon /var/swap.1 >>$log


# Install Laravel (PHP Framework)

echo 'Installing Laravel...'
sleep 2s
echo
composer global require 'laravel/installer'
echo


# Create project directory & files

echo 'Creating project directory...'
cd ~/
mkdir PRJ56 2>/dev/null
cd PRJ56
echo
sleep 1s
echo 'Cloning  project and dependencies'
echo
cloneProject $2
echo
sleep 2s
echo 'Project CityGis created'
echo


# Compress project folder

echo 'Compressing project folder...'
sleep 2s
cd ~/
zip -r PRJ56_Zipped.zip PRJ56
echo
echo 'Project folder Zipped' 
echo


# Adding processes to groups

echo 'Add nginx to nginx-service group'
sleep 2s
sudo chown -R :nginx-service /etc/nginx
echo
echo 'Setting permissions'
sudo chmod -R g+w /etc/nginx
echo
echo 'Add psql server to pgsql-service group'
sleep 2s
sudo chown -R :pgsql-service /etc/postgresql
echo
echo 'Setting permissions'
sudo chmod -R g+w /etc/postgresql
echo

echo "Creating symboliclink directory in ~/symboliclinks"
mkdir ~/symboliclinks 2>>$log
cd ~/symboliclinks 2>>$log
echo "Creating symboliclink for $log..."
ln -s ~/errors/err.log err.log 2>> /dev/null >>$log
sleep 2s
echo "Symbolic link created"
echo

echo "Creating backup of error logs"
sleep 2s
makeBackup $1
echo
sleep 2s
echo "Created tarball"
echo

echo "Unpack back or error logs"
sleep 2s
unpackBackup $1
echo
sleep 2s
echo "Unpacked tarball"
echo
echo "Changing directory to ~/"
sleep 2s
echo

echo "Set auto-clean for log files at 00:00"
clean
cd ~/
echo

echo "Hello world" > index.html
echo "Presenting hello world"
lynx index.html
