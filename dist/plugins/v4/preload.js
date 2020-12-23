const { remote: remote, nativeImage: nativeImage, ipcRenderer: ipcRenderer } = require('electron'),
  fs = require('fs'),
  originalFs = require('original-fs'),
  zlib = require('zlib'),
  path = require('path'),
  services = remote.getGlobal('services');
(window.isDev = remote.getGlobal('isDev')),
  (window.appPreferences = services.preferences),
  (window.voicePreferences = services.voicePreferences),
  (window.featureHotKey = services.featureHotKey),
  (window.account = services.account),
  (window.account.login = services.ffffffffLogin),
  (window.database = services.database),
  (window.app = { version: services.app.getVersion(), platform: process.platform }),
  (window.plugin = {
    getPluginContainer: () => JSON.parse(services.getPluginContainer()),
    remove: e => {
      services.pluginUnMount(e) && (services.destroyPlugin(e), services.refreshCmdSource());
    },
    install: (e, n) =>
      new Promise((r, i) => {
        const t = new window.FileReader(),
          o = window.utools.getPath('temp');
        (t.onloadend = () => {
          const n = path.join(o, Date.now().toString()) + '.upx';
          fs.writeFileSync(n, Buffer.from(t.result)),
            fs.existsSync(n) &&
              services.pluginInstall(e, n, e => {
                try {
                  fs.unlinkSync(n);
                } catch (t) {}
                if (e) return i(e);
                services.refreshCmdSource(), r();
              });
        }),
          t.readAsArrayBuffer(n);
      }),
    mount: (e, n) => {
      const r = services.pluginMount(e, n);
      if (r instanceof Error) return r;
      services.refreshCmdSource();
    },
    unsafePluginInstall: (e, n) => {
      services.pluginInstall(null, e, (e, r) => {
        e || (services.destroyPlugin(r), services.refreshCmdSource()), n(e);
      });
    },
    autoLoadPlugin: services.autoLoadPlugin,
    getUpxPluginConf: e =>
      new Promise(function (n, r) {
        const i = fs.createReadStream(e),
          t = path.join(window.utools.getPath('temp'), 'utools_plugin_' + Date.now().toString() + '.asar'),
          o = originalFs.createWriteStream(t),
          s = zlib.createGunzip();
        i.pipe(s)
          .on('error', () => r(new Error('\u65e0\u6548\u5b89\u88c5\u5305')))
          .pipe(o)
          .on('error', () => r(new Error('\u5185\u5bb9\u63d0\u53d6\u51fa\u9519')))
          .on('finish', () => {
            const e = path.join(t, 'plugin.json');
            let i = null;
            try {
              if (((i = window.plugin.getPluginConf(e)), !i.logo)) throw new Error('Logo\u672a\u914d\u7f6e');
              const n = path.join(t, i.logo);
              if (!fs.existsSync(n)) throw new Error('Logo\u4e0d\u5b58\u5728');
              const r = nativeImage.createFromPath(n);
              if (r.isEmpty()) throw new Error('Logo\u9519\u8bef');
              i.logo = r.toDataURL();
            } catch (o) {
              try {
                originalFs.unlinkSync(t);
              } catch (o) {}
              return r(o);
            }
            try {
              originalFs.unlinkSync(t);
            } catch (o) {}
            return n(i);
          });
      }),
    getPluginConf: e => {
      let n = null;
      if (!e.endsWith('plugin.json') || !fs.existsSync(e)) throw new Error('\u914d\u7f6e\u6587\u4ef6\u4e0d\u5b58\u5728');
      try {
        n = JSON.parse(fs.readFileSync(e, 'utf8'));
      } catch (r) {
        throw new Error('\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u5931\u8d25');
      }
      if (!n.pluginName || n.pluginName.length > 20) throw new Error('pluginName\u4e3a\u7a7a\u6216\u8d85\u8fc720\u4f4d');
      return { pluginName: n.pluginName, logo: n.logo, description: n.description, version: n.version, configPath: e, location: path.dirname(e) + path.sep, config: n };
    },
  }),
  (window.developer = {
    getBuildPath: e => {
      let n = path.normalize(e.location + path.sep);
      const r = e.config ? e.config.development : null;
      if (r && r.buildPath) {
        const e = r.buildPath;
        n = /^[a-z]:\\/i.test(e) || 0 === e.indexOf('/') ? path.normalize(e + path.sep) : path.join(n, e);
      }
      return n;
    },
    buildPlugin: (e, n) => {
      try {
        if (!e.pluginId) throw new Error('\u8bf7\u5148\u542f\u7528\u6b64\u63d2\u4ef6');
        const r = window.developer.getBuildPath(e),
          i = fs.lstatSync(r);
        if (!i.isDirectory()) throw new Error('\u65e0\u6548\u7684\u6253\u5305\u8def\u5f84');
        const t = window.plugin.getPluginConf(path.join(r, 'plugin.json')),
          o = t.config;
        (o.name = e.pluginId),
          o.development && delete o.development,
          services.buildDeveloperPlugin(r, t.config, (e, r) => {
            if (e) return n(e);
            n(null, r);
          });
      } catch (r) {
        n(r);
      }
    },
  }),
  (window.helper = {
    getAccessToken: () => ipcRenderer.sendSync('api.app', 'getAccountAccessToken'),
    readFile: e => {
      if (!fs.existsSync(e)) return !1;
      try {
        return fs.readFileSync(e, 'utf8');
      } catch (n) {
        return '';
      }
    },
    getResIconAbsolutePath: e => services.app.getResIconAbsolutePath(e),
    moveFileToDownloadPath: (e, n) => {
      const r = path.join(window.utools.getPath('downloads'), path.basename(e));
      fs.rename(e, r, e => {
        if (e) return n(e);
        n(null, r);
      });
    },
    getCopyFiles: () => services.clipboardExtend.getCopyFiles(),
  }),
  (window.native = {
    settingEnableNativeApp: e => {
      services.native.settingEnableNativeApp(e);
    },
    setNativeExtendDir: e => services.native.setNativeExtendDir(e),
    getNativeWorkWindowInfo: () => services.getNativeWorkWindowInfo(),
    addLocalOpen: e => services.app.addLocalOpen(e),
    removeLocalOpen: e => services.app.removeLocalOpen(e),
    getLocalOpenFeatures: () => services.app.getLocalOpenFeatures(),
  });
