import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "学习笔记",
      icon: "laptop-code",
      prefix: "demo/",
      collapsible: true,
      children: [
        // 原有结构保持不变
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
            text: "功能测试",
            link: "functional-testing",
              // 添加徽章标签增强可读性
            badge: { text: "重点", color: "#FF6B6B" }
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
    // 新增测试心得模块（与学习笔记同级）
    {
      text: "测试心得",
      icon: "book",
      prefix: "posts/",
      collapsible: true, // 可折叠整个模块
      children: [
        {
          text: "年度总结",
          icon: "calendar",
          collapsible: true, // 子模块也可折叠
          children: [
            "2023-summary", // 对应 posts/2023-summary.md
            "2024-plan"
          ]
        },
        "case-study" // 同级其他文章
      ]
    },
    "intro"
  ],
});
