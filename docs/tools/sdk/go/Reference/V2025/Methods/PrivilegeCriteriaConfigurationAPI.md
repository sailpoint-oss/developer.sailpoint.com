---
id: v2025-privilege-criteria-configuration
title: PrivilegeCriteriaConfiguration
pagination_label: PrivilegeCriteriaConfiguration
sidebar_label: PrivilegeCriteriaConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegeCriteriaConfiguration', 'V2025PrivilegeCriteriaConfiguration'] 
slug: /tools/sdk/go/v2025/methods/privilege-criteria-configuration
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteriaConfiguration', 'V2025PrivilegeCriteriaConfiguration']
---

# PrivilegeCriteriaConfigurationAPI
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-privilege-criteria-config**](#get-privilege-criteria-config) | **Get** `/criteria-config/privilege/{criteriaConfigId}` | Get privilege criteria config
[**list-privilege-criteria-config**](#list-privilege-criteria-config) | **Get** `/criteria-config/privilege` | List privilege criteria config
[**patch-privilege-criteria-config**](#patch-privilege-criteria-config) | **Patch** `/criteria-config/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config
Get privilege criteria config
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-privilege-criteria-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaConfigId** | **string** | The Id of the privilege criteria configuration record to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPrivilegeCriteriaConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PrivilegeCriteriaConfigDTO**](../models/privilege-criteria-config-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    criteriaConfigId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria configuration record to retrieve. # string | The Id of the privilege criteria configuration record to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfig(context.Background(), criteriaConfigId).Execute()
	  //resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfig(context.Background(), criteriaConfigId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrivilegeCriteriaConfig`: PrivilegeCriteriaConfigDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## list-privilege-criteria-config
List privilege criteria config
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-privilege-criteria-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPrivilegeCriteriaConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; | 

### Return type

[**[]PrivilegeCriteriaConfigDTO**](../models/privilege-criteria-config-dto)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    filters := `sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfig(context.Background()).Filters(filters).Execute()
	  //resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfig(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPrivilegeCriteriaConfig`: []PrivilegeCriteriaConfigDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-privilege-criteria-config
Update privilege criteria configuration
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-privilege-criteria-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaConfigId** | **string** | The Id of the privilege criteria configuration to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPrivilegeCriteriaConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **[]map[string]interface{}** | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**PrivilegeCriteriaConfigDTO**](../models/privilege-criteria-config-dto)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    criteriaConfigId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria configuration to update. # string | The Id of the privilege criteria configuration to update.
    requestbody := []byte(`[{op=replace, path=/config/privilegeClassificationMode, value=SINGLE_PRIVILEGE_LEVEL}, {op=replace, path=/config/criteriaPrivilegeLevel/connectorMediumEnabled, value=true}]`) // []map[string]interface{} | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v2025.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfig(context.Background(), criteriaConfigId).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2025.PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfig(context.Background(), criteriaConfigId).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPrivilegeCriteriaConfig`: PrivilegeCriteriaConfigDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfig`: %v\n", resp)
}
```

[[Back to top]](#)

