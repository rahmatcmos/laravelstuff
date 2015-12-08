#!/bin/bash

function mount() {
    if ! mountpoint -q $2; then
        echo "Mount $2"
        mount.cifs $1 $2 -o username=$3,password=$4,domain=$5,iocharset=utf8,file_mode=0777,dir_mode=0777
    fi
}

export -f mount

cat << EOF > pyscript.py
#!/usr/bin/python3
import keyring, subprocess

MOUNT_POINT="/mnt"
SHARE="//sv005/share"
DOMAIN="TOSCA7"
USERNAME="sjors"
PASSWORD=(keyring.get_password("gmail", "jls"))

myList = [SHARE, MOUNT_POINT, USERNAME, PASSWORD, DOMAIN]

print('Executing python script...')
subprocess.call(['bash', '-c', 'mount ' + " ".join(myList)])
print('Drive successfully mounted! Have a good day!')

EOF

chmod 777 ./pyscript.py
./pyscript.py
