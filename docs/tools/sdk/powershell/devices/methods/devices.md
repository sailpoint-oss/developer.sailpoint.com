# Devices

# Devices
  Use this API to list, view, and update devices, and to get tenant-wide device counts. A device is a machine identity that represents an endpoint, such as a laptop or server, discovered from a connected source. You can update a device&#39;s owners, description, and environment; the discovered device attributes are read-only.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-DeviceCountsV1**](#get-device-counts-v1) | **GET** `/devices/v1/device-counts` | Get device counts
[**Get-DeviceV1**](#get-device-v1) | **GET** `/devices/v1/{id}` | Get device
[**Get-DevicesV1**](#list-devices-v1) | **GET** `/devices/v1` | List devices
[**Update-DeviceV1**](#update-device-v1) | **PATCH** `/devices/v1/{id}` | Partial update of device


## get-device-counts-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns tenant-wide device counts: the total number of devices, a breakdown by operating system, the
average number of agents per device, and counts of devices without recent data and devices with active agents.


Because the counts cover every device in the tenant, the caller needs the **idn:mis-identity:read** right. Owning
devices does not grant access to this API.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-device-counts-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**DeviceSummary**](../models/device-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Device counts for the tenant. | DeviceSummary
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDevicesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDevicesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get device counts

try {
    Get-DeviceCountsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DeviceCountsV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DeviceCountsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-device-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a single device by its ID.


A caller who owns the device can view it. Other callers need the **idn:mis-identity:read** right.


The ID must be a UUID; any other value returns `400`. When no device exists for the ID, this API returns `400` for callers who hold the **idn:mis-identity:read** right and `404` for other callers.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the devices API is not
enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-device-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Device ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Device**](../models/device)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Device object. | Device
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDevicesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDevicesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "5be33d3e-c54d-4ed7-af73-2380543e8283" # String | Device ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get device

try {
    Get-DeviceV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DeviceV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DeviceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-devices-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **subtype**: *eq, in*  **hostname**: *eq, in, sw*  **os.type**: *eq, in, sw*  **os.version**: *eq, in, sw*  **sentinelVersion**: *eq, in, sw*  **detectionModuleVersion**: *eq, in, sw*  **email**: *eq, in, sw*  **description**: *eq, in, sw*  **environment**: *eq, in, sw*  **datasetId**: *eq, in, sw*  **resource.id**: *eq, in*  **resource.type**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, hostname, os.type, os.version, sentinelVersion, detectionModuleVersion, email, description, environment, datasetId, resource.id, resource.type, source.name, owners.primaryIdentity.name, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**Device[]**](../models/device)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of devices. | Device[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDevicesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDevicesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'hostname sw "lab-"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **subtype**: *eq, in*  **hostname**: *eq, in, sw*  **os.type**: *eq, in, sw*  **os.version**: *eq, in, sw*  **sentinelVersion**: *eq, in, sw*  **detectionModuleVersion**: *eq, in, sw*  **email**: *eq, in, sw*  **description**: *eq, in, sw*  **environment**: *eq, in, sw*  **datasetId**: *eq, in, sw*  **resource.id**: *eq, in*  **resource.type**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le* (optional)
$Sorters = "hostname" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, hostname, os.type, os.version, sentinelVersion, detectionModuleVersion, email, description, environment, datasetId, resource.id, resource.type, source.name, owners.primaryIdentity.name, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List devices

try {
    Get-DevicesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DevicesV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DevicesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-device-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Device ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Device**](../models/device)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated device object. | Device
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDevicesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDevicesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "5be33d3e-c54d-4ed7-af73-2380543e8283" # String | Device ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Partial update of device

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-DeviceV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-DeviceV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-DeviceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
