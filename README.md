# Cover

A chic Hexo theme with facebook-like cover photo. Forked from [Writing](https://github.com/yunlzheng/hexo-themes-writing).

## Demo

[viewport](http://stddup.me/)



[原作者](http://daisygao.com)

Index page - cover, with social site links integrated:
![](http://ww2.sinaimg.cn/large/6cea169fjw1edhzrl42srj21400jnk2r.jpg)


## Features
  - Dynamically-resized facebook-like cover photo displayed on index page, backed by [Anystretch](https://github.com/danmillar/jquery-anystretch).  
  - Mobile-optimized by using Twitter bootstrap.
  - Dynamically-fixed nav-bar design.
  - Beautiful profile design with logo, social site links.
  - Duoshuo comment widget
  - Newer and older posts pagination support.

## Install

Execute the following command and modify `theme` in `_config.yml` to `cover`.

```
cd your-hexo-dir
git clone https://github.com/hizhi/hexo-theme-cover.git themes/cover
```

## Update

Execute the following command to update new.

```
cd themes/cover
git pull
```

## Config

Default config:

```
menu:
  Home: /
  Archives: /archives

widgets:
- search

cover:
  enable: true
  url: background-img.jpg
   
excerpt_link: Read More

full_format: 'ddd, MMM D YYYY, H:mm:ss a'

fancybox: true

google_analytics: UA-36877105-X
rss:

comment_provider: duoshuo


# Duoshuo comment
duoshuo:
  short_name: your_name

social:
  github: https://github.com/your_name
  weibo: http://weibo.com/your_name


auto_change:
  enable: true

```
