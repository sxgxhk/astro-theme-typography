---
title: Typecho CommentToMail邮件样式分享
pubDate: 2018-04-08
categories: ['Typecho']
description: ''

---
刚在逛博客圈，发现有个Typecho的CommentToMail的邮件样式挺美的，虽然我现在已经入了Ghost门，但本着一种折腾不息的心理（万一哪天心情不顺又杀回Typecho呢，哈哈），于是就顺手摘录到我家宝典了，具体如下：

#### Guest样式<figure class="wp-block-image">

<img   class="lazyload" data-src="https://cdn.uu126.cn/201804/commenttomail_guest.png" src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.2/img/svg/loader/trans.ajax-spinner-preloader.svg" onerror="imgError(this)"  alt="commenttomail_guest" /> </figure > 

<noscript>
  <img src="https://cdn.uu126.cn/201804/commenttomail_guest.png" alt="commenttomail_guest" /></figure>
</noscript>

#### Owners样式<figure class="wp-block-image">

<img   class="lazyload" data-src="https://cdn.uu126.cn/201804/commenttomail_owner.png" src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.2/img/svg/loader/trans.ajax-spinner-preloader.svg" onerror="imgError(this)"  alt="commenttomail_owner" /> </figure > 

<noscript>
  <img src="https://cdn.uu126.cn/201804/commenttomail_owner.png" alt="commenttomail_owner" /></figure>
</noscript>

怎么样？挺美的吧，感觉比我在用Typecho时的样式美多了，喜欢就赶紧把下面的代码Down走吧：

#### Guest样式源码

<pre class="wp-block-code"><code>&lt;table style="width: 99.8%;height:99.8% ">&lt;tbody>&lt;tr>&lt;td style="background:#fafafa url(https://a.photo/images/2018/03/24/2017113018325846288465.png)">
    &lt;div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);">
        &lt;div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;">
            &lt;p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在&lt;a style="text-decoration:none;color: #ffffff;" href="https://www.liuguogy.com"> {siteTitle} &lt;/a>上的留言有新回复啦！
            &lt;/p>
        &lt;/div>
        &lt;div style="margin:40px auto;width:90%">
            &lt;p>{author_p} 同学，您曾在文章《{title}》上发表评论:&lt;/p>
            &lt;p style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">{text_p}&lt;/p>
            &lt;p>{author} 给您的回复如下：&lt;/p>
            &lt;p style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">{text}&lt;/p>
              &lt;p>您可以点击 &lt;a style="text-decoration:none; color:#12addb" href="{permalink}">查看回复的完整內容 &lt;/a>，欢迎再次光临 &lt;a style="text-decoration:none; color:#12addb" href="https://www.liuguogy.com"> {siteTitle} &lt;/a>。&lt;/p>
            &lt;style type="text/css">a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a:active{text-decoration:none}&lt;/style>
        &lt;/div>
    &lt;/div>
&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table></code></pre>

#### Owners样式源码

<pre class="wp-block-code"><code>&lt;style>
    .wrap span {
        display: inline-block;
    }
    .w260{ width: 260px;}
    .w20{ width: 20px;}
    .wauto{ width: auto;}
&lt;/style>
&lt;table style="width: 99.8%;height:99.8% ">&lt;tbody>&lt;tr>&lt;td style="background:#fafafa url(https://a.photo/images/2018/03/24/2017113018325846288465.png)">
    &lt;div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);">
        &lt;div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;">
            &lt;p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您的&lt;a style="text-decoration:none;color: #ffffff;" href="https://www.liuguogy.com"> {siteTitle} &lt;/a>上有新的评论啦！
            &lt;/p>
        &lt;/div>
        &lt;div style="margin:40px auto;width:90%">
            &lt;p>{author} 在您文章《{title}》上发表评论:&lt;/p>
            &lt;p style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">{text}&lt;/p>

            &lt;p class="wrap" style="text-decoration:none">&lt;span class="w260">时间：{time}&lt;/span>&lt;span class="w20"> &lt;/span>&lt;span class="wauto">IP：{ip}&lt;/span>&lt;/p>
            &lt;p class="wrap" style="text-decoration:none">&lt;span class="w260">邮箱：{mail}&lt;/span>&lt;span class="w20"> &lt;/span>&lt;span class="wauto">状态：{status}&lt;/span>&lt;/p>
            &lt;p>&lt;a style="text-decoration:none; color:#12addb" href="{permalink}" target='_blank'>[查看评论]&lt;/a>&nbsp;|&nbsp;&lt;a style="text-decoration:none; color:#12addb" href="{manage}" target='_blank'>[管理评论] &lt;/a>&lt;/p>
            &lt;style type="text/css">a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a:active{text-decoration:none}&lt;/style>
        &lt;/div>
    &lt;/div>
&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table></code></pre>

摘录完毕，感谢<a href="https://www.liuguogy.com/" target="_blank"  rel="nofollow" >@Linger</a>的分享，等我转战回Typecho时也可以使用这么美美的邮件提醒样式了。