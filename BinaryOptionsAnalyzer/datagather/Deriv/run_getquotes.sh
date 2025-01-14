#!/usr/bin/bash
# Get environment variables
source ../../common/environment.sh

#Get args from command line
ticker=$1
interval_in_secs=$2
counts=$3

echo "============================================ BEGIN =========================================================" >> $logFile
echo "Running getquotes.mjs wth the following args:" >> $logFile
echo "HOME_DIR: $HOME_DIR" >> $logFile
echo "ticker: $ticker" >> $logFile
echo "interval_in_secs: $interval_in_secs" >> $logFile
echo "counts: $counts" >> $logFile
node getquotes.mjs $HOME_DIR $ticker $interval_in_secs $counts >> $logFile
echo "============================================ END ==========================================================" >> $logFile
echo "" >> $logFile