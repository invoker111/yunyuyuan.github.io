## 简述

很早就有这个想法了:写一个静态博客。正好我租的服务器快过期了，也不想续费因为基本用不上(贫穷![sticker](yellow-face/27))，挂个blog在上面甚是浪费。
于是着手写了这个静态博客，仅有一些我所认为的基础功能。日后慢慢完善吧！

## 技术栈

> 此博客所用的技术栈其实只有vue,毕竟vue这个巨人它的肩膀已经足够高。
> 本站除了域名之外,其他的内容全部免费(白嫖党狂喜![sticker](aru/55)),下面简述下大大小小的致谢与Power by：

* 托管在#[github.io](https://github.io)上
* 由#[vue](https://vuejs.org)全家桶强力驱动
* **99.9%**的文件由#[jsdelivr](https://www.jsdelivr.com/)的CDN加速
* 动态更新api基于#[github api](https://developer.github.com/)

## 基本使用
1. git clone 仓库
2. 修改`src/site-config.js`
3. `npm run build`
4. 复制`404-temp.html`的内容到`404.html`
5. `git add .`->`git commit -m init`->`git push`
6. 进入github当前项目，创建一个tag，版本号写`v0.0.1`
7. 过一会访问网站
8. have fun![sticker](yellow-face/55)


### 任务列表

- [x] img-viewer
- [x] 路由history模式
- [x] 在线发布release
- [x] 未写完存草稿到localStorage
- [ ] about页面
- [x] safari和firefox不支持正则分组
- [ ] RSS
- [x] 评论功能完善