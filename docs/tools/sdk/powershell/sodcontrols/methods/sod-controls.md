# SODControls

# SODControls
  Use this API to create, list, retrieve, update, and delete compensating controls associated with separation-of-duties policies. Requires policy violation management license.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ControlV1**](#create-control-v1) | **POST** `/controls/v1` | Create Compensating Control
[**Remove-ControlV1**](#delete-control-v1) | **DELETE** `/controls/v1/{id}` | Delete compensating control by ID
[**Get-ControlV1**](#get-control-v1) | **GET** `/controls/v1/{id}` | Get compensating control by ID
[**Get-ControlsV1**](#list-controls-v1) | **GET** `/controls/v1` | List Compensating Controls
[**Send-ControlV1**](#put-control-v1) | **PUT** `/controls/v1/{id}` | Put Compensating Control


## create-control-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a compensating control associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/create-control-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Compensatingcontrolcreate | [**Compensatingcontrolcreate**](../models/compensatingcontrolcreate) | True  | Data needed to create a Compensating Control

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Compensating Control successfully created | Compensatingcontrolresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Compensatingcontrolcreate = @"{
  "owner" : {
    "id" : "3e07886555ed43cfb83c85c58d2016e6",
    "type" : "IDENTITY"
  },
  "name" : "a name",
  "description" : "a description",
  "secondaryOwners" : [ {
    "id" : "943a7c57da334d07ba2454bf7fcf144f",
    "type" : "GOVERNANCE_GROUP"
  } ],
  "action" : "Workflow",
  "expiration" : "20d",
  "type" : "Mitigation",
  "justificationRequired" : true,
  "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
}"@

# Create Compensating Control

try {
    $Result = ConvertFrom-JsonToCompensatingcontrolcreate -Json $Compensatingcontrolcreate
    New-ControlV1 -XSailPointExperimental $XSailPointExperimental -Compensatingcontrolcreate $Result 
    
    # Below is a request that includes all optional parameters
    # New-ControlV1 -XSailPointExperimental $XSailPointExperimental -Compensatingcontrolcreate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ControlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-control-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes the specified compensating control from the data store.

[API Spec](https://developer.sailpoint.com/docs/api/delete-control-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | the ID (UUID) of the compensating control to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | the ID (UUID) of the compensating control to delete.

# Delete compensating control by ID

try {
    Remove-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ControlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-control-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a single compensating control by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-control-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The ID of the compensating control to fetch

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Single compensating control | Compensatingcontrolresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | The ID of the compensating control to fetch

# Get compensating control by ID

try {
    Get-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ControlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-controls-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a list of compensating controls associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/list-controls-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in*
  Query | Sort | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending.

### Return type
[**Compensatingcontrolresponse[]**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of compensating controls | Compensatingcontrolresponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'type eq "Mitigation" and name co "payroll"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional)
$Sort = "-name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional)

# List Compensating Controls

try {
    Get-ControlsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ControlsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sort $Sort  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ControlsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-control-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates the specified compensating control.

[API Spec](https://developer.sailpoint.com/docs/api/put-control-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | The unique identifier of the Compensating Control to be updated.
 Body  | Compensatingcontrolupdate | [**Compensatingcontrolupdate**](../models/compensatingcontrolupdate) | True  | Data needed to put a Compensating Control

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Compensating Control successfully patched | Compensatingcontrolresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "3e078865-55ed-43cf-b83c-85c58d2016e6" # String | The unique identifier of the Compensating Control to be updated.
$Compensatingcontrolupdate = @"{
  "owner" : {
    "id" : "3e07886555ed43cfb83c85c58d2016e6",
    "type" : "IDENTITY"
  },
  "name" : "a name",
  "description" : "a description",
  "secondaryOwners" : [ {
    "id" : "943a7c57da334d07ba2454bf7fcf144f",
    "type" : "GOVERNANCE_GROUP"
  } ],
  "action" : "Workflow",
  "expiration" : "20d",
  "type" : "Mitigation",
  "justificationRequired" : true,
  "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
}"@

# Put Compensating Control

try {
    $Result = ConvertFrom-JsonToCompensatingcontrolupdate -Json $Compensatingcontrolupdate
    Send-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Compensatingcontrolupdate $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ControlV1 -XSailPointExperimental $XSailPointExperimental -Id $Id -Compensatingcontrolupdate $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ControlV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
