# 参与开发

## 调试主题

在 VS Code 中打开项目，执行 `Debug: Start Debugging` 命令。调试启动后，会弹出一个新的 VS Code 测试实例，该实例会禁用所有其他扩展并启用本主题。TypeScript 编译器也会以 watch 模式启动，自动编译你的改动。修改完成后，执行 `Debug: Restart` 即可在测试实例中看到最新效果。

### 使用 nodemon 热更新主题颜色

本项目支持通过 `nodemon` 实现主题颜色的热更新，无需重启测试实例即可实时预览颜色改动。在开始调试之前，先在终端运行：

```bash
npm run theme:watch
```

## 配色规范

为保持主题一致性，语法高亮配色应尽量使用以下调色板中的颜色。编辑器 UI 颜色（非语法高亮）不强制遵守。

| 名称       | 色值     | 预览        | 名称        | 色值     | 预览         |
| :--------- | :------- | :---------- | :---------- | :------- | :----------- |
| **chalky** | \#e5c07b | ![][chalky] | **malibu**  | \#61afef | ![][malibu]  |
| **coral**  | \#e06c75 | ![][coral]  | **sage**    | \#98c379 | ![][sage]    |
| **cyan**   | \#56b6c2 | ![][cyan]   | **stone**   | \#5c6370 | ![][stone]   |
| **error**  | \#f44747 | ![][error]  | **violet**  | \#c678dd | ![][violet]  |
| **ivory**  | \#abb2bf | ![][ivory]  | **whiskey** | \#d19a66 | ![][whiskey] |

[chalky]:
  https://user-images.githubusercontent.com/25914066/149455179-c3404ca7-c393-4644-aeb8-717df67d56b6.jpg
[coral]:
  https://user-images.githubusercontent.com/25914066/149455181-96cf48fb-f5a0-4535-83ba-fd529c10e147.jpg
[cyan]:
  https://user-images.githubusercontent.com/25914066/149455182-962b9272-e0e6-4d95-8060-771321f02029.jpg
[error]:
  https://user-images.githubusercontent.com/25914066/149455183-87935a9f-e7d9-4366-8d2b-ebd9e77fcbf6.jpg
[ivory]:
  https://user-images.githubusercontent.com/25914066/149455184-b322fcff-2d2d-4519-bb9c-fb6579511082.jpg
[malibu]:
  https://user-images.githubusercontent.com/25914066/149455186-bbfd263a-5ea7-4352-bd13-f1ef62e2c4c9.jpg
[sage]:
  https://user-images.githubusercontent.com/25914066/149455187-73f2b5d6-066f-4a46-94a1-ec5b31a84be5.jpg
[stone]:
  https://user-images.githubusercontent.com/25914066/149455189-55d0265c-7e4a-46ff-ae7e-78d456fb974a.jpg
[violet]:
  https://user-images.githubusercontent.com/25914066/149455191-49f9f035-8eed-4e60-85c1-4f20c1e04107.jpg
[whiskey]:
  https://user-images.githubusercontent.com/25914066/149455192-7a1e7d56-5b61-4a82-9b6b-979d955b4263.jpg
