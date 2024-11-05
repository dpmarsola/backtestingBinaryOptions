# Get environment variables
source ../Common/environment.sh

main(){
    # Get the quotes
    python3 getquotes.py $HOME_DIR
}

main
echo "Done getting quotes" $(date) >> $logFile
