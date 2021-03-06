const { remote, clipboard, shell, ipcRenderer } = require('electron'),
  services = remote.getGlobal('services'),
  vm = require('vm'),
  regexCmdTestVMScript = new vm.Script('regexCmd.regex.test(regexCmd.payload)');
(window.platform = { isMacOs: 'darwin' === process.platform, isLinux: 'linux' === process.platform, isWindow: 'win32' === process.platform }),
  (window.rpcMain = {
    onLineStatusChange(e) {
      services.onLineStatusChange(e);
    },
    onWebcontensBlur() {
      services.onWebcontensBlur();
    },
    getPluginContainer: () => JSON.parse(services.getPluginContainer()),
    setExpendHeight(e) {
      services.setExpendHeight(e);
    },
    enterPlugin(e, t, i) {
      services.enterPlugin(e, t, i);
    },
    getNativeWorkWindowInfo: () => services.getNativeWorkWindowInfo() || null,
    recoverPlugin(e) {
      services.recoverPlugin(e);
    },
    detachPlugin() {
      services.detachPlugin();
    },
    hideMainWindow() {
      services.hideMainWindow();
    },
    setPosition(e, t, i, n) {
      services.setPosition(e, t, i, n);
    },
    sendSubInputChangeEvent(e) {
      'string' == typeof e && services.sendSubInputChangeEvent(e);
    },
    sendPluginSomeKeyDownEvent(e, t, i, n, r) {
      const s = [];
      t && s.push('control'), i && s.push('shift'), n && s.push('alt'), r && s.push('meta'), services.sendPluginSomeKeyDownEvent(e, s);
    },
    getOriginImageBase64(e, t) {
      services.getOriginImageBase64(e, t);
    },
    appUpdate() {
      services.update.appUpdate();
    },
    showPluginMenu() {
      services.showPluginMenu();
    },
    getPasteCmd() {
      const e = services.clipboardExtend.getCopyFiles();
      if (e) return { type: 'files', data: e };
      const t = clipboard.availableFormats();
      if (0 === t.length) return { type: 'text', data: '' };
      if ('text/plain' === t[0]) return { type: 'text', data: clipboard.readText().trim() };
      if (t[t.length - 1].startsWith('image/')) {
        const e = clipboard.readImage();
        if (e && !e.isEmpty()) return { type: 'img', data: e.toDataURL() };
      }
      return { type: 'text', data: clipboard.readText().trim() };
    },
    nativeOpen(e, t, i) {
      services.native.open(e, t, i);
    },
    nativeMatchCall(e, t, i, n) {
      services.native.matchCall(e, t, i, n);
    },
    regexCmdTest(e) {
      global.regexCmd = e;
      try {
        return regexCmdTestVMScript.runInThisContext({ timeout: 10 });
      } catch (e) {
        return !1;
      }
    },
    shellOpenExternal(e) {
      shell.openExternal(e);
    },
    isDarkColors: () => services.isDarkColors(),
    getStringSize: e => Buffer.byteLength(e),
    getNativeIconUrl: e => services.app.getNativeIconUrl(e),
    voice: {
      ...services.voice,
      onMouseMove(e) {
        ipcRenderer.on('mousemove', (t, i, n) => {
          e(i, n);
        });
      },
      onMouseOut(e) {
        ipcRenderer.on('mouseout', () => {
          e();
        });
      },
      onChangeDirection(e) {
        ipcRenderer.on('changeDirection', (t, i) => {
          e(i);
        });
      },
    },
  });
