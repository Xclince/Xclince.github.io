import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "学习笔记",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "测试心得",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
