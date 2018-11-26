import { app, BrowserWindow } from 'electron';
import { ipcMain } from 'electron';

class MainWindow {

	mainWindow;

	constructor() {
		app.on('ready', this.createUI);
	}

	createUI = function() {

		this.mainWindow = new BrowserWindow({ 
			width: 1080, 
			height: 640, 
			show: false
		});

		console.log('Initializing...')

		this.mainWindow.loadFile('./dist/angular-electron-boilerplate/index.html');

		this.mainWindow.once('ready-to-show', () => {
			this.mainWindow.show();
		});

		ipcMain.on('test', function(event, ags) {
			console.log('testing...');
		})
	}
	
}

new MainWindow();