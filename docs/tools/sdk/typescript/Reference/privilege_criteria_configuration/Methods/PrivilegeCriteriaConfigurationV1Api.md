---
id: v1-privilege-criteria-configuration
title: PrivilegeCriteriaConfiguration
pagination_label: PrivilegeCriteriaConfiguration
sidebar_label: PrivilegeCriteriaConfiguration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PrivilegeCriteriaConfiguration', 'v1PrivilegeCriteriaConfiguration']
slug: /tools/sdk/typescript/privilege_criteria_configuration/methods/privilege-criteria-configuration
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteriaConfiguration', 'v1PrivilegeCriteriaConfiguration']
---

# PrivilegeCriteriaConfigurationV1Api
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
[**get-privilege-criteria-config-v1**](#get-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege/{criteriaConfigId}` | Get privilege criteria config
[**list-privilege-criteria-config-v1**](#list-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege` | List privilege criteria config
[**patch-privilege-criteria-config-v1**](#patch-privilege-criteria-config-v1) | **PATCH** `/criteria-config/v1/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config-v1
Get privilege criteria config
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-privilege-criteria-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaConfigId** | `string` | The Id of the privilege criteria configuration record to retrieve. |  [default to undefined]

### Return type

`PrivilegecriteriaconfigdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaConfigurationV1Api(configuration);
const criteriaConfigId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria configuration record to retrieve.
const result = await apiInstance.getPrivilegeCriteriaConfigV1({ criteriaConfigId: criteriaConfigId });
console.log(result);
```

[[Back to top]](#)

## list-privilege-criteria-config-v1
List privilege criteria config
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privilege-criteria-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; |  [default to undefined]

### Return type

`Array<PrivilegecriteriaconfigdtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaConfigurationV1Api(configuration);
const filters: string = sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60;
const result = await apiInstance.listPrivilegeCriteriaConfigV1({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## patch-privilege-criteria-config-v1
Update privilege criteria configuration
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-privilege-criteria-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaConfigId** | `string` | The Id of the privilege criteria configuration to update. |  [default to undefined]
**requestBody** | `Array<object>` | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`PrivilegecriteriaconfigdtoV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaConfigurationV1Api(configuration);
const criteriaConfigId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria configuration to update.
const requestBody: Array&lt;object&gt; = [{"op":"replace","path":"/config/privilegeClassificationMode","value":"SINGLE_PRIVILEGE_LEVEL"},{"op":"replace","path":"/config/criteriaPrivilegeLevel/connectorMediumEnabled","value":true}]; // A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.patchPrivilegeCriteriaConfigV1({ criteriaConfigId: criteriaConfigId, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

