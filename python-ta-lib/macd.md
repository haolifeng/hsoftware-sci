# MACD
ta-lib中直接有MACD函数,其返回值有三个

## return value
```
macd = 12 天 EMA - 26 天 EMA （DIFF）
signal = 9 天 MACD的EMA  （DEA）
hist = MACD - MACD signal （DIFF - DEA）
```

这个值对应的是DIFF  DEA  DIFF-DEA 三个值.

```
import pandas as pd
import talib

# Load stock data into a pandas DataFrame
df = pd.read_csv('stock_data.csv')

# Calculate the MACD indicator using TA-Lib
macd, signal, hist = talib.MACD(df['Close'], fastperiod=12, slowperiod=26, signalperiod=9)

# Add the MACD indicator to the DataFrame
df['MACD'] = macd
```

## use
```

def TA_MACD(docs, long, short, mid):
    df = pd.DataFrame(docs, columns=["openTime", "closePrice"], dtype=float)
    df.set_index("openTime", inplace=True, )

    longKey = "EMA" + str(long)
    shortKey = "EMA" + str(short)

    df[shortKey] = talib.EMA(df["closePrice"], timeperiod = short)
    df[longKey] = talib.EMA(df["closePrice"], timeperiod = long)

    df["DIFF"] ,df['DEA'], df['delta'] = talib.MACD(df["closePrice"],fastperiod=short, slowperiod=long, signalperiod=mid)
    df['pre_delta'] = df['delta'].shift(1)

    print("in DEAMA -------------------------------------------------- 2000  -- new df ")
    print(df)

    df_gold = df[(df['pre_delta'] <= 0) & (df['delta'] > 0)]
    df_dead = df[(df['pre_delta'] >= 0) & (df['delta'] < 0)]

    print("in DEMA ---------------------------------------------------- 3000 -- gold")
    print(df_gold)
    print("in DEMA ---------------------------------------------------- 3000 -- dead")
    print(df_dead)
    print("in DEMA ---------------------------------------------------- 4000 -- end")

    return (df, df_gold, df_dead)

```