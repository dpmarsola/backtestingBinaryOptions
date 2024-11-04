import requests
from datetime import datetime
import sys

def get_quotes_from_binance_1m_interval():
    url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m'
    response = requests.get(url)
    data = response.json()
    return data

def save_quotes_to_file(data):

    day = datetime.now().day
    month = datetime.now().month
    year = datetime.now().year
    hour = datetime.now().hour
    minute = datetime.now().minute
    second = datetime.now().second

    filename = f'Binance_1m_{day}_{month}_{year}_{hour}_{minute}_{second}.txt'

    with open(f'{homedir}/datasource/{filename}', 'w') as f:
        f.write(str(data))

if __name__ == '__main__':
    homedir=sys.argv[1]
    data = get_quotes_from_binance_1m_interval()
    save_quotes_to_file(data)
