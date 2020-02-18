const electron = require('electron');
const {app, ipcMain} = electron;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const isDev = require('electron-is-dev');
const sharp = require('sharp');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    width: 350,
    height: 500,
    frame: false
  });
  const devPath = 'http://localhost:3000';
  const prodPath = `file://${path.join(__dirname, '../build/index.html')}`
  mainWindow.loadURL(isDev? devPath : prodPath);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    // mainWindow.webContents.openDevTools();
    // }
  }

  mainWindow.on('closed', () => mainWindow = null);
}

ipcMain.on('file:upload', (e, files, size) => {

  files.forEach((file) => {
    console.log(file)
    const dirname = path.dirname(file);
    const fileName = path.basename(file);
    const image = sharp(file);
    image
      .metadata()
      .then(function(metadata) {
        return image
          .resize(Math.round(metadata.width * size))
          .toFile(dirname + "/_" + fileName, (err)=>{
            if(err) console.log(err)
          })
      })
      .then(()=> {
        mainWindow.webContents.send('upload:success')
        // data contains a WebP image half the width and height of the original JPEG
      });
  })
});

ipcMain.on('app:close', ()=>{
    app.quit()
});

app.on('ready', createWindow);
