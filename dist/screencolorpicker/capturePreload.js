const{remote,ipcRenderer}=require("electron");window.onmousedown=e=>{e.preventDefault(),remote.getCurrentWebContents().sendInputEvent({type:"keyDown",keyCode:e.button?"Escape":"Enter"})},window.onmouseout=e=>{ipcRenderer.send("switchdisplay")};