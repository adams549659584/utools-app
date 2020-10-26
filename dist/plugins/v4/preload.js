const { remote, nativeImage, ipcRenderer, clipboard } = require('electron');
const fs = require('fs');
const originalFs = require('original-fs');
const zlib = require('zlib');
const path = require('path');
const services = remote.getGlobal('services');
window.isDev = remote.getGlobal('isDev');

window.appPreferences = services.preferences;
window.voicePreferences = services.voicePreferences;
window.featureHotKey = services.featureHotKey;

window.account = services.account;
window.account.login = services.ffffffffLogin;

window.database = services.database;

window.app = { version: services.app.getVersion(), platform: process.platform };

window.plugin = {
  getPluginContainer: () => {
    return JSON.parse(services.getPluginContainer());
  },
  remove: pluginId => {
    if (services.pluginUnMount(pluginId)) {
      services.destroyPlugin(pluginId);
      services.refreshCmdSource();
    }
  },
  install: (pluginId, data) => {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      const tempDir = window.utools.getPath('temp');
      reader.onloadend = () => {
        const downloadUpxFile = path.join(tempDir, Date.now().toString()) + '.upx';
        fs.writeFileSync(downloadUpxFile, Buffer.from(reader.result));
        if (fs.existsSync(downloadUpxFile)) {
          services.pluginInstall(pluginId, downloadUpxFile, err => {
            try {
              fs.unlinkSync(downloadUpxFile);
            } catch (e) {}
            if (err) return reject(err);
            services.refreshCmdSource();
            resolve();
          });
        }
      };
      reader.readAsArrayBuffer(data);
    });
  },
  mount: (path, pluginId) => {
    const ret = services.pluginMount(path, pluginId);
    if (ret instanceof Error) return ret;
    services.refreshCmdSource();
  },
  unsafePluginInstall: (upxFilePath, callback) => {
    services.pluginInstall(null, upxFilePath, (err, pluginId) => {
      if (!err) {
        services.destroyPlugin(pluginId);
        services.refreshCmdSource();
      }
      callback(err);
    });
  },
  autoLoadPlugin: services.autoLoadPlugin,
  getUpxPluginConf: upxFilePath => {
    return new Promise(function (resolve, reject) {
      const upxFileContents = fs.createReadStream(upxFilePath);
      const pluginAsarPath = path.join(window.utools.getPath('temp'), 'utools_plugin_' + Date.now().toString() + '.asar');
      const writeStream = originalFs.createWriteStream(pluginAsarPath);
      const unzip = zlib.createGunzip();
      upxFileContents
        .pipe(unzip)
        .on('error', () => {
          return reject(new Error('无效安装包'));
        })
        .pipe(writeStream)
        .on('error', () => {
          return reject(new Error('内容提取出错'));
        })
        .on('finish', () => {
          const configPath = path.join(pluginAsarPath, 'plugin.json');
          let conf = null;
          try {
            conf = window.plugin.getPluginConf(configPath);
            if (!conf.logo) throw new Error('Logo未配置');
            const logoPath = path.join(pluginAsarPath, conf.logo);
            if (!fs.existsSync(logoPath)) throw new Error('Logo不存在');
            const nativeLogo = nativeImage.createFromPath(logoPath);
            if (nativeLogo.isEmpty()) throw new Error('Logo错误');
            conf.logo = nativeLogo.toDataURL();
          } catch (e) {
            try {
              originalFs.unlinkSync(pluginAsarPath);
            } catch (e) {}
            return reject(e);
          }
          try {
            originalFs.unlinkSync(pluginAsarPath);
          } catch (e) {}
          return resolve(conf);
        });
    });
  },
  getPluginConf: pluginJsonPath => {
    let conf = null;
    if (!pluginJsonPath.endsWith('plugin.json') || !fs.existsSync(pluginJsonPath)) {
      throw new Error('配置文件不存在');
    }
    try {
      conf = JSON.parse(fs.readFileSync(pluginJsonPath, 'utf8'));
    } catch (e) {
      throw new Error('解析配置文件失败');
    }
    if (!conf.pluginName || conf.pluginName.length > 20) throw new Error('pluginName为空或超过20位');
    return {
      pluginName: conf.pluginName,
      logo: conf.logo,
      description: conf.description,
      version: conf.version,
      configPath: pluginJsonPath,
      location: path.dirname(pluginJsonPath) + path.sep,
      config: conf,
    };
  },
};

window.developer = {
  getBuildPath: plugin => {
    let buildPath = path.normalize(plugin.location + path.sep);
    const development = plugin.config ? plugin.config.development : null;
    if (development && development.buildPath) {
      const devBuildPath = development.buildPath;
      if (/^[a-z]:\\/i.test(devBuildPath) || devBuildPath.indexOf('/') === 0) {
        buildPath = path.normalize(devBuildPath + path.sep);
      } else {
        buildPath = path.join(buildPath, devBuildPath);
      }
    }
    return buildPath;
  },
  buildPlugin: (plugin, callback) => {
    try {
      if (!plugin.pluginId) {
        throw new Error('请先启用此插件');
      }
      const buildPath = window.developer.getBuildPath(plugin);
      const stat = fs.lstatSync(buildPath);
      if (!stat.isDirectory()) {
        throw new Error('无效的打包路径');
      }
      const configJson = window.plugin.getPluginConf(path.join(buildPath, 'plugin.json'));
      const config = configJson.config;
      config.name = plugin.pluginId;
      if (config.development) delete config.development;
      services.buildDeveloperPlugin(buildPath, configJson.config, (err, upxPath) => {
        if (err) return callback(err);
        callback(null, upxPath);
      });
    } catch (e) {
      callback(e);
    }
  },
};

window.helper = {
  getAccessToken: () => {
    return ipcRenderer.sendSync('api.app', 'getAccountAccessToken');
  },
  readFile: path => {
    if (!fs.existsSync(path)) {
      return false;
    }
    try {
      return fs.readFileSync(path, 'utf8');
    } catch (e) {
      return '';
    }
  },
  getResIconAbsolutePath: resIcon => {
    return services.app.getResIconAbsolutePath(resIcon);
  },
  moveFileToDownloadPath: (filePath, callback) => {
    const downloadsFilePath = path.join(window.utools.getPath('downloads'), path.basename(filePath));
    fs.rename(filePath, downloadsFilePath, err => {
      if (err) return callback(err);
      callback(null, downloadsFilePath);
    });
  },
  getCopyFiles: () => {
    return services.clipboardExtend.getCopyFiles();
  },
};

window.native = {
  settingEnableNativeApp: enable => {
    services.native.settingEnableNativeApp(enable);
  },
  setNativeExtendDir: dir => {
    return services.native.setNativeExtendDir(dir);
  },
  getNativeWorkWindowInfo: () => {
    return services.getNativeWorkWindowInfo();
  },
  addLocalOpen: files => {
    return services.app.addLocalOpen(files);
  },
  removeLocalOpen: files => {
    return services.app.removeLocalOpen(files);
  },
  getLocalOpenFeatures: () => {
    return services.app.getLocalOpenFeatures();
  },
};

window.magicChange = {
  copy: text => {
    clipboard.writeText(text);
  },
};
