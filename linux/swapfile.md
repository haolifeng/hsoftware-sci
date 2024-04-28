# linux 交换分区
# swapfile文件
## 创建文件

```
dd if=/dev/zero of=/swapfile2  bs=1G count=16
```
## 格式化交换分区文件
```
mkswap /swapfile2
```

## 开机自动挂载设置

/etc/fstab
```

/swapfile2 swap swap defaults 0 0 
```
