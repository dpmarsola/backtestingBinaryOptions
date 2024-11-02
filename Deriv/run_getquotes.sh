#!/usr/bin/bash

HOME_DIR=~/workspace/backtestingBinaryOptions
# Get the quotes from the website
cd $HOME_DIR/Deriv
node getquotes.mjs $HOME_DIR > $HOME_DIR/logs/Deriv_logs.txt