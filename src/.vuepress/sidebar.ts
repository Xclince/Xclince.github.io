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
{
  text: "测试体系",
  icon: "vial",
  prefix: "testing/",
  children: [
    {
      text: "自动化测试",
      children: ["web-automation", "api-testing"]
    },
    {
      text: "性能测试",
      children: ["load-testing", "stress-testing"]
    }
  ]
}
