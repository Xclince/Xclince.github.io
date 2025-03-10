import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "学习笔记",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true, // 允许整个分组折叠
      children: [
        // 三大平行可折叠模块
        {
          text: "基础知识",
          icon: "lightbulb",
          prefix: "basics/",
          collapsible: true,
          children: "structure" // 自动生成基础知识点文件
        },
        {
          text: "测试体系",
          icon: "vial",
          prefix: "testing-system/",
          collapsible: true,
          children: [
            "functional-testing",
            "security-testing" // 新增安全测试条目
          ]
        },
        {
          text: "进阶专题",
          icon: "rocket",
          prefix: "advanced/",
          collapsible: true,
          children: [
            "api-testing",
            "performance-testing",
            "chaos-engineering" // 新增混沌工程条目
          ]
        }
      ]
    },
    // 保持其他配置不变
  ],
});



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
