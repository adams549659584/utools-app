## 修改utools

> C:\Users\adams\AppData\Local\Programs\utools\resources

```powershell
# 解压app.asar
asar e app.asar ./utools

# 删除当前文件；生成app.asar；复制到resources
del ./app.asar ; asar p ./ app.asar ; Copy-item ./app.asar C:/Users/adams/AppData/Local/Programs/utools/resources
```

## 常用函数记录

```js
// 添加自定义函数复制文本 /dist/plugins/v4/preload.js -> copyText: (text) => clipboard.writeText(text)
// 修改vip /dist/main.js -> getAccountInfo() {
// 自定义pluginId /dist/plugins/v4/umi.js -> window.account.createPluginId
// 展示插件本地asar路径 dist/plugins/v4/umi.js -> window.helper.copyText(JSON.stringify(a));

a["a"].success("成功提示");

a["a"].error("失败提示");

l["a"].confirm({
              title: "确认标题",
              content: "内容",
              okText: "确认按钮",
              cancelText: "取消按钮",
              autoFocusButton: "cancel",
              onOk: () => {},
              onCancel() {},
            });
```