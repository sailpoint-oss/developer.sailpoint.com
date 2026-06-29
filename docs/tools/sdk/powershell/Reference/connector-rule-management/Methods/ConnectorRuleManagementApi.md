---
id: connector-rule-management
title: ConnectorRuleManagement
pagination_label: ConnectorRuleManagement
sidebar_label: ConnectorRuleManagement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorRuleManagement', 'ConnectorRuleManagement'] 
slug: /tools/sdk/powershell/connectorrulemanagement/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleManagement', 'ConnectorRuleManagement']
---

# ConnectorRuleManagement
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ConnectorRuleV1**](#create-connector-rule-v1) | **POST** `/connector-rules/v1` | Create connector rule
[**Remove-ConnectorRuleV1**](#delete-connector-rule-v1) | **DELETE** `/connector-rules/v1/{id}` | Delete connector rule
[**Get-ConnectorRuleListV1**](#get-connector-rule-list-v1) | **GET** `/connector-rules/v1` | List connector rules
[**Get-ConnectorRuleV1**](#get-connector-rule-v1) | **GET** `/connector-rules/v1/{id}` | Get connector rule
[**Send-ConnectorRuleV1**](#put-connector-rule-v1) | **PUT** `/connector-rules/v1/{id}` | Update connector rule
[**Test-ConnectorRuleV1**](#test-connector-rule-v1) | **POST** `/connector-rules/v1/validate` | Validate connector rule


## create-connector-rule-v1
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Connectorrulecreaterequest | [**Connectorrulecreaterequest**](../models/connectorrulecreaterequest) | True  | Connector rule to create.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created connector rule. | Connectorruleresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Connectorrulecreaterequest = @""@

# Create connector rule

try {
    $Result = ConvertFrom-JsonToConnectorrulecreaterequest -Json $Connectorrulecreaterequest
    New-ConnectorRuleV1 -Connectorrulecreaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ConnectorRuleV1 -Connectorrulecreaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ConnectorRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-connector-rule-v1
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-connector-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to delete.

# Delete connector rule

try {
    Remove-ConnectorRuleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ConnectorRuleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ConnectorRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule-list-v1
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-rule-list-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Connectorruleresponse[]**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of connector rules. | Connectorruleresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 50 # Int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List connector rules

try {
    Get-ConnectorRuleListV1 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorRuleListV1 -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorRuleListV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-rule-v1
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to get.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector rule with the given ID. | Connectorruleresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to get.

# Get connector rule

try {
    Get-ConnectorRuleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorRuleV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-rule-v1
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector rule to update.
 Body  | Connectorruleupdaterequest | [**Connectorruleupdaterequest**](../models/connectorruleupdaterequest) |   (optional) | Connector rule with updated data.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated connector rule. | Connectorruleresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | ID of the connector rule to update.
$Connectorruleupdaterequest = @""@

# Update connector rule

try {
    Send-ConnectorRuleV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorRuleV1 -Id $Id -Connectorruleupdaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-connector-rule-v1
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-connector-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Sourcecode | [**Sourcecode**](../models/sourcecode) | True  | Code to validate.

### Return type
[**Connectorrulevalidationresponse**](../models/connectorrulevalidationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the code&#39;s eligibility as a connector rule. | Connectorrulevalidationresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Sourcecode = @""@

# Validate connector rule

try {
    $Result = ConvertFrom-JsonToSourcecode -Json $Sourcecode
    Test-ConnectorRuleV1 -Sourcecode $Result 
    
    # Below is a request that includes all optional parameters
    # Test-ConnectorRuleV1 -Sourcecode $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-ConnectorRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
