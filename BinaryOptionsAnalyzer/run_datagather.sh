#!/usr/bin/bash
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <data provider>"
    exit 1
fi
cd datagather/$1
./run_getquotes.sh