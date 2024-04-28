# time
几个常用函数
+ time.strptime()  将特定字符串格式的时间，转换为struct_time
+ time.strftime()  将struct_time, 特定字符串格式的时间

+ time.time(), 将当前时间转换为时间戳。
+ time.mktime(), 将struct_time转换为时间戳，输入当地struct_time,输出格林威治时间戳。

+ time.localtime(), 将时间戳转换为struct_time(当地时间)
+ time.gmtime(), 将时间戳转换为struct_time(格林威治时间)

localtime与gmtime两者关系： 例如：localtime北京时间 = gmtime格林威治时间 + 8小时

```

import time

# 1. 特定字符串格式的时间 -> struct_time -> 时间戳
time_1 = "2000-01-01 14:30:30"
time_2 = time.strptime(time_1, '%Y-%m-%d %H:%M:%S')
time_2
# time.struct_time(tm_year=2000, tm_mon=1, tm_mday=1, tm_hour=14, tm_min=30, tm_sec=30, tm_wday=5, tm_yday=1, tm_isdst=-1)
time_3 = time.mktime(time_2)
time_3
# 946708230.0

# 2. 时间戳 -> struct_time -> 特定字符串格式的时间
time_3 = 946708230.0
time_4 = time.gmtime(time_3)
time_4
# time.struct_time(tm_year=2000, tm_mon=1, tm_mday=1, tm_hour=6, tm_min=30, tm_sec=30, tm_wday=5, tm_yday=1, tm_isdst=0)
time_5 = time.strftime('%Y-%m-%d %H:%M:%S', time_4)
time_5
# '2000-01-01 06:30:30'
type(time_5)
# str

# 注意：此时time_1和time_5已经不一致了，相差了8个小时，原因在time.mktime()函数上。time.mktime()输入的是当地struct_time，输出的是格林威治时间戳。

# 3. 将格林威治时间戳转换为格林威治时间和本地时区时间
# 获取一个当前时间戳
times = time.time()
# 将一个时间戳格式化为格林威治时间
gmtimes_before = time.gmtime(times)
gmtimes_before
# time.struct_time(tm_year=2022, tm_mon=2, tm_mday=26, tm_hour=12, tm_min=1, tm_sec=30, tm_wday=5, tm_yday=57, tm_isdst=0)
gmtimes = time.strftime("%Y-%m-%d %H:%M:%S", gmtimes_before)
gmtimes
# '2022-02-26 12:01:51'

# 将一个时间戳格式化为本地时区时间
mytimes_before = time.localtime(times)
mytimes_before
# time.struct_time(tm_year=2022, tm_mon=2, tm_mday=26, tm_hour=20, tm_min=4, tm_sec=30, tm_wday=5, tm_yday=57, tm_isdst=0)
mytimes = time.strftime("%Y-%m-%d %H:%M:%S", mytimes_before)
mytimes
# '2022-02-26 20:04:46'

# 4. pd.Timestamp()
# 以秒为单位转换表示Unix纪元的浮点数
pd.Timestamp(1513393355, unit='s')
# Timestamp('2019-12-16 03:02:35')


```