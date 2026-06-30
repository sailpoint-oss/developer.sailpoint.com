---
id: connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectors', 'Connectors'] 
slug: /tools/sdk/powershell/connectors/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'Connectors']
---

# Connectors
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-CustomConnectorV1**](#create-custom-connector-v1) | **POST** `/connectors/v1` | Create custom connector
[**Remove-CustomConnectorV1**](#delete-custom-connector-v1) | **DELETE** `/connectors/v1/{scriptName}` | Delete connector by script name
[**Get-ConnectorCorrelationConfigV1**](#get-connector-correlation-config-v1) | **GET** `/connectors/v1/{scriptName}/correlation-config` | Get connector correlation configuration
[**Get-ConnectorListV1**](#get-connector-list-v1) | **GET** `/connectors/v1` | Get connector list
[**Get-ConnectorSourceConfigV1**](#get-connector-source-config-v1) | **GET** `/connectors/v1/{scriptName}/source-config` | Get connector source configuration
[**Get-ConnectorSourceTemplateV1**](#get-connector-source-template-v1) | **GET** `/connectors/v1/{scriptName}/source-template` | Get connector source template
[**Get-ConnectorTranslationsV1**](#get-connector-translations-v1) | **GET** `/connectors/v1/{scriptName}/translations/{locale}` | Get connector translations
[**Get-ConnectorV1**](#get-connector-v1) | **GET** `/connectors/v1/{scriptName}` | Get connector by script name
[**Send-ConnectorCorrelationConfigV1**](#put-connector-correlation-config-v1) | **PUT** `/connectors/v1/{scriptName}/correlation-config` | Update connector correlation configuration
[**Send-ConnectorSourceConfigV1**](#put-connector-source-config-v1) | **PUT** `/connectors/v1/{scriptName}/source-config` | Update connector source configuration
[**Send-ConnectorSourceTemplateV1**](#put-connector-source-template-v1) | **PUT** `/connectors/v1/{scriptName}/source-template` | Update connector source template
[**Send-ConnectorTranslationsV1**](#put-connector-translations-v1) | **PUT** `/connectors/v1/{scriptName}/translations/{locale}` | Update connector translations
[**Update-ConnectorV1**](#update-connector-v1) | **PATCH** `/connectors/v1/{scriptName}` | Update connector by script name


## create-custom-connector-v1
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-connector-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | V3createconnectordto | [**V3createconnectordto**](../models/v3createconnectordto) | True  | 

### Return type
[**V3connectordto**](../models/v3connectordto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | V3connectordto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$V3createconnectordto = @""@

# Create custom connector

try {
    $Result = ConvertFrom-JsonToV3createconnectordto -Json $V3createconnectordto
    New-CustomConnectorV1 -V3createconnectordto $Result 
    
    # Below is a request that includes all optional parameters
    # New-CustomConnectorV1 -V3createconnectordto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CustomConnectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-custom-connector-v1
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-connector-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

# Delete connector by script name

try {
    Remove-CustomConnectorV1 -ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Remove-CustomConnectorV1 -ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-CustomConnectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-correlation-config-v1
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-correlation-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s correlation config | String
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

# Get connector correlation configuration

try {
    Get-ConnectorCorrelationConfigV1 -ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorCorrelationConfigV1 -ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorCorrelationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-list-v1
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-list-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type
[**V3connectordto[]**](../models/v3connectordto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | V3connectordto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'directConnect eq "true"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en"" (optional)

# Get connector list

try {
    Get-ConnectorListV1 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorListV1 -Filters $Filters -Limit $Limit -Offset $Offset -Count $Count -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorListV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-source-config-v1
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s source template | String
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

# Get connector source configuration

try {
    Get-ConnectorSourceConfigV1 -ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorSourceConfigV1 -ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorSourceConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-source-template-v1
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-template-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s source template | String
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

# Get connector source template

try {
    Get-ConnectorSourceTemplateV1 -ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorSourceTemplateV1 -ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorSourceTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-translations-v1
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-translations-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | Locale | **String** | True  | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s translations | String
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en""

# Get connector translations

try {
    Get-ConnectorTranslationsV1 -ScriptName $ScriptName -Locale $Locale 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorTranslationsV1 -ScriptName $ScriptName -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorTranslationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-v1
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type
[**Connectordetail**](../models/connectordetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | Connectordetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en"" (optional)

# Get connector by script name

try {
    Get-ConnectorV1 -ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorV1 -ScriptName $ScriptName -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-correlation-config-v1
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-correlation-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector correlation config xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | Updatedetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector correlation config xml file

# Update connector correlation configuration

try {
    Send-ConnectorCorrelationConfigV1 -ScriptName $ScriptName -File $File 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorCorrelationConfigV1 -ScriptName $ScriptName -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorCorrelationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-source-config-v1
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source config xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | Updatedetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector source config xml file

# Update connector source configuration

try {
    Send-ConnectorSourceConfigV1 -ScriptName $ScriptName -File $File 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorSourceConfigV1 -ScriptName $ScriptName -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorSourceConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-source-template-v1
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-template-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source template xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | Updatedetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector source template xml file

# Update connector source template

try {
    Send-ConnectorSourceTemplateV1 -ScriptName $ScriptName -File $File 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorSourceTemplateV1 -ScriptName $ScriptName -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorSourceTemplateV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-translations-v1
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-translations-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | Locale | **String** | True  | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | Updatedetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en""

# Update connector translations

try {
    Send-ConnectorTranslationsV1 -ScriptName $ScriptName -Locale $Locale 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorTranslationsV1 -ScriptName $ScriptName -Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorTranslationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-connector-v1
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-connector-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of connector detail update operations 

### Return type
[**Connectordetail**](../models/connectordetail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A updated Connector Dto object | Connectordetail
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | A list of connector detail update operations 
 

# Update connector by script name

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-ConnectorV1 -ScriptName $ScriptName -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ConnectorV1 -ScriptName $ScriptName -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ConnectorV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
