#! /bin/bash
########## Variables

dir=~/documents/dotfiles                    # dotfiles directory
olddir=~/documents/dotfiles_old             # old dotfiles backup directory
files=""
ignore=("README" "LICENSE" ".gitignore" ".git")
# files=".zshrc .ncmpcpp .vimrc .vim .xbindkeAysrc .dircolors .xinitrc .Xmodmap .config .vifm .ideavimrc .conkyrc"          # list of files/folders to symlink in homedir


##########

#find hidden files
shopt -s dotglob
# Collecting files
echo "Collecting filenames for linking to ~"
for f in $dir/*; do
    found=1
    base=$(basename "$f")
    for i in ${ignore[@]}; do
        if [[ "$i" == "$base" ]]; then
            found=0
        fi
    done
    if [ "$found" -ne 0 ]; then
        echo "$base"
        files+="$base "
    else
        found=1
    fi
done
echo "...done"

# create dotfiles_old in homedir
echo "Creating $olddir for backup of any existing dotfiles in ~"
mkdir -p $olddir
echo "...done"

# change to the dotfiles directory
echo "Changing to the $dir directory"
cd $dir
echo "...done"

# move any existing dotfiles in homedir to dotfiles_old directory, then create symlinks
for file in $files; do
    echo "Moving any existing dotfiles from ~ to $olddir"
    mv ~/$file $olddir
    # echo ~/$file $olddir
    echo "Creating symlink to $file in home directory."
    ln -s $dir/$file ~/$file
    # echo $dir/$file ~/$file
    printf "\n"
done
