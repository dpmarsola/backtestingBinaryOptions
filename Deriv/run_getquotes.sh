#!/usr/bin/bash

HOME_DIR=~/workspace/backtestingBinaryOptions
# Get the quotes from the website
cd $HOME_DIR/Deriv


#Get args from command line
ticker=$1
interval_in_secs=$2
counts=$3

if [ -z "$ticker" ]; then
    ticker="cryBTCUSD"
fi

if [ -z "$interval_in_secs" ]; then
    interval_in_secs=1800
fi

if [ -z "$counts" ]; then
    counts=10
fi

echo "============================================ BEGIN =========================================================" >> $HOME_DIR/logs/Deriv_logs.txt
echo "Running getquotes.mjs wth the following args:" >> $HOME_DIR/logs/Deriv_logs.txt
echo "HOME_DIR: $HOME_DIR" >> $HOME_DIR/logs/Deriv_logs.txt
echo "ticker: $ticker" >> $HOME_DIR/logs/Deriv_logs.txt
echo "interval_in_secs: $interval_in_secs" >> $HOME_DIR/logs/Deriv_logs.txt
echo "counts: $counts" >> $HOME_DIR/logs/Deriv_logs.txt
node getquotes.mjs $HOME_DIR $ticker $interval_in_secs $counts >> $HOME_DIR/logs/Deriv_logs.txt
echo "============================================ END ==========================================================" >> $HOME_DIR/logs/Deriv_logs.txt
echo "" >> $HOME_DIR/logs/Deriv_logs.txt