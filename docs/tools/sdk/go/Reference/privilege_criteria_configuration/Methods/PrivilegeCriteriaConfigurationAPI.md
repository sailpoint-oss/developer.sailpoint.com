---
id: v1-privilege-criteria-configuration
title: PrivilegeCriteriaConfiguration
pagination_label: PrivilegeCriteriaConfiguration
sidebar_label: PrivilegeCriteriaConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegeCriteriaConfiguration', 'V1PrivilegeCriteriaConfiguration'] 
slug: /tools/sdk/go/privilegecriteriaconfiguration/methods/privilege-criteria-configuration
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteriaConfiguration', 'V1PrivilegeCriteriaConfiguration']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-privilege-criteria-config-v1**](#get-privilege-criteria-config-v1) | **Get** `/criteria-config/v1/privilege/{criteriaConfigId}` | Get privilege criteria config
[**list-privilege-criteria-config-v1**](#list-privilege-criteria-config-v1) | **Get** `/criteria-config/v1/privilege` | List privilege criteria config
[**patch-privilege-criteria-config-v1**](#patch-privilege-criteria-config-v1) | **Patch** `/criteria-config/v1/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config-v1
Get privilege criteria config
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-privilege-criteria-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaConfigId** | **string** | The Id of the privilege criteria configuration record to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPrivilegeCriteriaConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria_configuration"
)

func main() {
    criteriaConfigId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria configuration record to retrieve. # string | The Id of the privilege criteria configuration record to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfigV1(context.Background(), criteriaConfigId).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfigV1(context.Background(), criteriaConfigId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrivilegeCriteriaConfigV1`: Privilegecriteriaconfigdto
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.GetPrivilegeCriteriaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-privilege-criteria-config-v1
List privilege criteria config
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privilege-criteria-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPrivilegeCriteriaConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; | 

### Return type

[**[]Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria_configuration"
)

func main() {
    filters := `sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfigV1(context.Background()).Filters(filters).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfigV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPrivilegeCriteriaConfigV1`: []Privilegecriteriaconfigdto
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.ListPrivilegeCriteriaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-privilege-criteria-config-v1
Update privilege criteria configuration
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-privilege-criteria-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaConfigId** | **string** | The Id of the privilege criteria configuration to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPrivilegeCriteriaConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **[]map[string]interface{}** | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria_configuration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/privilege_criteria_configuration"
)

func main() {
    criteriaConfigId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria configuration to update. # string | The Id of the privilege criteria configuration to update.
    requestbody := []byte(`[{"op":"replace","path":"/config/privilegeClassificationMode","value":"SINGLE_PRIVILEGE_LEVEL"},{"op":"replace","path":"/config/criteriaPrivilegeLevel/connectorMediumEnabled","value":true}]`) // []map[string]interface{} | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfigV1(context.Background(), criteriaConfigId).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfigV1(context.Background(), criteriaConfigId).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPrivilegeCriteriaConfigV1`: Privilegecriteriaconfigdto
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaConfigurationAPI.PatchPrivilegeCriteriaConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

