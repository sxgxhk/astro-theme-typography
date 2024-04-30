---
title: "黑群晖显示真实CPU核心信息补丁"
pubDate: 2020-05-06
tags: ["黑群晖"]
categories: ["IT网络"]
description: ''
---

使用黑群晖（这里以DS918+为例）会发现一个问题，就是信息中心的CPU信息跟实物不吻合，对于强迫证的我们来说，这也是需要改正的，下面就来说说如何让它显示正确的CPU信息：


<!--more-->

 - 首先下载补丁文件：到电脑上，解压出来得到一个文件夹ch_cpuinfo，里面有一个“ch_cpuinfo”文件；

 - 然后将ch_cpuinfo文件夹上传到黑群晖的共享文件夹，如docker目录下；

 - 使用诸如putty等工具连接SSH，并以root权限登录（可以先用admin账号登录，再使用` sudo -i `切换到root账号，提示输密码时直接输admin的密码），分别输入以下命令：

```python
cd /volume1/docker/ch_cpuinfo
./ch_cpuinfo
```

接着先选择数字` 1 `，再选择` y `。

![heiqunhui01.jpg][1]


 - 输完后就可以关闭SSH工具，退出当前群晖登录的用户，并且重新登录；

 - 重新登录到桌面以后，打开控制面板的信息中心，就可以显示实际硬件信息了。

![heiqunhui02.png][2]


[1]: https://cdn.lancn.cn/usr/uploads/2020/05/1840053542.jpg
[2]: https://cdn.lancn.cn/usr/uploads/2020/05/1999277547.png