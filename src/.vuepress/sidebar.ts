import { sidebar } from "vuepress-theme-hope";

// export default sidebar({
//   "/": [
//     "",
//     {
//       text: "学习笔记",
//       icon: "laptop-code",
//       prefix: "demo/",
//       link: "demo/",
//       children: "structure",
//     },
//     {
//       text: "测试心得",
//       icon: "book",
//       prefix: "posts/",
//       children: "structure",
//     },
//     "intro",
//   ],
// });

export default sidebar({
  "/": [
    "",
    {
      text: "学习笔记",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: [
        // 移除 "structure"，完全手动控制结构
        {
          text: "基础知识",
          icon: "lightbulb",
          children: ["test-theory", "case-design"]
        },
        {
          text: "测试体系",
          icon: "sitemap",
          prefix: "testing-system/",
          collapsible: true,
          children: [
            {
              text: "功能测试",
              link: "functional-testing",
              // 添加徽章标签增强可读性
              badge: { text: "重点", color: "#FF6B6B" }
            },
            {
              text: "进阶专题",
              icon: "rocket",
              prefix: "advanced/",
              children: [
                "api-testing", 
                "performance-testing"
              ]
            }
          ]
        }
      ]
    },
    // 其他配置保持不变
  ],
});

