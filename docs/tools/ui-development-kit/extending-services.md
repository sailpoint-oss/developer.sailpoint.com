---
id: extending-services
title: Extending Services
pagination_label: UDK
sidebar_label: Extending
sidebar_position: 2
sidebar_class_name: rudk
keywords: ['UI', 'development', 'kit']
description: Extending Services in the UI Development Kit
slug: /tools/ui-development-kit/extending-services
tags: ['UI']
---

## Adding additional electron based API calls

Sometimes, the APIs available through the SDK are not enough for the type of implmentation you are trying to build or you want to extend the application to access local files. To do this, follow the steps below:

#### 1. Add a new electron method

This is where you can make the API call or access the filesystem safely and return it back to the app:

Inside the `app/main.ts` file, add a new method like the example below:

```typescript
  ipcMain.handle('my-new-method', async (event, param: string) => {
    // implement your logic, or call another method here and return the results
    console.log('my-new-method called with param:', param);
    fetch('https://api.github.com').then(response => response.json()).then(data => {
      console.log('Fetched data from GitHub API:', data);
      return JSON.stringify(data.response);
    }).catch(error => {
      console.error('Error fetching data from GitHub API:', error);
      return 'Error fetching data';
    });
  });
```
#### 2. Expose the method to the angular app 

Inside the `app/preload.ts` file, add the new method to expose it to the angular application:

```typescript
contextBridge.exposeInMainWorld('electronAPI', {
  ...
  myNewMethod: (param: string) => ipcMain.invoke('my-new-method', param),
  ...
}
```

#### 3. Add the service in the ElectronAPIInterface 

`projects\sailpoint-components\src\lib\services\web-api.service.ts`:

```typescript
export interface ElectronAPIInterface {
  ...
  myNewMethod: (param: string) => Promise<{ response: string }>;
  ...
}
```

#### 4. Add the service in the web implementation  

`projects\sailpoint-components\src\lib\services\web-api.service.ts`:

```typescript
export class WebApiService implements ElectronAPIInterface {
  ...
  // you only need to implement this on the backend if you decide to use this in web mode
  async myNewMethod(param: string): Promise<{ response: string }> {
    return this.apiCall<{ response: string }>('my-new-method', 'POST', { param });
  }
  ...
}
```

#### 5. Call the api 

inside any test.component.ts angular component:

```typescript

  constructor(private electronService: ElectronApiFactoryService) {}

  ...

  async asyncMethod(): Promise<void> {

    const returnString = await this.electronService.getApi().myNewMethod('test')
    console.log('myNewMethod response:', returnString);
    
```



