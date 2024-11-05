#!/usr/bin/bash
source common/environment.sh

cd dataanalyzer
python3 analyzedatasource.py $HOME_DIR 2>&1 >> $logFile