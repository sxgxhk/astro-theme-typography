---
title: Astro耍起来吧
pubDate: 2024-03-24
categories: ['Astro']
description: ''
---
之前看[老麦](https://www.iamlm.com/ "老麦")的博客的文章，说是从NextJS换成Astro，很适合搭建静态博客，使用灵活，过程也不复杂，看的我又有折腾的方向了。目前我的博客除了主站在用的Wordpress外，还有其它的如：Typecho,Xlog，静态博客曾经也折腾过Hexo,Hugo（不过那都是很久的事了，其中搭建/使用等几乎也忘得差不多了），当然其它诸如：Ghost、Halo这种有后台的俺们以前也是用过的。

<!--more-->

![](https://api.uu126.cn/wp-content/uploads/2024/03/Astro.webp)

既然Astro这么好玩，那就耍起来呗，官方的教程都有中文的，不得不夸一下，按着步骤来就好，这里需要注意的是要选好主题，这玩意据说换主题比较麻烦（这点不像其它那么方便，但也丝毫不能影响咱们这折腾的心），选好主题后一番部署基本就差不多了。一些小修改啥的基本都是照着官方教程来就可以了，非常简单，关键信息设置好就可以传到自己的Github上，再用Vercel部署就可以了（当然也可以先本地查看一下）。
Astro最让我困惑的是怎么给它添加评论，折腾了很久也没能搞定，后来还是在[老麦](https://www.iamlm.com/ "老麦")的指导下解决了，再次感谢老麦，放弃自己中午休息还给我写教程，感谢感谢！那么下面就来记录一下Astro添加评论的过程。
 - 在组件目录下`src/components/`下新建一个文件，例如`Comments.astro`，文件名记牢，后面会引用
 1. 如果添加Giscus评论，按照[Giscus官方](https://giscus.app/zh-CN "Giscus官方")先部署好相关，会给一个相应的配置代码复制好，然后再在前面新建的组件`Comments.astro`中添加如下代码：
```js
<section class="giscus mx-auto mt-10 w-full"></section>
<script
  src="https://giscus.app/client.js"
  data-repo="username/repo"
  data-repo-id="repo-id"
  data-category="Blog Posts Comments"
  data-category-id="DIC_kwDOB3LMn84CaXpn"
  data-mapping="url"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="en"
  data-loading="lazy"
  crossorigin="anonymous"
  async
</script>
```
这里只是给一个示例代码，实际以Giscus给的为准，我这个只是参考一下
 2.添加Twikoo评论，也是按Twikoo教程部署好相关，然后按以下代码具体修改
```js
<div id="tcomment"></div>
<script>
  document.addEventListener('astro:page-load', () => {
    function loadTwikoo() {
      const commentsContainer = document.getElementById('tcomment');
      if (commentsContainer) {
        const script = document.createElement('script');
        script.src = 'https://cdn.staticfile.org/twikoo/1.6.32/twikoo.all.min.js';
        script.async = true;
        script.onload = () => {
          const initScript = document.createElement('script');
          initScript.innerHTML = `
            twikoo.init({
                envId: '您的环境id',
                el: '#tcomment',
            });
        `;
          document.body.appendChild(initScript);
        };
        document.body.appendChild(script);
      }
    }
    loadTwikoo();
  });
</script>
```
3.添加Artalk评论可以参照Twikoo的，部分修改一下就行
4.添加Waline评论，参照以下代码
```js
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css"/>
<div id="waline"></div>
<script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
    init({
      el: '#waline',
      serverURL: 'https://waline.vercel.app',
    });
</script>
```
暂时先想到这4个评论，除了Giscus和Waline是我自己捣鼓的外，另外两个都是在老麦的指导下搞定的。定义好组件`Comments.astro`后就可以添加自己想要的评论了，在`src/layouts/PostDetails.astro`中添加一行代码就可以了，比如：
```bash
//其它代码……
      <Content />
    </article>
    <Comments />  //添加这一段代码引用一下我们前面定义的组件
  </main>
  <Footer />
</Layout>
//其它代码……
```
自此，Astro的评论就搞定了，折腾带来的乐趣，有时确实无法形容，至于要不要主用Astro，暂且不说（说不定乐趣过了也就不折腾了）