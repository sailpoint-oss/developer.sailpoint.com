---
id: v2026-privilege-criteria
title: PrivilegeCriteria
pagination_label: PrivilegeCriteria
sidebar_label: PrivilegeCriteria
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PrivilegeCriteria', 'V2026PrivilegeCriteria'] 
slug: /tools/sdk/go/v2026/methods/privilege-criteria
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteria', 'V2026PrivilegeCriteria']
---

# PrivilegeCriteriaAPI
  Use this API to create, retrieve, update, and delete privilege criteria.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-privilege-criteria**](#create-custom-privilege-criteria) | **Post** `/criteria/privilege` | Create custom privilege criteria
[**delete-custom-privilege-criteria**](#delete-custom-privilege-criteria) | **Delete** `/criteria/privilege/{criteriaId}` | Delete privilege criteria
[**get-privilege-criteria**](#get-privilege-criteria) | **Get** `/criteria/privilege/{criteriaId}` | Get privilege criteria
[**list-privilege-criteria**](#list-privilege-criteria) | **Get** `/criteria/privilege` | List privilege criteria
[**put-custom-privilege-criteria-value**](#put-custom-privilege-criteria-value) | **Put** `/criteria/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria
Create custom privilege criteria
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/v2026/create-custom-privilege-criteria)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomPrivilegeCriteriaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPrivilegeCriteriaRequest** | [**CreatePrivilegeCriteriaRequest**](../models/create-privilege-criteria-request) | Create custom privilege criteria request body. | 

### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createprivilegecriteriarequest := []byte(`{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          } ],
          "type" : "CUSTOM",
          "operator" : "AND"
        }`) // CreatePrivilegeCriteriaRequest | Create custom privilege criteria request body.

    var createPrivilegeCriteriaRequest v2026.CreatePrivilegeCriteriaRequest
    if err := json.Unmarshal(createprivilegecriteriarequest, &createPrivilegeCriteriaRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteria(context.Background()).CreatePrivilegeCriteriaRequest(createPrivilegeCriteriaRequest).Execute()
	  //resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteria(context.Background()).CreatePrivilegeCriteriaRequest(createPrivilegeCriteriaRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteria``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomPrivilegeCriteria`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.CreateCustomPrivilegeCriteria`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-custom-privilege-criteria
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/delete-custom-privilege-criteria)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the custom privilege criteria to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomPrivilegeCriteriaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

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
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the custom privilege criteria to delete. # string | The Id of the custom privilege criteria to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteria(context.Background(), criteriaId).Execute()
	  //r, err := apiClient.V2026.PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteria(context.Background(), criteriaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.DeleteCustomPrivilegeCriteria``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-privilege-criteria
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-privilege-criteria)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the privilege criteria record to return. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPrivilegeCriteriaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria record to return. # string | The Id of the privilege criteria record to return.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.GetPrivilegeCriteria(context.Background(), criteriaId).Execute()
	  //resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.GetPrivilegeCriteria(context.Background(), criteriaId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.GetPrivilegeCriteria``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrivilegeCriteria`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.GetPrivilegeCriteria`: %v\n", resp)
}
```

[[Back to top]](#)

## list-privilege-criteria
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/v2026/list-privilege-criteria)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPrivilegeCriteriaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; | 

### Return type

[**[]PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

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
    filters := `type eq "CUSTOM" and sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.ListPrivilegeCriteria(context.Background()).Filters(filters).Execute()
	  //resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.ListPrivilegeCriteria(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.ListPrivilegeCriteria``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPrivilegeCriteria`: []PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.ListPrivilegeCriteria`: %v\n", resp)
}
```

[[Back to top]](#)

## put-custom-privilege-criteria-value
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/put-custom-privilege-criteria-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**criteriaId** | **string** | The Id of the privilege criteria record to return. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCustomPrivilegeCriteriaValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **privilegeCriteriaDTO** | [**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto) | The new version of the custom privilege criteria. This overwrites the existing privilege criteria. | 

### Return type

[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    criteriaId := `6d123044-5834-4e8d-a49f-9c70089b0de1` // string | The Id of the privilege criteria record to return. # string | The Id of the privilege criteria record to return.
    privilegecriteriadto := []byte(`{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "property",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "property",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "property",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "property",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          } ],
          "id" : "2c9180867817ac4d017817c491119a20",
          "type" : "CUSTOM",
          "operator" : "AND"
        }`) // PrivilegeCriteriaDTO | The new version of the custom privilege criteria. This overwrites the existing privilege criteria.

    var privilegeCriteriaDTO v2026.PrivilegeCriteriaDTO
    if err := json.Unmarshal(privilegecriteriadto, &privilegeCriteriaDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValue(context.Background(), criteriaId).PrivilegeCriteriaDTO(privilegeCriteriaDTO).Execute()
	  //resp, r, err := apiClient.V2026.PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValue(context.Background(), criteriaId).PrivilegeCriteriaDTO(privilegeCriteriaDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCustomPrivilegeCriteriaValue`: PrivilegeCriteriaDTO
    fmt.Fprintf(os.Stdout, "Response from `PrivilegeCriteriaAPI.PutCustomPrivilegeCriteriaValue`: %v\n", resp)
}
```

[[Back to top]](#)

