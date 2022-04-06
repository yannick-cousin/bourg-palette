const electron = require('electron'),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow;

const path = require('path'),
	isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({ width: 1980, height: 1080 });
	// const appUrl = 'http://localhost:3000';

	// 	ipcMain.handle('dark-mode:toggle', () => {
	//     if (nativeTheme.shouldUseDarkColors) {
	//       nativeTheme.themeSource = 'light'
	//     } else {
	//       nativeTheme.themeSource = 'dark'
	//     }
	//     return nativeTheme.shouldUseDarkColors
	//   })

	//   ipcMain.handle('dark-mode:system', () => {
	//     nativeTheme.themeSource = 'system'
	//   })
	// }

	const appUrl = isDev
		? 'http://localhost:3000'
		: `file://${path.join(__dirname, '../build/index.html')}`;
	mainWindow.loadURL(appUrl);
	// mainWindow.maximize();
	mainWindow.setFullScreen(false);
	mainWindow.on('closed', () => (mainWindow = null));
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
	// Follow OS convention on whether to quit app when
	// all windows are closed.
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', () => {
	// If the app is still open, but no windows are open,
	// create one when the app comes into focus.
	if (mainWindow === null) {
		createWindow();
	}
});
