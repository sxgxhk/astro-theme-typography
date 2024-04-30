export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "零伍柒零灵灵",
  /** your name */
  author: "Feng",
  /** website description */
  desc: "一个爱折腾的家伙",
  /** your deployed domain */
  website: "https://blog.057000.xyz/",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/moeyua/astro-theme-typography",
    },
    {
      name: "rss",
      href: "/atom.xml",
    }
  ],
  /** your header info */
  header: {
    twitter: "",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "Feng", path: "feng" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   shortname: "typography-astro",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
     twikoo: {
       envId: "https://twikoo.iblue.eu.org/",
     }
  }
}

