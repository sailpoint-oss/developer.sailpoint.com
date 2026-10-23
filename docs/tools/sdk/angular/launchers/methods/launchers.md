# Launchers

# LaunchersService
  Use this API to manage Launchers.

A launcher lets users start a workflow on demand from Identity Security Cloud, such as a Privileged Workflow or a workflow that creates an Active Directory group. Each launcher references a workflow. Launching it starts an interactive process that runs that workflow for the user who launched it, and the response returns the ID of that interactive process.

Users can launch only the launchers assigned to them, and only while the launcher is enabled.

A launcher&#39;s enabled state follows the workflow it references. When the workflow is disabled, the launcher is disabled, and when the workflow is enabled again, the launcher is enabled again. If the referenced workflow is deleted, the reference is removed from the launcher.

Launcher names must be unique within a tenant, and a tenant can have up to 100 launchers.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher-v1**](#create-launcher-v1) | **POST** `/launchers/v1` | Create launcher
[**delete-launcher-v1**](#delete-launcher-v1) | **DELETE** `/launchers/v1/{launcherID}` | Delete launcher
[**get-launcher-v1**](#get-launcher-v1) | **GET** `/launchers/v1/{launcherID}` | Get launcher by id
[**get-launchers-v1**](#get-launchers-v1) | **GET** `/launchers/v1` | List all launchers for tenant
[**put-launcher-v1**](#put-launcher-v1) | **PUT** `/launchers/v1/{launcherID}` | Replace launcher
[**start-launcher-v1**](#start-launcher-v1) | **POST** `/launchers/v1/{launcherID}/launch` | Launch a launcher


## create-launcher-v1
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/create-launcher-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateLauncherV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherRequest** | `LauncherRequest` | Payload to create a Launcher | 

### Return type

`Observable<Launcher>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';
import { LauncherRequest } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  createLauncherV1(): void {
    const launcherRequest: LauncherRequest = ; // Payload to create a Launcher
    this.api.createLauncherV1({ launcherRequest: launcherRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-launcher-v1
Delete launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/delete-launcher-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteLauncherV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be deleted |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  deleteLauncherV1(): void {
    const launcherID: string = ; // ID of the Launcher to be deleted
    this.api.deleteLauncherV1({ launcherID: launcherID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-launcher-v1
Get launcher by id
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/get-launcher-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetLauncherV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be retrieved |  [default to undefined]

### Return type

`Observable<Launcher>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  getLauncherV1(): void {
    const launcherID: string = ; // ID of the Launcher to be retrieved
    this.api.getLauncherV1({ launcherID: launcherID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-launchers-v1
List all launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-launchers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetLaunchersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* | [optional] [default to undefined]
**next** | `string` | Pagination marker | [optional] [default to undefined]
**limit** | `number` | Number of Launchers to return | [optional] [default to 10]

### Return type

`Observable<GetLaunchersV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  getLaunchersV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
    const next: string = ; // Pagination marker (optional)
    const limit: number = ; // Number of Launchers to return (optional)
    this.api.getLaunchersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-launcher-v1
Replace launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/put-launcher-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutLauncherV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be replaced |  [default to undefined]
**launcherRequest** | `LauncherRequest` | Payload to replace Launcher | 

### Return type

`Observable<Launcher>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';
import { LauncherRequest } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  putLauncherV1(): void {
    const launcherID: string = ; // ID of the Launcher to be replaced
    const launcherRequest: LauncherRequest = ; // Payload to replace Launcher
    this.api.putLauncherV1({ launcherID: launcherID, launcherRequest: launcherRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-launcher-v1
Launch a launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/start-launcher-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartLauncherV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be launched |  [default to undefined]

### Return type

`Observable<StartLauncherV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { LaunchersService } from '@sailpoint/angular-sdk/launchers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(LaunchersService);

  startLauncherV1(): void {
    const launcherID: string = ; // ID of the Launcher to be launched
    this.api.startLauncherV1({ launcherID: launcherID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

