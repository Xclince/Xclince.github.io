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
        {
          text: "基础知识",
          icon: "lightbulb",
          prefix: "basics/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "测试体系",
          icon: "vial",
          prefix: "testing-system/",
          collapsible: true,
          children: [
            { 
              text: "功能测试",
              link: "functional-testing",
              badge: { text: "重点", color: "#FF6B6B" }
            },
            {  // 修正1：子项需要包裹成对象
              text: "接口测试",
              link: "api-testing",
              badge: { text: "重点", color: "#FF6B6B" }
            },
            {  // 修正1：子项需要包裹成对象
              text: "性能测试",
              link: "performance-testing",
              badge: { text: "重点", color: "#FF6B6B" }
            },
            {  // 修正1：子项需要包裹成对象
              text: "自动化测试",
              link: "automation-testing",
              badge: { text: "重点", color: "#FF6B6B" }
            }
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
            "chaos-engineering"
          ]
        }
      ]
    },
    // {
    //   text: "测试心得",
    //   icon: "book",
    //   prefix: "posts/",
    //   collapsible: true,
    //   children: [
    //     {
    //       text: "年度总结",
    //       icon: "calendar",
    //       prefix: "apple/",
    //       collapsible: true,
    //       children: [
    //         "2023-summary",
    //       ]
    //     },
    //       "996背后的真相",
    //   ]
    // },
    {
      text: "测试心得",
      icon: "book",
      prefix: "posts/",
      collapsible: true,
      children: [
        {
          text: "年度总结",
          icon: "calendar",
          prefix: "apple/",
          collapsible: true,
          children: [
            "2023-summary",
          ]
        },
        // 将“996背后的真相”提升为与“年度总结”同级，并添加占位结构
        {
          text: "996背后的真相",
          icon: "file",          // 文章类型图标
          link: "996背后的真相.md",     // 直接指向文章文件
          // 保持与上方折叠项相同的缩进层级
          _style: { paddingLeft: "1rem" } // 可选：强制对齐缩进
        }
      ]
    },
    "intro"
  ],
});
