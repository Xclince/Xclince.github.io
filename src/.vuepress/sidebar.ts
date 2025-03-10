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
        // 原自动生成结构的基础上新增嵌套
        "structure", // 保留原有自动生成结构
        
        // 新增测试体系子菜单
        {
          text: "测试体系",
          icon: "vial",
          prefix: "testing-system/", // 实际路径为 demo/testing-system/
          collapsible: true, // 可折叠
          children: [
            "functional-testing", // 对应 demo/testing-system/functional-testing.md
            {
              text: "进阶专题",
              icon: "rocket",
              children: [
                "api-testing",
                "performance-testing"
              ]
            }
          ]
        }
      ]
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
