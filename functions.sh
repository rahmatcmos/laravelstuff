#!/bin/bash
source clean.sh

makeBackup() {
    mkdir ~/backup 2> /dev/null
    cd ~/backup && tar -hcvzf $1.tar.gz ~/symboliclinks/err.log 2>~/errors/err.log
    cd ~/
}


unpackBackup() {
    mkdir ~/unpack 2> /dev/null
    cd ~/backup && tar -xvzf $1.tar.gz -C ~/unpack 2>~/errors/err.log 
    cd ~/
}

cloneProject() {
    git clone $1 ~/PRJ56 2>~/errors/err.log

    sudo cp -f ~/PRJ56/nginx.conf /etc/nginx 2> /dev/null

    sudo mkdir -p /var/www/laravel 2> /dev/null

    sudo cp -rf ~/project/http/laravel/* /var/www/laravel 2> /dev/null
}

clean() {
    cd ~/errors && at -f ~/clean.sh 00:00 2> ~/errors/err.log
}
