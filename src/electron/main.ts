import { app, BrowserWindow } from 'electron';
import { ipcMain, WebContents } from 'electron';

const MessagingService = require('./messaging.js');

class MainWindow {

	mainWindow;
	messenger;

	constructor() {
		app.on('ready', this.initializeApp);
	}

	initializeApp() {

		//Initialize a new window
		this.mainWindow = new BrowserWindow({ 
			width: 1080, 
			height: 640, 
			show: false
		});

		//Load the compiled index.html file
		this.mainWindow.loadFile('./dist/angular-electron-boilerplate/index.html');

		//Display the window once ready
		this.mainWindow.once('ready-to-show', () => {
			this.mainWindow.show();
		});

		//Initialize messaging service
		this.messenger = new MessagingService(ipcMain, this.mainWindow.WebContents);

		//Register a debug log listener
		this.messenger.listen('debug', function(payload) {
			console.log(payload.msg);
		});
	}
	
}

new MainWindow();