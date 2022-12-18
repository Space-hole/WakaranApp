// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    titleBarOverlay: {
        color: '#222',
        symbolColor: '#74b1be',
        height: 20,
    },
    autoHideMenuBar: true,
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  nativeTheme.themeSource = 'dark'
  win.setOverlayIcon('icons/overlay.jpg', 'Description for overlay')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.setUserTasks([
    {
      program: process.execPath,
      arguments: '--new-window',
      iconPath: process.execPath,
      iconIndex: 0,
      title: 'Wakaran',
      description: 'Wakaranai kotoga aru'
    }
  ])