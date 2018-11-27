# Angular Electron Boilerplate

Angular electron boilerplate is a ready-to-use project set-up for creation of desktop applications with Electron and Angular. The boilerplate provides for easy integration of Angular with the Electron application through a set of APIs.

## Setup the boilerplate

The boilerplate can be setup with minimal efforts. Clone or download this repository into your local workspace. For the project to work, [`npm`](https://docs.npmjs.com/) should be installed on the system.

Navigate to the project directory and install all the project dependencies by running:

```sh
npm install
```
For the project to work, Electron should be installed as a global module. This can be done by:

```sh
npm install electron -g
```

Electron can be linked from the global modules by running the command 

```sh
npm link electron
```
in the project directory. Alternatively, Electron can be installed locally as a dev-dependency.

```sh
npm install electron --save-dev
```


## Messaging Service

The boilerplate enables seamless communication between the Angular UI and the Electron application through the Messaging framework. 

The messaging framework has two services, one each at the Electron end and the Angular end. 

At the Angular end, the service is defined in src/webapp/app/services/messaging/messaging.service.ts. 

```javascript

import { MessagingService } from './services/messaging/messaging.service';
...
```

The service can be injected into any Angular class to communicate with the Electron application. The service provides the following APIs:

### Send
Sends a message to the Electron application through IPC, through a specific channel.

```javascript
...
constructor(private __msg : MessagingService) { 
	__msg.send(channel, payload);
}
```

### Listen
Listens for an event from the Electron application at the specified channel.

```javascript
...
constructor(private __msg : MessagingService) { 
	__msg.listen(channel, action);
}
```

### Listen
Listens for an event for a single time from the Electron application at the specified channel. Once the event has occurred, the listener is automatically destroyed.

```javascript
...
constructor(private __msg : MessagingService) { 
	__msg.listenOnce(channel, action);
}
```

### Request
Request for a response from the Electron application. The response provider could be specified at the Electron end of the Messaging framework.

```javascript
...
constructor(private __msg : MessagingService) { 
	__msg.request(channel, data, callback);
}
```
