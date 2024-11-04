import ast
import subprocess
from time import strftime, localtime, gmtime
import sys

def read_file(filename):

    debug_flag = False

    if len(sys.argv) > 1:
        if sys.argv[1] == "debug":
            debug_flag = True
        else:
            print("Unknown argument. Exiting.")
            sys.exit(1)

    with open(f'./datasource/{filename}', "r") as f:
        
        count_processed = 0
        price_went_up_flag = False
        price_went_up_flag_ytday = False
        count_kept_same_for_another_round = 0
        max_streak = 0
        max_streak_date = ""
        streak_direction = ""
        first_quote_start_time = 0
        
        lines = f.readline()

        lines_as_list = ast.literal_eval(lines)

        
        for quote in lines_as_list:

            # If the timestamp is in seconds, convert it to milliseconds
            if len(str(quote[0])) == 10:
                quote[0] = quote[0] * 1000

            if len(str(quote[6])) == 10:
                quote[6] = quote[6] * 1000

            quote_start_time = quote[0]
            quote_start_time_human_fmt =  strftime('%Y-%m-%d %H:%M:%S', gmtime(quote_start_time/1000))
            quote_start_time_human_fmt_local =  strftime('%H:%M:%S', localtime(quote_start_time/1000))

            quote_end_time = quote[6]
            quote_end_time_human_fmt =  strftime('%Y-%m-%d %H:%M:%S', gmtime(quote_end_time/1000))
            quote_end_time_human_fmt_local =  strftime('%H:%M:%S', localtime(quote_end_time/1000))

            quote_open = quote[1]
            quote_high = quote[2]
            quote_low = quote[3]
            quote_close = quote[4]
            quote_volume = quote[5]


            if debug_flag:
                print("============================================================+")
                print("Quote Start: " + quote_start_time_human_fmt + " UTC (" + quote_start_time_human_fmt_local + " GMT-3/Sao Paulo)")
                print("Quote End: " + quote_end_time_human_fmt + " UTC (" + quote_end_time_human_fmt_local + " GMT-3/Sao Paulo)")
                print("Quote Open: " + '{:20,.2f}'.format(float(quote_open)))
                print("Quote High: " + '{:20,.2f}'.format(float(quote_high)))
                print("Quote Low: " + '{:20,.2f}'.format(float(quote_low)))
                print("Quote Close: " + '{:20,.2f}'.format(float(quote_close)))
                print("Quote Volume: " + quote_volume)
 

            if count_processed == 0: #the first quote
                first_quote_start_time_human_fmt = quote_start_time_human_fmt
                first_quote_start_time_human_fmt_local = quote_start_time_human_fmt_local
                max_streak = 1
                max_streak_date = quote_start_time_human_fmt
                if quote_close >= quote_open:
                    price_went_up_flag = True
                else:
                    price_went_up_flag = False
                
                price_went_up_flag_ytday = price_went_up_flag
                
                if price_went_up_flag_ytday == True:
                    streak_direction = "UP"
                else:
                    streak_direction = "DOWN" 

                if debug_flag:
                    print("First quote processed.")
                    print("Price went up flag: " + str(price_went_up_flag))
                    print("Price went up flag yesterday: " + str(price_went_up_flag_ytday))
            else:
                quote_close_ytday = lines_as_list[count_processed - 1][4]

                if quote_close >= quote_close_ytday:
                    price_went_up_flag = True
                else:
                    price_went_up_flag = False
                
                if debug_flag:
                    print("Price went up flag: " + str(price_went_up_flag))
                    print("Price went up flag yesterday: " + str(price_went_up_flag_ytday))

            if price_went_up_flag_ytday == price_went_up_flag:
                count_kept_same_for_another_round += 1

                if debug_flag:
                    print("Count kept same for another round: " + str(count_kept_same_for_another_round))
            else:
                if count_kept_same_for_another_round >= max_streak:
                    max_streak = count_kept_same_for_another_round
                    max_streak_date = quote_start_time_human_fmt
                    max_streak_date_local = quote_start_time_human_fmt_local
                    if price_went_up_flag_ytday == True:
                        streak_direction = "UP"
                    else:
                        streak_direction = "DOWN"

                    if debug_flag:
                        print("The streak changed direction. And it beat the longest streak.")
                else:
                    if debug_flag:
                        print("The streak changed direction. But it didn't beat the longest streak.")

                if debug_flag:
                    print("Max streak: " + str(max_streak))
                    print("Max streak date: " + max_streak_date)
                    print("Max Streak direction: " + streak_direction)

                    if price_went_up_flag == True:
                        print("Price is going UP now.")
                    else:
                        print("Price is going DOWN now.")
                        
                count_kept_same_for_another_round = 0
                
            count_processed += 1
            price_went_up_flag_ytday = price_went_up_flag

        if debug_flag:
            print("Ranging from: " + first_quote_start_time_human_fmt + " UTC (" + first_quote_start_time_human_fmt_local + " GMT-3/Sao Paulo)")
            print("          to: " + quote_end_time_human_fmt + " UTC (" + quote_end_time_human_fmt_local + " GMT-3/Sao Paulo)")
            print(" ")
            print("The longest streak was " + str(max_streak) + " times on " + max_streak_date + " UTC (" + max_streak_date_local + " GMT-3/Sao Paulo)" + " when it was going " + streak_direction + ".")
            print("==============================================================================================")
            print(" ")
            print(" ")
            print(" ")
        
        output_line = f'[\'{filename}\', \'{first_quote_start_time_human_fmt}\', \'{first_quote_start_time_human_fmt_local}\' , \'{quote_end_time_human_fmt}\', \'{quote_end_time_human_fmt_local}\' , {max_streak}, \'{max_streak_date}\', \'{streak_direction}\']'

        with open("./output/output.txt", "a") as output_file:
            output_file.write(output_line + "\n")
            output_file.close()

def list_files_in_dir():
    return subprocess.run(["ls", "--ignore=bkp*", "./datasource"], capture_output=True, text=True).stdout.split()
    

if __name__ == '__main__':
    
    for file in list_files_in_dir():
        print("==============================================================================================")
        print("Processing file: " + file)
        print("----------------------------------------------------------------------------------------------")
        print(" ")
        read_file(file)