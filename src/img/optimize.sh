#!/bin/sh
# jpegtran
for jpg in `find $1 -iname "*.jpg"`; do
    echo "crushing $jpg ..."
    jpegtran -copy none -optimize -perfect "$jpg" > temp.jpg

    # preserve original on error
    if [ $? = 0 ]; then
        mv -f temp.jpg $jpg
    else
        rm temp.jpg
    fi
done
