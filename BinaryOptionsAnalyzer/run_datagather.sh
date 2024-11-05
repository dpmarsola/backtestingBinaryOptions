#!/usr/bin/bash
if [ "$#" -ne 4 ]; then
    echo "Usage: $0 <data-provider> <ticker> <interval_in_secs> <counts>"
    exit 1
fi

ticker=$2
interval_in_secs=$3
counts=$4

cd datagather/$1
./run_getquotes.sh $ticker $interval_in_secs $counts