#!/bin/bash
find . -name "*.html" -print0 | while IFS= read -r -d '' file
do
    echo $file
    sed -e 's|<li><a href=".*" target="_top">Frames</a></li>||g' $file > $file.tmp && mv $file.tmp $file
    sed -e 's|<li><a href=".*" target="_top">No&nbsp;Frames</a></li>||g' $file > $file.tmp && mv $file.tmp $file
done