---
title: "修复群晖Moments1.3.X套件主题、人物识别不能使用问题"
pubDate: 2020-10-12T01:37:56+08:00
tags: ["黑群晖"]
categories: ["IT网络"]
description: ''
---

最近碰到自己家的黑群晖（DS918+）新装的Moments存在无法智能识别人物和主题分类等功能，如果你的黑群晖系统是6.2.2以下的系统，可以直接点击下载Moments1.2旧版本解决问题。6.2.3系统无法安装1.2版本的Moments，会提示版本不兼容，下面我们就来修复1.3Moments套件智能识别的问题。


<!--more-->


修复原理：将Moments1.2版本的libsynophoto-plugin-detection.so文件替换到Moments1.3版本中使用。

 1. 停止Moments套件，群晖控制面板-终端机和SNMP-启用SSH功能。

 2. 通过SSH 登录群晖，我使用的是WinSCP结合putty，登录 root 账号，6.2.2切换root用户指令

```
//管理员切换root用户
sudo -i
```
这里切换到root帐户会让你输入密码，就输入当前管理员密码（比如：admin的密码）或有管理员权限的密码

 3. 备份原文件（万一替换出问题了，还可以换回去）

```
cd/var/packages/SynologyMoments/target/usr/lib
//备份原文件
mv libsynophoto-plugin-detection.so libsynophoto-plugin-detection.so.bak
//下载libsynophoto-plugin-detection.so
wget https://wp.gxnas.com/wp-content/uploads/2019/10/libsynophoto-plugin-detection.so
//修改libsynophoto-plugin-detection.so文件拥有者为SynologyMoments
chown SynologyMoments:SynologyMoments libsynophoto-plugin-detection.so
chmod a+x libsynophoto-plugin-detection.so
```
如果是用Winscp等工具连接的话，可以看到备份好的原文件
![qh_moments01.png][1]

如果在执行wget命令出错时，可在后面加上参数或者手动上传文件到指定目录。一般修改完成后退出，启动Moments套件，并重新建立索引，就可以正常AI识别人物和主题了。


[1]: https://1984n.win/usr/uploads/2020/10/3852246509.png#mirages-width=802&mirages-height=413&mirages-cdn-type=3