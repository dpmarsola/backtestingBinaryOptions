HOME_DIR=~/workspace/backtestingBinaryOptions


main(){
    # Get the quotes
    python3 getquotes.py $HOME_DIR
}

main
echo "Done getting quotes" $(date) >> $HOME_DIR/logs/getquotes.log
