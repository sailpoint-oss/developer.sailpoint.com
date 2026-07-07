---
id: privilege-criteria-configuration
title: PrivilegeCriteriaConfiguration
pagination_label: PrivilegeCriteriaConfiguration
sidebar_label: PrivilegeCriteriaConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PrivilegeCriteriaConfiguration', 'PrivilegeCriteriaConfiguration'] 
slug: /tools/sdk/powershell/privilegecriteriaconfiguration/methods/privilege-criteria-configuration
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteriaConfiguration', 'PrivilegeCriteriaConfiguration']
---

# PrivilegeCriteriaConfiguration
  Use this API to manage the configuration of privilege criteria.

**globalPrivilegeLevelEnabled**: Boolean flag indicating whether privilege classification is enabled.


**privilegeClassificationMode**: Enum specifying the mode (CRITERIA_PRIVILEGE_LEVEL, SINGLE_PRIVILEGE_LEVEL) to use for privilege classification. CRITERIA_PRIVILEGE_LEVEL mode uses criteria to determine privilege levels, while SINGLE_PRIVILEGE_LEVEL assigns the same privilege level to all enititlements based on the value of singlePrivilegeLevel.privilegeLevel.


**singlePrivilegeLevel.privilegeLevel**: Enum specifying the privilege level (HIGH, MEDIUM, LOW) to assign to all privileges when the privilege classification mode is SINGLE_PRIVILEGE_LEVEL.


**criteriaPrivilegeLevel.connectorHighEnabled**: Boolean flag indicating whether HIGH level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorMediumEnabled**: Boolean flag indicating whether MEDIUM level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorLowEnabled**: Boolean flag indicating whether LOW level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.customHighEnabled**: Boolean flag indicating whether HIGH level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customMediumEnabled**: Boolean flag indicating whether MEDIUM level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customLowEnabled**: Boolean flag indicating whether LOW level custom criteria is used for privilege classification.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-PrivilegeCriteriaConfigV1**](#get-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege/{criteriaConfigId}` | Get privilege criteria config
[**Get-PrivilegeCriteriaConfigV1**](#list-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege` | List privilege criteria config
[**Update-PrivilegeCriteriaConfigV1**](#patch-privilege-criteria-config-v1) | **PATCH** `/criteria-config/v1/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config-v1
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-privilege-criteria-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CriteriaConfigId | **String** | True  | The Id of the privilege criteria configuration record to retrieve.

### Return type
[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Privilegecriteriaconfigdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$CriteriaConfigId = "6d123044-5834-4e8d-a49f-9c70089b0de1" # String | The Id of the privilege criteria configuration record to retrieve.

# Get privilege criteria config

try {
    Get-PrivilegeCriteriaConfigV1 -CriteriaConfigId $CriteriaConfigId 
    
    # Below is a request that includes all optional parameters
    # Get-PrivilegeCriteriaConfigV1 -CriteriaConfigId $CriteriaConfigId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PrivilegeCriteriaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-privilege-criteria-config-v1
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privilege-criteria-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq ""2c91809175e6c63f0175fb5570220569""`

### Return type
[**Privilegecriteriaconfigdto[]**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Privilegecriteriaconfigdto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq ""2c91809175e6c63f0175fb5570220569"'`

# List privilege criteria config

try {
    Get-PrivilegeCriteriaConfigV1 -Filters $Filters 
    
    # Below is a request that includes all optional parameters
    # Get-PrivilegeCriteriaConfigV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PrivilegeCriteriaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-privilege-criteria-config-v1
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-privilege-criteria-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CriteriaConfigId | **String** | True  | The Id of the privilege criteria configuration to update.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | Privilegecriteriaconfigdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$CriteriaConfigId = "6d123044-5834-4e8d-a49f-9c70089b0de1" # String | The Id of the privilege criteria configuration to update.
$RequestBody =  # SystemCollectionsHashtable[] | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $RequestBody = @"[{"op":"replace","path":"/config/privilegeClassificationMode","value":"SINGLE_PRIVILEGE_LEVEL"},{"op":"replace","path":"/config/criteriaPrivilegeLevel/connectorMediumEnabled","value":true}]"@ # SystemCollectionsHashtable[] | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Update privilege criteria configuration

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-PrivilegeCriteriaConfigV1 -CriteriaConfigId $CriteriaConfigId -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-PrivilegeCriteriaConfigV1 -CriteriaConfigId $CriteriaConfigId -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-PrivilegeCriteriaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
