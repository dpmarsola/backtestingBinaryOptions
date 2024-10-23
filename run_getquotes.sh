main(){
    # Get the quotes
    python3 getquotes.py
}

main
echo "Done getting quotes" $(date) >> ./logs/getquotes.log