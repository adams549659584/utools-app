## 修改utools

> C:\Users\adams\AppData\Local\Programs\utools\resources

```powershell
# 解压app.asar
asar e app.asar ./utools

# 删除当前文件；生成app.asar；复制到resources
del ./app.asar ; asar p ./ app.asar ; Copy-item ./app.asar C:/Users/adams/AppData/Local/Programs/utools/resources
```