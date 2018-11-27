import { Component, OnInit } from '@angular/core';
import { MessagingService } from './services/messaging/messaging.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-electron-boilerplate';

	constructor(private __msg : MessagingService) { 
		
		//Send an initialization log message to the application
		__msg.send('debug', {'msg':'Intializing the UI...'});

		//Request for a test request acknowledgement
		__msg.request('reqtest', {msg: 'testing request'}, (payload) => {
			console.log(payload);
		} );
		
	}

}
