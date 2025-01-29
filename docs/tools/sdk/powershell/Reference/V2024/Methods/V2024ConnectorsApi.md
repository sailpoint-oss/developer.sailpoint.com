---
id: v2024-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Connectors', 'V2024Connectors'] 
slug: /tools/sdk/powershell/v2024/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'V2024Connectors']
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

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/managing_sources.html) for more information about using connectors in Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024CustomConnector**](#create-custom-connector) | **POST** `/connectors` | Create Custom Connector
[**Remove-V2024CustomConnector**](#delete-custom-connector) | **DELETE** `/connectors/{scriptName}` | Delete Connector by Script Name
[**Get-V2024Connector**](#get-connector) | **GET** `/connectors/{scriptName}` | Get Connector by Script Name
[**Get-V2024ConnectorCorrelationConfig**](#get-connector-correlation-config) | **GET** `/connectors/{scriptName}/correlation-config` | Get Connector Correlation Configuration
[**Get-V2024ConnectorList**](#get-connector-list) | **GET** `/connectors` | Get Connector List
[**Get-V2024ConnectorSourceConfig**](#get-connector-source-config) | **GET** `/connectors/{scriptName}/source-config` | Get Connector Source Configuration
[**Get-V2024ConnectorSourceTemplate**](#get-connector-source-template) | **GET** `/connectors/{scriptName}/source-template` | Get Connector Source Template
[**Get-V2024ConnectorTranslations**](#get-connector-translations) | **GET** `/connectors/{scriptName}/translations/{locale}` | Get Connector Translations
[**Send-V2024ConnectorCorrelationConfig**](#put-connector-correlation-config) | **PUT** `/connectors/{scriptName}/correlation-config` | Update Connector Correlation Configuration
[**Send-V2024ConnectorSourceConfig**](#put-connector-source-config) | **PUT** `/connectors/{scriptName}/source-config` | Update Connector Source Configuration
[**Send-V2024ConnectorSourceTemplate**](#put-connector-source-template) | **PUT** `/connectors/{scriptName}/source-template` | Update Connector Source Template
[**Send-V2024ConnectorTranslations**](#put-connector-translations) | **PUT** `/connectors/{scriptName}/translations/{locale}` | Update Connector Translations
[**Update-V2024Connector**](#update-connector) | **PATCH** `/connectors/{scriptName}` | Update Connector by Script Name


## create-custom-connector

Create custom connector.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | V3CreateConnectorDto | [**V3CreateConnectorDto**](../models/v3-create-connector-dto) | True  | 

### Return type

[**V3ConnectorDto**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | V3ConnectorDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$V3CreateConnectorDto = @"{
  "name" : "custom connector",
  "directConnect" : true,
  "className" : "sailpoint.connector.OpenConnectorAdapter",
  "type" : "custom connector type",
  "status" : "RELEASED"
}"@
# Create Custom Connector
try {
    $Result = ConvertFrom-JsonToV3CreateConnectorDto -Json $V3CreateConnectorDto
    New-V2024CustomConnector-V2024V3CreateConnectorDto $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024CustomConnector -V2024V3CreateConnectorDto $V3CreateConnectorDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024CustomConnector"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-custom-connector

Delete a custom connector that using its script name.

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
# Delete Connector by Script Name
try {
    Remove-V2024CustomConnector-V2024ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024CustomConnector -V2024ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024CustomConnector"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector

Fetches a connector that using its script name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type

[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | ConnectorDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en"" (optional)
# Get Connector by Script Name
try {
    Get-V2024Connector-V2024ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Connector -V2024ScriptName $ScriptName -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Connector"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-correlation-config

Fetches a connector's correlation config using its script name.    

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
# Get Connector Correlation Configuration
try {
    Get-V2024ConnectorCorrelationConfig-V2024ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ConnectorCorrelationConfig -V2024ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ConnectorCorrelationConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-list

Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Locale | **String** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type

[**V3ConnectorDto[]**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Connector Dto object | V3ConnectorDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
# Get Connector List
try {
    Get-V2024ConnectorList
    
    # Below is a request that includes all optional parameters
    # Get-V2024ConnectorList -V2024Filters $Filters -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ConnectorList"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-source-config

Fetches a connector's source config using its script name.    

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
# Get Connector Source Configuration
try {
    Get-V2024ConnectorSourceConfig-V2024ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ConnectorSourceConfig -V2024ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ConnectorSourceConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-source-template

Fetches a connector's source template using its script name.    

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
# Get Connector Source Template
try {
    Get-V2024ConnectorSourceTemplate-V2024ScriptName $ScriptName 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ConnectorSourceTemplate -V2024ScriptName $ScriptName  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ConnectorSourceTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-connector-translations

Fetches a connector's translations using its script name.    

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en""
# Get Connector Translations
try {
    Get-V2024ConnectorTranslations-V2024ScriptName $ScriptName -V2024Locale $Locale 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ConnectorTranslations -V2024ScriptName $ScriptName -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ConnectorTranslations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-connector-correlation-config

Update a connector's correlation config using its script name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector correlation config xml file

### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector correlation config xml file
# Update Connector Correlation Configuration
try {
    Send-V2024ConnectorCorrelationConfig-V2024ScriptName $ScriptName -V2024File $File 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ConnectorCorrelationConfig -V2024ScriptName $ScriptName -V2024File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ConnectorCorrelationConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-connector-source-config

Update a connector's source config using its script name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source config xml file

### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector source config xml file
# Update Connector Source Configuration
try {
    Send-V2024ConnectorSourceConfig-V2024ScriptName $ScriptName -V2024File $File 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ConnectorSourceConfig -V2024ScriptName $ScriptName -V2024File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ConnectorSourceConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-connector-source-template

Update a connector's source template using its script name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | File | **System.IO.FileInfo** | True  | connector source template xml file

### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
$File =  # System.IO.FileInfo | connector source template xml file
# Update Connector Source Template
try {
    Send-V2024ConnectorSourceTemplate-V2024ScriptName $ScriptName -V2024File $File 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ConnectorSourceTemplate -V2024ScriptName $ScriptName -V2024File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ConnectorSourceTemplate"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-connector-translations

Update a connector's translations using its script name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | Locale | **String** | True  | The locale to apply to the config. If no viable locale is given, it will default to ""en""

### Return type

[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The connector&#39;s update detail | UpdateDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
$Locale = "de" # String | The locale to apply to the config. If no viable locale is given, it will default to ""en""
# Update Connector Translations
try {
    Send-V2024ConnectorTranslations-V2024ScriptName $ScriptName -V2024Locale $Locale 
    
    # Below is a request that includes all optional parameters
    # Send-V2024ConnectorTranslations -V2024ScriptName $ScriptName -V2024Locale $Locale  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024ConnectorTranslations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-connector

This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScriptName | **String** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of connector detail update operations 

### Return type

[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A updated Connector Dto object | ConnectorDetail
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$ScriptName = "aScriptName" # String | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 # JsonPatchOperation[] | A list of connector detail update operations 
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ 

# Update Connector by Script Name
try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-V2024Connector-V2024ScriptName $ScriptName -V2024JsonPatchOperation $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024Connector -V2024ScriptName $ScriptName -V2024JsonPatchOperation $JsonPatchOperation  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024Connector"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


