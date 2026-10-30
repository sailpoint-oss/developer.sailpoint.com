# Devices

# DevicesService
  Use this API to list, view, and update devices, and to get tenant-wide device counts. A device is a machine identity that represents an endpoint, such as a laptop or server, discovered from a connected source. You can update a device&#39;s owners, description, and environment; the discovered device attributes are read-only.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-device-counts-v1**](#get-device-counts-v1) | **GET** `/devices/v1/device-counts` | Get device counts
[**get-device-v1**](#get-device-v1) | **GET** `/devices/v1/{id}` | Get device
[**list-devices-v1**](#list-devices-v1) | **GET** `/devices/v1` | List devices
[**update-device-v1**](#update-device-v1) | **PATCH** `/devices/v1/{id}` | Partial update of device


## get-device-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get device counts
This API returns tenant-wide device counts: the total number of devices, a breakdown by operating system, the
average number of agents per device, and counts of devices without recent data and devices with active agents.


Because the counts cover every device in the tenant, the caller needs the **idn:mis-identity:read** right. Owning
devices does not grant access to this API.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-device-counts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDeviceCountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<DeviceSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DevicesService } from '@sailpoint/angular-sdk/devices';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DevicesService);

  getDeviceCountsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDeviceCountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-device-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get device
This API returns a single device by its ID.


A caller who owns the device can view it. Other callers need the **idn:mis-identity:read** right.


The ID must be a UUID; any other value returns `400`. When no device exists for the ID, this API returns `400` for callers who hold the **idn:mis-identity:read** right and `404` for other callers.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-device-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDeviceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Device ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Device>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DevicesService } from '@sailpoint/angular-sdk/devices';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DevicesService);

  getDeviceV1(): void {
    const id: string = ; // Device ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDeviceV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-devices-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List devices
This API returns a list of devices.


A caller who owns the devices can list them. Other callers need the **idn:mis-identity:read** right. A caller
without that right must filter the request to devices they own, for example `owners.primaryIdentity.id eq "me"`;
if any returned device is not owned by the caller, this API returns `403`. In `owners.primaryIdentity.id` and
`owners.secondaryIdentity.id` filters, the value `me` resolves to the calling identity.


Source sub-admins only see devices on the sources they manage.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-devices-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListDevicesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **subtype**: *eq, in*  **hostname**: *eq, in, sw*  **os.type**: *eq, in, sw*  **os.version**: *eq, in, sw*  **sentinelVersion**: *eq, in, sw*  **detectionModuleVersion**: *eq, in, sw*  **email**: *eq, in, sw*  **description**: *eq, in, sw*  **environment**: *eq, in, sw*  **datasetId**: *eq, in, sw*  **resource.id**: *eq, in*  **resource.type**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, hostname, os.type, os.version, sentinelVersion, detectionModuleVersion, email, description, environment, datasetId, resource.id, resource.type, source.name, owners.primaryIdentity.name, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Device>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DevicesService } from '@sailpoint/angular-sdk/devices';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DevicesService);

  listDevicesV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **subtype**: *eq, in*  **hostname**: *eq, in, sw*  **os.type**: *eq, in, sw*  **os.version**: *eq, in, sw*  **sentinelVersion**: *eq, in, sw*  **detectionModuleVersion**: *eq, in, sw*  **email**: *eq, in, sw*  **description**: *eq, in, sw*  **environment**: *eq, in, sw*  **datasetId**: *eq, in, sw*  **resource.id**: *eq, in*  **resource.type**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, hostname, os.type, os.version, sentinelVersion, detectionModuleVersion, email, description, environment, datasetId, resource.id, resource.type, source.name, owners.primaryIdentity.name, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listDevicesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-device-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partial update of device
Use this API to update a device using a JSON Patch payload.


Patchable fields are **owners**, **description**, and **environment**. A patch that targets any other field,
including the discovered device attributes, returns `400`.


`owners.primary` is a single IDENTITY reference. `owners.secondary` holds either up to ten IDENTITY references or
exactly one GOVERNANCE_GROUP reference, not both; any other combination returns `400`.


A caller who owns the device can update it. Other callers need the **idn:mis-identity:update** right.


The ID must be a UUID; any other value returns `400`. When no device exists for the ID, this API returns `400` for callers who hold the **idn:mis-identity:update** right and `404` for other callers.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-device-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateDeviceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Device ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Device>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DevicesService } from '@sailpoint/angular-sdk/devices';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/devices';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DevicesService);

  updateDeviceV1(): void {
    const id: string = ; // Device ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateDeviceV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

