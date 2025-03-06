---
home: true
layout: BlogHome
icon: house
title: 博客主页
heroImage: /mmtouxiang.jpg
heroText: 吴鑫程的博客
heroFullScreen: true
tagline: 项目的开始从设计开始，项目的成功从测试开始——质量是永远不能松的那根弦！

<style>
/* 自定义水平渐入动画 */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px); /* 初始位置：左侧偏移50px */
  }
  to {
    opacity: 1;
    transform: translateX(0);     /* 结束位置：正常位置 */
  }
}

.tagline-container {
  overflow-x: hidden; /* 防止水平滚动条闪现 */
}

.tagline {
  animation: slideInFromLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;         /* 初始状态透明 */
  animation-fill-mode: forwards; /* 保持动画结束状态 */
  white-space: nowrap;/* 防止文字换行破坏动画 */
}
</style>

<div class="tagline-container">
  <h2 class="tagline" style="animation-delay: 0.3s;">
    🚀 代码如诗，BUG 是幽默的韵脚
  </h2>
  <p class="tagline" style="animation-delay: 0.6s;">
    探索技术与生活的有趣碰撞 → 
  </p>
</div>

projects:
  - icon: folder-open
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: newspaper
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: user-group
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

// footer: 一位不知名的小测试
---
