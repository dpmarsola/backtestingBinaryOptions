import ast
import subprocess
from time import strftime, localtime

def read_file(filename):

    with open(f'./datasource/{filename}', "r") as f:
        
        count_processed = 0
        price_went_up_count = 0
        price_went_down_count = 0
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
            quote_start_time = quote[0]
            quote_end_time = quote[6]
            quote_open = quote[1]
            quote_high = quote[2]
            quote_low = quote[3]
            quote_close = quote[4]
            quote_volume = quote[5]

            # print("============================================================+")
            # quote_start_time_human_fmt =  strftime('%Y-%m-%d %H:%M:%S', localtime(quote_start_time/1000))
            # print("Quote Start: " + quote_start_time_human_fmt)
            # quote_end_time_human_fmt =  strftime('%Y-%m-%d %H:%M:%S', localtime(quote_end_time/1000))
            # print("Quote End: " + quote_end_time_human_fmt)
            # print("Quote Open: " + '{:20,.2f}'.format(float(quote_open)))
            # print("Quote High: " + '{:20,.2f}'.format(float(quote_high)))
            # print("Quote Low: " + '{:20,.2f}'.format(float(quote_low)))
            # print("Quote Close: " + '{:20,.2f}'.format(float(quote_close)))
            # print("Quote Volume: " + quote_volume)

            if count_processed > 0:
                quote_close_ytday = lines_as_list[count_processed - 1][4]
                price_went_up_flag_ytday = price_went_up_flag
                if quote_close > quote_close_ytday:
                    price_went_up_count += 1
                    price_went_up_flag = True
                else:
                    price_went_down_count += 1
                    price_went_up_flag = False
            else:
                first_quote_start_time = quote_start_time

            if price_went_up_flag_ytday == price_went_up_flag:
                count_kept_same_for_another_round += 1
            else:
                # print("============================================================+")
                quote_start_time_human_fmt =  strftime('%Y-%m-%d %H:%M:%S', localtime(quote_start_time/1000))
                # print("On Date: " + quote_start_time_human_fmt + " - Kept a streak of " + str(count_kept_same_for_another_round) + " times. Yesterday it was US$" + '{:10,.2f}'.format(float(quote_close_ytday)) + " and today it is US$" + '{:10,.2f}'.format(float(quote_close)) + ".") 

                if count_kept_same_for_another_round > max_streak:
                    max_streak = count_kept_same_for_another_round
                    max_streak_date = quote_start_time_human_fmt
                    if price_went_up_flag_ytday == True:
                        streak_direction = "UP"
                    else:
                        streak_direction = "DOWN" 

                count_kept_same_for_another_round = 0
                
            count_processed += 1

        last_quote_start_time = quote_start_time

        print("Ranging from: " + strftime('%Y-%m-%d %H:%M:%S', localtime(first_quote_start_time/1000)))
        print("          to: " + strftime('%Y-%m-%d %H:%M:%S', localtime(last_quote_start_time/1000)))
        print(" ")
        print("The longest streak was " + str(max_streak) + " times on " + max_streak_date + " when it was going " + streak_direction + ".")
        print("==============================================================================================")
        print(" ")
        print(" ")
        print(" ")

def list_files_in_dir():
    return subprocess.run(["ls", "./datasource"], capture_output=True, text=True).stdout.split()
    

if __name__ == '__main__':
    
    for file in list_files_in_dir():
        print("==============================================================================================")
        print("Processing file: " + file)
        print("----------------------------------------------------------------------------------------------")
        print(" ")
        read_file(file)